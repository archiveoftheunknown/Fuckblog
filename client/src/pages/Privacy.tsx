import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="py-20 px-8" data-testid="page-privacy">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            Kebijakan Privasi
          </h1>
          
          <div className="glass-card rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Tentang Kebijakan Ini</h2>
              <p className="leading-relaxed">
                Situs web ini menghormati privasi pengunjung dan berkomitmen untuk melindungi informasi yang mungkin dibagikan saat mengunjungi platform ini. Kebijakan ini menjelaskan data apa yang dikumpulkan dan bagaimana penanganannya.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Pengumpulan Informasi</h2>
              <p className="leading-relaxed mb-3">
                Situs web ini beroperasi sebagai arsip publik dan tidak secara aktif mengumpulkan informasi pribadi, sesuai dengan UU ITE Indonesia (Undang-Undang No. 11 Tahun 2008 sebagaimana telah diubah). Tidak ada akun pengguna, komentar, atau formulir kontak yang disediakan. Situs ini mungkin menggunakan:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Log server web standar (alamat IP, jenis browser, halaman rujukan)</li>
                <li>Cookie analitik untuk memahami pola pembaca (jika diterapkan)</li>
                <li>Penyimpanan sesi untuk preferensi situs (tema, tata letak)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Penggunaan Data</h2>
              <p className="leading-relaxed">
                Data yang dikumpulkan secara otomatis hanya digunakan untuk memelihara dan meningkatkan fungsionalitas situs web. Situs ini tidak menjual, memperdagangkan, atau membagikan informasi pengunjung dengan pihak ketiga. Log server disimpan untuk tujuan keamanan dan dihapus setelah 30 hari.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Layanan Pihak Ketiga</h2>
              <p className="leading-relaxed">
                Situs ini di-host di Replit, yang mungkin mengumpulkan analitiknya sendiri. Silakan merujuk ke kebijakan privasi Replit untuk praktik data mereka. Tidak ada layanan pelacakan atau periklanan pihak ketiga lainnya yang sengaja diterapkan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Hak Anda</h2>
              <p className="leading-relaxed">
                Berdasarkan Undang-Undang Indonesia No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), serta GDPR (UE) dan CCPA (California), Anda memiliki hak terkait data pribadi Anda. Warga negara Indonesia memiliki hak untuk mengakses, mengoreksi, dan meminta penghapusan data mereka. Karena situs ini mengumpulkan data minimal, opsi yang tersedia terbatas. Pengunjung dapat menggunakan alat privasi seperti VPN atau Tor untuk anonimitas tambahan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Pembaruan</h2>
              <p className="leading-relaxed">
                Kebijakan ini dapat diperbarui sesekali untuk mencerminkan perubahan dalam praktik atau persyaratan hukum. Pembaruan terakhir dilakukan pada Desember 2024.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Terakhir diperbarui: Desember 2024<br />
                Kontak: Ini adalah arsip baca-saja tanpa mekanisme kontak sesuai desain.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}