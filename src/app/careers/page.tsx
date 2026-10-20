'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Shield,
  Heart,
  TrendingUp,
  Award,
  GraduationCap,
  CheckCircle2,
  ArrowUpRight,
  Send,
  X,
  FileText,
  Users,
  HardHat,
  Sparkles,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { IMAGES } from '@/lib/images';

interface JobPosition {
  id: string;
  title: string;
  department: 'Field Management' | 'Mechanical & Piping' | 'Electrical & Systems' | 'HSE & Safety' | 'Preconstruction';
  location: string;
  type: string;
  payRange: string;
  experience: string;
  description: string;
  requirements: string[];
}

const jobsData: JobPosition[] = [
  {
    id: 'sr-construction-manager',
    title: 'Senior Construction Manager – Light Industrial',
    department: 'Field Management',
    location: 'Houston, TX (On-Site)',
    type: 'Full-Time',
    payRange: '$135,000 - $165,000 / yr + Per Diem & Bonus',
    experience: '8+ Years',
    description:
      'Lead ground-up light industrial builds, automated distribution hubs, and advanced manufacturing expansions. Oversee multiple trade superintendents, schedule adherence, and client communications.',
    requirements: [
      'B.S. in Construction Management, Civil Engineering, or equivalent experience',
      'Demonstrated track record delivering $20M+ light industrial projects',
      'OSHA 30 Certification required; Procore / Primavera P6 proficiency',
    ],
  },
  {
    id: 'industrial-mechanical-foreman',
    title: 'Industrial Mechanical & Piping Foreman',
    department: 'Mechanical & Piping',
    location: 'Atlanta, GA (Regional Travel)',
    type: 'Full-Time',
    payRange: '$42 - $48 / hr + Overtime & Truck Allowance',
    experience: '6+ Years',
    description:
      'Direct on-site crews executing process piping, pump skids, boiler connections, and thermal equipment retrofits. Champion daily toolbox talks and zero-incident execution.',
    requirements: [
      'Journeyman Pipefitter certification or NCCER Gold Seal',
      'Extensive experience reading isometric drawings and P&IDs',
      'Strong safety leadership and crew coordination capabilities',
    ],
  },
  {
    id: 'lead-project-engineer',
    title: 'Lead Project Engineer / Estimator',
    department: 'Preconstruction',
    location: 'Houston, TX (Hybrid)',
    type: 'Full-Time',
    payRange: '$95,000 - $120,000 / yr',
    experience: '4+ Years',
    description:
      'Manage RFIs, submittals, value engineering studies, and pre-construction quantity takeoffs using BIM and digital cost modeling tools.',
    requirements: [
      'Degree in Engineering or Construction Management',
      'Proficiency in Bluebeam Revu, Trimble, or HeavyBid',
      'Strong subcontractor evaluation and scoping ability',
    ],
  },
  {
    id: 'hse-coordinator-field',
    title: 'Industrial HSE Safety Specialist',
    department: 'HSE & Safety',
    location: 'Charlotte, NC (Field Staging)',
    type: 'Full-Time',
    payRange: '$85,000 - $105,000 / yr',
    experience: '3+ Years',
    description:
      'Implement company-wide Target Zero policies, conduct daily site audits, coordinate hot-work and confined-space permitting, and deliver safety orientations.',
    requirements: [
      'CHST, ASP, or CSP credentials preferred',
      'Deep knowledge of OSHA 1926 and 1910 standards',
      'Clear, authoritative, and empowering communication style',
    ],
  },
  {
    id: 'journeyman-instrumentation-tech',
    title: 'Industrial Electrical & Instrumentation Technician',
    department: 'Electrical & Systems',
    location: 'Houston, TX / Southeast Deployments',
    type: 'Full-Time',
    payRange: '$38 - $46 / hr + Per Diem',
    experience: '5+ Years',
    description:
      'Install and commission 480V motor control centers, VFDs, PLC cabinets, and instrument calibration loops in light manufacturing facilities.',
    requirements: [
      'State Journeyman Electrician License or NCCER E&I',
      'Familiarity with NFPA 70E arc flash standards',
      'Ability to troubleshoot programmable logic systems in the field',
    ],
  },
  {
    id: 'scaffold-superintendent',
    title: 'NextGen Scaffolding & Rigging Superintendent',
    department: 'Field Management',
    location: 'Multi-Site Travel (Gulf Coast)',
    type: 'Full-Time',
    payRange: '$90,000 - $115,000 / yr + Per Diem',
    experience: '7+ Years',
    description:
      'Supervise the engineering, rapid erection, inspection, and dismantle of modular multi-craft scaffolding across scheduled facility outages.',
    requirements: [
      'Competent Person Scaffold Inspector certification',
      'Advanced rigging and crane hand-signal certifications',
      'Proven leadership directing teams of 20+ craft workers',
    ],
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Top-Tier Compensation',
    description: 'Weekly direct deposit, competitive craft wages, lucrative overtime, per diems, and annual merit performance bonuses.',
  },
  {
    icon: Heart,
    title: 'Comprehensive Health & Wellness',
    description: 'Gold-tier Medical, Dental, and Vision coverage for you and your dependents starting day one.',
  },
  {
    icon: TrendingUp,
    title: '401(k) Retirement with 6% Match',
    description: '100% immediate vesting on company matching funds to secure your financial future.',
  },
  {
    icon: GraduationCap,
    title: 'Tuition & NCCER Certification',
    description: '100% company-sponsored trade upgrades, welding certifications, and management leadership credentials.',
  },
  {
    icon: Shield,
    title: 'Zero Compromise Safety',
    description: 'Top-of-the-line personal protective equipment (PPE), modern tooling, and stop-work empowerment for all.',
  },
  {
    icon: Award,
    title: 'Rapid Career Advancement',
    description: 'Over 70% of our superintendents and project managers were promoted from internal craft positions.',
  },
];

const hiringSteps = [
  {
    step: '01',
    title: 'Quick Application',
    description: 'Submit your resume or trade background in under 2 minutes through our mobile-friendly system.',
  },
  {
    step: '02',
    title: 'Craft & Safety Assessment',
    description: 'A 20-minute phone screen with a field recruiter to review certifications, experience, and availability.',
  },
  {
    step: '03',
    title: 'Superintendent Interview',
    description: 'Meet the project manager or operations director to discuss jobsite challenges and project specifications.',
  },
  {
    step: '04',
    title: 'Badging & Mobilization',
    description: 'Rapid on-boarding, drug & background clearing, safety orientation, and immediate assignment dispatch.',
  },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [applyingJob, setApplyingJob] = useState<JobPosition | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceYears: '3-5 years',
    certifications: '',
    notes: '',
  });

  const departments = [
    'All',
    'Field Management',
    'Mechanical & Piping',
    'Electrical & Systems',
    'HSE & Safety',
    'Preconstruction',
  ];

  const filteredJobs = jobsData.filter((job) =>
    selectedDept === 'All' ? true : job.department === selectedDept
  );

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setApplyingJob(null);
      setFormData({
        name: '',
        email: '',
        phone: '',
        experienceYears: '3-5 years',
        certifications: '',
        notes: '',
      });
    }, 2500);
  };

  return (
    <>
      <PageHero
        title="Careers at BVG"
        subtitle="We recruit the elite in the industry. Join an organization where your safety, craft mastery, and career growth come first."
        breadcrumbs={[{ label: 'Careers', href: '/careers' }]}
        backgroundImage={IMAGES.heroes.careers}
      />

      {/* Intro Hook Section with Real Photography */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-4">
                  <div className="w-8 h-px bg-gold" />
                  Elite Industrial Craftsmanship
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-tight">
                  Where Real Builders <span className="text-gold">Build Real Futures</span>
                </h2>
                <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
                  At Business Venture Group Inc., we know that our reputation is built on the
                  hard work, discipline, and pride of the men and women on our jobsites. That&apos;s
                  why we don&apos;t treat employees like headcount—we treat our craft personnel as long-term partners.
                </p>
                <p className="text-muted text-base leading-relaxed mb-8">
                  Whether you are a seasoned construction manager, an ASME-certified pipefitter, or an ambitious
                  apprentice looking to earn while you learn, BVG provides the steady multi-year project pipeline,
                  modern equipment, and safety infrastructure you need to excel.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-3xl font-extrabold text-navy">1,200+</div>
                    <div className="text-xs text-muted font-bold uppercase mt-1">Full-Time Personnel</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-gold">94%</div>
                    <div className="text-xs text-muted font-bold uppercase mt-1">Annual Retention</div>
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-navy">0.54</div>
                    <div className="text-xs text-muted font-bold uppercase mt-1">Industry EMR Rating</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5">
              <FadeIn delay={0.2} direction="left">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-navy min-h-[420px] p-8 sm:p-10 flex flex-col justify-between text-white border border-gray-200">
                  <Image
                    src={IMAGES.about.fieldCrew}
                    alt="BVG industrial field crew"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/80 to-navy-dark/60" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gold/90 text-navy flex items-center justify-center mb-6 font-bold">
                      <HardHat className="w-6 h-6 text-navy" />
                    </div>
                    <span className="text-xs font-bold text-gold-light uppercase tracking-widest block mb-2">
                      Bartlett-Style Recruiting
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Fast-Track Mobile Application</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">
                      Skip the 10-page browser forms. Apply directly from your mobile device in under two minutes.
                      Our recruiting desk contacts qualified applicants within 24 business hours.
                    </p>
                  </div>

                  <div className="relative z-10">
                    <a
                      href="#open-positions"
                      className="inline-flex items-center justify-center w-full gap-2 bg-gold hover:bg-gold-light text-navy font-extrabold py-3.5 rounded-xl transition-all shadow-lg shadow-gold/25 text-sm"
                    >
                      Browse Open Positions
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-gold" />
                Total Rewards
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-4">
                Benefits Built for You & Your Family
              </h2>
              <p className="text-muted text-base sm:text-lg">
                We believe in taking care of those who build America. Our benefits package is recognized
                as one of the most generous in the industrial contracting sector.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <StaggerItem key={b.title}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 card-hover shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">{b.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{b.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Craft Academy Spotlight with Real Photo */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-navy rounded-3xl overflow-hidden p-8 sm:p-14 text-white relative shadow-2xl">
            <div className="absolute right-0 top-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="lg:col-span-6 relative z-10">
              <span className="text-xs font-bold text-gold uppercase tracking-widest mb-3 block">
                Workforce Development
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
                BVG Industrial Trades Academy
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-6 font-light">
                Our accredited craft apprenticeship program provides 100% paid tuition, classroom
                rigging and welding labs, NCCER certifications, and full hourly wages from day one.
              </p>
              <div className="space-y-3 mb-8">
                {['Full Hourly Wages During Training', 'ASME & NCCER Nationally Recognized Badging', 'Dedicated 1-on-1 Senior Superintendent Mentorship'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all"
              >
                Apply for Apprenticeship Track
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-6 relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={IMAGES.about.qualityCheck}
                alt="Apprentice and engineer inspecting precision equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Journey */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-gold" />
                How We Hire
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-4">
                Simple, Respectful & Rapid Process
              </h2>
              <p className="text-muted text-base sm:text-lg">
                We know your time is valuable. Our four-step onboarding gets you on the job and earning without red tape.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringSteps.map((step, idx) => (
              <FadeIn key={step.step} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 relative border border-gray-200 h-full flex flex-col justify-between shadow-sm card-hover">
                  <div>
                    <span className="text-4xl font-black text-gold mb-3 block">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-3">
                <div className="w-8 h-px bg-gold" />
                Immediate Openings
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
                Explore Available Industrial Roles
              </h2>
            </div>

            {/* Department Filter buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    selectedDept === dept
                      ? 'bg-navy text-white shadow-md'
                      : 'bg-light text-muted hover:text-navy border border-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <FadeIn key={job.id} direction="up">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 card-hover shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">
                      {job.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-dark/70 font-medium">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gold" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4 text-gold" />
                        {job.payRange}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-gold" />
                        Min. {job.experience} Experience
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex sm:items-center lg:flex-col gap-3">
                    <button
                      onClick={() => setApplyingJob(job)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md shadow-gold/20"
                    >
                      Quick Apply
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {applyingJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => !formSubmitted && setApplyingJob(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-gray-200 relative"
            >
              <button
                onClick={() => setApplyingJob(null)}
                className="absolute right-5 top-5 p-2 rounded-full text-muted hover:text-dark hover:bg-light transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Application Received!</h3>
                  <p className="text-muted text-sm max-w-md mx-auto">
                    Thank you for applying for <span className="font-semibold text-dark">{applyingJob.title}</span>. Our recruitment coordinator will review your information and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">
                      Direct Application
                    </span>
                    <h3 className="text-2xl font-bold text-navy mb-1">{applyingJob.title}</h3>
                    <p className="text-muted text-xs">
                      {applyingJob.location} • {applyingJob.department}
                    </p>
                  </div>

                  <form onSubmit={handleSubmitApplication} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-light border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 bg-light border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-2.5 bg-light border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">
                          Years in Industrial Work
                        </label>
                        <select
                          value={formData.experienceYears}
                          onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                          className="w-full px-4 py-2.5 bg-light border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        >
                          <option>1-2 years</option>
                          <option>3-5 years</option>
                          <option>6-10 years</option>
                          <option>10+ years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">
                          Certifications (OSHA/NCCER)
                        </label>
                        <input
                          type="text"
                          value={formData.certifications}
                          onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                          placeholder="e.g. OSHA 30, TWIC, NCCER"
                          className="w-full px-4 py-2.5 bg-light border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">
                        Brief Summary or Work History
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Highlight your most relevant industrial construction projects..."
                        className="w-full px-4 py-2 bg-light border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold py-3.5 rounded-xl text-sm transition-all shadow-md shadow-gold/25"
                      >
                        Submit Fast-Track Application
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
