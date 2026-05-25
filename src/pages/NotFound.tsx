import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="preprompt"><span>// 404 · path not found</span></div>
      <h1>nothing here<em>.</em></h1>
      <p className="tag">
        the page you reached doesn't exist, or it was removed in a quiet
        cleanup. <Link to="/">return home</Link>.
      </p>
    </section>
  );
}
