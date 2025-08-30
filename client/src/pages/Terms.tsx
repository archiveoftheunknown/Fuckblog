import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
  const { t } = useLanguage();
  
  return (
    <div className="py-20 px-8" data-testid="page-terms">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            {t("terms.title")}
          </h1>
          
          <div className="glass-card rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">{t("terms.welcome")}</h2>
              <p className="leading-relaxed">
                {t("terms.welcomeText")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">{t("terms.contentNature")}</h2>
              <p className="leading-relaxed mb-3">
                {t("terms.contentNatureText")}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("terms.contentList1")}</li>
                <li>{t("terms.contentList2")}</li>
                <li>{t("terms.contentList3")}</li>
                <li>{t("terms.contentList4")}</li>
                <li>{t("terms.contentList5")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">{t("terms.permittedUse")}</h2>
              <p className="leading-relaxed mb-3">
                {t("terms.permittedText")}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("terms.permitted1")}</li>
                <li>{t("terms.permitted2")}</li>
                <li>{t("terms.permitted3")}</li>
              </ul>
              <p className="leading-relaxed mt-3">
                {t("terms.prohibitedText")}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("terms.prohibited1")}</li>
                <li>{t("terms.prohibited2")}</li>
                <li>{t("terms.prohibited3")}</li>
                <li>{t("terms.prohibited4")}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">{t("terms.warranty")}</h2>
              <p className="leading-relaxed">
                {t("terms.warrantyText")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">{t("terms.liability")}</h2>
              <p className="leading-relaxed">
                {t("terms.liabilityText")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">{t("terms.governingLaw")}</h2>
              <p className="leading-relaxed">
                {t("terms.governingLawText")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">{t("terms.changes")}</h2>
              <p className="leading-relaxed">
                {t("terms.changesText")}
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {t("terms.lastUpdated")}: Desember 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}