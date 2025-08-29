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
            Privacy Policy
          </h1>
          
          <div className="glass-card rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">About This Policy</h2>
              <p className="leading-relaxed">
                I'm Velo, and this is my personal political commentary archive. I respect your privacy and am committed to protecting any information you might share while visiting this site. This policy explains what data, if any, is collected and how it's handled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Information Collection</h2>
              <p className="leading-relaxed mb-3">
                This website operates as a public archive and does not actively collect personal information. No user accounts, comments, or contact forms are provided. The site may use:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard web server logs (IP addresses, browser types, referring pages)</li>
                <li>Analytics cookies to understand readership patterns (if implemented)</li>
                <li>Session storage for site preferences (theme, layout)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Data Usage</h2>
              <p className="leading-relaxed">
                Any automatically collected data is used solely to maintain and improve the website's functionality. I do not sell, trade, or share visitor information with third parties. Server logs are retained for security purposes and deleted after 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Third-Party Services</h2>
              <p className="leading-relaxed">
                This site is hosted on Replit, which may collect its own analytics. Please refer to Replit's privacy policy for their data practices. No other third-party tracking or advertising services are intentionally implemented.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Your Rights</h2>
              <p className="leading-relaxed">
                Under GDPR (EU) and CCPA (California), you have rights regarding your personal data. Since this site collects minimal data, there's little to request, but you may contact me about any privacy concerns. You can browse with privacy tools like VPNs or Tor if you prefer complete anonymity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Updates</h2>
              <p className="leading-relaxed">
                This policy may be updated occasionally to reflect changes in practices or legal requirements. The last update was made in December 2024.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: December 2024<br />
                Contact: This is a read-only archive with no contact mechanism by design.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}