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
                Sebagai komentator politik independen yang berfokus pada politik Indonesia, saya, Velo, berkomitmen pada analisis yang bijaksana dan jujur. Meskipun ini adalah blog pribadi yang mencerminkan pandangan saya, saya memegang standar tertentu yang selaras dengan etika Dewan Pers Indonesia dan nilai-nilai Pancasila untuk memastikan komentar saya berkontribusi secara bermakna pada wacana demokrasi di Indonesia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Transparansi</h2>
              <p className="leading-relaxed mb-3">
                Saya percaya pada keterbukaan tentang perspektif saya:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ini adalah opini dan analisis, bukan laporan netral</li>
                <li>Saya memiliki kecenderungan politik saya sendiri yang mempengaruhi komentar saya</li>
                <li>Ketika saya mengubah posisi saya pada isu-isu, saya mengakuinya</li>
                <li>Koreksi dibuat dengan jelas ketika kesalahan faktual terjadi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Standar Riset</h2>
              <p className="leading-relaxed mb-3">
                Meskipun ini adalah komentar, saya berusaha untuk mendasarkan analisis saya pada:
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
                Blog ini sepenuhnya independen. Saya tidak berafiliasi dengan partai politik, kampanye, atau organisasi advokasi mana pun. Tidak ada yang membayar saya untuk liputan atau mempengaruhi keputusan editorial saya. Pendapat saya adalah milik saya sendiri, terbentuk melalui penelitian dan refleksi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Wacana yang Santun</h2>
              <p className="leading-relaxed">
                Saya bertujuan untuk mengkritik ide dan kebijakan, bukan menyerang individu secara pribadi, menghormati prinsip Indonesia tentang "kritik yang membangun". Meskipun komentar politik bisa tajam, saya menghindari serangan ad hominem, provokasi SARA (suku, agama, ras, dan antar golongan) seperti yang dilarang berdasarkan hukum Indonesia, dan konten yang dirancang murni untuk memprovokasi daripada mencerahkan. Saya menghormati nilai-nilai budaya Indonesia sambil mempertahankan independensi kritis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Cakupan Liputan</h2>
              <p className="leading-relaxed mb-3">
                Komentar saya berfokus pada politik Indonesia:
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
                Ketika saya membuat kesalahan faktual, saya mengoreksinya dengan segera dan transparan. Koreksi dicatat di bagian atas artikel yang terpengaruh dengan tanggal dan sifat koreksi. Perubahan pendapat dari waktu ke waktu berbeda dari kesalahan dan ditangani dalam posting baru daripada koreksi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Batasan Etika</h2>
              <p className="leading-relaxed">
                Saya tidak mempublikasikan informasi pribadi tentang individu kecuali sudah publik dan relevan langsung dengan analisis politik, menghormati undang-undang privasi Indonesia dan ketentuan UU ITE. Saya membedakan antara pejabat publik yang terbuka untuk kritik berdasarkan hukum Indonesia dan warga pribadi. Saya menghindari konten yang dapat dianggap sebagai pencemaran nama baik sambil mempertahankan hak untuk mengkritik kebijakan publik dan tata kelola.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Kepercayaan Pembaca</h2>
              <p className="leading-relaxed">
                Kepercayaan Anda diperoleh melalui konsistensi, kejujuran, dan analisis berkualitas. Saya mungkin tidak selalu benar, tetapi saya akan selalu berusaha untuk bijaksana, adil dalam kritik saya, dan transparan tentang alasan saya.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Terakhir diperbarui: Desember 2024<br />
                Pedoman ini mencerminkan komitmen pribadi saya terhadap komentar yang bertanggung jawab.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}