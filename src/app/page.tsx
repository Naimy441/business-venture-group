'use client';

import Link from 'next/link';
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
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '25+', label: 'Years Experience' },
  { number: '1,200+', label: 'Skilled Workers' },
  { number: '98%', label: 'Client Satisfaction' },
];

const services = [
  {
    icon: Building2,
    title: 'General Contracting',
    description:
      'Full-service general contracting for light industrial facilities, warehouses, and manufacturing plants.',
  },
  {
    icon: HardHat,
    title: 'Design-Build',
    description:
      'Integrated design-build solutions that streamline project delivery and reduce costs.',
  },
  {
    icon: Wrench,
    title: 'Pre-Construction',
    description:
      'Comprehensive pre-construction services including estimating, value engineering, and scheduling.',
  },
  {
    icon: Factory,
    title: 'Industrial Maintenance',
    description:
      'Ongoing maintenance and turnaround services to keep your facilities running at peak performance.',
  },
  {
    icon: Hammer,
    title: 'Tenant Improvements',
    description:
      'Custom build-outs and renovations tailored to your operational requirements.',
  },
  {
    icon: Shield,
    title: 'Safety Management',
    description:
      'Industry-leading safety programs that protect our workers and your assets on every project.',
  },
];

const companies = [
  {
    name: 'BVG Industrial Services',
    description: 'Full-spectrum industrial construction and maintenance services.',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'BVG Mechanical',
    description: 'Specialized mechanical installations and turnaround services.',
    color: 'from-amber-600 to-amber-800',
  },
  {
    name: 'BVG Fabrication',
    description: 'Custom metal fabrication from concept to final delivery.',
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    name: 'BVG Infrastructure',
    description: 'Civil and infrastructure solutions for industrial facilities.',
    color: 'from-purple-600 to-purple-800',
  },
];

const newsItems = [
  {
    date: 'October 15, 2026',
    title: 'BVG Awarded $50M Industrial Complex Project',
    excerpt: 'Business Venture Group has been selected as the general contractor for a major industrial complex in the Houston metro area.',
  },
  {
    date: 'September 28, 2026',
    title: 'Safety Milestone: 2 Million Hours Without Incident',
    excerpt: 'Our team has achieved an outstanding safety record, reflecting our unwavering commitment to workplace safety.',
  },
  {
    date: 'September 10, 2026',
    title: 'Expanding Operations to the Southeast',
    excerpt: 'BVG announces new regional offices in Atlanta and Charlotte to better serve our growing client base.',
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 hero-gradient">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Decorative geometric shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-light/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10
                         px-4 py-2 rounded-full text-sm text-white/80 mb-8"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Light Industrial Construction Excellence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Building the Future of{' '}
              <span className="text-gradient">Industrial</span>{' '}
              America
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed"
            >
              Business Venture Group Inc. delivers comprehensive light industrial
              construction solutions with unmatched safety, quality, and efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light
                           text-navy font-bold px-8 py-4 rounded-lg transition-all duration-300
                           hover:shadow-lg hover:shadow-gold/25 text-base"
              >
                Start Your Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/companies"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40
                           text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300
                           hover:bg-white/5 text-base"
              >
                Our Companies
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-10"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-navy via-navy-light to-steel relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-32 h-32 text-white/10" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy to-transparent h-1/3" />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
                  <div className="text-4xl font-bold text-navy mb-1">25+</div>
                  <div className="text-muted text-sm">Years of Excellence</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div>
                <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                  <div className="w-8 h-px bg-gold" />
                  About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                  Your One-Stop Solution for{' '}
                  <span className="text-gold">Industrial Construction</span>
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  Business Venture Group Inc. brings together a family of specialized construction
                  companies, each focused on delivering excellence in their respective disciplines.
                  Together, we provide comprehensive light industrial construction solutions that
                  bring complex projects to completion on time and under budget.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  From general contracting and design-build to specialized mechanical services
                  and custom fabrication, our integrated approach ensures seamless project delivery
                  with the highest standards of safety and quality.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {['Safety First Culture', 'On-Time Delivery', 'Cost-Effective Solutions', 'Expert Team'].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                        <span className="text-dark font-medium text-sm">{item}</span>
                      </div>
                    )
                  )}
                </div>

                <Link
                  href="/leadership"
                  className="group inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
                >
                  Meet Our Leadership
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-px bg-gold" />
              What We Do
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Comprehensive Construction Services
            </h2>
            <p className="text-muted text-lg">
              From concept to completion, we deliver tailored solutions for every phase
              of your industrial construction project.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="card-hover bg-white rounded-xl p-8 h-full border border-gray-100 group cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-6 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== COMPANIES SECTION ===== */}
      <section className="section-padding bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-8 h-px bg-gold" />
              Our Family of Companies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Network of{' '}
              <span className="text-gradient">Specialized Experts</span>
            </h2>
            <p className="text-white/60 text-lg">
              Each company within the Business Venture Group brings unique capabilities and
              deep expertise to deliver exceptional results.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companies.map((company) => (
              <StaggerItem key={company.name}>
                <Link href="/companies" className="group block">
                  <div className="card-hover bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8
                                  hover:bg-white/10 hover:border-gold/30 transition-all duration-300">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${company.color} flex items-center
                                    justify-center mb-5`}>
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-white/50">{company.description}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-gold text-sm font-semibold
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="mt-12 text-center">
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-gold
                         text-white hover:text-gold font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              View All Companies
              <ChevronRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                  <div className="w-8 h-px bg-gold" />
                  Why Choose Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                  Delivering Results That{' '}
                  <span className="text-gold">Exceed Expectations</span>
                </h2>
                <p className="text-muted leading-relaxed mb-10">
                  We combine decades of experience with innovative solutions to deliver
                  projects that stand the test of time.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: Shield,
                      title: 'Industry-Leading Safety',
                      description:
                        'Our comprehensive safety programs have achieved over 2 million work hours without a lost-time incident.',
                    },
                    {
                      icon: TrendingUp,
                      title: 'Proven Track Record',
                      description:
                        'Over 500 successfully completed projects across multiple industrial sectors nationwide.',
                    },
                    {
                      icon: Users,
                      title: 'Expert Workforce',
                      description:
                        'A team of 1,200+ skilled professionals with specialized training and certifications.',
                    },
                  ].map((item, idx) => (
                    <FadeIn key={item.title} delay={idx * 0.15}>
                      <div className="flex gap-5">
                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-navy mb-1">{item.title}</h3>
                          <p className="text-muted leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gold/20 via-navy to-navy-light relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <HardHat className="w-40 h-40 text-white/10" />
                  </div>
                </div>
                {/* Accent blocks */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/20 rounded-xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== NEWS SECTION ===== */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-gold" />
                Latest News
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Stay Updated
              </h2>
            </div>
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
            >
              View All News
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <StaggerItem key={item.title}>
                <Link href="/news" className="group block h-full">
                  <div className="card-hover bg-white rounded-xl overflow-hidden h-full border border-gray-100">
                    <div className="h-48 bg-gradient-to-br from-navy to-navy-light relative">
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <Building2 className="w-20 h-20 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-gold text-sm font-medium mb-2">{item.date}</div>
                      <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something{' '}
              <span className="text-gradient">Extraordinary</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Ready to start your next industrial construction project? Contact our team
              today to discover how Business Venture Group can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light
                           text-navy font-bold px-10 py-4 rounded-lg transition-all duration-300
                           hover:shadow-lg hover:shadow-gold/25 text-lg"
              >
                Contact Us Today
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40
                           text-white font-semibold px-10 py-4 rounded-lg transition-all duration-300
                           hover:bg-white/5 text-lg"
              >
                Join Our Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
