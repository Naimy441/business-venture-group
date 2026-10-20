import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Brand from "./Brand";
export function ProjectCTA() {
  return (
    <section className="project-cta">
      <div className="wrap cta-grid">
        <div>
          <span className="eyebrow">The next step</span>
          <h2>
            Good work starts with
            <br />a real conversation.
          </h2>
        </div>
        <div>
          <p>
            Tell us what you’re planning, what needs to keep running, and what a
            successful handover looks like.
          </p>
          <Link href="/contact" className="button button-dark">
            Discuss your project <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" aria-label="Business Venture Group home">
              <Brand light />
            </Link>
            <p>
              Construction. Craft. Accountability.
              <br />
              From the first plan to the final handover.
            </p>
          </div>
          <div>
            <span className="footer-label">Explore</span>
            <Link href="/leadership">Our approach</Link>
            <Link href="/companies">The group</Link>
            <Link href="/services">Capabilities</Link>
            <Link href="/industries">Industries</Link>
          </div>
          <div>
            <span className="footer-label">Connect</span>
            <Link href="/careers">Careers</Link>
            <Link href="/news">Field notes</Link>
            <Link href="/contact">
              Project inquiries <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="footer-statement">
            Built on the work.
            <br />
            <span>Measured by the details.</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Business Venture Group Inc.</span>
          <span>Industrial construction & services</span>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
