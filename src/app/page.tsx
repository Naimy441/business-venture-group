import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, ArrowRight, Plus } from "lucide-react";
import { services, industries, articles } from "@/lib/content";
import { ProjectCTA } from "@/components/Footer";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image
          src="/images/refinery.jpg"
          alt="Steel towers, process piping, and platforms at an industrial facility"
          fill
          priority
          sizes="100vw"
          className="hero-photo"
        />
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <span className="eyebrow hero-eyebrow">
            <span />
            Industrial construction & services
          </span>
          <h1>
            Industrial work.
            <br />
            Built on <em>trust.</em>
          </h1>
          <div className="hero-bottom">
            <div>
              <p>
                The right people. A clear plan. A commitment to the details.
                <br className="desktop-break" /> From new construction to the
                work that keeps you running.
              </p>
              <Link className="button button-orange" href="/services">
                Explore our capabilities <ArrowUpRight size={18} />
              </Link>
            </div>
            <a
              href="#the-group"
              className="hero-scroll"
              aria-label="Discover Business Venture Group"
            >
              <ArrowDown size={22} />
              <span>Built for what’s next</span>
            </a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          BVG / 01
        </div>
      </section>
      <div className="discipline-strip">
        <div className="wrap">
          <span>One group. Connected expertise.</span>
          <span>Construction & delivery</span>
          <span>Mechanical & fabrication</span>
          <span>Maintenance & support</span>
        </div>
      </div>
      <section id="the-group" className="section intro-section">
        <div className="wrap">
          <div className="intro-copy">
          <div className="intro-heading">
            <span className="eyebrow orange">01 / The group</span>
            <h2>
              More than a contractor.
              <br />A team that sees
              <br />
              <span className="muted">the whole job.</span>
            </h2>
          </div>
          <div className="intro-body">
            <div>
              <p className="lead">
                Industrial projects don’t happen in isolation. Neither should
                the people building them.
              </p>
              <p>
                Business Venture Group brings construction, mechanical work,
                fabrication, and facility support into one coordinated
                conversation. We connect the early decisions with the realities
                of the field, so each trade understands the work ahead.
              </p>
              <p>
                It’s a practical approach: define the scope, plan the sequence,
                and keep responsibility clear through handover.
              </p>
              <Link href="/leadership" className="text-link">
                How we work <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          </div>
          <div className="intro-images">
            <figure className="image-main">
              <Image
                src="/images/construction.jpg"
                alt="Construction crew reviewing work at an active building site"
                fill
                sizes="(max-width:700px) 100vw, 65vw"
              />
              <figcaption>Built together. From the ground up.</figcaption>
            </figure>
            <figure className="image-detail">
              <Image
                src="/images/welding.jpg"
                alt="Craftsperson grinding steel with sparks flying"
                fill
                sizes="(max-width:700px) 50vw, 30vw"
              />
              <figcaption>The details make the difference.</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="section capabilities-section">
        <div className="wrap">
          <div className="section-top">
            <div>
              <span className="eyebrow">02 / Our capabilities</span>
              <h2>
                The work connects.
                <br />
                <span>So do we.</span>
              </h2>
            </div>
            <div>
              <p>
                From the first estimate to the final inspection, each scope is
                part of a bigger picture.
              </p>
              <Link href="/services" className="text-link light">
                All capabilities <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="capability-list">
            {services.slice(0, 4).map((s, i) => (
              <Link
                href={`/services#${s.id}`}
                className="capability-row"
                key={s.id}
              >
                <span className="row-number">0{i + 1}</span>
                <h3>{s.title}</h3>
                <span className="row-description">{s.short}</span>
                <span className="row-arrow">
                  <ArrowUpRight size={24} />
                </span>
              </Link>
            ))}
          </div>
          <div className="capability-foot">
            <span>Also in our scope</span>
            <Link href="/services#facility-improvements">
              Facility improvements <Plus size={15} />
            </Link>
            <Link href="/services#safety-quality">
              Safety & quality coordination <Plus size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section industries-section">
        <div className="wrap">
          <div className="section-top">
            <div>
              <span className="eyebrow orange">03 / Where we work</span>
              <h2>
                Built around
                <br />
                your operation.
              </h2>
            </div>
            <div>
              <p>
                Different facilities. Different demands. The same attention to
                how the work gets done.
              </p>
              <Link href="/industries" className="text-link">
                Explore our industries <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="industry-grid">
            {industries.map((x, i) => (
              <Link
                className="industry-card"
                href={`/industries#${x.id}`}
                key={x.id}
              >
                <div className="industry-photo">
                  <Image
                    src={`/images/${x.image}.jpg`}
                    fill
                    alt={`${x.title} facility`}
                    sizes="(max-width:700px) 100vw, 33vw"
                  />
                  <span className="industry-number">0{i + 1}</span>
                </div>
                <div className="industry-title">
                  <h3>{x.title}</h3>
                  <ArrowUpRight size={23} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="safety-section">
        <div className="safety-image">
          <Image
            src="/images/craft.jpg"
            fill
            alt="Crew wearing hard hats and high visibility clothing on a construction site"
            sizes="(max-width:700px) 100vw, 50vw"
          />
        </div>
        <div className="safety-content">
          <span className="eyebrow">The way we work</span>
          <h2>
            Take care of
            <br />
            the people.
            <br />
            Take pride in
            <br />
            the work.
          </h2>
          <p>
            Safety and quality belong in every decision—how a job is planned,
            how trades work together, and how the finished work is checked.
          </p>
          <Link href="/leadership#our-standards" className="text-link">
            Our commitments <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="section notes-section">
        <div className="wrap">
          <div className="section-top">
            <div>
              <span className="eyebrow orange">04 / Field notes</span>
              <h2>A practical perspective.</h2>
            </div>
            <Link className="text-link" href="/news">
              All field notes <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="notes-grid">
            {articles.slice(0, 2).map((a) => (
              <Link href={`/news/${a.slug}`} className="note-card" key={a.slug}>
                <div>
                  <span className="eyebrow">{a.category}</span>
                  <h3>{a.title}</h3>
                  <span className="text-link">
                    Read the note <ArrowRight size={17} />
                  </span>
                </div>
                <div className="note-image">
                  <Image
                    src={`/images/${a.image}.jpg`}
                    alt=""
                    fill
                    sizes="(max-width:700px) 35vw, 20vw"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="careers-band">
        <div className="wrap">
          <span className="eyebrow">Build with us</span>
          <h2>Good work takes good people.</h2>
          <Link href="/careers" className="button button-outline-light">
            Explore careers <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
