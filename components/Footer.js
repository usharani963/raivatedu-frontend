import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand"><span className="brand-mark" style={{ background: "var(--yellow)", color: "var(--ink)" }}>r.</span><span>raivatedu.</span></Link>
            <p className="footer-blurb">Small steps. New skills. Bigger possibilities. Learn practical skills with people who want to see you grow.</p>
            <div style={{ display: "flex", gap: 14, marginTop: 18 }}>
              <a href="https://www.instagram.com/" aria-label="Instagram (opens Instagram)" target="_blank" rel="noreferrer"><Instagram size={19} /></a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn (opens LinkedIn)" target="_blank" rel="noreferrer"><Linkedin size={19} /></a>
              <a href="https://www.youtube.com/" aria-label="YouTube (opens YouTube)" target="_blank" rel="noreferrer"><Youtube size={19} /></a>
            </div>
          </div>
          <div><h3 className="footer-title">Learn</h3><div className="footer-links"><Link href="/courses">All courses</Link><Link href="/courses?category=Technology">Technology</Link><Link href="/courses?category=Design">Design</Link><Link href="/courses?category=Business">Business</Link></div></div>
          <div><h3 className="footer-title">Raivatedu</h3><div className="footer-links"><Link href="/#mentors">Our mentors</Link><Link href="/#stories">Student stories</Link><Link href="/#faq">FAQs</Link><Link href="/courses">Get started</Link></div></div>
          <div><h3 className="footer-title">Need a hand?</h3><div className="footer-links"><a href="mailto:hello@raivatedu.example">Email our team</a><Link href="/courses">Find a course <ArrowUpRight size={14} style={{ display: "inline" }} /></Link><span>Made for curious minds.</span></div></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Raivatedu. Demo website for a frontend assignment.</span><span>Learn something that moves you forward.</span></div>
      </div>
    </footer>
  );
}
