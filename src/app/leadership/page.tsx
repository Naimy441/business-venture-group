'use client';

import PageHero from '@/components/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import Link from 'next/link';
import { ArrowRight, Award, Users, Shield } from 'lucide-react';

const executives = [
  {
    name: 'James Mitchell',
    title: 'Chairman of the Board',
    initials: 'JM',
    gradient: 'from-navy to-steel',
    description:
      'With over 25 years of experience in industrial construction, James provides strategic oversight and governance, guiding Business Venture Group through decades of sustained growth and market leadership.',
  },
  {
    name: 'Robert Chen',
    title: 'CEO & President',
    initials: 'RC',
    gradient: 'from-steel to-navy-light',
    description:
      'Robert brings 20+ years of strategic growth leadership to the organization. His vision and operational acumen have expanded BVG into new markets while maintaining the highest standards of quality and safety.',
  },
  {
    name: 'Sarah Williams',
    title: 'President, Industrial Services',
    initials: 'SW',
    gradient: 'from-navy-light to-slate-custom',
    description:
      'An 18-year veteran of industrial operations, Sarah oversees all industrial service divisions. Her expertise in process optimization and client relations has been instrumental in securing long-term partnerships.',
  },
  {
    name: 'David Rodriguez',
    title: 'President, Mechanical Division',
    initials: 'DR',
    gradient: 'from-slate-custom to-steel',
    description:
      'David leads the mechanical engineering division with 15+ years of hands-on experience. His technical proficiency and innovative approach drive excellence across complex mechanical construction projects.',
  },
  {
    name: 'Michael Thompson',
    title: 'President, HSE & HR',
    initials: 'MT',
    gradient: 'from-navy to-navy-light',
    description:
      'With 20+ years dedicated to health, safety, environment, and human resources, Michael ensures BVG maintains an industry-leading safety record and a culture that attracts and retains top talent.',
  },
  {
    name: 'Jennifer Park',
    title: 'Chief Financial Officer',
    initials: 'JP',
    gradient: 'from-steel to-navy',
    description:
      'Jennifer brings 12+ years of financial management expertise, overseeing all fiscal operations, strategic planning, and financial reporting to ensure the long-term financial health of the organization.',
  },
];

const subPages = [
  {
    title: 'Operations Management',
    description:
      'Meet the operations leaders who ensure every project is delivered on time, on budget, and to the highest safety standards.',
    href: '/leadership/operations-management',
    icon: Users,
  },
  {
    title: 'Construction Managers',
    description:
      'Our construction managers bring decades of field experience, leading crews and coordinating complex builds across the country.',
    href: '/leadership/construction-managers',
    icon: Shield,
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        title="Our Leadership"
        subtitle="Experienced leaders driving innovation, safety, and excellence in light industrial construction."
        breadcrumbs={[{ label: 'Leadership', href: '/leadership' }]}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-5 h-5 text-gold" />
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                  Executive Team
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Leadership Built on Experience
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted text-lg leading-relaxed">
                At Business Venture Group Inc., our leadership team combines decades of
                hands-on industrial construction experience with forward-thinking strategy.
                Every member of our executive team has risen through the ranks, bringing an
                unparalleled understanding of the challenges and opportunities in light
                industrial construction. Their collective expertise drives our commitment
                to safety, quality, and delivering exceptional results for our clients.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Executive Team Grid */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Executive Management Team
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                The leaders who shape our vision and guide our teams to deliver world-class
                construction services.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.12}
          >
            {executives.map((exec) => (
              <StaggerItem key={exec.name}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                  {/* Photo Placeholder */}
                  <div className={`relative h-64 bg-gradient-to-br ${exec.gradient} overflow-hidden`}>
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>

                    {/* Initials Circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <span className="text-4xl font-bold text-white tracking-wide">
                          {exec.initials}
                        </span>
                      </div>
                    </div>

                    {/* Bottom gradient fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-1 group-hover:text-steel transition-colors">
                      {exec.name}
                    </h3>
                    <p className="text-gold font-semibold text-sm mb-4">{exec.title}</p>
                    <p className="text-muted text-sm leading-relaxed">{exec.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Sub-Pages Links */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Meet the Broader Team
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Our leadership extends beyond the executive suite. Explore the dedicated
                managers and leaders who bring our projects to life.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            staggerDelay={0.15}
          >
            {subPages.map((page) => {
              const Icon = page.icon;
              return (
                <StaggerItem key={page.title}>
                  <Link href={page.href} className="block group">
                    <div className="relative bg-light rounded-2xl p-8 border border-gray-100 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full" />

                      <div className="relative">
                        <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                          <Icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
                        </div>

                        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-steel transition-colors">
                          {page.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed mb-5">
                          {page.description}
                        </p>

                        <div className="flex items-center gap-2 text-gold font-semibold text-sm">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative hero-gradient py-16 md:py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Our leadership team is committed to building lasting partnerships. Get in
              touch to discuss how we can bring your next project to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-8 py-4 rounded-lg transition-colors duration-300"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
