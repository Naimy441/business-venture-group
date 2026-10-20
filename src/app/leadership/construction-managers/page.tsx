import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ProjectCTA } from "@/components/Footer";
export const metadata = { title: "Construction Managers" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Construction Managers"
        title="Close to the work. Clear on the details."
        description="Construction management keeps the plan connected to day-to-day site conditions, trade coordination, and the requirements for handover."
        image="craft"
      />
      <section className="section">
        <div className="wrap narrow">
          <Link className="text-link back-link" href="/leadership">
            <ArrowLeft size={16} />
            Our approach
          </Link>
          <div className="principle-list">
            <div>
              <h2>Site coordination</h2>
              <p>
                Plan access, deliveries, work zones, and trade activities around
                the actual conditions on site.
              </p>
            </div>
            <div>
              <h2>Quality & inspections</h2>
              <p>
                Coordinate checks and hold points with the appropriate
                specialists. Record issues and track them through resolution.
              </p>
            </div>
            <div>
              <h2>Completion & handover</h2>
              <p>
                Review finished work in stages, close outstanding items, and
                organize the information needed to put the facility into use.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
