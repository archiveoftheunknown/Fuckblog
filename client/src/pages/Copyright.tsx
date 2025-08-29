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
                All original content on this website, including articles, analysis, and commentary, is created and owned by me, Velo. This work is automatically protected under international copyright law from the moment of creation, as established by the Berne Convention.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Perlindungan Hak Cipta</h2>
              <p className="leading-relaxed">
                © 2024 Velo. Hak Cipta Dilindungi. All rights reserved under Indonesian Copyright Law (UU No. 28 of 2014 on Copyright). This includes all text, analysis, commentary, and the unique selection and arrangement of content. The creative expression of political ideas and the specific way they are presented here are protected intellectual property. As per Indonesian law, copyright protection is automatic upon creation and lasts for my lifetime plus 70 years.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Penggunaan Wajar & Izin</h2>
              <p className="leading-relaxed mb-3">
                I support the principle of pembatasan hak cipta (copyright limitations) under Article 43-51 of Indonesian Copyright Law for educational, commentary, and criticism purposes. You may:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quote brief excerpts with proper attribution to "Velo's Political Insights"</li>
                <li>Link to articles when discussing or critiquing them</li>
                <li>Use content for non-commercial educational purposes with citation (pendidikan)</li>
                <li>Share articles on social media with intact attribution</li>
                <li>Use for research and scientific development as allowed under Indonesian law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Format Atribusi</h2>
              <p className="leading-relaxed mb-3">
                When citing or quoting my work, please use this format:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm">
                "Quote or excerpt" - Velo, Political Insights, [Article Title], [Date]<br />
                URL: [Link to original article]
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Penggunaan Komersial</h2>
              <p className="leading-relaxed">
                Commercial use of my content, including republication in books, magazines, or paid newsletters, requires explicit written permission. This includes translation rights and adaptation for other media formats. Academic institutions may use content for teaching without permission, but should notify me as a courtesy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Pelanggaran Hak Cipta</h2>
              <p className="leading-relaxed">
                While I operate as an independent writer, I respect others' intellectual property rights under both Indonesian and international law. If you believe content here infringes your copyright, please provide specific details of the alleged infringement as required by Indonesian Copyright Law and DMCA principles. I will review claims in good faith. Note that criticism and commentary on public figures and government policies are protected under Indonesian law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Pertimbangan Creative Commons</h2>
              <p className="leading-relaxed">
                Select older articles may be released under Creative Commons licenses in the future. Any such releases will be clearly marked on individual posts. Unless explicitly stated otherwise, all content remains under traditional copyright protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Konten Pihak Ketiga</h2>
              <p className="leading-relaxed">
                Any referenced materials, quotes from public figures, or embedded content from other sources remain the property of their respective owners and are used under fair use provisions for commentary and criticism purposes.
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