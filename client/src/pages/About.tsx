import { motion } from "framer-motion";
import { AlertCircle, Info, Search, Shield, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="py-20 px-8" data-testid="page-about">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent leading-tight">
            {t("about.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Disclaimer Section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          data-testid="disclaimer-section"
        >
          <div className="glass-card p-10 rounded-2xl">
            <div className="flex items-center mb-6">
              <AlertCircle className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">{t("about.disclaimerTitle")}</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t("about.disclaimer1")}
              </p>
              <p>
                {t("about.disclaimer2")}
              </p>
              <p>
                {t("about.disclaimer3")}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Information Sources */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          data-testid="sources-section"
        >
          <div className="glass-card p-10 rounded-2xl">
            <div className="flex items-center mb-6">
              <Search className="w-8 h-8 text-chart-3 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">{t("about.sourcesTitle")}</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">
                {t("about.sourcesIntro")}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>{t("about.source1Title")}</strong> {t("about.source1")}
                </li>
                <li>
                  <strong>{t("about.source2Title")}</strong> {t("about.source2")}
                </li>
                <li>
                  <strong>{t("about.source3Title")}</strong> {t("about.source3")}
                </li>
                <li>
                  <strong>{t("about.source4Title")}</strong> {t("about.source4")}
                </li>
                <li>
                  <strong>{t("about.source5Title")}</strong> {t("about.source5")}
                </li>
              </ul>
              <p className="mt-4 italic">
                {t("about.sourcesNote")}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Purpose and Approach */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          data-testid="purpose-section"
        >
          <div className="glass-card p-10 rounded-2xl">
            <div className="flex items-center mb-6">
              <Info className="w-8 h-8 text-chart-1 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">{t("about.purposeTitle")}</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {t("about.purposeIntro")}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("about.purpose1")}</li>
                <li>{t("about.purpose2")}</li>
                <li>{t("about.purpose3")}</li>
                <li>{t("about.purpose4")}</li>
                <li>{t("about.purpose5")}</li>
              </ul>
              <p>
                {t("about.purposeNote")}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Limitations and Corrections */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          data-testid="limitations-section"
        >
          <div className="glass-card p-10 rounded-2xl">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-chart-2 mr-3" />
              <h2 className="text-3xl font-bold text-foreground">{t("about.limitationsTitle")}</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">{t("about.limitationsSubtitle")}</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("about.limitation1")}</li>
                <li>{t("about.limitation2")}</li>
                <li>{t("about.limitation3")}</li>
                <li>{t("about.limitation4")}</li>
                <li>{t("about.limitation5")}</li>
              </ul>
              <p className="mt-4">
                <strong className="text-foreground">{t("about.correctionsSubtitle")}</strong>
              </p>
              <p>
                {t("about.correctionsText")}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Final Note */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          data-testid="final-note-section"
        >
          <div className="glass-card p-8 rounded-2xl bg-accent/20">
            <p className="text-center text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{t("about.remember")}</strong> {t("about.finalNote")}
            </p>
            <p className="text-center text-sm text-muted-foreground mt-4">
              — {t("about.signature")}
            </p>
          </div>
        </motion.section>

        {/* Need Help Section */}
        <motion.section
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          data-testid="need-help-section"
        >
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold text-foreground">Need help?</h3>
            </div>
            <p className="text-center text-muted-foreground">
              Contact <a href="mailto:support@velocitysbeta.com" className="text-primary hover:underline transition-all">support@velocitysbeta.com</a>
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}