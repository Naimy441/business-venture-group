import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TextEffect } from "@/components/TextEffect";
export default function NotFound() {
  return (
    <section className="section not-found wrap">
      <span className="eyebrow orange">404 / Page not found</span>
      <h1>
        <TextEffect>A different</TextEffect>
        <br />
        <TextEffect delay={0.2}>direction.</TextEffect>
      </h1>
      <p>
        The page you’re looking for isn’t here. Let’s get you back to the work.
      </p>
      <Link href="/" className="button button-dark">
        Back to home <ArrowUpRight size={17} />
      </Link>
    </section>
  );
}
