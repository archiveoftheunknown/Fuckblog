import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { language } = useLanguage();
  
  return (
    <div className="py-20 px-8" data-testid="page-privacy">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            {language === 'en' ? 'Privacy Policy' : 'Kebijakan Privasi'}
          </h1>
          
          <div className="glass-card rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'About This Policy' : 'Tentang Kebijakan Ini'}
              </h2>
              <p className="leading-relaxed">
                {language === 'en' 
                  ? 'This website respects visitor privacy and is committed to protecting any information that may be shared when visiting this platform. This policy explains what data is collected and how it is handled.'
                  : 'Situs web ini menghormati privasi pengunjung dan berkomitmen untuk melindungi informasi yang mungkin dibagikan saat mengunjungi platform ini. Kebijakan ini menjelaskan data apa yang dikumpulkan dan bagaimana penanganannya.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Information Collection' : 'Pengumpulan Informasi'}
              </h2>
              <p className="leading-relaxed mb-3">
                {language === 'en'
                  ? 'This website operates as a public archive and does not actively collect personal information, in accordance with Indonesian ITE Law (Law No. 11 of 2008 as amended). No user accounts, comments, or contact forms are provided. The site may use:'
                  : 'Situs web ini beroperasi sebagai arsip publik dan tidak secara aktif mengumpulkan informasi pribadi, sesuai dengan UU ITE Indonesia (Undang-Undang No. 11 Tahun 2008 sebagaimana telah diubah). Tidak ada akun pengguna, komentar, atau formulir kontak yang disediakan. Situs ini mungkin menggunakan:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{language === 'en' ? 'Standard web server logs (IP addresses, browser type, referring pages)' : 'Log server web standar (alamat IP, jenis browser, halaman rujukan)'}</li>
                <li>{language === 'en' ? 'Analytics cookies to understand reader patterns (if implemented)' : 'Cookie analitik untuk memahami pola pembaca (jika diterapkan)'}</li>
                <li>{language === 'en' ? 'Session storage for site preferences (theme, layout)' : 'Penyimpanan sesi untuk preferensi situs (tema, tata letak)'}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Data Use' : 'Penggunaan Data'}
              </h2>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'Data collected automatically is used only to maintain and improve website functionality. This site does not sell, trade, or share visitor information with third parties. Server logs are kept for security purposes and deleted after 30 days.'
                  : 'Data yang dikumpulkan secara otomatis hanya digunakan untuk memelihara dan meningkatkan fungsionalitas situs web. Situs ini tidak menjual, memperdagangkan, atau membagikan informasi pengunjung dengan pihak ketiga. Log server disimpan untuk tujuan keamanan dan dihapus setelah 30 hari.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Third-Party Services' : 'Layanan Pihak Ketiga'}
              </h2>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'This site is hosted on Replit, which may collect its own analytics. Please refer to Replit\'s privacy policy for their data practices. No other third-party tracking or advertising services are intentionally implemented.'
                  : 'Situs ini di-host di Replit, yang mungkin mengumpulkan analitiknya sendiri. Silakan merujuk ke kebijakan privasi Replit untuk praktik data mereka. Tidak ada layanan pelacakan atau periklanan pihak ketiga lainnya yang sengaja diterapkan.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Your Rights' : 'Hak Anda'}
              </h2>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'Under Indonesian Law No. 27 of 2022 on Personal Data Protection (PDP Law), as well as the GDPR (EU) and CCPA (California), you have rights regarding your personal data. Indonesian citizens have the right to access, correct, and request deletion of their data. As this site collects minimal data, available options are limited. Visitors may use privacy tools such as VPNs or Tor for additional anonymity.'
                  : 'Berdasarkan Undang-Undang Indonesia No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), serta GDPR (UE) dan CCPA (California), Anda memiliki hak terkait data pribadi Anda. Warga negara Indonesia memiliki hak untuk mengakses, mengoreksi, dan meminta penghapusan data mereka. Karena situs ini mengumpulkan data minimal, opsi yang tersedia terbatas. Pengunjung dapat menggunakan alat privasi seperti VPN atau Tor untuk anonimitas tambahan.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Updates' : 'Pembaruan'}
              </h2>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'This policy may be updated occasionally to reflect changes in practices or legal requirements. Last updated in December 2024.'
                  : 'Kebijakan ini dapat diperbarui sesekali untuk mencerminkan perubahan dalam praktik atau persyaratan hukum. Pembaruan terakhir dilakukan pada Desember 2024.'}
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Last updated' : 'Terakhir diperbarui'}: Desember 2024<br />
                {language === 'en' 
                  ? 'Contact: This is a read-only archive with no contact mechanism by design.'
                  : 'Kontak: Ini adalah arsip baca-saja tanpa mekanisme kontak sesuai desain.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}