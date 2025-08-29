import { motion } from "framer-motion";

export default function Guidelines() {
  return (
    <div className="py-20 px-8" data-testid="page-guidelines">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            Pedoman Editorial
          </h1>
          
          <div className="glass-card rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Komitmen Saya</h2>
              <p className="leading-relaxed">
                Platform analisis politik ini berkomitmen pada penyajian analisis yang bijaksana dan jujur tentang politik Indonesia. Standar editorial yang diterapkan selaras dengan etika Dewan Pers Indonesia dan nilai-nilai Pancasila untuk memastikan kontribusi bermakna pada wacana demokrasi di Indonesia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Transparansi</h2>
              <p className="leading-relaxed mb-3">
                Platform ini berkomitmen pada transparansi:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Konten merupakan opini dan analisis, bukan laporan netral</li>
                <li>Platform memiliki perspektif editorial yang konsisten</li>
                <li>Perubahan posisi pada isu-isu akan diakui secara terbuka</li>
                <li>Koreksi dibuat dengan jelas ketika kesalahan faktual terjadi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Standar Riset</h2>
              <p className="leading-relaxed mb-3">
                Analisis yang disajikan didasarkan pada:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Informasi terverifikasi dari berbagai sumber jika memungkinkan</li>
                <li>Sumber primer seperti dokumen resmi dan transkrip</li>
                <li>Pembedaan yang jelas antara fakta, analisis, dan spekulasi</li>
                <li>Konteks yang membantu pembaca memahami isu-isu kompleks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Independensi</h2>
              <p className="leading-relaxed">
                Platform ini sepenuhnya independen. Tidak berafiliasi dengan partai politik, kampanye, atau organisasi advokasi mana pun. Tidak ada pihak yang mempengaruhi keputusan editorial. Konten yang disajikan merupakan hasil penelitian dan analisis independen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Wacana yang Santun</h2>
              <p className="leading-relaxed">
                Platform ini bertujuan mengkritik ide dan kebijakan, bukan menyerang individu secara pribadi, menghormati prinsip Indonesia tentang "kritik yang membangun". Meskipun komentar politik bisa tajam, dihindari serangan ad hominem, provokasi SARA (suku, agama, ras, dan antar golongan) seperti yang dilarang berdasarkan hukum Indonesia, dan konten yang dirancang murni untuk memprovokasi. Nilai-nilai budaya Indonesia dihormati sambil mempertahankan independensi kritis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Cakupan Liputan</h2>
              <p className="leading-relaxed mb-3">
                Cakupan analisis berfokus pada politik Indonesia:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proses demokrasi Indonesia dan warisan Reformasi</li>
                <li>Transformasi digital politik Indonesia dan e-governance</li>
                <li>Lanskap media Indonesia dan ekosistem informasi</li>
                <li>Dampak kebijakan terhadap masyarakat dan warga Indonesia</li>
                <li>Konteks sejarah dari Orde Baru hingga Indonesia kontemporer</li>
                <li>Politik regional dan desentralisasi (otonomi daerah)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Kebijakan Koreksi</h2>
              <p className="leading-relaxed">
                Kesalahan faktual akan dikoreksi dengan segera dan transparan. Koreksi dicatat di bagian atas artikel yang terpengaruh dengan tanggal dan sifat koreksi. Perubahan pendapat dari waktu ke waktu berbeda dari kesalahan dan ditangani dalam posting baru.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Batasan Etika</h2>
              <p className="leading-relaxed">
                Platform ini tidak mempublikasikan informasi pribadi tentang individu kecuali sudah publik dan relevan langsung dengan analisis politik, menghormati undang-undang privasi Indonesia dan ketentuan UU ITE. Dibedakan antara pejabat publik yang terbuka untuk kritik berdasarkan hukum Indonesia dan warga pribadi. Dihindari konten yang dapat dianggap sebagai pencemaran nama baik sambil mempertahankan hak untuk mengkritik kebijakan publik dan tata kelola.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Kepercayaan Pembaca</h2>
              <p className="leading-relaxed">
                Kepercayaan pembaca diperoleh melalui konsistensi, kejujuran, dan analisis berkualitas. Platform ini berusaha untuk selalu bijaksana, adil dalam kritik, dan transparan dalam penyajian analisis.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Terakhir diperbarui: Desember 2024<br />
                Pedoman ini mencerminkan komitmen platform terhadap jurnalisme yang bertanggung jawab.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}