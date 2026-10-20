import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
export const metadata = {
  title: "Careers",
  description:
    "Connect with Business Venture Group about your experience in construction, skilled trades, project coordination, or field support.",
};
export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Bring your craft. Build something that matters."
        description="Good industrial work takes people who care about the details, look out for one another, and take pride in a job done properly."
        image="welding"
      />
      <section className="section">
        <div className="wrap">
          <div className="editorial-intro">
            <span className="eyebrow orange">Build with us</span>
            <div>
              <h2>
                There’s a person
                <br />
                behind every good job.
              </h2>
              <p className="lead">
                The person who spots a problem before work begins. The one who
                asks the right question. The crew member who stays focused on
                the finish.
              </p>
              <p>
                We’re interested in connecting with people across construction
                management, skilled trades, project coordination, and field
                support. Tell us about your background, the work you know, and
                where you want to go next.
              </p>
              <Link
                className="button button-dark"
                href="/contact?inquiry=careers"
              >
                Introduce yourself <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="process-grid career-values">
            {[
              [
                "Respect for the craft",
                "Bring practical knowledge, keep learning, and take pride in work that others can rely on.",
              ],
              [
                "Care for the team",
                "Look out for the people around you. Communicate clearly and raise concerns early.",
              ],
              [
                "Ownership of the details",
                "Know your scope, ask when something is unclear, and see the work through.",
              ],
            ].map(([t, p], i) => (
              <div key={t}>
                <span className="process-number">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="career-feature">
        <div className="career-feature-image">
          <Image
            src="/images/craft.jpg"
            alt="Construction team working together on site"
            fill
            sizes="(max-width:700px) 100vw, 50vw"
          />
        </div>
        <div>
          <span className="eyebrow orange">Start a conversation</span>
          <h2>
            Your experience
            <br />
            has a place in
            <br />
            the conversation.
          </h2>
          <p>
            Share your trade or discipline, relevant experience, location, and
            availability. An introduction is an expression of interest, rather
            than an application for a confirmed vacancy.
          </p>
          <Link href="/contact?inquiry=careers" className="text-link">
            Tell us about yourself <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
