"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Explore courses" },
    { href: "/#mentors", label: "Our mentors" },
    { href: "/#faq", label: "FAQs" }
  ];

  function closeMenu() { setOpen(false); }

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Raivatedu home" onClick={closeMenu}>
          <span className="brand-mark">r.</span><span>raivatedu<span style={{ color: "var(--brand)" }}>.</span></span>
        </Link>
        <nav className={`nav-links ${open ? "is-open" : ""}`} id="main-menu" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={closeMenu}>{link.label}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-primary" href="/courses">Start learning <ArrowUpRight size={16} /></Link>
          <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}
