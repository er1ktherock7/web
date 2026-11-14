import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="wrap case">
      <p className="eyebrow">404 / A SMALL DETOUR</p>
      <h1>This page wandered off.</h1>
      <p className="lead">Let’s get you back to the work.</p>
      <Link className="primary-button" href="/" style={{ marginTop: 30 }}>
        Back to Herick
      </Link>
    </main>
  );
}
