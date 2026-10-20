'use client';

import Link from 'next/link';
import { ArrowLeft, HardHat, Wrench, Building2, Cog, MapPin, Shield } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

interface TeamMember {
  name: string;
  initials: string;
  title: string;
  specialization: string;
  bio: string;
  icon: React.ReactNode;
  gradient: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Daniel Garcia',
    initials: 'DG',
    title: 'Senior Construction Manager',
    specialization: 'Large-Scale Industrial Projects',
    bio: 'With over 20 years of experience in light industrial construction, Daniel leads complex multi-phase projects from preconstruction through final turnover. His expertise in scheduling, budgeting, and stakeholder coordination ensures projects are delivered on time and within scope.',
    icon: <HardHat className="w-5 h-5" />,
    gradient: 'from-navy via-navy-light to-steel',
  },
  {
    name: 'Christopher Lee',
    initials: 'CL',
    title: 'Construction Manager, Industrial',
    specialization: 'Manufacturing & Warehouse Facilities',
    bio: 'Christopher specializes in industrial facility construction including manufacturing plants, distribution centers, and warehouse complexes. He brings a detail-oriented approach to quality control and safety compliance across all project phases.',
    icon: <Building2 className="w-5 h-5" />,
    gradient: 'from-steel via-navy-light to-navy',
  },
  {
    name: 'Brian Wilson',
    initials: 'BW',
    title: 'Construction Manager, Mechanical',
    specialization: 'Mechanical Systems & HVAC',
    bio: 'Brian oversees all mechanical construction operations, including HVAC installations, piping systems, and process mechanical work. His technical expertise ensures seamless integration of mechanical systems within larger construction programs.',
    icon: <Cog className="w-5 h-5" />,
    gradient: 'from-navy-light via-steel to-navy',
  },
  {
    name: 'Jason Taylor',
    initials: 'JT',
    title: 'Construction Manager, Infrastructure',
    specialization: 'Site Development & Civil Works',
    bio: 'Jason manages infrastructure and civil construction projects including site development, utilities installation, and structural foundations. His background in civil engineering drives efficient project execution from groundbreaking to completion.',
    icon: <MapPin className="w-5 h-5" />,
    gradient: 'from-steel via-navy to-navy-light',
  },
  {
    name: "Patrick O'Brien",
    initials: 'PO',
    title: 'Field Construction Manager',
    specialization: 'On-Site Operations & Coordination',
    bio: 'Patrick brings hands-on field leadership to every project, coordinating daily construction activities, managing subcontractor crews, and maintaining rigorous safety standards. His presence on-site ensures quality workmanship and adherence to project schedules.',
    icon: <Wrench className="w-5 h-5" />,
    gradient: 'from-navy via-steel to-navy-light',
  },
  {
    name: 'Steven Nguyen',
    initials: 'SN',
    title: 'Construction Superintendent',
    specialization: 'Project Execution & Safety',
    bio: 'Steven leads field operations with an unwavering commitment to safety and quality. He coordinates trade crews, manages daily logistics, and enforces strict safety protocols, ensuring every project meets the highest standards of construction excellence.',
    icon: <Shield className="w-5 h-5" />,
    gradient: 'from-navy-light via-navy to-steel',
  },
];

export default function ConstructionManagersPage() {
  return (
    <main>
      <PageHero
        title="Construction Managers"
        subtitle="Experienced leaders driving project excellence across every phase of construction — from preconstruction planning through final delivery."
        breadcrumbs={[
          { label: 'Leadership', href: '/leadership' },
          { label: 'Construction Managers', href: '/leadership/construction-managers' },
        ]}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Building with <span className="text-gradient">Purpose & Precision</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Our construction management team brings decades of combined experience in light
                industrial construction. From large-scale manufacturing facilities to complex
                mechanical installations, our managers ensure every project is executed safely,
                efficiently, and to the highest quality standards. They serve as the critical link
                between our clients&apos; vision and the successful delivery of their projects.
              </p>
            </div>
          </FadeIn>

          {/* Decorative divider */}
          <FadeIn direction="up" delay={0.2}>
            <div className="flex items-center justify-center gap-3 mt-10">
              <div className="h-px w-16 bg-gold/30" />
              <HardHat className="w-6 h-6 text-gold" />
              <div className="h-px w-16 bg-gold/30" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Meet the Team
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Dedicated professionals committed to delivering construction excellence on every project.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.12}
          >
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover group h-full flex flex-col">
                  {/* Photo Placeholder with Gradient */}
                  <div className={`relative bg-gradient-to-br ${member.gradient} h-56 flex items-center justify-center overflow-hidden`}>
                    {/* Background pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>

                    {/* Initials Circle */}
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/25 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-3xl font-bold text-white tracking-wide">
                          {member.initials}
                        </span>
                      </div>
                    </div>

                    {/* Icon badge */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy shadow-lg">
                      {member.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-dark mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold-dark font-semibold text-sm mb-1">
                      {member.title}
                    </p>
                    <p className="text-navy-light/70 text-xs font-medium uppercase tracking-wider mb-4">
                      {member.specialization}
                    </p>
                    <p className="text-muted text-sm leading-relaxed flex-1">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA / Back Link Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
                Our construction managers work closely with our operations management and executive
                teams to deliver exceptional results on every project.
              </p>
              <Link
                href="/leadership"
                className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Leadership
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
