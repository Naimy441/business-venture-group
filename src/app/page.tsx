'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowUpRight,
  Shield,
  HardHat,
  Building2,
  Users,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Wrench,
  Factory,
  Hammer,
  Clock,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { IMAGES } from '@/lib/images';

const stats = [
  { number: '500+', label: 'Industrial Projects Built' },
  { number: '25+', label: 'Years Experience' },
  { number: '1,200+', label: 'Certified Craft Specialists' },
  { number: '0.54', label: 'Industry-Leading EMR Rating' },
];

const services = [
  {
    icon: Building2,
    title: 'General Contracting',
    image: IMAGES.services.generalContracting,
    description:
      'Turnkey general contracting for light industrial manufacturing plants, automated logistics hubs, and assembly complexes.',
    highlights: ['Lump-Sum & Guaranteed Max Price', 'Comprehensive Subcontractor Management', 'Target Zero Jobsite Safety'],
  },
  {
    icon: HardHat,
    title: 'Design-Build Delivery',
    image: IMAGES.services.designBuild,
    description:
      'Integrated architecture, structural engineering, and construction under a single contract to compress delivery timelines.',
    highlights: ['Single-Point Responsibility', 'Value Engineering from Day One', '3D Laser Scanning & BIM Integration'],
  },
  {
    icon: Wrench,
    title: 'Pre-Construction & Estimating',
    image: IMAGES.services.preConstruction,
    description:
      'Data-driven feasibility studies, conceptual estimating, schedule risk modeling, and long-lead material procurement.',
    highlights: ['Accurate Cost Modeling', 'Constructability Reviews', 'Subcontractor Pre-Qualification'],
  },
  {
    icon: Factory,
    title: 'Industrial Plant Maintenance',
    image: IMAGES.services.industrialMaintenance,
    description:
      'Routine maintenance, soft-crafts, and critical turnaround outages that keep manufacturing assets running at peak capacity.',
    highlights: ['24/7 Emergency Dispatch', 'Multi-Craft Soft Craft Teams', 'Asset Lifecycle Optimization'],
  },
  {
    icon: Hammer,
    title: 'Tenant Improvements & Retrofits',
    image: IMAGES.services.tenantImprovements,
    description:
      'Custom interior build-outs, mezzanine additions, cleanroom enclosures, and automated robotic racking infrastructure.',
    highlights: ['High-Bay Warehouse Build-Outs', 'Cleanroom HVAC Systems', 'Heavy Equipment Pad Re-Enforcement'],
  },
  {
    icon: Shield,
    title: 'Industrial Safety Management',
    image: IMAGES.services.safetyManagement,
    description:
      'Nationally recognized environmental health and safety governance protecting every tradesperson and client facility.',
    highlights: ['OSHA 30 Certified Superintendents', '2.5M Consecutive LTI-Free Hours', 'Proactive Stop-Work Empowerment'],
  },
];

const companies = [
  {
    name: 'BVG Industrial Services',
    division: 'Industrial Soft-Crafts & Turnarounds',
    image: IMAGES.companies.industrialServices,
    description: 'Comprehensive scaffolding, thermal insulation, abrasive blasting, and turnaround maintenance teams.',
    href: '/companies#industrial-services',
  },
  {
    name: 'BVG Mechanical Solutions',
    division: 'Process Piping & Critical Units',
    image: IMAGES.companies.mechanicalSolutions,
    description: 'ASME-certified welding, equipment rigging, turbine overhauls, and process piping systems.',
    href: '/companies#mechanical-solutions',
  },
  {
    name: 'BVG Fabrication & Manufacturing',
    division: 'Custom Structural Steel & Skids',
    image: IMAGES.companies.fabricationManufacturing,
    description: '180,000 sq. ft. fabrication facility delivering robotic plasma cutting and modular skid packages.',
    href: '/companies#fabrication-manufacturing',
  },
  {
    name: 'BVG Infrastructure & Civil',
    division: 'Earthwork & Reinforced Foundations',
    image: IMAGES.companies.infrastructureCivil,
    description: 'Precision mass earthwork, deep foundation pilings, and heavy concrete equipment foundations.',
    href: '/companies#infrastructure-civil',
  },
];

const featuredProjects = [
  {
    title: 'Lone Star Logistics & Assembly Facility',
    location: 'Houston, TX',
    scope: '650,000 sq. ft. Light Industrial Distribution Hub',
    image: IMAGES.services.generalContracting,
    tag: 'Design-Build',
  },
  {
    title: 'Gulf Coast Advanced Materials Expansion',
    location: 'Beaumont, TX',
    scope: 'Process Piping & Structural Mezzanines',
    image: IMAGES.companies.mechanicalSolutions,
    tag: 'Mechanical & Steel',
  },
  {
    title: 'Southeast Battery Logistics Center',
    location: 'Charlotte, NC',
    scope: 'Turnkey Civil Site Prep & Slab Construction',
    image: IMAGES.heroes.companies,
    tag: 'Civil & Foundation',
  },
];

const newsItems = [
  {
    date: 'October 14, 2026',
    category: 'Project Milestone',
    title: 'Business Venture Group Awarded $85M Industrial Logistics & Advanced Assembly Hub',
    image: IMAGES.news[0],
    excerpt: 'Selected as design-build general contractor for a 650,000 sq. ft. advanced facility in the Houston industrial corridor.',
  },
  {
    date: 'September 28, 2026',
    category: 'Safety Benchmark',
    title: 'Safety Milestone: 2.5 Million Work Hours Without a Lost-Time Incident',
    image: IMAGES.news[1],
    excerpt: 'Our corporate Target Zero program celebrates a major milestone across all 14 active national jobsites.',
  },
  {
    date: 'September 12, 2026',
    category: 'Expansion',
    title: 'Strategic Expansion: BVG Opens East Coast Regional Operations Hub in Charlotte, NC',
    image: IMAGES.news[2],
    excerpt: 'New 45,000 sq. ft. regional office and staging depot directly supports booming Southeast battery and clean tech corridors.',
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-navy">
        {/* Full-bleed real construction photography background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src={IMAGES.heroes.homeMain}
            alt="Industrial Construction"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          {/* Heavy cinematic dark industrial overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/40 to-transparent" />
        </motion.div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h50v50H0V0zm1 1h48v48H1V1z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-36 lg:py-44"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy/80 backdrop-blur-md border border-gold/40 text-xs sm:text-sm text-white mb-6 shadow-xl"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <span className="font-semibold text-gold-light tracking-wide uppercase">
                Light Industrial Construction Contractor
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            >
              Building the Future of{' '}
              <span className="text-gradient">Industrial America.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/85 max-w-2xl mb-10 leading-relaxed font-light"
            >
              Business Venture Group Inc. brings together specialized companies to deliver
              turnkey general contracting, design-build, and mechanical solutions with unmatched
              safety and precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light
                           text-navy font-extrabold px-8 py-4 rounded-xl transition-all duration-300
                           hover:shadow-xl hover:shadow-gold/25 text-base"
              >
                Start Your Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/companies"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white
                           text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300
                           hover:bg-white/10 text-base backdrop-blur-sm"
              >
                Explore Our Companies
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Stats Bar with Depth */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/15"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-navy-dark/40 backdrop-blur-md p-4 rounded-xl border border-white/5">
                <div className="text-3xl sm:text-4xl font-black text-gold-light mb-1">
                  {stat.number}
                </div>
                <div className="text-white/70 text-xs sm:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT SECTION WITH REAL PHOTOGRAPHY ===== */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Photography Block */}
            <div className="lg:col-span-6">
              <FadeIn direction="right">
                <div className="relative">
                  {/* Primary Large Image */}
                  <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                    <Image
                      src={IMAGES.about.siteDiscussion}
                      alt="Construction team discussing project specifications"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  </div>

                  {/* Overlapping Secondary Card with Photo */}
                  <div className="hidden sm:block absolute -bottom-8 -right-6 w-64 bg-white p-3 rounded-2xl shadow-2xl border border-gray-100">
                    <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                      <Image
                        src={IMAGES.about.modernLogistics}
                        alt="Completed modern logistics facility"
                        fill
                        sizes="256px"
                        className="object-cover"
                      />
                    </div>
                    <div className="px-2 pb-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-gold">Proven Scale</div>
                      <div className="text-sm font-bold text-navy">650k+ Sq Ft Facilities Built</div>
                    </div>
                  </div>

                  {/* Floating Experience Badge */}
                  <div className="absolute -top-6 -left-6 bg-navy text-white p-5 rounded-2xl shadow-2xl border border-white/10">
                    <div className="text-3xl font-extrabold text-gold">25+</div>
                    <div className="text-xs text-white/75 font-medium uppercase tracking-wider">Years of Trust</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6">
              <FadeIn direction="left" delay={0.15}>
                <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-4">
                  <div className="w-8 h-px bg-gold" />
                  About Business Venture Group
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-6 leading-tight">
                  Your One-Stop Solution for{' '}
                  <span className="text-gold">Light Industrial</span> Excellence
                </h2>
                <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
                  Modeled on the proven multi-craft corporate umbrella structure, Business Venture Group
                  Inc. unites specialized industrial operating companies under a single standard of
                  safety, quality, and fiscal discipline.
                </p>
                <p className="text-muted text-base leading-relaxed mb-8">
                  From site development and structural steel fabrication to process mechanical loops and
                  turnkey plant maintenance, our unified approach eliminates the contractor friction and
                  schedule delays common to fragmented procurement models.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    'Target Zero Safety Framework',
                    'On-Time & On-Budget Delivery',
                    'Single-Source Master Contracts',
                    '1,200+ Certified Craft Personnel',
                    'ASME & AWS Certified Shops',
                    'National Equipment & Rigging Fleet',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-dark font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href="/leadership"
                    className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all"
                  >
                    Meet Executive Leadership
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/companies"
                    className="inline-flex items-center gap-2 text-navy hover:text-gold font-bold text-sm transition-colors"
                  >
                    View Group Companies
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES WITH REAL PHOTOGRAPHY CARDS ===== */}
      <section className="section-padding bg-light relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-gold" />
                Turnkey Capabilities
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-4">
                Comprehensive Industrial Services
              </h2>
              <p className="text-muted text-base sm:text-lg">
                Delivering complete lifecycle solutions from site preparation through long-term facility maintenance.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm card-hover flex flex-col justify-between h-full group">
                    <div>
                      {/* Image header with overlay */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy/30 to-transparent" />
                        <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-navy shadow-md">
                          <Icon className="w-5 h-5 text-navy" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-gray-100">
                          {service.highlights.map((hl) => (
                            <div key={hl} className="flex items-center gap-2 text-xs text-dark/80 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                              {hl}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-navy group-hover:text-gold uppercase tracking-wider transition-colors"
                      >
                        Request Project Scope <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== SUBSIDIARY NETWORK SHOWCASE ===== */}
      <section className="section-padding bg-navy text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-gold" />
                The Family of Companies
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                Specialized Divisions.{' '}
                <span className="text-gradient">Unified Power.</span>
              </h2>
              <p className="text-white/70 text-base sm:text-lg">
                Like Bartlett Group&apos;s proven multi-entity architecture, each company operates with deep craft expertise while leveraging group scale.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company) => (
              <StaggerItem key={company.name}>
                <Link href={company.href} className="group block h-full">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-500 card-hover flex flex-col sm:flex-row h-full">
                    <div className="relative sm:w-2/5 h-56 sm:h-auto shrink-0 overflow-hidden">
                      <Image
                        src={company.image}
                        alt={company.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 40vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col justify-between sm:w-3/5">
                      <div>
                        <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-2">
                          {company.division}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-gold transition-colors mb-3">
                          {company.name}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed mb-4">
                          {company.description}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-gold text-xs font-bold uppercase tracking-wider pt-4 border-t border-white/10">
                        Explore Division <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="mt-12 text-center">
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-gold text-white hover:text-gold font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              View All 6 Operating Companies
              <ChevronRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS SHOWCASE ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-3">
                <div className="w-8 h-px bg-gold" />
                Featured Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
                Recent Construction Projects
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-navy hover:text-gold font-bold text-sm transition-colors"
            >
              Discuss Your Facility Plans
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((p) => (
              <FadeIn key={p.title}>
                <div className="group rounded-2xl overflow-hidden border border-gray-200 shadow-sm card-hover bg-white flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                      {p.tag}
                    </span>
                    <span className="absolute bottom-4 left-4 text-xs font-semibold text-white/90">
                      {p.location}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors mb-2">
                        {p.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{p.scope}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LATEST NEWS & INSIGHTS ===== */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-3">
                <div className="w-8 h-px bg-gold" />
                Latest News & Releases
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
                Corporate Insights & Field Milestones
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-navy hover:text-gold font-bold text-sm transition-colors"
            >
              View All Press Releases
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <StaggerItem key={item.title}>
                <Link href="/news" className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm card-hover h-full flex flex-col justify-between">
                    <div>
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy/90 text-white text-xs font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="text-gold text-xs font-bold uppercase tracking-wider mb-2">
                          {item.date}
                        </div>
                        <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors mb-3 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-navy group-hover:text-gold uppercase tracking-wider">
                      Read Full Story
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== DRAMATIC REAL PHOTO CTA SECTION ===== */}
      <section className="relative py-28 lg:py-36 overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.heroes.careers}
            alt="Industrial welders at work"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy-dark/90" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold-light text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Start Your Next Industrial Project
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ready to Build With{' '}
              <span className="text-gradient">Precision & Power?</span>
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Connect with our estimating and engineering directors to review your scope,
              discuss fast-track timelines, or mobilize our multi-craft crews.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light
                           text-navy font-extrabold px-9 py-4 rounded-xl transition-all duration-300
                           hover:shadow-2xl hover:shadow-gold/30 text-base"
              >
                Request a Consultation
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white
                           text-white font-semibold px-9 py-4 rounded-xl transition-all duration-300
                           hover:bg-white/10 text-base backdrop-blur-sm"
              >
                Join Our Craft Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
