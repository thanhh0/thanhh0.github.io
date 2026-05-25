import { NavLink, useLocation } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const loc = useLocation();
  const [now, setNow] = useState(stamp());

  useEffect(() => {
    const id = setInterval(() => setNow(stamp()), 1000);
    return () => clearInterval(id);
  }, []);

  const crumb =
    loc.pathname === "/"
      ? "~"
      : "~" + loc.pathname.replace(/\/$/, "");

  return (
    <>
      <aside className="rail" aria-hidden="true">
        <div className="mark">~</div>
        <div className="vert">thanh · hoang · 2026</div>
        <div className="dot" title="online" />
      </aside>

      <div className="shell with-rail">
        <header className="top">
          <div className="crumbs">
            <span>thanh@hoang</span> <em>:</em> <span>{crumb}</span>{" "}
            <em>%</em>
          </div>
          <nav>
            <NavLink to="/" end>index</NavLink>
            <NavLink to="/blogs">blogs</NavLink>
            <a
              href="https://github.com/thanhh0"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </nav>
        </header>

        {children}

        <footer className="foot">
          <span>
            <span className="seal">✦</span>&nbsp;&nbsp;built quietly · {now}
          </span>
          <span>
            wollongong · nsw · 34.42°s 150.89°e
          </span>
        </footer>
      </div>
    </>
  );
}

function stamp() {
  const d = new Date();
  return d.toISOString().replace("T", " ").slice(0, 19) + "Z";
}
