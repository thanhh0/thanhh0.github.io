import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const CERT_PDF = `${import.meta.env.BASE_URL}certificate-4dqhfoa6xhsp-1777281299.pdf`;
const CERT_IMG = `${import.meta.env.BASE_URL}certificate.png`;

const reveal = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

export default function Home() {
  const [certOpen, setCertOpen] = useState(false);

  useEffect(() => {
    if (!certOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCertOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [certOpen]);

  return (
    <>
      <section className="hero" id="top">
        <motion.div
          className="preprompt"
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <span>// fullstack engineer · ts · nestjs · aws</span>
        </motion.div>

        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={1}
        >
          Thanh <em>Hoang.</em>
        </motion.h1>

        <motion.p
          className="tag"
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={2}
        >
          Building the next <b>agentic products</b> at <b>DigiWize</b>.
          Claude Certified Architect.
        </motion.p>

        <motion.div
          className="term"
          variants={reveal}
          initial="hidden"
          animate="show"
          custom={3}
        >
          <div className="term-head">
            <span className="lamp on" />
            <span className="lamp" />
            <span className="lamp" />
            <span style={{ marginLeft: 8 }}>thanh@hoang · bash · 92×24</span>
          </div>
          <div className="term-body">
            <span className="ln"><span className="c"># whoami</span></span>
            <span className="ln">
              fullstack engineer · <span className="k">wollongong, nsw</span>
            </span>
            <span className="ln"><span className="c"># stack --primary</span></span>
            <span className="ln">
              typescript · nestjs · react · flutter · postgres · aws
            </span>
            <span className="ln"><span className="c"># llm --tools</span></span>
            <span className="ln">
              <span className="k">10×</span> premium claude seats · aws bedrock
            </span>
            <span className="ln"><span className="c"># open --to</span></span>
            <span className="ln">
              backend platform · devex · ai-augmented engineering
              <span className="cursor" />
            </span>
          </div>
        </motion.div>
      </section>

      <section className="s about" id="about">
        <div className="head">
          <span className="num">01 / about</span>
          <h2>
            quietly opinionated <em>about the boring 90%.</em>
          </h2>
        </div>
        <div className="body">
          <span className="gutter">// bio</span>
          <div>
            <p>
              I like the unglamorous parts of software: schema design,
              caching strategies, the migration nobody wants to own.
              That's where most products actually live or die.
            </p>
            <p>
              The current AI cycle is loud and the dial is stuck on
              "vibe coding". I run the opposite play. Specs come first:
              the data model, the contract, the failure modes, the
              test that proves it. Agents are useful once the spec is
              honest, dangerous before. A PR I haven't read is a PR I
              haven't shipped, no matter who typed it.
            </p>
            <p>
              Call it spec-driven, or just refusing to pass{" "}
              <code>--dangerously-skip-reading-code</code>.
            </p>
            <div className="stamps">
              <button
                type="button"
                className="stamp stamp-btn"
                onClick={() => setCertOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={certOpen}
              >
                claude certified architect · anthropic
                <span className="stamp-arrow" aria-hidden>↗</span>
              </button>
              <a
                href="https://www.credly.com/badges/beaaf4d6-e95b-4b40-b1c2-886a85c51574"
                target="_blank"
                rel="noreferrer"
                className="stamp stamp-btn"
              >
                aws agentic ai demonstrated · aws
                <span className="stamp-arrow" aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="s" id="experience">
        <div className="head">
          <span className="num">02 / experience</span>
          <h2>
            shipped, <em>not shelved.</em>
          </h2>
        </div>
        <div className="body">
          <span className="gutter">// star format</span>
          <div className="exp">
            <ExpCard
              company="DigiWize"
              when="Apr 2026 → Present"
              role="Head of Artificial Intelligence"
              stack="AWS AgentCore · Strands · Python"
              intro={<>DigiWize is an all-in-one, AI-native platform for software companies — one product replacing the usual stack of Linear, Swarmia, Dropbox and more.</>}
              star={{
                s: "A software team's workflow was fragmented across separate tools for planning, engineering metrics and file storage, with no AI woven into the loop.",
                t: "Build AI-native products and agentic workflows that consolidate the stack and put intelligence at the centre of how teams operate.",
                a: "Designed multi-agent workflows on AWS AgentCore and Strands, stood up production-grade LLM infrastructure, and built RAG pipelines over structured data and knowledge systems.",
                r: <>Multi-agent workflows streamlined operations and lifted overall productivity, backed by LLM infra running at <span className="metric">production-grade</span> performance and reliability.</>,
              }}
              tags={["AWS AgentCore", "Strands", "Python", "Multi-agent", "RAG", "LLM infra"]}
              hi={["AWS AgentCore", "Multi-agent"]}
            />

            <ExpCard
              company="Innomente · Sample Assist"
              when="Mar 2024 → Present"
              role="Fullstack SWE"
              stack="TypeScript · NestJS · React · Flutter · AWS"
              star={{
                s: "A production data layer on Firestore was hitting query and modelling limits as the schema outgrew document semantics.",
                t: "Move the system onto PostgreSQL without a maintenance window or a typed-contract regression.",
                a: "Designed the relational schema, wrote a TypeORM rewrite of the data layer, and ran a phased cutover with parallel validation against the old store.",
                r: <>Query performance improved <span className="metric">~2×</span>, the team got a fully typed data contract end-to-end, and the migration shipped with zero user-facing disruption.</>,
              }}
              tags={["PostgreSQL", "TypeORM", "Schema design", "Migration"]}
              hi={["PostgreSQL", "Migration"]}
            />

            <ExpCard
              company="Innomente · Mobile delivery"
              when="2024 → Present"
              role="iOS / Android CI/CD"
              stack="GitHub Actions · Fastlane · Xcode"
              intro={<>Multiple production Flutter apps live on the App Store and Play Store, with crash analytics and a regular release cadence.</>}
              star={{
                s: "iOS builds on CI took ~50 minutes, throttling release cadence and review feedback loops.",
                t: "Cut iOS build time without buying more runners.",
                a: "Profiled the build, isolated caching as the real bottleneck (not parallelism), and rebuilt the GitHub Actions + Fastlane caching strategy around derived data and Pods.",
                r: <>iOS CI went from <span className="metric">50 → 20 min</span>, ~60% reduction. Faster build distribution shortened testing cycles and raised release confidence — a cadence the product side could actually plan around.</>,
              }}
              tags={["GitHub Actions", "Fastlane", "Caching", "iOS"]}
              hi={["50 → 20 min"]}
            />

            <ExpCard
              company="Innomente · AI engineering"
              when="2024 → Present"
              role="Agentic product engineer"
              stack="AWS Bedrock · OpenAI · Anthropic SDK"
              star={{
                s: "The platform carried repetitive manual work, and the team's AI usage was ad-hoc — no shared workflows, no shipped agentic features.",
                t: "Build agentic automation that ships to production, and make AI tooling a team-wide multiplier rather than a personal trick.",
                a: "Built agentic automation modules on AWS Bedrock (AgentCore Runtime) — agent loop, tool surface, retry / fallback, observability — and introduced Claude Code best practices: skills, rules, and plugins.",
                r: <>Repetitive manual work eliminated from the platform, ~<span className="metric">2× developer productivity</span> across the team, and external recognition as a <span className="metric">Claude Certified Architect.</span></>,
              }}
              tags={["AWS Bedrock", "AgentCore", "Claude Code", "Agents"]}
              hi={["Claude Certified Architect", "AWS Bedrock", "2× developer productivity"]}
            />
          </div>
        </div>
      </section>

      <section className="s" id="skills">
        <div className="head">
          <span className="num">03 / skills</span>
          <h2>
            sharp where it counts, <em>ramping where it doesn't yet.</em>
          </h2>
        </div>
        <div className="body">
          <span className="gutter">// stack</span>
          <dl className="skill-grid">
            <dt>languages</dt>
            <dd>typescript · javascript · dart · sql · python <em>(ai tooling)</em> · go <em>(ramping)</em></dd>

            <dt>frontend</dt>
            <dd>react · flutter · responsive · tailwind-style design</dd>

            <dt>backend</dt>
            <dd>node.js · nestjs · rest · websockets · graphql <em>(ramping)</em> · gRPC / protobuf <em>(ramping)</em></dd>

            <dt>data</dt>
            <dd>postgres · mongodb · typeorm · schema design · migration</dd>

            <dt>cloud / devops</dt>
            <dd>aws (ecs · rds · api gw · cloudwatch) · terraform · docker · kubernetes <em>(ramping)</em> · gh actions · fastlane</dd>

            <dt>ai / tooling</dt>
            <dd>claude code · openai codex · anthropic sdk · agent orchestration</dd>

            <dt>delivery</dt>
            <dd>agile · code review · estimation · technical writing</dd>
          </dl>
        </div>
      </section>

      <section className="s" id="education">
        <div className="head">
          <span className="num">04 / education</span>
          <h2>
            credentialed <em>where it matters.</em>
          </h2>
        </div>
        <div className="body">
          <span className="gutter">// edu</span>
          <ol className="edu">
            <li>
              <div className="when">2023 → 2025</div>
              <div className="degree">Master of Computer Science</div>
              <div className="where">University of Wollongong · NSW, Australia</div>
            </li>
            <li>
              <div className="when">2019 → 2023</div>
              <div className="degree">Bachelor of Information Technology</div>
              <div className="where">FPT University · HCMC, Vietnam</div>
            </li>
          </ol>
        </div>
      </section>

      <section className="s" id="contact">
        <div className="head">
          <span className="num">05 / contact</span>
          <h2>
            send something <em>worth opening.</em>
          </h2>
        </div>
        <div className="body">
          <span className="gutter">// channels</span>
          <div className="contact">
            <a href="mailto:thanh01.isme@gmail.com">
              <span className="label">e / mail</span>
              <span className="v">thanh01.isme@gmail.com</span>
            </a>
            <a
              href="https://github.com/thanhh0"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">g / github</span>
              <span className="v">github.com/thanhh0</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hphuocthanh/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">in / linkedin</span>
              <span className="v">linkedin.com/in/hphuocthanh</span>
            </a>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="label">↑ / back</span>
              <span className="v">return to top</span>
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {certOpen && (
          <motion.div
            className="cert-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setCertOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Claude Certified Architect verification"
          >
            <motion.div
              className="cert-modal"
              initial={{ opacity: 0, y: 16, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.99 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <header className="cert-head">
                <div className="cert-title">
                  <span className="cert-seal">✦</span>
                  <span>
                    claude certified architect
                    <em> · anthropic</em>
                  </span>
                </div>
                <div className="cert-actions">
                  <a
                    href={CERT_PDF}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-open"
                  >
                    pdf ↗
                  </a>
                  <button
                    type="button"
                    className="cert-close"
                    onClick={() => setCertOpen(false)}
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
              </header>
              <div className="cert-frame-wrap">
                <img
                  src={CERT_IMG}
                  alt="Claude Certified Architect certificate"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <footer className="cert-foot">
                <span>anthropic · skilljar verified</span>
                <span>esc to close</span>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ExpCard({
  company,
  when,
  role,
  stack,
  intro,
  star,
  tags,
  hi,
}: {
  company: string;
  when: string;
  role: string;
  stack: string;
  intro?: React.ReactNode;
  star: { s: string; t: string; a: string; r: React.ReactNode };
  tags: string[];
  hi?: string[];
}) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="row">
        <h3>{company}</h3>
        <span className="when">{when}</span>
      </div>
      <div className="role">
        {role} <span>·</span> {stack}
      </div>
      {intro && <p className="intro">{intro}</p>}
      <dl className="star">
        <dt>S</dt><dd>{star.s}</dd>
        <dt>T</dt><dd>{star.t}</dd>
        <dt>A</dt><dd>{star.a}</dd>
        <dt>R</dt><dd>{star.r}</dd>
      </dl>
      <div className="tags">
        {tags.map((t) => (
          <span key={t} className={hi?.some((h) => t.includes(h)) ? "hi" : ""}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

