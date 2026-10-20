'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, HardHat, Wrench, Building2, Cog, MapPin, Shield } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { IMAGES } from '@/lib/images';

interface TeamMember {
  name: string;
  title: string;
  specialization: string;
  image: string;
  bio: string;
  icon: React.ReactNode;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Daniel Garcia',
    title: 'Senior Construction Manager',
    specialization: 'Large-Scale Industrial Projects',
    image: IMAGES.managers.danielGarcia,
    bio: 'With over 20 years of experience in light industrial construction, Daniel leads complex multi-phase projects from preconstruction through final turnover. His expertise in scheduling, budgeting, and stakeholder coordination ensures projects are delivered on time and within scope.',
    icon: <HardHat className="w-5 h-5" />,
  },
  {
    name: 'Christopher Lee',
    title: 'Construction Manager, Industrial',
    specialization: 'Manufacturing & Warehouse Facilities',
    image: IMAGES.managers.christopherLee,
    bio: 'Christopher specializes in industrial facility construction including manufacturing plants, distribution centers, and warehouse complexes. He brings a detail-oriented approach to quality control and safety compliance across all project phases.',
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    name: 'Brian Wilson',
    title: 'Construction Manager, Mechanical',
    specialization: 'Mechanical Systems & HVAC',
    image: IMAGES.managers.brianWilson,
    bio: 'Brian oversees all mechanical construction operations, including HVAC installations, piping systems, and process mechanical work. His technical expertise ensures seamless integration of mechanical systems within larger construction programs.',
    icon: <Cog className="w-5 h-5" />,
  },
  {
    name: 'Jason Taylor',
    title: 'Construction Manager, Infrastructure',
    specialization: 'Site Development & Civil Works',
    image: IMAGES.managers.jasonTaylor,
    bio: 'Jason manages infrastructure and civil construction projects including site development, utilities installation, and structural foundations. His background in civil engineering drives efficient project execution from groundbreaking to completion.',
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    name: "Patrick O'Brien",
    title: 'Field Construction Manager',
    specialization: 'On-Site Operations & Coordination',
    image: IMAGES.managers.patrickOBrien,
    bio: 'Patrick brings hands-on field leadership to every project, coordinating daily construction activities, managing subcontractor crews, and maintaining rigorous safety standards. His presence on-site ensures quality workmanship and adherence to project schedules.',
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    name: 'Steven Nguyen',
    title: 'Construction Superintendent',
    specialization: 'Project Execution & Safety',
    image: IMAGES.managers.stevenNguyen,
    bio: 'Steven leads field operations with an unwavering commitment to safety and quality. He coordinates trade crews, manages daily logistics, and enforces strict safety protocols, ensuring every project meets the highest standards of construction excellence.',
    icon: <Shield className="w-5 h-5" />,
  },
];

export default function ConstructionManagersPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Construction Managers"
        subtitle="Experienced leaders driving project excellence across every phase of construction — from preconstruction planning through final delivery."
        breadcrumbs={[
          { label: 'Leadership', href: '/leadership' },
          { label: 'Construction Managers', href: '/leadership/construction-managers' },
        ]}
        backgroundImage={IMAGES.heroes.constructionManagers}
      />

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-4">
                <HardHat className="w-4 h-4 text-gold" />
                Field Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy mb-6">
                Building with <span className="text-gold">Purpose & Precision</span>
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed mb-4">
                Our construction management team brings decades of combined experience in light
                industrial construction. From large-scale manufacturing facilities to complex
                mechanical installations, our managers ensure every project is executed safely,
                efficiently, and to the highest quality standards.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-xs uppercase tracking-wider">
                Field Command
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Meet the Construction Management Team
              </h2>
              <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
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
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover group h-full flex flex-col border border-gray-200">
                  {/* Photo with Overlay */}
                  <div className="relative h-72 overflow-hidden bg-navy">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/20 to-transparent" />
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-gold text-navy flex items-center justify-center shadow-lg font-bold">
                      {member.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-navy group-hover:text-gold transition-colors duration-300 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gold font-semibold text-sm mb-1">
                        {member.title}
                      </p>
                      <p className="text-navy/70 text-xs font-bold uppercase tracking-wider mb-4">
                        {member.specialization}
                      </p>
                      <p className="text-muted text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-muted font-medium">Business Venture Group Inc.</span>
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-navy hover:text-gold uppercase tracking-wider transition-colors"
                      >
                        Contact Project Desk →
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Explore More Leadership
                </h3>
                <p className="text-muted">
                  Learn more about our executive management and operations teams.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-navy-light transition-colors duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Executive Management
                </Link>
                <Link
                  href="/leadership/operations-management"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy font-medium rounded-lg hover:bg-gold-light transition-colors duration-300"
                >
                  Operations Management
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
