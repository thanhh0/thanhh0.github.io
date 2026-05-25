import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { posts } from "../blog/registry";

export default function Blogs() {
  return (
    <>
      <section className="blog-head">
        <div className="kicker">// /blogs · long-form notes</div>
        <h1>
          field notes from the build.
        </h1>
        <p>
          Migrations that didn't break. CI strategies that survived
          the next hire. AI workflows that earned their keep.
          Published when something is actually worth saying.
        </p>
      </section>

      <section className="post-list">
        {posts.length === 0 && (
          <div className="row">
            <span className="date">···</span>
            <div>
              <h3>nothing published yet.</h3>
              <p>drafts are written; they ship when they're honest.</p>
            </div>
            <span className="arrow">·</span>
          </div>
        )}
        {posts.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.5 }}
          >
            <Link to={`/blogs/${p.slug}`} style={{ border: "none", color: "inherit" }}>
              <div className="row">
                <span className="date">{fmt(p.meta.date)}</span>
                <div>
                  <h3>{p.meta.title}</h3>
                  <p>{p.meta.description}</p>
                </div>
                <span className="arrow">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </>
  );
}

function fmt(iso: string) {
  const d = new Date(iso);
  return d
    .toLocaleDateString("en-AU", { year: "numeric", month: "short", day: "2-digit" })
    .toUpperCase();
}
