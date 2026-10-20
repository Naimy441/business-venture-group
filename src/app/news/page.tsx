import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/content";
import { ProjectCTA } from "@/components/Footer";
export const metadata = {
  title: "Field Notes",
  description:
    "Practical perspectives on industrial construction, project planning, field execution, and handover.",
};
export default function Notes() {
  return (
    <>
      <section className="notes-hero section">
        <div className="wrap">
          <span className="eyebrow orange">Field notes</span>
          <h1>
            Thought through.
            <br />
            Built better.
          </h1>
          <p className="lead">
            Practical perspectives on the decisions that shape industrial
            work—from early planning to the last walk-through.
          </p>
        </div>
      </section>
      <section className="section notes-archive">
        <div className="wrap">
          {articles.map((a, i) => (
            <Link
              className="archive-card"
              href={`/news/${a.slug}`}
              key={a.slug}
            >
              <div className="archive-image">
                <Image
                  src={`/images/${a.image}.jpg`}
                  fill
                  alt=""
                  sizes="(max-width:700px) 100vw, 45vw"
                />
              </div>
              <div>
                <span className="eyebrow orange">
                  0{i + 1} / {a.category}
                </span>
                <h2>{a.title}</h2>
                <p>{a.excerpt}</p>
                <span className="text-link">
                  Read the note <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
