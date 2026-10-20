import Image from "next/image";
import Link from "next/link";
export default function PageHero({
  eyebrow,
  title,
  description,
  image = "construction",
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <div className="page-hero-grid">
          <div>
            <span className="eyebrow orange">{eyebrow}</span>
            <h1>{title}</h1>
          </div>
          <p>{description}</p>
        </div>
        <div className="page-hero-image">
          <Image
            src={`/images/${image}.jpg`}
            alt={
              image === "welding"
                ? "Metalwork and fabrication"
                : image === "plant"
                  ? "Industrial piping and production equipment"
                  : "Construction and industrial work"
            }
            fill
            priority
            sizes="100vw"
          />
          <span className="image-corner" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
