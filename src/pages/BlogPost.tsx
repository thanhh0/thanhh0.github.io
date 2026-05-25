import { Link, useParams } from "react-router-dom";
import { getPost } from "../blog/registry";
import { useEffect, useRef } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;
  const giscusRef = useRef<HTMLDivElement>(null);

  // Optional comments via giscus. Configure repo + repoId below.
  // Until configured, the block stays a quiet placeholder.
  const giscusConfigured = false;

  useEffect(() => {
    if (!giscusConfigured || !giscusRef.current) return;
    giscusRef.current.innerHTML = "";
    const s = document.createElement("script");
    s.src = "https://giscus.app/client.js";
    s.async = true;
    s.crossOrigin = "anonymous";
    s.setAttribute("data-repo", "thanhh0/thanhh0.github.io");
    s.setAttribute("data-repo-id", "REPLACE_ME");
    s.setAttribute("data-category", "Comments");
    s.setAttribute("data-category-id", "REPLACE_ME");
    s.setAttribute("data-mapping", "pathname");
    s.setAttribute("data-theme", "noborder_dark");
    s.setAttribute("data-reactions-enabled", "1");
    giscusRef.current.appendChild(s);
  }, [slug]);

  if (!post) {
    return (
      <article className="post">
        <div className="meta">404 / post not found</div>
        <h1>that post doesn't exist.</h1>
        <p className="dek">
          Maybe the slug changed. <Link to="/blogs">back to /blogs</Link>.
        </p>
      </article>
    );
  }

  const { Component, meta } = post;

  return (
    <article className="post">
      <div className="meta">
        {fmt(meta.date)} &nbsp;·&nbsp; {meta.tags?.join(" · ")}
      </div>
      <h1>{meta.title}</h1>
      {meta.description && <p className="dek">{meta.description}</p>}

      <div className="body">
        <Component />
      </div>

      <div style={{ marginTop: 72, paddingTop: 32, borderTop: "1px solid var(--rule)" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "var(--gold)", marginBottom: 14 }}>
          // comments
        </div>
        {giscusConfigured ? (
          <div ref={giscusRef} />
        ) : (
          <p style={{ fontSize: 13, color: "var(--silver-dim)" }}>
            Comments are wired through{" "}
            <a href="https://giscus.app" target="_blank" rel="noreferrer">giscus</a>.{" "}
            Drop your repo + category ids into{" "}
            <code style={{
              fontFamily: "var(--f-mono)", color: "var(--gold-glow)",
              background: "rgba(176,138,78,0.08)", padding: "1px 6px", borderRadius: 2,
            }}>BlogPost.tsx</code>{" "}
            to enable.
          </p>
        )}
      </div>

      <div style={{ marginTop: 56 }}>
        <Link to="/blogs">← /blogs</Link>
      </div>
    </article>
  );
}

function fmt(iso: string) {
  const d = new Date(iso);
  return d
    .toLocaleDateString("en-AU", { year: "numeric", month: "short", day: "2-digit" })
    .toUpperCase();
}
