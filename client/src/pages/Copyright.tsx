import { motion } from "framer-motion";

export default function Copyright() {
  return (
    <div className="py-20 px-8" data-testid="page-copyright">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            Pemberitahuan Hak Cipta
          </h1>
          
          <div className="glass-card rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Kepemilikan</h2>
              <p className="leading-relaxed">
                Semua konten asli di situs web ini, termasuk artikel, analisis, dan komentar, dibuat dan dimiliki oleh saya, Velo. Karya ini secara otomatis dilindungi di bawah hukum hak cipta internasional sejak saat pembuatan, seperti yang ditetapkan oleh Konvensi Berne.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Perlindungan Hak Cipta</h2>
              <p className="leading-relaxed">
                © 2024 Velo. Hak Cipta Dilindungi. Semua hak dilindungi berdasarkan Undang-Undang Hak Cipta Indonesia (UU No. 28 Tahun 2014 tentang Hak Cipta). Ini mencakup semua teks, analisis, komentar, dan pemilihan serta pengaturan konten yang unik. Ekspresi kreatif ide-ide politik dan cara spesifik penyajiannya di sini adalah kekayaan intelektual yang dilindungi. Sesuai hukum Indonesia, perlindungan hak cipta otomatis sejak penciptaan dan berlangsung seumur hidup saya ditambah 70 tahun.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Penggunaan Wajar & Izin</h2>
              <p className="leading-relaxed mb-3">
                Saya mendukung prinsip pembatasan hak cipta berdasarkan Pasal 43-51 Undang-Undang Hak Cipta Indonesia untuk tujuan pendidikan, komentar, dan kritik. Anda dapat:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mengutip kutipan singkat dengan atribusi yang tepat ke "Wawasan Politik Velo"</li>
                <li>Menautkan ke artikel saat mendiskusikan atau mengkritiknya</li>
                <li>Menggunakan konten untuk tujuan pendidikan non-komersial dengan kutipan (pendidikan)</li>
                <li>Membagikan artikel di media sosial dengan atribusi yang utuh</li>
                <li>Menggunakan untuk penelitian dan pengembangan ilmiah seperti yang diizinkan berdasarkan hukum Indonesia</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Format Atribusi</h2>
              <p className="leading-relaxed mb-3">
                Saat mengutip atau mengutip karya saya, silakan gunakan format ini:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm">
                "Kutipan atau cuplikan" - Velo, Wawasan Politik, [Judul Artikel], [Tanggal]<br />
                URL: [Tautan ke artikel asli]
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Penggunaan Komersial</h2>
              <p className="leading-relaxed">
                Penggunaan komersial konten saya, termasuk publikasi ulang dalam buku, majalah, atau buletin berbayar, memerlukan izin tertulis eksplisit. Ini termasuk hak terjemahan dan adaptasi untuk format media lain. Institusi akademik dapat menggunakan konten untuk pengajaran tanpa izin, tetapi harus memberi tahu saya sebagai bentuk kesopanan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Pelanggaran Hak Cipta</h2>
              <p className="leading-relaxed">
                Meskipun saya beroperasi sebagai penulis independen, saya menghormati hak kekayaan intelektual orang lain berdasarkan hukum Indonesia dan internasional. Jika Anda yakin konten di sini melanggar hak cipta Anda, silakan berikan rincian spesifik tentang dugaan pelanggaran seperti yang dipersyaratkan oleh Undang-Undang Hak Cipta Indonesia dan prinsip DMCA. Saya akan meninjau klaim dengan itikad baik. Perhatikan bahwa kritik dan komentar terhadap tokoh publik dan kebijakan pemerintah dilindungi berdasarkan hukum Indonesia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Pertimbangan Creative Commons</h2>
              <p className="leading-relaxed">
                Artikel lama tertentu mungkin dirilis di bawah lisensi Creative Commons di masa depan. Setiap rilis semacam itu akan ditandai dengan jelas pada posting individual. Kecuali dinyatakan secara eksplisit sebaliknya, semua konten tetap berada di bawah perlindungan hak cipta tradisional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Konten Pihak Ketiga</h2>
              <p className="leading-relaxed">
                Materi yang dirujuk, kutipan dari tokoh publik, atau konten yang disematkan dari sumber lain tetap menjadi milik pemiliknya masing-masing dan digunakan berdasarkan ketentuan penggunaan wajar untuk tujuan komentar dan kritik.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Terakhir diperbarui: Desember 2024<br />
                Untuk izin di luar penggunaan wajar, arsip ini beroperasi sebagai baca-saja.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}