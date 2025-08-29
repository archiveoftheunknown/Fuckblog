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
            Editorial Guidelines
          </h1>
          
          <div className="glass-card rounded-2xl p-8 space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">My Commitment</h2>
              <p className="leading-relaxed">
                As an independent political commentator focusing on Indonesian politics, I, Velo, am committed to thoughtful, honest analysis. While this is a personal blog reflecting my views, I hold myself to certain standards aligned with Indonesian Press Council (Dewan Pers) ethics and Pancasila values to ensure my commentary contributes meaningfully to democratic discourse in Indonesia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Transparency</h2>
              <p className="leading-relaxed mb-3">
                I believe in being upfront about my perspective:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>This is opinion and analysis, not neutral reporting</li>
                <li>I have my own political leanings which influence my commentary</li>
                <li>When I change my position on issues, I acknowledge it</li>
                <li>Corrections are made clearly when factual errors occur</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Research Standards</h2>
              <p className="leading-relaxed mb-3">
                While this is commentary, I strive to base my analysis on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verified information from multiple sources when possible</li>
                <li>Primary sources like official documents and transcripts</li>
                <li>Clear distinction between facts, analysis, and speculation</li>
                <li>Context that helps readers understand complex issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Independence</h2>
              <p className="leading-relaxed">
                This blog is entirely independent. I am not affiliated with any political party, campaign, or advocacy organization. No one pays me for coverage or influences my editorial decisions. My opinions are my own, formed through research and reflection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Respectful Discourse</h2>
              <p className="leading-relaxed">
                I aim to criticize ideas and policies, not attack individuals personally, respecting the Indonesian principle of "kritik yang membangun" (constructive criticism). While political commentary can be sharp, I avoid ad hominem attacks, SARA (ethnic, religious, racial, and inter-group) provocations as prohibited under Indonesian law, and content designed purely to provoke rather than illuminate. I respect Indonesian cultural values while maintaining critical independence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Coverage Scope</h2>
              <p className="leading-relaxed mb-3">
                My commentary focuses on Indonesian politics:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indonesian democratic processes and Reformasi legacy</li>
                <li>Digital transformation of Indonesian politics and e-governance</li>
                <li>Indonesian media landscape and information ecosystems</li>
                <li>Policy impacts on Indonesian society and citizens</li>
                <li>Historical context from Orde Baru to contemporary Indonesia</li>
                <li>Regional politics and decentralization (otonomi daerah)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Corrections Policy</h2>
              <p className="leading-relaxed">
                When I make factual errors, I correct them promptly and transparently. Corrections are noted at the top of the affected article with the date and nature of the correction. Opinion changes over time are different from errors and are addressed in new posts rather than corrections.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Ethical Boundaries</h2>
              <p className="leading-relaxed">
                I do not publish private information about individuals unless it's already public and directly relevant to political analysis, respecting Indonesian privacy laws and UU ITE provisions. I distinguish between public officials (pejabat publik) open to criticism under Indonesian law and private citizens. I avoid content that could be considered pencemaran nama baik (defamation) while maintaining the right to criticize public policies and governance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">Reader Trust</h2>
              <p className="leading-relaxed">
                Your trust is earned through consistency, honesty, and quality analysis. I may not always be right, but I will always strive to be thoughtful, fair in my criticism, and transparent about my reasoning.
              </p>
            </section>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: December 2024<br />
                These guidelines reflect my personal commitment to responsible commentary.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}