import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to generate
const routes = {
  id: ['/', '/blog', '/about'],
  en: ['/en/', '/en/blog', '/en/about']
};

// Blog post routes (we'll add these dynamically)
const blogPosts = [
  'kebijakan-digital-masa-depan',
  'transparansi-pemerintahan',
  'partisipasi-publik',
  'reformasi-birokrasi',
  'kedaulatan-data',
  'demokrasi-deliberatif'
];

async function generateStaticSite() {
  console.log('🚀 Starting static site generation...');
  
  // Read the base HTML template
  const templatePath = path.join(__dirname, '../dist/public/index.html');
  let template = await fs.readFile(templatePath, 'utf-8');
  
  // Create output directory
  const outputDir = path.join(__dirname, '../static-dist');
  await fs.mkdir(outputDir, { recursive: true });
  
  // Copy assets
  const assetsSource = path.join(__dirname, '../dist/public/assets');
  const assetsDest = path.join(outputDir, 'assets');
  await fs.cp(assetsSource, assetsDest, { recursive: true });
  console.log('✅ Assets copied');
  
  // Generate Indonesian pages
  for (const route of routes.id) {
    const dir = path.join(outputDir, route);
    await fs.mkdir(dir, { recursive: true });
    
    let html = template;
    // Set language
    html = html.replace('<html lang="id">', '<html lang="id">');
    html = html.replace('<title>Arsip publik dari indonesia</title>', 
      `<title>${getTitle(route, 'id')}</title>`);
    
    // Add meta tags for SEO
    const metaTags = getMetaTags(route, 'id');
    html = html.replace('</head>', `${metaTags}\n</head>`);
    
    // Add initial route data
    html = html.replace('<body>', `<body>
    <script>
      window.__INITIAL_ROUTE__ = '${route}';
      window.__INITIAL_LANGUAGE__ = 'id';
      window.__IS_STATIC__ = true;
    </script>`);
    
    // Fix asset paths based on depth
    const depth = route.split('/').filter(Boolean).length;
    const assetPrefix = depth > 0 ? '../'.repeat(depth) : './';
    html = html.replace(/\.\//g, assetPrefix);
    
    await fs.writeFile(path.join(dir, 'index.html'), html);
    console.log(`✅ Generated: ${route}`);
  }
  
  // Generate English pages
  for (const route of routes.en) {
    const dir = path.join(outputDir, route);
    await fs.mkdir(dir, { recursive: true });
    
    let html = template;
    // Set language
    html = html.replace('<html lang="id">', '<html lang="en">');
    html = html.replace('<title>Arsip publik dari indonesia</title>', 
      `<title>${getTitle(route, 'en')}</title>`);
    
    // Add meta tags for SEO
    const metaTags = getMetaTags(route, 'en');
    html = html.replace('</head>', `${metaTags}\n</head>`);
    
    // Add initial route data
    html = html.replace('<body>', `<body>
    <script>
      window.__INITIAL_ROUTE__ = '${route}';
      window.__INITIAL_LANGUAGE__ = 'en';
      window.__IS_STATIC__ = true;
    </script>`);
    
    // Fix asset paths based on depth
    const depth = route.split('/').filter(Boolean).length;
    const assetPrefix = depth > 0 ? '../'.repeat(depth) : './';
    html = html.replace(/\.\//g, assetPrefix);
    
    await fs.writeFile(path.join(dir, 'index.html'), html);
    console.log(`✅ Generated: ${route}`);
  }
  
  // Generate individual blog post pages
  for (const slug of blogPosts) {
    // Indonesian version
    const idDir = path.join(outputDir, 'blog', slug);
    await fs.mkdir(idDir, { recursive: true });
    
    let html = template;
    html = html.replace('<html lang="id">', '<html lang="id">');
    html = html.replace('<title>Arsip publik dari indonesia</title>', 
      `<title>${getBlogTitle(slug, 'id')} | Political Insights</title>`);
    
    const metaTags = getBlogMetaTags(slug, 'id');
    html = html.replace('</head>', `${metaTags}\n</head>`);
    
    html = html.replace('<body>', `<body>
    <script>
      window.__INITIAL_ROUTE__ = '/blog/${slug}';
      window.__INITIAL_LANGUAGE__ = 'id';
      window.__IS_STATIC__ = true;
    </script>`);
    
    html = html.replace(/\.\//g, '../../');
    await fs.writeFile(path.join(idDir, 'index.html'), html);
    
    // English version
    const enDir = path.join(outputDir, 'en/blog', slug);
    await fs.mkdir(enDir, { recursive: true });
    
    html = template;
    html = html.replace('<html lang="id">', '<html lang="en">');
    html = html.replace('<title>Arsip publik dari indonesia</title>', 
      `<title>${getBlogTitle(slug, 'en')} | Political Insights</title>`);
    
    const enMetaTags = getBlogMetaTags(slug, 'en');
    html = html.replace('</head>', `${enMetaTags}\n</head>`);
    
    html = html.replace('<body>', `<body>
    <script>
      window.__INITIAL_ROUTE__ = '/en/blog/${slug}';
      window.__INITIAL_LANGUAGE__ = 'en';
      window.__IS_STATIC__ = true;
    </script>`);
    
    html = html.replace(/\.\//g, '../../../');
    await fs.writeFile(path.join(enDir, 'index.html'), html);
    
    console.log(`✅ Generated blog post: ${slug}`);
  }
  
  // Create 404 page
  let html404 = template;
  html404 = html404.replace('<title>Arsip publik dari indonesia</title>', 
    '<title>404 - Page Not Found</title>');
  html404 = html404.replace('<body>', `<body>
    <script>
      window.__IS_404__ = true;
      window.__IS_STATIC__ = true;
    </script>`);
  await fs.writeFile(path.join(outputDir, '404.html'), html404);
  
  // Create .nojekyll file
  await fs.writeFile(path.join(outputDir, '.nojekyll'), '');
  
  console.log('✅ Static site generation complete!');
}

function getTitle(route: string, lang: 'id' | 'en'): string {
  const titles: Record<string, Record<string, string>> = {
    id: {
      '/': 'Political Insights - Analisis Politik Indonesia',
      '/blog': 'Blog - Political Insights',
      '/about': 'Tentang - Political Insights'
    },
    en: {
      '/en/': 'Political Insights - Indonesian Political Analysis',
      '/en/blog': 'Blog - Political Insights',
      '/en/about': 'About - Political Insights'
    }
  };
  
  return lang === 'id' ? titles.id[route] || titles.id['/'] : titles.en[route] || titles.en['/en/'];
}

function getMetaTags(route: string, lang: 'id' | 'en'): string {
  const descriptions: Record<string, Record<string, string>> = {
    id: {
      '/': 'Platform analisis politik Indonesia dengan fokus pada demokrasi digital dan transparansi pemerintahan.',
      '/blog': 'Baca analisis mendalam tentang politik Indonesia, kebijakan publik, dan perkembangan demokrasi.',
      '/about': 'Tentang Political Insights - platform independen untuk analisis politik Indonesia.'
    },
    en: {
      '/en/': 'Indonesian political analysis platform focusing on digital democracy and government transparency.',
      '/en/blog': 'Read in-depth analysis on Indonesian politics, public policy, and democratic development.',
      '/en/about': 'About Political Insights - independent platform for Indonesian political analysis.'
    }
  };
  
  const desc = lang === 'id' ? descriptions.id[route] || descriptions.id['/'] 
                             : descriptions.en[route] || descriptions.en['/en/'];
  
  return `
    <meta name="description" content="${desc}">
    <meta property="og:title" content="${getTitle(route, lang)}">
    <meta property="og:description" content="${desc}">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${getTitle(route, lang)}">
    <meta name="twitter:description" content="${desc}">`;
}

function getBlogTitle(slug: string, lang: 'id' | 'en'): string {
  const titles: Record<string, Record<string, string>> = {
    'kebijakan-digital-masa-depan': {
      id: 'Kebijakan Digital untuk Masa Depan Indonesia',
      en: 'Digital Policy for Indonesia\'s Future'
    },
    'transparansi-pemerintahan': {
      id: 'Transparansi Pemerintahan di Era Digital',
      en: 'Government Transparency in the Digital Era'
    },
    'partisipasi-publik': {
      id: 'Meningkatkan Partisipasi Publik',
      en: 'Enhancing Public Participation'
    },
    'reformasi-birokrasi': {
      id: 'Reformasi Birokrasi dan Modernisasi',
      en: 'Bureaucratic Reform and Modernization'
    },
    'kedaulatan-data': {
      id: 'Kedaulatan Data di Era Digital',
      en: 'Data Sovereignty in the Digital Age'
    },
    'demokrasi-deliberatif': {
      id: 'Demokrasi Deliberatif dan Dialog Publik',
      en: 'Deliberative Democracy and Public Dialogue'
    }
  };
  
  return titles[slug]?.[lang] || slug;
}

function getBlogMetaTags(slug: string, lang: 'id' | 'en'): string {
  const title = getBlogTitle(slug, lang);
  const desc = lang === 'id' 
    ? `Baca analisis tentang ${title.toLowerCase()} di Political Insights.`
    : `Read analysis on ${title.toLowerCase()} at Political Insights.`;
  
  return `
    <meta name="description" content="${desc}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:type" content="article">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${desc}">`;
}

// Run the generator
generateStaticSite().catch(console.error);