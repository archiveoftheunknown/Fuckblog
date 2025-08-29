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
    role: string;
  };
  publishedAt: string;
  readTime: number;
  featured: boolean;
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

Seiring dengan terungkapnya bukti-bukti digital, kontroversi 'fufufafa' beralih dari ranah forensik ke panggung politik. Respons dari para aktor utama—Gibran, pemerintah, dan Prabowo—bukanlah reaksi spontan, melainkan manuver-manuver yang diperhitungkan dengan cermat dalam sebuah drama politik berisiko tinggi.

## Kesimpulan

Skandal 'fufufafa' berhasil diredam, tetapi tidak pernah diselesaikan. Ia kini berfungsi sebagai elemen fundamental dalam hubungan kekuasaan antara Presiden Prabowo Subianto dan Wakil Presiden Gibran Rakabuming Raka.`,
    category: "Political Analysis",
    tags: ["Indonesia", "Digital Politics", "Investigation", "Credibility"],
    author: {
      name: "Analysis Team",
      role: "Political Correspondent"
    },
    publishedAt: "2024-12-15",
    readTime: 12,
    featured: true
  },
  {
    id: "2",
    slug: "digital-forensics-political-accountability",
    title: "Digital Forensics in Political Accountability",
    excerpt: "How digital evidence shapes modern political discourse and accountability mechanisms.",
    content: `# Digital Forensics in Political Accountability

## Introduction

In the digital age, political accountability has taken on new dimensions. The ability to trace digital footprints has revolutionized how we investigate and understand political behavior.

## The Role of Digital Evidence

Digital forensics in politics involves the systematic examination of digital communications, social media activities, and online behavior patterns to establish factual narratives about political figures and events.

## Challenges and Opportunities

While digital evidence provides unprecedented transparency, it also raises questions about privacy, context, and the potential for manipulation.

## Conclusion

As we move forward, the balance between transparency and privacy in political discourse remains a critical challenge for democratic societies.`,
    category: "Digital Democracy",
    tags: ["Digital Forensics", "Accountability", "Technology"],
    author: {
      name: "Dr. Sarah Chen",
      role: "Digital Rights Researcher"
    },
    publishedAt: "2024-12-12",
    readTime: 8,
    featured: false
  },
  {
    id: "3",
    slug: "social-media-political-communication",
    title: "Social Media and Political Communication",
    excerpt: "The evolution of political messaging in the age of instant digital communication.",
    content: `# Social Media and Political Communication

## The Digital Revolution in Politics

Social media platforms have fundamentally transformed how politicians communicate with constituents and how political movements organize and mobilize support.

## Key Trends

- Real-time communication and feedback
- Direct politician-to-public channels
- Viral content and message amplification
- Algorithmic content curation effects

## Impact on Democracy

The democratization of political communication has both positive and negative implications for democratic discourse and participation.`,
    category: "Government Tech",
    tags: ["Social Media", "Communication", "Democracy"],
    author: {
      name: "Prof. Michael Rodriguez",
      role: "Political Communication Expert"
    },
    publishedAt: "2024-12-10",
    readTime: 6,
    featured: false
  },
  {
    id: "4",
    slug: "anonymous-digital-identities-politics",
    title: "Anonymous Digital Identities in Politics",
    excerpt: "Understanding the impact of anonymous accounts on political discourse and transparency.",
    content: `# Anonymous Digital Identities in Politics

## The Double-Edged Sword of Anonymity

Anonymous digital identities play a crucial role in political discourse, providing protection for whistleblowers and dissidents while also enabling harmful behavior.

## Benefits of Anonymity

- Protection for vulnerable voices
- Freedom to express dissenting opinions
- Whistleblower protection
- Reduced fear of political retaliation

## Risks and Challenges

- Potential for abuse and harassment
- Difficulty in establishing credibility
- Challenges in accountability
- Manipulation of public opinion

## Finding Balance

The challenge lies in creating systems that protect legitimate anonymous speech while preventing abuse and maintaining accountability.`,
    category: "Investigation",
    tags: ["Anonymity", "Digital Identity", "Political Discourse"],
    author: {
      name: "Emma Thompson",
      role: "Investigative Journalist"
    },
    publishedAt: "2024-12-08",
    readTime: 7,
    featured: false
  },
  {
    id: "5",
    slug: "crisis-communication-strategies",
    title: "Crisis Communication Strategies",
    excerpt: "How political figures navigate digital controversies in the modern media landscape.",
    content: `# Crisis Communication Strategies in the Digital Age

## Modern Crisis Management

In today's interconnected world, political crises can escalate rapidly across digital platforms, requiring sophisticated response strategies.

## Key Principles

1. **Speed**: Rapid response to control narrative
2. **Transparency**: Honest communication builds trust
3. **Consistency**: Unified messaging across platforms
4. **Authenticity**: Genuine responses resonate better

## Digital-Specific Challenges

- Viral misinformation spread
- Real-time public scrutiny
- Permanent digital records
- Multi-platform coordination needs

## Best Practices

Successful crisis communication in the digital age requires preparation, authenticity, and strategic thinking about long-term reputation management.`,
    category: "Media Analysis",
    tags: ["Crisis Management", "Communication", "Strategy"],
    author: {
      name: "David Kim",
      role: "Communications Strategist"
    },
    publishedAt: "2024-12-05",
    readTime: 9,
    featured: false
  },
  {
    id: "6",
    slug: "political-data-analytics-trends",
    title: "Political Data Analytics and Trends",
    excerpt: "Using data science to understand political behavior and voting patterns.",
    content: `# Political Data Analytics and Trends

## The Data-Driven Political Landscape

Modern political campaigns and governance increasingly rely on sophisticated data analytics to understand voter behavior, predict outcomes, and optimize messaging strategies.

## Key Applications

### Voter Behavior Analysis
- Demographic trend analysis
- Sentiment tracking
- Issue priority mapping
- Turnout prediction models

### Campaign Optimization
- Message testing and refinement
- Resource allocation decisions
- Target audience identification
- Performance measurement

## Ethical Considerations

The use of big data in politics raises important questions about privacy, manipulation, and the potential for algorithmic bias in democratic processes.

## Future Implications

As data collection and analysis capabilities continue to advance, the political landscape will likely become increasingly sophisticated and data-driven.`,
    category: "Data Science",
    tags: ["Analytics", "Big Data", "Political Science", "Trends"],
    author: {
      name: "Dr. Lisa Wang",
      role: "Data Scientist"
    },
    publishedAt: "2024-12-03",
    readTime: 10,
    featured: false
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getRecentPosts(limit: number = 6): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
