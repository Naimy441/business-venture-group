import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { ProjectCTA } from "@/components/Footer";
import { services } from "@/lib/content";
export const metadata = {
  title: "Capabilities",
  description:
    "General contracting, design-build, mechanical work, fabrication, facility improvements, and maintenance support.",
};
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Every scope. One clear direction."
        description="Construction and industrial services planned around the whole project. Connect the right disciplines, resolve the interfaces, and keep the work moving."
        image="welding"
      />
      <section className="section">
        <div className="wrap service-layout">
          <aside className="service-nav">
            <span className="eyebrow orange">Explore our scope</span>
            {services.map((s, i) => (
              <a href={`#${s.id}`} key={s.id}>
                <span>0{i + 1}</span>
                {s.title}
                <ArrowRight size={14} />
              </a>
            ))}
            <Link className="text-link" href="/contact">
              Talk through your scope <ArrowUpRight size={16} />
            </Link>
          </aside>
          <div className="service-sections">
            {services.map((s, i) => (
              <section id={s.id} className="service-detail" key={s.id}>
                <span className="eyebrow orange">
                  0{i + 1} / {s.title}
                </span>
                <h2>{s.short}</h2>
                <p className="lead">{s.description}</p>
                <div className="service-image">
                  <Image
                    src={`/images/${s.image}.jpg`}
                    alt={`${s.title} work`}
                    fill
                    sizes="(max-width:900px) 100vw, 60vw"
                  />
                </div>
                <h3 className="small-heading">Areas of focus</h3>
                <ul className="scope-list">
                  {s.details.map((d) => (
                    <li key={d}>
                      {d}
                      <span aria-hidden="true">↗</span>
                    </li>
                  ))}
                </ul>
                <Link
                  className="text-link"
                  href={`/contact?service=${encodeURIComponent(s.title)}`}
                >
                  Discuss this scope <ArrowUpRight size={17} />
                </Link>
              </section>
            ))}
          </div>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
