import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Copyright() {
  const { language } = useLanguage();
  
  return (
    <div className="py-20 px-8" data-testid="page-copyright">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            {language === 'en' ? 'Copyright Notice' : 'Pemberitahuan Hak Cipta'}
          </h1>
          
          <div className="glass-card rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Ownership' : 'Kepemilikan'}
              </h2>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'All original content on this website, including articles, analyses, and commentary, is protected by copyright. The work is automatically protected under international copyright law from the moment of creation, as established by the Berne Convention.'
                  : 'Semua konten asli di situs web ini, termasuk artikel, analisis, dan komentar, dilindungi hak cipta. Karya ini secara otomatis dilindungi di bawah hukum hak cipta internasional sejak saat pembuatan, seperti yang ditetapkan oleh Konvensi Berne.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Copyright Protection' : 'Perlindungan Hak Cipta'}
              </h2>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'Copyright Protected. All rights reserved under Indonesian Copyright Law (Law No. 28 of 2014 on Copyright). This includes all text, analyses, commentary, and the unique selection and arrangement of content. The creative expression of political ideas and the specific way they are presented here is protected intellectual property. Under Indonesian law, copyright protection is automatic from creation.'
                  : 'Hak Cipta Dilindungi. Semua hak dilindungi berdasarkan Undang-Undang Hak Cipta Indonesia (UU No. 28 Tahun 2014 tentang Hak Cipta). Ini mencakup semua teks, analisis, komentar, dan pemilihan serta pengaturan konten yang unik. Ekspresi kreatif ide-ide politik dan cara spesifik penyajiannya di sini adalah kekayaan intelektual yang dilindungi. Sesuai hukum Indonesia, perlindungan hak cipta otomatis sejak penciptaan.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Fair Use & Permission' : 'Penggunaan Wajar & Izin'}
              </h2>
              <p className="leading-relaxed mb-3">
                {language === 'en'
                  ? 'This site supports the principle of copyright limitations under Articles 43-51 of the Indonesian Copyright Law for educational purposes, commentary, and criticism. You may:'
                  : 'Situs ini mendukung prinsip pembatasan hak cipta berdasarkan Pasal 43-51 Undang-Undang Hak Cipta Indonesia untuk tujuan pendidikan, komentar, dan kritik. Anda dapat:'}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{language === 'en' ? 'Quote brief excerpts with proper attribution' : 'Mengutip kutipan singkat dengan atribusi yang tepat'}</li>
                <li>{language === 'en' ? 'Link to articles when discussing or critiquing them' : 'Menautkan ke artikel saat mendiskusikan atau mengkritiknya'}</li>
                <li>{language === 'en' ? 'Use content for non-commercial educational purposes with citation' : 'Menggunakan konten untuk tujuan pendidikan non-komersial dengan kutipan (pendidikan)'}</li>
                <li>{language === 'en' ? 'Share articles on social media with full attribution' : 'Membagikan artikel di media sosial dengan atribusi yang utuh'}</li>
                <li>{language === 'en' ? 'Use for scientific research and development as allowed under Indonesian law' : 'Menggunakan untuk penelitian dan pengembangan ilmiah seperti yang diizinkan berdasarkan hukum Indonesia'}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Attribution Format' : 'Format Atribusi'}
              </h2>
              <p className="leading-relaxed mb-3">
                {language === 'en' ? 'When quoting or excerpting content, please use this format:' : 'Saat mengutip atau mengambil konten, silakan gunakan format ini:'}
              </p>
              <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm">
                {language === 'en' 
                  ? '"Quote or excerpt" - [Article Title], [Date]\nURL: [Link to original article]'
                  : '"Kutipan atau cuplikan" - [Judul Artikel], [Tanggal]\nURL: [Tautan ke artikel asli]'}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Commercial Use' : 'Penggunaan Komersial'}
              </h2>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'Commercial use of content, including republication in books, magazines, or paid newsletters, requires explicit written permission. This includes translation and adaptation rights for other media formats. Academic institutions may use content for teaching without permission for educational purposes.'
                  : 'Penggunaan komersial konten, termasuk publikasi ulang dalam buku, majalah, atau buletin berbayar, memerlukan izin tertulis eksplisit. Ini termasuk hak terjemahan dan adaptasi untuk format media lain. Institusi akademik dapat menggunakan konten untuk pengajaran tanpa izin untuk tujuan pendidikan.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Copyright Infringement' : 'Pelanggaran Hak Cipta'}
              </h2>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'This site respects the intellectual property rights of others under Indonesian and international law. If you believe content here infringes your copyright, please provide specific details about the alleged infringement as required by Indonesian Copyright Law and DMCA principles. Claims will be reviewed in good faith. Note that criticism and commentary on public figures and government policy are protected under Indonesian law.'
                  : 'Situs ini menghormati hak kekayaan intelektual orang lain berdasarkan hukum Indonesia dan internasional. Jika Anda yakin konten di sini melanggar hak cipta Anda, silakan berikan rincian spesifik tentang dugaan pelanggaran seperti yang dipersyaratkan oleh Undang-Undang Hak Cipta Indonesia dan prinsip DMCA. Klaim akan ditinjau dengan itikad baik. Perhatikan bahwa kritik dan komentar terhadap tokoh publik dan kebijakan pemerintah dilindungi berdasarkan hukum Indonesia.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Creative Commons Considerations' : 'Pertimbangan Creative Commons'}
              </h2>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'Certain older articles may be released under Creative Commons licenses in the future. Any such release will be clearly marked on individual posts. Unless explicitly stated otherwise, all content remains under traditional copyright protection.'
                  : 'Artikel lama tertentu mungkin dirilis di bawah lisensi Creative Commons di masa depan. Setiap rilis semacam itu akan ditandai dengan jelas pada posting individual. Kecuali dinyatakan secara eksplisit sebaliknya, semua konten tetap berada di bawah perlindungan hak cipta tradisional.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                {language === 'en' ? 'Third-Party Content' : 'Konten Pihak Ketiga'}
              </h2>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'Referenced material, quotes from public figures, or embedded content from other sources remain the property of their respective owners and are used under fair use provisions for commentary and criticism purposes.'
                  : 'Materi yang dirujuk, kutipan dari tokoh publik, atau konten yang disematkan dari sumber lain tetap menjadi milik pemiliknya masing-masing dan digunakan berdasarkan ketentuan penggunaan wajar untuk tujuan komentar dan kritik.'}
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Last updated' : 'Terakhir diperbarui'}: Desember 2024<br />
                {language === 'en'
                  ? 'For permissions beyond fair use, this archive operates as read-only.'
                  : 'Untuk izin di luar penggunaan wajar, arsip ini beroperasi sebagai baca-saja.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}