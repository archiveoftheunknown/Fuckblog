import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="py-20 px-8" data-testid="page-terms">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            Ketentuan Layanan
          </h1>
          
          <div className="glass-card rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Selamat Datang</h2>
              <p className="leading-relaxed">
                Ketentuan ini mengatur penggunaan Anda atas arsip komentar politik saya. Saya Velo, seorang penulis independen, dan situs ini mewakili analisis dan opini pribadi saya. Dengan mengakses situs ini, Anda menyetujui ketentuan sederhana ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Sifat Konten</h2>
              <p className="leading-relaxed mb-3">
                Semua yang dipublikasikan di sini mewakili analisis dan komentar politik pribadi saya tentang politik Indonesia. Kontennya:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Berbasis opini dan tidak boleh dianggap sebagai pelaporan faktual</li>
                <li>Dilindungi berdasarkan Pasal 28E dan 28F UUD 1945 tentang kebebasan berekspresi</li>
                <li>Sesuai dengan Undang-Undang Pers Indonesia (UU Pers No. 40/1999) sebagai komentar independen</li>
                <li>Tidak dimaksudkan sebagai nasihat politik atau hukum profesional</li>
                <li>Tunduk pada bias dan perspektif saya sendiri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Penggunaan yang Diperbolehkan</h2>
              <p className="leading-relaxed mb-3">
                Anda dipersilakan untuk:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Membaca dan membagikan artikel dengan atribusi yang tepat</li>
                <li>Mengutip sebagian untuk kritik, komentar, atau tujuan pendidikan berdasarkan penggunaan wajar</li>
                <li>Menautkan ke konten dari platform Anda sendiri</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Anda tidak boleh:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Menerbitkan ulang artikel lengkap tanpa izin</li>
                <li>Menyalahartikan pandangan saya atau mengambil kutipan di luar konteks</li>
                <li>Menggunakan alat otomatis untuk mengikis atau mengunduh konten secara massal</li>
                <li>Mencoba mengakses area terbatas dari situs web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Penafian Jaminan</h2>
              <p className="leading-relaxed">
                Situs ini disediakan "apa adanya" tanpa jaminan apa pun. Saya tidak memberikan jaminan tentang keakuratan, kelengkapan, atau ketepatan waktu konten. Situasi politik berkembang pesat, dan posting lama mungkin tidak mencerminkan realitas saat ini atau pandangan saya saat ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Pembatasan Tanggung Jawab</h2>
              <p className="leading-relaxed">
                Sesuai dengan prinsip-prinsip Kitab Undang-Undang Hukum Perdata Indonesia (KUHPerdata), saya tidak bertanggung jawab atas kerusakan apa pun yang timbul dari penggunaan situs ini atau ketergantungan pada kontennya. Ini termasuk keputusan politik, keuangan, atau pribadi yang Anda buat berdasarkan komentar saya. Selalu verifikasi informasi secara independen dan konsultasikan dengan profesional yang tepat untuk mendapatkan nasihat. Konten di sini tidak melanggar undang-undang pencemaran nama baik Indonesia (Pasal 310-321 KUHP) karena berfokus pada wacana publik dan kritik terhadap kebijakan publik.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Hukum yang Berlaku</h2>
              <p className="leading-relaxed">
                Ketentuan ini diatur oleh hukum Republik Indonesia, termasuk UU ITE dan hukum perdata yang relevan, bersama dengan hukum hak cipta internasional dan prinsip kebebasan berekspresi seperti yang diakui dalam masyarakat demokratis. Setiap perselisihan harus diselesaikan terlebih dahulu melalui musyawarah sesuai dengan nilai-nilai budaya Indonesia, sebelum mempertimbangkan jalur hukum formal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Perubahan Ketentuan</h2>
              <p className="leading-relaxed">
                Saya dapat memperbarui ketentuan ini sesuai kebutuhan. Penggunaan situs yang berkelanjutan setelah perubahan merupakan penerimaan terhadap ketentuan baru.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Terakhir diperbarui: Desember 2024<br />
                Oleh Velo - Komentator Politik Independen
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}