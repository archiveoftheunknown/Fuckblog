import { motion } from "framer-motion";
import { AlertCircle, Info, Search, Shield } from "lucide-react";

export default function About() {
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
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
            About This Archive
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An independent political commentary archive by Velo, focused on Indonesian politics and governance
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
              <h2 className="text-3xl font-bold text-foreground">Important Disclaimer</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This is a personal archive of political commentary and analysis. I am Velo, an independent observer of Indonesian politics. The views expressed here are entirely my own and do not represent any organization, political party, or government entity.
              </p>
              <p>
                All content published here is commentary and opinion based on publicly available information. This is not investigative journalism or official reporting - it's my personal analysis and interpretation of political events and trends in Indonesia.
              </p>
              <p>
                Readers should understand that political commentary is inherently subjective. I encourage you to verify information independently and form your own opinions based on multiple sources.
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
              <h2 className="text-3xl font-bold text-foreground">Information Sources</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="font-semibold text-foreground">
                The commentary and analysis in this archive are based on information gathered from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Public discourse and society:</strong> Observations from public forums, social media discussions, and community dialogues about Indonesian politics
                </li>
                <li>
                  <strong>Internet and digital sources:</strong> Online news portals, government websites, official statements, press releases, and publicly accessible documents
                </li>
                <li>
                  <strong>Real evidence and documentation:</strong> Official government publications, legislative records, court decisions, and policy documents that are matters of public record
                </li>
                <li>
                  <strong>Media reports:</strong> Coverage from established Indonesian and international media outlets, cross-referenced where possible
                </li>
                <li>
                  <strong>Academic sources:</strong> Published research, policy papers, and academic studies on Indonesian politics and governance
                </li>
              </ul>
              <p className="mt-4 italic">
                Note: I do not have access to classified information or insider sources. All analysis is based on information available in the public domain.
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
              <h2 className="text-3xl font-bold text-foreground">Purpose & Approach</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This archive exists as a personal project to document and analyze Indonesian political developments. My approach is to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide context for complex political events</li>
                <li>Analyze patterns in governance and policy-making</li>
                <li>Comment on the implications of political decisions</li>
                <li>Track the evolution of Indonesian democracy</li>
                <li>Offer perspective on digital transformation in politics</li>
              </ul>
              <p>
                I aim for thoughtful analysis rather than sensationalism, though my personal perspectives inevitably influence the commentary. This is not neutral reporting - it's informed opinion.
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
              <h2 className="text-3xl font-bold text-foreground">Limitations & Corrections</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Limitations:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analysis may become outdated as situations evolve</li>
                <li>Limited to publicly available information</li>
                <li>Subject to my personal interpretations and biases</li>
                <li>Cannot verify all information independently</li>
                <li>May not capture all perspectives on complex issues</li>
              </ul>
              <p className="mt-4">
                <strong className="text-foreground">Corrections:</strong>
              </p>
              <p>
                When factual errors are identified, corrections are made promptly at the top of the relevant article. However, changes in opinion or interpretation over time are addressed in new posts rather than retroactive edits.
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
              <strong className="text-foreground">Remember:</strong> This is one person's perspective on Indonesian politics. 
              Use this archive as one of many sources to inform your understanding, not as definitive truth. 
              Critical thinking and diverse sources are essential for understanding complex political realities.
            </p>
            <p className="text-center text-sm text-muted-foreground mt-4">
              — Velo, Independent Political Commentator
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}