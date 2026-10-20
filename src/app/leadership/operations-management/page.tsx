import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ProjectCTA } from "@/components/Footer";
export const metadata = { title: "Operations Management" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Operations Management"
        title="A plan the field can work with."
        description="Operations management connects scope, procurement, people, and schedules before the team reaches the site."
        image="plans"
      />
      <section className="section">
        <div className="wrap narrow">
          <Link className="text-link back-link" href="/leadership">
            <ArrowLeft size={16} />
            Our approach
          </Link>
          <div className="principle-list">
            <div>
              <h2>Scope & interfaces</h2>
              <p>
                Define package boundaries, responsibilities, and the points
                where trades need to work together.
              </p>
            </div>
            <div>
              <h2>Procurement & sequencing</h2>
              <p>
                Connect material and equipment decisions with the installation
                sequence. Identify the approvals and delivery dates that govern
                the work.
              </p>
            </div>
            <div>
              <h2>Progress & communication</h2>
              <p>
                Review upcoming activities, resolve constraints, and keep
                clients informed when decisions affect the plan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
