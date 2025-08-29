export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: number;
  featured: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "fufufafa-dossier-digital-ghosts-political-credibility",
    title: "The Fufufafa Dossier: Digital Ghosts and Political Credibility",
    excerpt: "An in-depth investigation into digital controversies, political alliances, and the crisis of credibility in Indonesia's new government. Exploring how anonymous digital footprints can reshape political narratives.",
    content: `# The Fufufafa Dossier: Hantu Digital, Aliansi Politik, dan Krisis Kredibilitas dalam Pemerintahan Baru Indonesia

## Bagian I: Genesis Kontroversi Digital

Kontroversi yang dikenal sebagai "Fufufafa" bukan sekadar sensasi media sosial sesaat; ia telah menjelma menjadi sebuah fenomena politik yang menguji fondasi pemerintahan baru Indonesia. Untuk memahami dampaknya, pertama-tama kita harus membedah asal-usul dan karakter suara anonim di balik akun tersebut, yang jejak digitalnya kini menghantui koridor kekuasaan.

### 1.1 Suara Anonim: Memprofilkan Akun Kaskus 'fufufafa'

Platform yang menjadi pusat kontroversi ini adalah Kaskus, sebuah forum daring veteran di Indonesia. Di sinilah akun dengan nama pengguna 'fufufafa' aktif, terutama dalam rentang waktu antara 2013 hingga 2019. Periode aktivitas ini sangat signifikan karena bertepatan dengan dua pemilihan presiden yang paling memecah belah dalam sejarah modern Indonesia, yaitu Pilpres 2014 dan 2019.

Istilah "Fufufafa" sendiri memiliki asal-usul yang ironis. Dalam Kamus Besar Bahasa Indonesia (KBBI), "fufu" merujuk pada proses pengasapan ikan, sementara "fafa" dapat berarti tanah milik adat. Namun, makna leksikal ini sama sekali tidak relevan dengan konotasinya saat ini. Nama tersebut menjadi populer di ranah politik melalui sebuah meme internet, terutama setelah Muhammad Rizieq Shihab menggunakannya dalam lirik plesetan lagu "Menanam Jagung" untuk mengkritik dugaan nepotisme yang melibatkan Gibran.

### 1.2 Katalog Pelanggaran: Analisis Tematik Konten Inflamasi

Aktivitas akun 'fufufafa' tidak terbatas pada satu jenis provokasi. Jejak digitalnya menunjukkan pola perilaku yang konsisten dan beragam, mencakup serangan politik yang kejam, pelecehan seksual, dan sentimen rasis.

## Bagian II: Investigasi - Membuka Kedok 'fufufafa'

Terungkapnya identitas di balik akun 'fufufafa' bukanlah hasil dari satu penemuan tunggal, melainkan akumulasi dari serangkaian jejak digital yang saling terkait. Investigasi yang dilakukan oleh para warganet dan analis secara metodis menyusun sebuah mosaik bukti yang, ketika dilihat secara keseluruhan, menunjuk dengan kuat ke satu individu.

### 2.1 Jejak Digital: Sebuah Rekonstruksi Forensik

Dasar dari tuduhan terhadap Gibran Rakabuming Raka dibangun di atas beberapa kepingan bukti digital yang saling mengunci. Koneksi 'Chilli Pari': Titik balik krusial dalam investigasi ini adalah penemuan unggahan paralel. Pada tanggal 3 November 2014, akun Kaskus 'fufufafa' dan akun Twitter '@Chilli_Pari' sama-sama mengunggah pertanyaan yang identik tentang gunting steak.

### 2.2 Hubungan Nomor Telepon: Tautan Definitif?

Dari semua bukti yang muncul, nomor telepon yang bocor menjadi mata rantai yang paling kuat dan sulit dibantah. Nomor ini tidak hanya menghubungkan akun-akun anonim tersebut, tetapi juga mengaitkannya dengan identitas resmi Gibran di dunia nyata.

## Bagian III: Teater Politik: Respons, Pengalihan, dan Keheningan Strategis

Seiring dengan terungkapnya bukti-bukti digital, kontroversi 'fufufafa' beralih dari ranah forensik ke panggung politik. Respons dari para aktor utama—Gibran, pemerintah, dan Prabowo—bukanlah reaksi spontan, melainkan manuver-manuver yang dip# thoughts

Looking at the uploaded file and design reference, I need to create a modern blog website with PowerPoint-like animations and glass morphism design. The uploaded file contains political analysis content that I can use as actual blog content. The design reference shows a sleek dark theme with glass effects, smooth animations, and a sidebar navigation.

Key requirements:
1. Static blog website optimized for GitHub Pages deployment
2. Glass morphism effects with smooth animations
3. PowerPoint-style interactive animations with easing
4. Sidebar navigation with Home, About, Blog, etc.
5. Search functionality for blog posts
6. Informative footer with multiple link sections
7. Rounded corners and modern typography
8. Client-side routing and search (no backend needed)

I'll implement this using React with TypeScript, Framer Motion for animations, and Tailwind CSS for styling. The blog content will be stored as static JSON data extracted from the uploaded political analysis document.

# useful_guidelines_from_blueprints

From the development guidelines:
- Use React with TypeScript and modern web application patterns
- Put as much functionality in the frontend as possible
- Use wouter for client-side routing
- Use Framer Motion for smooth animations
- Implement glass morphism CSS effects with proper HSL color format
- Use Fuse.js for client-side search functionality
- Store blog content as static JSON/Markdown files
- Build static files for GitHub Pages deployment

# directory_structure

```json
[
    {"path": "client/src/index.css", "status": "overwritten"},
    {"path": "tailwind.config.ts", "status": "overwritten"},
    {"path": "client/src/App.tsx", "status": "overwritten"},
    {"path": "client/src/data/blog-posts.ts", "status": "new"},
    {"path": "client/src/lib/search.ts", "status": "new"},
    {"path": "client/src/components/sidebar.tsx", "status": "new"},
    {"path": "client/src/components/search-bar.tsx", "status": "new"},
    {"path": "client/src/components/blog-card.tsx", "status": "new"},
    {"path": "client/src/components/hero-section.tsx", "status": "new"},
    {"path": "client/src/components/newsletter.tsx", "status": "new"},
    {"path": "client/src/components/footer.tsx", "status": "new"},
    {"path": "client/src/pages/Home.tsx", "status": "new"},
    {"path": "client/src/pages/Blog.tsx", "status": "new"},
    {"path": "client/src/pages/BlogPost.tsx", "status": "new"},
    {"path": "client/src/pages/About.tsx", "status": "new"},
    {"path": "client/src/pages/Contact.tsx", "status": "new"},
    {"path": "package.json", "status": "overwritten"}
]
