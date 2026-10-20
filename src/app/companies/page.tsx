'use client';

import Link from 'next/link';
import Image from 'next/image';
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
import { IMAGES } from '@/lib/images';

interface Company {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  image: string;
  icon: typeof Building2;
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
    image: IMAGES.companies.industrialServices,
    icon: Factory,
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
    image: IMAGES.companies.mechanicalSolutions,
    icon: Wrench,
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
    image: IMAGES.companies.fabricationManufacturing,
    icon: Hammer,
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
    image: IMAGES.companies.infrastructureCivil,
    icon: Building2,
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
    image: IMAGES.companies.refractorySpecialty,
    icon: Flame,
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
    image: IMAGES.companies.nextGenAccess,
    icon: Layers,
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
        backgroundImage={IMAGES.heroes.companies}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-gold" />
                The Business Venture Group Ecosystem
                <div className="w-8 h-px bg-gold" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-6">
                Specialized Craftsmanship.{' '}
                <span className="text-gradient">Enterprise Power.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Rather than treating industrial construction as a one-size-fits-all discipline,
                Business Venture Group Inc. operates through dedicated subsidiary business units.
                Each company operates with deep domain specialization while drawing on the financial
                strength, safety protocols, and national scale of the parent group.
              </p>
            </FadeIn>
          </div>

          {/* Companies Grid with Real Photography */}
          <div className="space-y-12">
            {companiesList.map((company) => {
              const IconComponent = company.icon;

              return (
                <FadeIn key={company.id} delay={0.1} direction="up">
                  <div
                    id={company.id}
                    className="group relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm
                               hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Left Visual Photography Side */}
                      <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[400px] flex flex-col justify-between p-8 sm:p-10 text-white overflow-hidden bg-navy">
                        <Image
                          src={company.image}
                          alt={company.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Dramatic dark gradients over photo */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/70 to-navy-dark/60" />

                        <div className="relative z-10">
                          <div className="inline-flex items-center gap-2 bg-navy-dark/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-gold-light uppercase tracking-wider mb-6 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            {company.badge}
                          </div>

                          <div className="w-14 h-14 rounded-2xl bg-gold/90 backdrop-blur-md flex items-center justify-center mb-4 text-navy shadow-lg font-bold">
                            <IconComponent className="w-7 h-7 text-navy" />
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 tracking-tight text-white group-hover:text-gold-light transition-colors">
                            {company.name}
                          </h3>
                          <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6 font-light">
                            {company.tagline}
                          </p>
                        </div>

                        {/* Quick Stats in Image Block */}
                        <div className="relative z-10 pt-4 border-t border-white/20 grid grid-cols-2 gap-4 bg-navy-dark/40 backdrop-blur-sm p-3 rounded-xl">
                          {company.stats.map((stat) => (
                            <div key={stat.label}>
                              <div className="text-2xl font-black text-gold-light">
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
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                            Executive Overview
                          </h4>
                          <p className="text-dark/80 text-base leading-relaxed mb-6">
                            {company.description}
                          </p>

                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
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

                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
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
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-gold" />
                Integrated Delivery Advantage
                <div className="w-8 h-px bg-gold" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
                Why Owners Choose Our Umbrella Model
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted text-base sm:text-lg">
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
                  <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 card-hover shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">{pillar.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA with Industrial Background */}
      <section className="relative py-24 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.heroes.companies}
            alt="Industrial construction facility"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy-dark/95" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Need Multi-Craft Support on Your Next Build?
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Engage our individual companies or deploy our combined turnkey force for your complex capital
              project or facility outage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light
                           text-navy font-extrabold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-gold/25"
              >
                Request Capabilities Presentation
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/careers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30
                           hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/10 backdrop-blur-sm"
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
