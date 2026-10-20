import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ProjectCTA } from "@/components/Footer";
export const metadata = {
  title: "Our Approach",
  description:
    "Clear planning, coordinated execution, and attention to safety and quality throughout the project.",
};
const steps = [
  [
    "Understand the job.",
    "Start with the facility, the intended outcome, and the constraints. Ask the questions that affect access, sequence, cost, and handover.",
  ],
  [
    "Build a workable plan.",
    "Define the scope, identify the trade interfaces, and establish how decisions will be made. Tie procurement and field activities to a practical sequence.",
  ],
  [
    "Stay close to the work.",
    "Keep communication direct. Review progress against the plan, raise changes early, and make the next steps clear to everyone involved.",
  ],
  [
    "Finish with care.",
    "Coordinate inspections, resolve outstanding items, and organize the records needed for handover. Treat closeout as part of execution.",
  ],
];
export default function Approach() {
  return (
    <>
      <PageHero
        eyebrow="Our approach"
        title="Accountability belongs in the field."
        description="A good plan matters. So does what happens when the work begins. Our approach connects both through direct communication and clear responsibility."
        image="construction"
      />
      <section className="section">
        <div className="wrap">
          <div className="editorial-intro">
            <span className="eyebrow orange">How we work</span>
            <div>
              <h2>
                Clear from the start.
                <br />
                Present through the finish.
              </h2>
              <p className="lead">
                The client should know who owns the next decision, what happens
                next, and where the project stands.
              </p>
              <p>
                That means keeping construction planning, field coordination,
                and closeout connected. It also means speaking plainly when
                conditions change and working through the impact before moving
                ahead.
              </p>
            </div>
          </div>
          <div className="process-grid">
            {steps.map(([title, text], i) => (
              <div key={title}>
                <span className="process-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section standards-section" id="our-standards">
        <div className="wrap">
          <span className="eyebrow orange">Our commitments</span>
          <div className="section-top">
            <h2>
              The standard is
              <br />
              in the everyday.
            </h2>
            <p>
              These are working principles. They belong in planning meetings, on
              site, and in the details that make a project ready for use.
            </p>
          </div>
          <div className="principle-list">
            {[
              [
                "People first",
                "Plan access, identify hazards, and coordinate the work before it starts. Give people a clear way to raise a concern.",
              ],
              [
                "Quality in the process",
                "Agree inspection requirements and acceptance criteria early. Check the work as it progresses, not only at the end.",
              ],
              [
                "Straight answers",
                "Make scope, assumptions, and changes visible. Give clients useful information and a clear next step.",
              ],
            ].map(([t, p]) => (
              <div key={t}>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap management-grid">
          <Link href="/leadership/operations-management">
            <span className="eyebrow orange">Planning & coordination</span>
            <h3>Operations management</h3>
            <p>How the project plan becomes a coordinated effort.</p>
            <ArrowUpRight />
          </Link>
          <Link href="/leadership/construction-managers">
            <span className="eyebrow orange">Execution & closeout</span>
            <h3>Construction management</h3>
            <p>Keeping people, trades, and decisions connected in the field.</p>
            <ArrowUpRight />
          </Link>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
