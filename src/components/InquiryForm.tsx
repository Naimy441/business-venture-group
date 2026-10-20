"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Download, ArrowLeft } from "lucide-react";
import { services } from "@/lib/content";
export default function InquiryForm({
  initialCareer = false,
  initialService = "Not sure yet",
}: {
  initialCareer?: boolean;
  initialService?: string;
}) {
  const [career, setCareer] = useState(initialCareer);
  const [review, setReview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: initialService,
    location: "",
    message: "",
  });
  const reviewRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (review && reviewRef.current) {
      reviewRef.current.focus({ preventScroll: true });
      reviewRef.current.scrollIntoView({ block: "start", behavior: "instant" });
    }
  }, [review]);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const brief = `${career ? "Career introduction" : "Project inquiry"} — Business Venture Group\n\nName: ${form.name}\nEmail: ${form.email}\n${career ? "Discipline" : "Company"}: ${form.company}\nPhone: ${form.phone || "Not provided"}\nLocation: ${form.location || "To be discussed"}\n${career ? "Interest" : "Scope"}: ${form.service}\n\n${form.message}`;
  const update = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm({ ...form, [e.target.name]: e.target.value });
  function submit(e: FormEvent) {
    e.preventDefault();
    setReview(true);
    setCopied(false);
    setSaved(false);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([brief], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = career
      ? "BVG-career-introduction.txt"
      : "BVG-project-inquiry.txt";
    a.click();
    URL.revokeObjectURL(url);
    setSaved(true);
  }
  return (
    <div className="inquiry-panel">
      <div className="form-tabs" aria-label="Inquiry type">
        <button
          aria-pressed={!career}
          onClick={() => {
            setCareer(false);
            setReview(false);
          }}
        >
          Project inquiry
        </button>
        <button
          aria-pressed={career}
          onClick={() => {
            setCareer(true);
            setReview(false);
          }}
        >
          Career introduction
        </button>
      </div>
      {review ? (
        <div className="inquiry-review" ref={reviewRef} tabIndex={-1}>
          <span className="eyebrow orange">Ready for the next step</span>
          <h2>{career ? "Your introduction." : "Your project brief."}</h2>
          <p>
            {email
              ? "Review your details, then open your email app to send your inquiry."
              : "Review your details, then save a copy to share with your Business Venture Group contact."}
          </p>
          <pre>{brief}</pre>
          <div className="review-actions">
            {email && (
              <a
                className="button button-dark"
                href={`mailto:${email}?subject=${encodeURIComponent(career ? "Career introduction" : "Project inquiry — " + form.company)}&body=${encodeURIComponent(brief)}`}
              >
                Open email to send <ArrowUpRight size={16} />
              </a>
            )}
            <button
              className={`button ${email ? "button-outline" : "button-dark"}`}
              onClick={download}
            >
              {saved ? "Saved — download again" : "Download brief"}
              <Download size={16} />
            </button>
            <button className="button button-outline" onClick={copy}>
              {copied ? "Copied" : "Copy details"}
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <p className="form-note" role="status">
            {saved
              ? "Your brief has been downloaded. "
              : copied
                ? "Your details have been copied. "
                : ""}
            This page has not sent your information.
          </p>
          <button onClick={() => setReview(false)} className="text-link">
            <ArrowLeft size={16} />
            Edit details
          </button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <span className="eyebrow orange">
            {career ? "Your next chapter" : "Tell us about the work"}
          </span>
          <h2>
            {career ? "Make an introduction." : "Let’s start with the scope."}
          </h2>
          <p>
            {career
              ? "Share your background and the kind of work you’re interested in."
              : "A few useful details help make the first conversation a productive one."}
          </p>
          <div className="form-grid">
            <label htmlFor="name">
              Full name <span>*</span>
              <input
                id="name"
                name="name"
                required
                maxLength={120}
                autoComplete="name"
                value={form.name}
                onChange={update}
              />
            </label>
            <label htmlFor="email">
              Email address <span>*</span>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                value={form.email}
                onChange={update}
              />
            </label>
            <label htmlFor="company">
              {career ? "Trade or discipline" : "Company"} <span>*</span>
              <input
                id="company"
                name="company"
                required
                maxLength={160}
                autoComplete={career ? "off" : "organization"}
                value={form.company}
                onChange={update}
              />
            </label>
            <label htmlFor="phone">
              Phone <span className="optional">optional</span>
              <input
                id="phone"
                name="phone"
                type="tel"
                maxLength={50}
                autoComplete="tel"
                value={form.phone}
                onChange={update}
              />
            </label>
            <label htmlFor="service">
              {career ? "Area of interest" : "Type of work"}
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={update}
              >
                <option>Not sure yet</option>
                {services.map((s) => (
                  <option key={s.id}>{s.title}</option>
                ))}
                <option>Other</option>
              </select>
            </label>
            <label htmlFor="location">
              {career ? "Your location" : "Project location"}
              <input
                id="location"
                name="location"
                maxLength={200}
                value={form.location}
                onChange={update}
              />
            </label>
            <label className="full-width" htmlFor="message">
              {career
                ? "Your experience & availability"
                : "Scope, timing & anything we should know"}{" "}
              <span>*</span>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={5000}
                value={form.message}
                onChange={update}
                placeholder={
                  career
                    ? "Your background, relevant training, and the kind of work you’re looking for."
                    : "What are you planning? Include the facility type, location, and target timing if known."
                }
              />
            </label>
          </div>
          <button className="button button-dark" type="submit">
            Review {career ? "introduction" : "project brief"}{" "}
            <ArrowUpRight size={17} />
          </button>
          <p className="form-note">
            {email
              ? "You’ll review your inquiry before sending it through your email app."
              : "Prepare and download your brief to share with your BVG contact. This form does not send or store your information."}{" "}
            <a href="/privacy">Privacy information</a>
          </p>
        </form>
      )}
    </div>
  );
}
