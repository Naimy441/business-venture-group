'use client';

import PageHero from '@/components/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Users, Shield, Briefcase, Mail } from 'lucide-react';
import { IMAGES } from '@/lib/images';

const executives = [
  {
    name: 'James Mitchell',
    title: 'Chairman of the Board',
    image: IMAGES.executives.jamesMitchell,
    tenure: '25+ Years Experience',
    division: 'Corporate Governance',
    description:
      'With over 25 years of experience in industrial construction, James provides strategic oversight and governance, guiding Business Venture Group through decades of sustained growth, national acquisitions, and market leadership.',
  },
  {
    name: 'Robert Chen',
    title: 'CEO & President',
    image: IMAGES.executives.robertChen,
    tenure: '20+ Years Experience',
    division: 'Executive Management',
    description:
      'Robert brings 20+ years of strategic growth leadership to the organization. His vision and operational acumen have expanded BVG into new industrial corridors while maintaining our unwavering standard for Target Zero safety.',
  },
  {
    name: 'Sarah Williams',
    title: 'President, Industrial Services',
    image: IMAGES.executives.sarahWilliams,
    tenure: '18+ Years Experience',
    division: 'BVG Industrial Services',
    description:
      'An 18-year veteran of industrial operations, Sarah oversees all soft-craft and facility turnaround divisions. Her expertise in process optimization and client relations has secured multi-year national accounts.',
  },
  {
    name: 'David Rodriguez',
    title: 'President, Mechanical Division',
    image: IMAGES.executives.davidRodriguez,
    tenure: '15+ Years Experience',
    division: 'BVG Mechanical Solutions',
    description:
      'David leads the mechanical engineering division with 15+ years of hands-on experience. His technical proficiency across ASME code vessels, process piping, and rotating machinery drives critical-path excellence.',
  },
  {
    name: 'Michael Thompson',
    title: 'President, HSE & HR',
    image: IMAGES.executives.michaelThompson,
    tenure: '20+ Years Experience',
    division: 'Health, Safety & People',
    description:
      'With 20+ years dedicated to health, safety, environment, and workforce development, Michael champions our industry-leading 0.54 EMR rating and the continuous development of our 1,200+ craft personnel.',
  },
  {
    name: 'Jennifer Park',
    title: 'Chief Financial Officer',
    image: IMAGES.executives.jenniferPark,
    tenure: '14+ Years Experience',
    division: 'Finance & Capital Strategy',
    description:
      'Jennifer oversees fiscal governance, bonding lines surpassing $350M, capital equipment deployment, and strategic acquisitions, ensuring long-term balance sheet strength across all operating entities.',
  },
];

const subPages = [
  {
    title: 'Operations Management',
    description:
      'Meet the operations vice presidents and turnaround managers who ensure every project is executed with precision.',
    href: '/leadership/operations-management',
    image: IMAGES.heroes.operations,
    icon: Users,
  },
  {
    title: 'Construction Managers',
    description:
      'Our field construction managers lead on-site crews, superintendents, and subcontractors across active jobsites nationwide.',
    href: '/leadership/construction-managers',
    image: IMAGES.heroes.constructionManagers,
    icon: Shield,
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        title="Our Leadership"
        subtitle="Experienced executives driving innovation, safety, and operational excellence across every light industrial build."
        breadcrumbs={[{ label: 'Leadership', href: '/leadership' }]}
        backgroundImage={IMAGES.heroes.leadership}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-4">
                <Award className="w-4 h-4 text-gold" />
                Executive Leadership
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-6">
                Guided by <span className="text-gold">Industry Pioneers</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Our executive leadership team brings over a century of collective leadership in light
                industrial construction, refinery turnarounds, complex fabrication, and corporate
                governance. Under their direction, Business Venture Group Inc. continues to set benchmarks
                for safety, client retention, and capital delivery.
              </p>
            </FadeIn>
          </div>

          {/* Executive Grid with Real Photography */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((exec) => (
              <StaggerItem key={exec.name}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm card-hover flex flex-col justify-between h-full group">
                  <div>
                    {/* Real Portrait Photography */}
                    <div className="relative h-72 sm:h-80 overflow-hidden bg-navy">
                      <Image
                        src={exec.image}
                        alt={exec.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/20 to-transparent" />
                      <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-navy/90 backdrop-blur-md text-gold-light text-xs font-bold uppercase tracking-wider">
                        {exec.division}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="text-xs font-bold text-muted uppercase tracking-wider mb-1">
                        {exec.tenure}
                      </div>
                      <h3 className="text-2xl font-bold text-navy group-hover:text-gold transition-colors mb-1">
                        {exec.name}
                      </h3>
                      <p className="text-gold font-semibold text-sm mb-4">{exec.title}</p>
                      <p className="text-muted text-sm leading-relaxed">{exec.description}</p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-muted font-medium">Business Venture Group Inc.</span>
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-navy group-hover:text-gold uppercase tracking-wider flex items-center gap-1 transition-colors"
                    >
                      Connect <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Explore Operational Teams */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-3">
                <div className="w-8 h-px bg-gold" />
                Extended Leadership
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
                Operations & Field Management
              </h2>
              <p className="text-muted text-base sm:text-lg">
                Discover the specialized directors and construction superintendents executing our daily builds.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {subPages.map((sub) => {
              const Icon = sub.icon;
              return (
                <FadeIn key={sub.title}>
                  <Link href={sub.href} className="group block h-full">
                    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm card-hover h-full flex flex-col justify-between">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={sub.image}
                          alt={sub.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy/40 to-transparent" />
                        <div className="absolute bottom-4 left-6 flex items-center gap-3 text-white">
                          <div className="w-10 h-10 rounded-xl bg-gold text-navy flex items-center justify-center font-bold">
                            <Icon className="w-5 h-5 text-navy" />
                          </div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-gold-light transition-colors">
                            {sub.title}
                          </h3>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                        <p className="text-muted text-base leading-relaxed mb-6">
                          {sub.description}
                        </p>
                        <div className="inline-flex items-center gap-2 text-navy group-hover:text-gold font-bold text-sm uppercase tracking-wider transition-colors pt-4 border-t border-gray-100">
                          Meet the Team
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
