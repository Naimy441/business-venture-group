'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  Wrench,
  Hammer,
  ShieldCheck,
  Flame,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  HardHat,
  Factory,
  Cpu,
  Truck,
  Sparkles,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

interface Company {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  icon: typeof Building2;
  gradient: string;
  borderAccent: string;
  description: string;
  capabilities: string[];
  stats: { label: string; value: string }[];
  industries: string[];
}

const companiesList: Company[] = [
  {
    id: 'industrial-services',
    name: 'BVG Industrial Services',
    tagline: 'Comprehensive soft-crafts, turnkey maintenance & turnaround execution.',
    badge: 'Flagship Division',
    icon: Factory,
    gradient: 'from-navy via-navy-light to-steel',
    borderAccent: 'hover:border-gold/60',
    description:
      'Providing end-to-end industrial soft-craft solutions for manufacturing facilities, refineries, logistics hubs, and power generation plants. Our integrated craft model combines insulation, coatings, specialty scaffolding, and capital maintenance into a synchronized delivery framework.',
    capabilities: [
      'Industrial Scaffolding & Multi-Craft Access',
      'Thermal Insulation & Fireproofing (PFP/Passive)',
      'Abrasive Blasting & Protective High-Performance Coatings',
      'Hazardous Material Abatement & Facility Encapsulation',
      'Turnkey Plant Turnarounds & Outage Management',
    ],
    stats: [
      { label: 'Annual Turnarounds', value: '45+' },
      { label: 'Craft Specialists', value: '650+' },
    ],
    industries: ['Light Industrial Manufacturing', 'Petrochemical', 'Energy Storage', 'Distribution Warehouses'],
  },
  {
    id: 'mechanical-solutions',
    name: 'BVG Mechanical Solutions',
    tagline: 'Critical-path mechanical contracting, heavy equipment rigging & piping.',
    badge: 'Critical Path',
    icon: Wrench,
    gradient: 'from-navy-light via-steel to-slate-custom',
    borderAccent: 'hover:border-blue-400/60',
    description:
      'Specializing in high-consequence mechanical assembly, precision process piping, rotating equipment installation, and scheduled shutdowns. We lead the critical path on manufacturing retrofits and high-capacity processing units with rigorous ASME-certified quality standards.',
    capabilities: [
      'ASME Code Pressure Vessels & Heat Exchanger Repair',
      'Heavy Equipment Rigging, Alignment & Setting',
      'Process & Utility Piping Pre-Fabrication & Installation',
      'Turbine, Compressor & Pump Overhaul',
      'Emergency Mechanical Turnaround Response Teams',
    ],
    stats: [
      { label: 'Weld Pass Rate', value: '99.8%' },
      { label: 'Critical Unit Outages', value: '200+' },
    ],
    industries: ['Pharmaceutical Plants', 'Food Processing', 'Advanced Materials', 'Power Generation'],
  },
  {
    id: 'fabrication-manufacturing',
    name: 'BVG Fabrication & Manufacturing',
    tagline: 'Custom structural steel, skid systems & certified metal engineering.',
    badge: 'Design & Fab',
    icon: Hammer,
    gradient: 'from-steel via-navy-light to-navy',
    borderAccent: 'hover:border-emerald-400/60',
    description:
      'Operating over 180,000 square feet of modern fabrication shop space. From initial CAD/BIM modeling to final CNC plasma cutting, welding, and field assembly, our fabrication teams deliver tailor-engineered structural steel, platforms, ductwork, and modular process skids.',
    capabilities: [
      'Structural Steel Detailing & Modular Skid Systems',
      'Heavy Plate Fabrication & Industrial Ductwork',
      'CWB & AWS Certified Multi-Alloy Robotic Welding',
      'BIM / 3D Laser Scanning & Field Metrology',
      'Shop Painting, Galvanizing & Non-Destructive Testing (NDT)',
    ],
    stats: [
      { label: 'Shop Capacity', value: '180k sq ft' },
      { label: 'Tons Fabricated/Yr', value: '12,500+' },
    ],
    industries: ['Aerospace Support', 'Heavy Equipment Assembly', 'Automotive Logistics', 'Clean Tech'],
  },
  {
    id: 'infrastructure-civil',
    name: 'BVG Infrastructure & Civil',
    tagline: 'Site development, reinforced industrial foundations & deep utilities.',
    badge: 'Civil & Earthwork',
    icon: Building2,
    gradient: 'from-navy via-slate-custom to-steel',
    borderAccent: 'hover:border-purple-400/60',
    description:
      'The foundation of every resilient industrial site. Our Civil & Infrastructure division executes mass earthwork, deep foundation pilings, heavy equipment pad pours, underground utilities, and industrial paving tailored to withstand heavy axle-load logistics.',
    capabilities: [
      'Precision Mass Earthwork & Geotechnical Soil Stabilization',
      'Heavy Concrete Equipment Pads & Elevated Slab Pours',
      'Underground Storm, Firewater & Chemical Sewer Utilities',
      'Deep Foundation Drilled Shafts & Driven Piles',
      'Heavy-Duty Industrial Paving & Loading Dock Construction',
    ],
    stats: [
      { label: 'Cubic Yards Placed', value: '350k+' },
      { label: 'Acreage Developed', value: '1,400+' },
    ],
    industries: ['Mega-Distribution Hubs', 'EV Battery Facilities', 'Semiconductor Ancillary', 'Intermodal Rail'],
  },
  {
    id: 'refractory-specialty',
    name: 'BVG Refractory & High-Heat',
    tagline: 'Engineered refractory linings, ceramic fiber & thermal barriers.',
    badge: 'Specialty Craft',
    icon: Flame,
    gradient: 'from-steel via-navy to-navy-dark',
    borderAccent: 'hover:border-amber-500/60',
    description:
      'Engineered thermal shielding solutions for high-temperature operating units. Our team installs monolithic castable, gunite, brick lining, ceramic blankets, and specialized corrosion barriers for industrial incinerators, boilers, furnaces, and thermal oxidizers.',
    capabilities: [
      'Gunite & Shotcrete Robotic Refractory Application',
      'Precision Bricklaying for High-Heat Kilns & Furnaces',
      'Ceramic Fiber Module & Vacuum Formed Insulation',
      'Demolition with Ultra-High Pressure Hydro-Blasting',
      'Thermographic Thermal Audits & Infrared Hot-Spot Mapping',
    ],
    stats: [
      { label: 'Operating Temp Rating', value: '3,000°F' },
      { label: 'Refractory Experts', value: '120+' },
    ],
    industries: ['Steel Mini-Mills', 'Glass & Ceramics', 'Chemical Processing', 'Biomass & Renewable Fuels'],
  },
  {
    id: 'nextgen-access',
    name: 'BVG NextGen Modular Systems',
    tagline: 'Patented high-velocity scaffolding, suspended systems & engineered access.',
    badge: 'Proprietary Tech',
    icon: Layers,
    gradient: 'from-navy-light via-navy to-steel',
    borderAccent: 'hover:border-cyan-400/60',
    description:
      'Next-generation modular scaffold engineering designed to reduce erection and dismantle time by up to 40%. Equipped with digital inventory telemetry, safety interlocks, and custom cantilever designs for high-bay manufacturing and tall vertical structures.',
    capabilities: [
      'Patented Quick-Pin Positive Interlock Scaffold Systems',
      'Engineered Suspended Sky-Stages & Complex Rigging',
      '3D Scaffold Design & Structural Load Certifications',
      'Barcoded Digital Asset Tracking & Jobsite Logistics',
      'Integrated Debris Catchment, Fall Restraint & Enclosures',
    ],
    stats: [
      { label: 'Setup Time Reduction', value: '-40%' },
      { label: 'Scaffold Assets', value: '50,000 Tons' },
    ],
    industries: ['Commercial Aerospace', 'Shipbuilding & Marine Yards', 'Industrial Warehouses', 'Data Centers'],
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Unified Safety Culture',
    description:
      'One corporate safety manual across all operating companies ensures zero ambiguity on site. One standard: Target Zero.',
  },
  {
    icon: Cpu,
    title: 'Cross-Entity Synergies',
    description:
      'Mechanical, civil, and soft-crafts share synchronized BIM schedules, eliminating trade-stacking and contractor friction.',
  },
  {
    icon: Truck,
    title: 'Shared Resource Logistics',
    description:
      'A multi-million-dollar fleet of heavy cranes, transport haulers, and modular systems dispatched centrally for maximum uptime.',
  },
  {
    icon: Sparkles,
    title: 'Single-Source Accountability',
    description:
      'One contract, one executive sponsor, and clear ownership eliminates the finger-pointing common in fragmented contractor models.',
  },
];

export default function CompaniesPage() {
  return (
    <>
      <PageHero
        title="Our Companies"
        subtitle="A family of specialized industrial contracting entities united under one standard of excellence, safety, and delivery."
        breadcrumbs={[{ label: 'Our Companies', href: '/companies' }]}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-gold" />
                The Business Venture Group Ecosystem
                <div className="w-8 h-px bg-gold" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
                Specialized Craftsmanship.{' '}
                <span className="text-gradient">Enterprise Power.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted text-lg leading-relaxed">
                Rather than treating industrial construction as a one-size-fits-all discipline,
                Business Venture Group Inc. operates through dedicated subsidiary business units.
                Each company operates with deep domain specialization while drawing on the financial
                strength, safety protocols, and national scale of the parent group.
              </p>
            </FadeIn>
          </div>

          {/* Companies Grid */}
          <div className="space-y-12">
            {companiesList.map((company, index) => {
              const IconComponent = company.icon;
              const isEven = index % 2 === 0;

              return (
                <FadeIn key={company.id} delay={0.1} direction="up">
                  <div
                    id={company.id}
                    className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm
                               hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Left Header / Brand Accent Block */}
                      <div
                        className={`lg:col-span-5 bg-gradient-to-br ${company.gradient} p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden`}
                      >
                        {/* Decorative background circle */}
                        <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
                        <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-gold/10 rounded-full blur-2xl" />

                        <div className="relative z-10">
                          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-gold-light uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            {company.badge}
                          </div>

                          <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8 text-gold-light" />
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
                            {company.name}
                          </h3>
                          <p className="text-white/80 text-base leading-relaxed mb-6 font-light">
                            {company.tagline}
                          </p>
                        </div>

                        {/* Quick Stats in Header */}
                        <div className="relative z-10 pt-6 border-t border-white/15 grid grid-cols-2 gap-4">
                          {company.stats.map((stat) => (
                            <div key={stat.label}>
                              <div className="text-2xl sm:text-3xl font-extrabold text-gold-light">
                                {stat.value}
                              </div>
                              <div className="text-xs text-white/70 uppercase tracking-wider mt-0.5">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Details Block */}
                      <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between bg-white">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-navy/60 mb-3">
                            Executive Overview
                          </h4>
                          <p className="text-muted text-base leading-relaxed mb-6">
                            {company.description}
                          </p>

                          <h4 className="text-sm font-bold uppercase tracking-wider text-navy/60 mb-3">
                            Core Capabilities & Services
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                            {company.capabilities.map((cap) => (
                              <div key={cap} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-gold mt-1 shrink-0" />
                                <span className="text-dark text-sm leading-snug font-medium">
                                  {cap}
                                </span>
                              </div>
                            ))}
                          </div>

                          <h4 className="text-sm font-bold uppercase tracking-wider text-navy/60 mb-2">
                            Key Industries Served
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {company.industries.map((ind) => (
                              <span
                                key={ind}
                                className="px-3 py-1 bg-light text-navy text-xs font-semibold rounded-md border border-gray-200"
                              >
                                {ind}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <span className="text-xs text-muted">
                            Part of Business Venture Group Inc. Network
                          </span>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-navy hover:text-gold font-bold text-sm group/link transition-colors"
                          >
                            Inquire for Project Scopes
                            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why the Integrated Model Wins */}
      <section className="section-padding bg-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-gold" />
                Integrated Delivery Advantage
                <div className="w-8 h-px bg-gold" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Why Owners Choose Our Umbrella Model
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted text-lg">
                Coordinating multiple specialty contractors often leads to schedule slippages, disputed handoffs,
                and administrative drag. Business Venture Group solves this at the structural level.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={pillar.title}>
                  <div className="bg-white rounded-xl p-8 h-full border border-gray-100 card-hover shadow-sm">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3">{pillar.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need Multi-Craft Support on Your Next Build?
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-10">
              Engage our individual companies or deploy our combined turnkey force for your complex capital
              project or shutdown.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light
                           text-navy font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-gold/25"
              >
                Request Capabilities Presentation
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/careers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20
                           hover:border-white/50 text-white font-semibold px-8 py-4 rounded-lg transition-all hover:bg-white/5"
              >
                Join One of Our Companies
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
