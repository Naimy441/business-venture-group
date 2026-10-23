import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/lib/content";
import { ProjectCTA } from "@/components/Footer";
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return { title: a?.title ?? "Field note", description: a?.excerpt };
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  return (
    <>
      <article>
        <header className="article-header wrap">
          <Link href="/news" className="text-link">
            <ArrowLeft size={16} />
            All field notes
          </Link>
          <span className="eyebrow orange">{a.category} / Field perspective</span>
          <h1>{a.title}</h1>
          <p className="lead">{a.excerpt}</p>
        </header>
        <div className="wrap">
          <div className="article-image">
            <Image
              src={`/images/${a.image}.jpg`}
              fill
              priority
              alt="Industrial project planning and field work"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="article-body">
          {a.sections.map(([title, text]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
          <div className="article-signoff">
            <span className="eyebrow orange">Global Industries</span>
            <p>Construction. Craft. Accountability.</p>
          </div>
        </div>
      </article>
      <ProjectCTA />
    </>
  );
}
