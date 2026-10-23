import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ProjectCTA } from "@/components/Footer";
import { services } from "@/lib/content";
export const metadata = { title: "The Group" };
export default function Companies() {
  return (
    <>
      <PageHero
        eyebrow="The group"
        title="Connected expertise. Shared responsibility."
        description="Global Industries brings related construction and industrial disciplines together around the needs of a project. The value is in how the work connects."
        image="construction"
      />
      <section className="section">
        <div className="wrap">
          <div className="editorial-intro">
            <span className="eyebrow orange">Global Industries</span>
            <div>
              <h2>
                A wider view.
                <br />A more practical plan.
              </h2>
              <p className="lead">
                A construction decision can change a mechanical scope. A
                fabrication detail can change a field sequence. We plan for
                those connections.
              </p>
              <p>
                Our group approach brings the relevant disciplines into the
                conversation early. It gives clients a clearer way to discuss
                the full scope, agree responsibilities, and coordinate the work
                ahead.
              </p>
            </div>
          </div>
          <div className="group-grid">
            {services.map((s, i) => (
              <Link
                href={`/services#${s.id}`}
                className="group-card"
                key={s.id}
              >
                <span className="eyebrow orange">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ArrowUpRight size={24} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
