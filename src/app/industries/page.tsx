import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ProjectCTA } from "@/components/Footer";
import { industries } from "@/lib/content";
export const metadata = {
  title: "Industries",
  description:
    "Construction and facility support for manufacturing, warehousing, logistics, and process industries.",
};
export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="The operation shapes the work."
        description="A production line, a distribution floor, and a process facility have different priorities. Understanding those differences is where our planning starts."
        image="plant"
      />
      <section className="section">
        <div className="wrap industry-details">
          {industries.map((x, i) => (
            <section className="industry-detail" id={x.id} key={x.id}>
              <div className="industry-detail-image">
                <Image
                  src={`/images/${x.image}.jpg`}
                  fill
                  alt={`${x.title} environment`}
                  sizes="(max-width:700px) 100vw, 50vw"
                />
              </div>
              <div>
                <span className="eyebrow orange">
                  0{i + 1} / Our industries
                </span>
                <h2>{x.title}</h2>
                <p>{x.text}</p>
                <ul className="scope-list">
                  {x.scopes.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <Link href="/contact" className="text-link">
                  Plan your next step <ArrowUpRight size={17} />
                </Link>
              </div>
            </section>
          ))}
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
