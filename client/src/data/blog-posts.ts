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
    title: "Dossier Fufufafa: Hantu Digital dan Kredibilitas Politik",
    excerpt: "Investigasi mendalam tentang kontroversi digital, aliansi politik, dan krisis kredibilitas dalam pemerintahan baru Indonesia. Mengeksplorasi bagaimana jejak digital anonim dapat membentuk kembali narasi politik.",
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
    category: "Analisis Politik",
    tags: ["Indonesia", "Politik Digital", "Investigasi", "Kredibilitas"],
    author: {
      name: "Tim Analisis",
      role: "Koresponden Politik"
    },
    publishedAt: "2024-12-15",
    readTime: 12,
    featured: true
  },
  {
    id: "2",
    slug: "digital-forensics-political-accountability",
    title: "Forensik Digital dalam Akuntabilitas Politik",
    excerpt: "Bagaimana bukti digital membentuk wacana politik modern dan mekanisme akuntabilitas.",
    content: `# Forensik Digital dalam Akuntabilitas Politik

## Pendahuluan

Di era digital, akuntabilitas politik telah mengambil dimensi baru. Kemampuan untuk melacak jejak digital telah merevolusi cara kita menyelidiki dan memahami perilaku politik.

## Peran Bukti Digital

Forensik digital dalam politik melibatkan pemeriksaan sistematis komunikasi digital, aktivitas media sosial, dan pola perilaku online untuk membangun narasi faktual tentang tokoh dan peristiwa politik.

## Tantangan dan Peluang

Meskipun bukti digital memberikan transparansi yang belum pernah terjadi sebelumnya, hal ini juga menimbulkan pertanyaan tentang privasi, konteks, dan potensi manipulasi.

## Kesimpulan

Seiring kita bergerak maju, keseimbangan antara transparansi dan privasi dalam wacana politik tetap menjadi tantangan kritis bagi masyarakat demokratis.`,
    category: "Demokrasi Digital",
    tags: ["Forensik Digital", "Akuntabilitas", "Teknologi"],
    author: {
      name: "Dr. Sarah Chen",
      role: "Peneliti Hak Digital"
    },
    publishedAt: "2024-12-12",
    readTime: 8,
    featured: false
  },
  {
    id: "3",
    slug: "social-media-political-communication",
    title: "Media Sosial dan Komunikasi Politik",
    excerpt: "Evolusi pesan politik di era komunikasi digital instan.",
    content: `# Media Sosial dan Komunikasi Politik

## Revolusi Digital dalam Politik

Platform media sosial telah secara fundamental mengubah cara politisi berkomunikasi dengan konstituen dan cara gerakan politik mengorganisir dan memobilisasi dukungan.

## Tren Utama

- Komunikasi dan umpan balik waktu nyata
- Saluran langsung politisi-ke-publik
- Konten viral dan amplifikasi pesan
- Efek kurasi konten algoritmik

## Dampak pada Demokrasi

Demokratisasi komunikasi politik memiliki implikasi positif dan negatif untuk wacana dan partisipasi demokratis.`,
    category: "Teknologi Pemerintahan",
    tags: ["Media Sosial", "Komunikasi", "Demokrasi"],
    author: {
      name: "Prof. Michael Rodriguez",
      role: "Ahli Komunikasi Politik"
    },
    publishedAt: "2024-12-10",
    readTime: 6,
    featured: false
  },
  {
    id: "4",
    slug: "anonymous-digital-identities-politics",
    title: "Identitas Digital Anonim dalam Politik",
    excerpt: "Memahami dampak akun anonim terhadap wacana politik dan transparansi.",
    content: `# Identitas Digital Anonim dalam Politik

## Pedang Bermata Dua dari Anonimitas

Identitas digital anonim memainkan peran penting dalam wacana politik, memberikan perlindungan bagi whistleblower dan pembangkang sambil juga memungkinkan perilaku berbahaya.

## Manfaat Anonimitas

- Perlindungan untuk suara-suara rentan
- Kebebasan untuk mengekspresikan pendapat yang berbeda
- Perlindungan whistleblower
- Mengurangi ketakutan akan pembalasan politik

## Risiko dan Tantangan

- Potensi penyalahgunaan dan pelecehan
- Kesulitan dalam membangun kredibilitas
- Tantangan dalam akuntabilitas
- Manipulasi opini publik

## Menemukan Keseimbangan

Tantangannya terletak pada menciptakan sistem yang melindungi ucapan anonim yang sah sambil mencegah penyalahgunaan dan mempertahankan akuntabilitas.`,
    category: "Investigasi",
    tags: ["Anonimitas", "Identitas Digital", "Wacana Politik"],
    author: {
      name: "Emma Thompson",
      role: "Jurnalis Investigasi"
    },
    publishedAt: "2024-12-08",
    readTime: 7,
    featured: false
  },
  {
    id: "5",
    slug: "crisis-communication-strategies",
    title: "Strategi Komunikasi Krisis",
    excerpt: "Bagaimana tokoh politik menavigasi kontroversi digital dalam lanskap media modern.",
    content: `# Strategi Komunikasi Krisis di Era Digital

## Manajemen Krisis Modern

Di dunia yang saling terhubung saat ini, krisis politik dapat meningkat dengan cepat di seluruh platform digital, memerlukan strategi respons yang canggih.

## Prinsip Utama

1. **Kecepatan**: Respons cepat untuk mengendalikan narasi
2. **Transparansi**: Komunikasi jujur membangun kepercayaan
3. **Konsistensi**: Pesan terpadu di seluruh platform
4. **Keaslian**: Respons asli lebih beresonansi

## Tantangan Khusus Digital

- Penyebaran informasi salah viral
- Pengawasan publik waktu nyata
- Catatan digital permanen
- Kebutuhan koordinasi multi-platform

## Praktik Terbaik

Komunikasi krisis yang sukses di era digital memerlukan persiapan, keaslian, dan pemikiran strategis tentang manajemen reputasi jangka panjang.`,
    category: "Analisis Media",
    tags: ["Manajemen Krisis", "Komunikasi", "Strategi"],
    author: {
      name: "David Kim",
      role: "Ahli Strategi Komunikasi"
    },
    publishedAt: "2024-12-05",
    readTime: 9,
    featured: false
  },
  {
    id: "6",
    slug: "political-data-analytics-trends",
    title: "Analitik Data Politik dan Tren",
    excerpt: "Menggunakan ilmu data untuk memahami perilaku politik dan pola pemilihan.",
    content: `# Analitik Data Politik dan Tren

## Lanskap Politik Berbasis Data

Kampanye politik modern dan tata kelola semakin bergantung pada analitik data canggih untuk memahami perilaku pemilih, memprediksi hasil, dan mengoptimalkan strategi pesan.

## Aplikasi Utama

### Analisis Perilaku Pemilih
- Analisis tren demografis
- Pelacakan sentimen
- Pemetaan prioritas isu
- Model prediksi partisipasi

### Optimalisasi Kampanye
- Pengujian dan penyempurnaan pesan
- Keputusan alokasi sumber daya
- Identifikasi audiens target
- Pengukuran kinerja

## Pertimbangan Etis

Penggunaan data besar dalam politik menimbulkan pertanyaan penting tentang privasi, manipulasi, dan potensi bias algoritmik dalam proses demokratis.

## Implikasi Masa Depan

Seiring kemampuan pengumpulan dan analisis data terus berkembang, lanskap politik kemungkinan akan menjadi semakin canggih dan berbasis data.`,
    category: "Ilmu Data",
    tags: ["Analitik", "Data Besar", "Ilmu Politik", "Tren"],
    author: {
      name: "Dr. Lisa Wang",
      role: "Ilmuwan Data"
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
