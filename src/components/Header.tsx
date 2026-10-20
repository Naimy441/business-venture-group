"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";
const links = [
  { href: "/leadership", label: "Our approach" },
  { href: "/services", label: "Capabilities" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
];
export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link
            href="/"
            aria-label="Business Venture Group home"
            onClick={() => setOpen(false)}
          >
            <Brand />
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={path.startsWith(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="button button-dark header-cta">
            Let’s talk <ArrowUpRight size={16} />
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[
              ...links,
              { href: "/companies", label: "The group" },
              { href: "/news", label: "Field notes" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
                <ArrowUpRight size={20} />
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
