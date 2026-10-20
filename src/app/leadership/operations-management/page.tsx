'use client';

import PageHero from '@/components/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Settings, TrendingUp, Truck, Clock, Wrench, BarChart3 } from 'lucide-react';
import { IMAGES } from '@/lib/images';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
    </svg>
  );
}

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  icon: React.ReactNode;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Thomas Walker',
    title: 'Senior Vice President, Industrial Services',
    image: IMAGES.managers.thomasWalker,
    bio: 'With over 25 years in industrial construction, Thomas leads the strategic direction of all industrial service operations. His expertise in large-scale facility construction and maintenance has driven consistent growth across the division.',
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    name: 'Amanda Foster',
    title: 'Vice President, Project Operations',
    image: IMAGES.managers.amandaFoster,
    bio: 'Amanda oversees project operations across all active sites, ensuring seamless coordination between field teams and management. Her data-driven approach to project delivery has improved on-time completion rates by over 30%.',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    name: 'Kevin Brooks',
    title: 'Mechanical Operations Manager',
    image: IMAGES.managers.kevinBrooks,
    bio: 'Kevin manages all mechanical operations including HVAC, piping, and process equipment installations. His hands-on leadership style and deep technical knowledge ensure every mechanical scope is executed to the highest industry standards.',
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    name: 'Lisa Chang',
    title: 'Operations Specialist, Turnarounds',
    image: IMAGES.managers.lisaChang,
    bio: 'Lisa specializes in plant turnaround planning and execution, coordinating complex shutdowns with minimal downtime. Her meticulous scheduling methodology has saved clients millions in lost production costs.',
    icon: <Clock className="w-5 h-5" />,
  },
  {
    name: 'Marcus Davis',
    title: 'Senior Project Manager',
    image: IMAGES.managers.marcusDavis,
    bio: 'Marcus brings 18 years of construction project management experience to the team, overseeing multi-million dollar industrial projects from conception through completion. He is known for building lasting client relationships through transparent communication.',
    icon: <Settings className="w-5 h-5" />,
  },
  {
    name: 'Ryan Mitchell',
    title: 'Logistics & Planning Director',
    image: IMAGES.managers.ryanMitchell,
    bio: 'Ryan directs all logistics and pre-construction planning activities, optimizing resource allocation and supply chain management across projects. His strategic planning ensures materials and crews are mobilized efficiently to every jobsite.',
    icon: <Truck className="w-5 h-5" />,
  },
];

export default function OperationsManagementPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Operations Management"
        subtitle="The driving force behind our project execution — ensuring every build is delivered safely, on time, and to the highest standard."
        breadcrumbs={[
          { label: 'Leadership', href: '/leadership' },
          { label: 'Operations Management', href: '/leadership/operations-management' },
        ]}
        backgroundImage={IMAGES.heroes.operations}
      />

      {/* Intro Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gold rounded-full" />
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                  Our Team
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Operational Excellence at Every Level
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-4">
                Our Operations Management team forms the backbone of Business Venture Group&apos;s 
                project delivery capabilities. From initial planning and logistics to on-site 
                execution and turnaround management, this team ensures that every project meets 
                our rigorous standards for safety, quality, and efficiency.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                Working in close coordination with our executive leadership and field construction 
                managers, these professionals bring deep technical expertise, industry knowledge, 
                and a commitment to client satisfaction to every industrial engagement.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Leadership in Action
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Meet the Operations Team
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Experienced professionals dedicated to delivering projects with precision and excellence.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.12}
          >
            {teamMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group h-full flex flex-col border border-gray-200">
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
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-navy shadow-md">
                      {member.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-dark group-hover:text-gold transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-gold font-medium text-sm mt-0.5 mb-3">
                        {member.title}
                      </p>
                      <p className="text-muted text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Contact icons */}
                    <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
                      <Link
                        href="/contact"
                        className="w-9 h-9 rounded-full bg-light flex items-center justify-center text-muted hover:bg-gold hover:text-white transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                      </Link>
                      <button
                        aria-label={`${member.name} LinkedIn`}
                        className="w-9 h-9 rounded-full bg-light flex items-center justify-center text-muted hover:bg-navy hover:text-white transition-all duration-300"
                      >
                        <LinkedInIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA / Back Link */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-2">
                  Explore Our Leadership
                </h3>
                <p className="text-muted">
                  Learn more about our executive management and field construction teams.
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
                  href="/leadership/construction-managers"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-dark font-medium rounded-lg hover:bg-gold-light transition-colors duration-300"
                >
                  Construction Managers
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
