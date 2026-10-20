'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
  CheckCircle2,
  ShieldAlert,
  ArrowUpRight,
  HelpCircle,
  ChevronDown,
  Building,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

interface OfficeLocation {
  city: string;
  region: string;
  address: string;
  suite: string;
  phone: string;
  email: string;
  badge: string;
}

const offices: OfficeLocation[] = [
  {
    city: 'Houston, TX',
    region: 'Corporate Headquarters & Gulf Coast Depot',
    address: '1200 Industrial Parkway',
    suite: 'Suite 300, Houston, TX 77001',
    phone: '(800) 555-1234 / (713) 555-0199',
    email: 'houston@bvgroupinc.com',
    badge: 'Headquarters & Fab Yard',
  },
  {
    city: 'Atlanta, GA',
    region: 'Southeast Regional Operations',
    address: '4200 Logistics Boulevard',
    suite: 'Building B, Atlanta, GA 30336',
    phone: '(404) 555-0144',
    email: 'atlanta@bvgroupinc.com',
    badge: 'Regional Operations Hub',
  },
  {
    city: 'Charlotte, NC',
    region: 'East Coast Operations & Battery Corridor Depot',
    address: '8800 Commerce Park Drive',
    suite: 'Suite 150, Charlotte, NC 28273',
    phone: '(704) 555-0182',
    email: 'charlotte@bvgroupinc.com',
    badge: 'Regional Operations Hub',
  },
];

const faqs = [
  {
    question: 'What is your typical project bonding capacity?',
    answer:
      'Business Venture Group Inc. carries single-project bonding capacity exceeding $100M, with aggregate bonding lines surpassing $350M backed by top-rated surety partners.',
  },
  {
    question: 'How quickly can BVG mobilize for an emergency plant turnaround or outage?',
    answer:
      'Our emergency response teams maintain a 24/7 dedicated dispatch hotline. For Gulf Coast and Southeast corridors, craft supervisors and specialty tooling can be mobilized on-site within 6 to 12 hours.',
  },
  {
    question: 'Do you offer combined multi-craft scopes under one contract?',
    answer:
      'Yes. Our umbrella delivery model allows clients to execute a single master agreement covering scaffolding, insulation, piping, structural steel, and mechanical installation with one responsible project executive.',
  },
  {
    question: 'Can prospective clients review your safety statistics and OSHA logs?',
    answer:
      'Absolutely. We maintain 100% transparency. Our 3-year OSHA 300 logs, EMR certification letters (current EMR 0.54), and ISNetworld / Avetta / Browz compliance profiles are available upon request.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'Project Estimation / RFP',
    division: 'All BVG Unified Services',
    budget: '$1M - $5M',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: 'Project Estimation / RFP',
        division: 'All BVG Unified Services',
        budget: '$1M - $5M',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Connect with our national leadership, request project estimates, or mobilize our multi-craft teams for your industrial facility."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                    <div className="w-8 h-px bg-gold" />
                    Direct Engagement
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                    Request an Estimate or Scoping Call
                  </h2>
                  <p className="text-muted text-base leading-relaxed">
                    Fill out the form below and an executive project director will review your scope
                    and follow up within one business day.
                  </p>
                </div>

                <div className="bg-light p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm relative">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-2">Inquiry Transmitted</h3>
                      <p className="text-muted text-sm max-w-md mx-auto mb-6">
                        Thank you for reaching out to Business Venture Group Inc. Your project brief has been assigned to our regional operations director.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="px-6 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="Sarah"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Jenkins"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                            Business Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="s.jenkins@enterprise.com"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(713) 555-0100"
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                            Company / Organization *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Apex Logistics Inc."
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                            Inquiry Type
                          </label>
                          <select
                            value={formData.inquiryType}
                            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                          >
                            <option>Project Estimation / RFP</option>
                            <option>Emergency Turnaround / Outage Support</option>
                            <option>Subcontractor / Vendor Prequalification</option>
                            <option>Corporate Partnership</option>
                            <option>General Inquiries</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                            Target Operating Division
                          </label>
                          <select
                            value={formData.division}
                            onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                          >
                            <option>All BVG Unified Services (Turnkey)</option>
                            <option>BVG Industrial Services (Soft Crafts & Maint)</option>
                            <option>BVG Mechanical Solutions (Piping & Units)</option>
                            <option>BVG Fabrication & Manufacturing (Steel & Skids)</option>
                            <option>BVG Infrastructure & Civil (Site & Concrete)</option>
                            <option>BVG Refractory & High-Heat Linings</option>
                            <option>BVG NextGen Modular Scaffolding</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                            Estimated Scope Budget
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                          >
                            <option>&lt; $500,000</option>
                            <option>$500,000 - $1,000,000</option>
                            <option>$1,000,000 - $5,000,000</option>
                            <option>$5,000,000 - $25,000,000</option>
                            <option>$25,000,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1.5">
                          Project Scope & Timeline Details *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please provide details regarding your facility location, target start date, square footage, or specific craft requirements..."
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-xl text-base transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Transmitting Project Brief...</span>
                        ) : (
                          <>
                            Submit Project Inquiry
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Contact Details & Direct Hubs */}
            <div className="lg:col-span-5 space-y-8">
              <FadeIn delay={0.2} direction="left">
                {/* 24/7 Outage Response Card */}
                <div className="bg-gradient-to-br from-navy via-navy-light to-steel rounded-3xl p-8 text-white relative overflow-hidden shadow-xl mb-8">
                  <div className="absolute right-0 bottom-0 w-48 h-48 bg-gold/15 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold-light text-xs font-bold uppercase tracking-wider mb-4">
                      <ShieldAlert className="w-4 h-4 text-gold-light" />
                      Critical Outage Hotline
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">24/7 Turnaround Emergency Dispatch</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">
                      For unplanned unit outages, emergency refractory failures, or rapid-response industrial rigging.
                    </p>
                    <a
                      href="tel:+18005559999"
                      className="inline-flex items-center gap-2 text-2xl font-extrabold text-gold-light hover:underline"
                    >
                      (800) 555-9999
                    </a>
                    <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">
                      Priority Response Desk
                    </div>
                  </div>
                </div>

                {/* Headquarters Info Box */}
                <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                  <h3 className="text-xl font-bold text-navy pb-4 border-b border-gray-100 flex items-center gap-2">
                    <Building className="w-5 h-5 text-gold" />
                    Corporate Headquarters
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <div className="text-xs text-muted font-bold uppercase tracking-wider">Executive Address</div>
                        <div className="text-sm font-semibold text-dark mt-0.5">
                          1200 Industrial Parkway, Suite 300<br />Houston, TX 77001
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <div className="text-xs text-muted font-bold uppercase tracking-wider">Toll-Free & Direct</div>
                        <div className="text-sm font-semibold text-dark mt-0.5">
                          <a href="tel:+18005551234" className="hover:text-gold transition-colors block">
                            (800) 555-1234 (Toll-Free)
                          </a>
                          <a href="tel:+17135550199" className="hover:text-gold transition-colors block">
                            (713) 555-0199 (Direct Houston)
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Mail className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <div className="text-xs text-muted font-bold uppercase tracking-wider">General Enquiries</div>
                        <div className="text-sm font-semibold text-dark mt-0.5">
                          <a href="mailto:info@bvgroupinc.com" className="hover:text-gold transition-colors">
                            info@bvgroupinc.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <div className="text-xs text-muted font-bold uppercase tracking-wider">Operational Hours</div>
                        <div className="text-sm font-semibold text-dark mt-0.5">
                          Monday – Friday: 7:00 AM – 5:30 PM CST<br />
                          Field Operations & Dispatch: 24/7/365
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Office Network */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-gold" />
                Strategic Footprint
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Regional Operating Hubs & Depots
              </h2>
              <p className="text-muted text-lg">
                Strategically positioned along primary industrial and logistics arteries to deploy tooling, craft crews, and project managers swiftly.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <StaggerItem key={office.city}>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 card-hover shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider inline-block mb-4">
                      {office.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-navy mb-1">{office.city}</h3>
                    <p className="text-xs text-muted mb-4 font-medium">{office.region}</p>

                    <div className="space-y-3 pt-4 border-t border-gray-100 text-sm">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                        <span className="text-dark/80">
                          {office.address}<br />{office.suite}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-gold shrink-0" />
                        <span className="text-dark/80 font-medium">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-gold shrink-0" />
                        <span className="text-dark/80">{office.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <span className="text-xs text-muted flex items-center gap-1 font-semibold">
                      Full Dispatch Facility • Craft Certification Center
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                <HelpCircle className="w-4 h-4 text-gold" />
                Clear Answers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Frequently Asked Owner Questions
              </h2>
              <p className="text-muted text-base">
                Have questions before issuing an RFP? Here is what project directors ask us most often.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <FadeIn key={idx} delay={idx * 0.05}>
                  <div className="border border-gray-200 rounded-2xl overflow-hidden transition-colors">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 bg-white hover:bg-light transition-colors"
                    >
                      <span className="font-bold text-navy text-base sm:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-muted text-sm sm:text-base leading-relaxed bg-white border-t border-gray-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
