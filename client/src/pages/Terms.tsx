import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="py-20 px-8" data-testid="page-terms">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          
          <div className="glass-card rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Welcome</h2>
              <p className="leading-relaxed">
                These terms govern your use of my political commentary archive. I'm Velo, an independent writer, and this site represents my personal analysis and opinions. By accessing this site, you agree to these simple terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Content Nature</h2>
              <p className="leading-relaxed mb-3">
                Everything published here represents my personal political analysis and commentary. The content is:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Opinion-based and should not be taken as factual reporting</li>
                <li>Protected under freedom of expression laws</li>
                <li>Not intended as professional political or legal advice</li>
                <li>Subject to my own biases and perspectives</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Acceptable Use</h2>
              <p className="leading-relaxed mb-3">
                You are welcome to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Read and share articles with proper attribution</li>
                <li>Quote portions for criticism, commentary, or educational purposes under fair use</li>
                <li>Link to content from your own platforms</li>
              </ul>
              <p className="leading-relaxed mt-3">
                You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Republish full articles without permission</li>
                <li>Misrepresent my views or take quotes out of context</li>
                <li>Use automated tools to scrape or download content in bulk</li>
                <li>Attempt to access restricted areas of the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                This site is provided "as is" without any warranties. I make no guarantees about the accuracy, completeness, or timeliness of the content. Political situations evolve rapidly, and older posts may not reflect current realities or my current views.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
              <p className="leading-relaxed">
                I am not liable for any damages arising from your use of this site or reliance on its content. This includes any political, financial, or personal decisions you make based on my commentary. Always verify information independently and consult appropriate professionals for advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Governing Law</h2>
              <p className="leading-relaxed">
                These terms are governed by international copyright law and the principle of freedom of expression as recognized in democratic societies. Disputes should be resolved through good faith discussion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Changes to Terms</h2>
              <p className="leading-relaxed">
                I may update these terms as needed. Continued use of the site after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: December 2024<br />
                By Velo - Independent Political Commentator
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}