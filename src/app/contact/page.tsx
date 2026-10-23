import { ArrowDownRight } from "lucide-react";
import { services } from "@/lib/content";
import InquiryForm from "@/components/InquiryForm";
import { TextEffect } from "@/components/TextEffect";
import { site } from "@/lib/site";
export const metadata = {
  title: "Contact",
  description:
    "Start a project conversation with Global Industries. Share your scope, facility requirements, and target timing.",
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ inquiry?: string; service?: string }>;
}) {
  const q = await searchParams;
  return (
    <section className="section contact-section">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <span className="eyebrow orange">Let’s talk</span>
          <h1>
            <TextEffect>What are</TextEffect>
            <br />
            <TextEffect delay={0.2}>you building</TextEffect>
            <br />
            <em>
              <TextEffect delay={0.4}>next?</TextEffect>
            </em>
          </h1>
          <p className="lead">
            A new facility. An upgrade. A better plan for the next shutdown.
            Start with what you know, and we’ll take the conversation from
            there.
          </p>
          <ArrowDownRight size={52} strokeWidth={1} />
          <div className="contact-points">
            <h3>A useful starting point</h3>
            <p>
              Tell us where the work is, what needs to happen, and the timing
              you have in mind. If your scope is still taking shape, that’s a
              good time to start.
            </p>
            <a className="text-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
        <InquiryForm
          key={`${q.inquiry}-${q.service}`}
          initialCareer={q.inquiry === "careers"}
          initialService={
            services.some((s) => s.title === q.service)
              ? q.service
              : "Not sure yet"
          }
        />
      </div>
    </section>
  );
}
