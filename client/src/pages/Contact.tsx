import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Kami",
    details: "kontak@wawasanpolitik.id",
    description: "Kirimkan pertanyaan atau tips berita Anda",
  },
  {
    icon: Phone,
    title: "Hubungi Kami",
    details: "+62 (21) 123-4567",
    description: "Tersedia Senin hingga Jumat, 09.00 - 18.00 WIB",
  },
  {
    icon: MapPin,
    title: "Kunjungi Kami",
    details: "Jl. Demokrasi No. 123, Jakarta",
    description: "Jakarta Pusat 10110",
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general"
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Pesan berhasil dikirim!",
      description: "Kami akan membalas dalam 24 jam.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      type: "general"
    });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-20 px-8" data-testid="page-contact">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          data-testid="contact-info-section"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  className="glass-card p-8 rounded-xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  data-testid={`contact-info-${index}`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-chart-3 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{info.title}</h3>
                  <p className="text-primary font-medium mb-2">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          data-testid="contact-form-section"
        >
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 rounded-2xl">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4 text-foreground">Kirim Pesan</h2>
                <p className="text-muted-foreground">
                  Isi formulir di bawah ini dan kami akan segera menghubungi Anda.
                </p>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all duration-300"
                      placeholder="Masukkan nama lengkap Anda"
                      data-testid="input-contact-name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all duration-300"
                      placeholder="Masukkan alamat email Anda"
                      data-testid="input-contact-email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-foreground mb-2">
                      Jenis Pertanyaan
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:border-primary transition-all duration-300"
                      data-testid="select-contact-type"
                    >
                      <option value="general">Pertanyaan Umum</option>
                      <option value="story-tip">Tips Berita</option>
                      <option value="collaboration">Kolaborasi</option>
                      <option value="feedback">Umpan Balik</option>
                      <option value="press">Pertanyaan Media</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subjek *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all duration-300"
                      placeholder="Subjek singkat"
                      data-testid="input-contact-subject"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Ceritakan lebih lanjut tentang pertanyaan Anda..."
                    data-testid="textarea-contact-message"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full glass-button px-8 py-4 rounded-xl font-semibold text-primary-foreground disabled:opacity-50 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid="button-contact-submit"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.section>

        {/* Additional Info */}
        <motion.section
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          data-testid="additional-info-section"
        >
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Waktu Respon</h3>
            <p className="text-muted-foreground leading-relaxed">
              Kami biasanya merespon semua pertanyaan dalam 24 jam pada hari kerja. 
              Untuk hal mendesak atau tips berita terkini, mohon sebutkan di subjek 
              untuk penanganan prioritas.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}