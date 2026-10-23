import Link from "next/link";

export default function NotFound() {
  return <main className="section"><div className="container empty-state"><div style={{ fontSize: "3rem" }}>📚</div><h1>We couldn't find that course.</h1><p className="muted">It may have moved, or the link may be incorrect.</p><Link href="/courses" className="btn btn-primary">Explore all courses</Link></div></main>;
}
