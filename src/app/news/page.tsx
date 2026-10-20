'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowUpRight,
  Tag,
  Share2,
  ChevronRight,
  X,
  Search,
  BookOpen,
  Award,
  Shield,
  TrendingUp,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { IMAGES } from '@/lib/images';

interface Article {
  id: string;
  category: 'Project Milestones' | 'Corporate & Growth' | 'Safety Excellence' | 'Innovation & Tech' | 'Workforce';
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;
  content: string[];
  stats?: { label: string; value: string }[];
}

const articlesData: Article[] = [
  {
    id: 'bvg-85m-logistics-hub',
    category: 'Project Milestones',
    title: 'Business Venture Group Awarded $85M Light Industrial Logistics & Advanced Assembly Hub',
    date: 'October 14, 2026',
    readTime: '4 min read',
    featured: true,
    image: IMAGES.news[0],
    excerpt:
      'The multi-phase 650,000-square-foot contract includes civil site prep, high-load structural steel erection, precision automated racking integration, and climate-controlled assembly cleanrooms.',
    content: [
      'Houston, TX — Business Venture Group Inc. (BVG) has officially been selected as the design-build general contractor for a new 650,000 sq. ft. advanced light industrial logistics and clean-assembly hub located in the Greater Houston industrial corridor.',
      'The development is engineered to support next-generation automated distribution, robotics assembly, and specialized cleanroom staging. The scope incorporates three BVG operating companies: BVG Infrastructure & Civil for geotechnical deep foundation work, BVG Fabrication & Manufacturing for structural framework, and BVG Mechanical Solutions for process HVAC and compressed utility loops.',
      'Groundbreaking is scheduled for November 2026, with substantial completion expected within 18 months under an expedited schedule leveraging our pre-engineered modular assembly protocols.',
    ],
    stats: [
      { label: 'Square Footage', value: '650,000' },
      { label: 'Contract Value', value: '$85,000,000' },
      { label: 'Projected Duration', value: '18 Months' },
    ],
  },
  {
    id: 'safety-milestone-2-5m-hours',
    category: 'Safety Excellence',
    title: 'Safety Milestone: 2.5 Million Consecutive Work Hours Without a Lost-Time Incident',
    date: 'September 28, 2026',
    readTime: '3 min read',
    image: IMAGES.news[1],
    excerpt:
      'Our Target Zero safety program achieves a monumental milestone across all 14 active job sites and six subsidiary operating entities throughout North America.',
    content: [
      'Safety is never a box to check at Business Venture Group—it is our first operational requirement before any tool is lifted. Today, we are proud to celebrate 2,500,000 consecutive craft work hours completed with zero lost-time incidents (LTI).',
      'This benchmark represents continuous 24/7 turnaround work, heavy industrial rigging, scaffold erection at heights exceeding 180 feet, and live chemical processing plant maintenance.',
      '“A world-class safety culture requires relentless personal accountability and empowered stop-work authority for every apprentice and veteran on the job,” stated Michael Thompson, President of HSE & HR.',
    ],
    stats: [
      { label: 'LTI-Free Hours', value: '2,500,000' },
      { label: 'EMR Rating', value: '0.54' },
      { label: 'Stop-Work Invocations Praised', value: '100%' },
    ],
  },
  {
    id: 'charlotte-regional-hub',
    category: 'Corporate & Growth',
    title: 'Strategic Expansion: BVG Opens East Coast Regional Operations Hub in Charlotte, NC',
    date: 'September 12, 2026',
    readTime: '3 min read',
    image: IMAGES.news[2],
    excerpt:
      'To support booming light industrial development and battery manufacturing corridors in the Southeast, BVG launches a 45,000 sq. ft. regional office and staging depot.',
    content: [
      'Responding to explosive capital investments across the Carolinas and Georgia industrial corridors, Business Venture Group Inc. has established its new Southeast Regional Operational Headquarters in Charlotte, North Carolina.',
      'The facility houses permanent project management offices, equipment yard dispatch, craft testing centers, and safety certification suites.',
      'The Charlotte hub directly services regional clients in advanced battery production, aerospace component fabrication, and e-commerce distribution infrastructure.',
    ],
  },
  {
    id: 'mechanical-turnaround-ahead-of-schedule',
    category: 'Project Milestones',
    title: 'BVG Mechanical Completes Petrochemical Turnaround 72 Hours Ahead of Critical Path',
    date: 'August 30, 2026',
    readTime: '4 min read',
    image: IMAGES.news[3],
    excerpt:
      'Replacing 4,800 feet of process piping and overhauling three primary heat exchangers on a round-the-clock shift schedule saved the client an estimated $3.2M in downtime.',
    content: [
      'In high-stakes industrial turnarounds, every hour of unpredicted downtime directly erodes facility margins. During the recent scheduled outage at a Gulf Coast refining complex, BVG Mechanical Solutions delivered full unit handover 72 hours early.',
      'Through laser-scanned pre-fabrication in our Houston fabrication facility, spool fit-up error was virtually zero, accelerating on-site welding sequences by 35%.',
    ],
  },
  {
    id: 'apprenticeship-academy-launch',
    category: 'Workforce',
    title: 'Investing in Craft Excellence: BVG Launches Accredited Industrial Trades Academy',
    date: 'August 14, 2026',
    readTime: '3 min read',
    image: IMAGES.news[4],
    excerpt:
      'Full tuition-paid 3-year apprenticeship program offering NCCER certifications, hands-on rigging and pipefitting labs, and guaranteed employment upon graduation.',
    content: [
      'To counter the nationwide skilled craft labor shortage, Business Venture Group Inc. has inaugurated the BVG Industrial Trades Academy, a comprehensive educational initiative designed to build the next generation of certified tradespeople.',
      'Apprentices receive full hourly compensation during classroom and yard training modules, mentorship from 20+ year construction managers, and progressive certifications in structural welding, mechanical alignment, and scaffolding systems.',
    ],
  },
  {
    id: 'robotic-fabrication-investment',
    category: 'Innovation & Tech',
    title: 'BVG Fabrication Installs High-Precision Robotic 3D Beam Plasma Profiling Line',
    date: 'July 22, 2026',
    readTime: '4 min read',
    image: IMAGES.news[5],
    excerpt:
      'New multi-axis robotic equipment allows automated coping, beveling, and bolt-hole slotting with tolerances under 0.5mm, tripling fabrication throughput.',
    content: [
      'BVG Fabrication & Manufacturing has completed installation of a state-of-the-art robotic 3D structural steel profiling cell at its primary 180,000 sq. ft. fabrication facility.',
      'The system interfaces directly with building information models (BIM / Tekla), importing structural details and cutting complex weld preparations with micron-level repeatability.',
    ],
  },
  {
    id: 'top-industrial-contractor-award',
    category: 'Corporate & Growth',
    title: 'BVG Ranked Among Top National Industrial Contractors for Second Consecutive Year',
    date: 'June 29, 2026',
    readTime: '2 min read',
    image: IMAGES.news[6],
    excerpt:
      'Industry publications recognize Business Venture Group for revenue growth, safety performance, and multi-craft operational versatility across the United States.',
    content: [
      'Business Venture Group Inc. has once again been honored as one of the fastest-growing and safest light industrial general contractors in the nation.',
      'The ranking highlights companies demonstrating superior client retention, exemplary OSHA safety statistics, and progressive adoption of lean construction methodologies.',
    ],
  },
  {
    id: 'esg-sustainability-progress',
    category: 'Innovation & Tech',
    title: '2026 ESG Report: Electrifying Equipment Fleets and Slashing Jobsite Material Waste',
    date: 'June 05, 2026',
    readTime: '4 min read',
    image: IMAGES.news[7],
    excerpt:
      'Our annual sustainability audit highlights a 28% reduction in diesel generator reliance through hybrid power skids and 94% jobsite scrap steel recycling rates.',
    content: [
      'Sustainable construction in light industrial environments demands measurable outcomes. BVG has published its 2026 Environmental, Social, and Governance (ESG) progress scorecard.',
      'Key accomplishments include transitioning 40% of small jobsite equipment to zero-emission battery systems, piloting solar-augmented field office trailers, and diversion of thousands of tons of metal and concrete scrap from regional landfills.',
    ],
  },
];

const categories = [
  'All',
  'Project Milestones',
  'Corporate & Growth',
  'Safety Excellence',
  'Innovation & Tech',
  'Workforce',
] as const;

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory =
      activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articlesData.find((a) => a.featured) || articlesData[0];

  return (
    <>
      <PageHero
        title="News & Insights"
        subtitle="Stay updated on our latest project milestones, safety achievements, executive updates, and technical innovations."
        breadcrumbs={[{ label: 'News', href: '/news' }]}
        backgroundImage={IMAGES.heroes.news}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article Section */}
          <FadeIn direction="up">
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                <span className="text-gold font-bold text-xs uppercase tracking-wider">
                  Featured Press Release
                </span>
              </div>

              <div
                onClick={() => setSelectedArticle(featuredArticle)}
                className="group cursor-pointer bg-light rounded-3xl border border-gray-200 overflow-hidden shadow-sm
                           hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12"
              >
                {/* Visual Photography Side */}
                <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] flex flex-col justify-between p-8 sm:p-10 text-white overflow-hidden bg-navy">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/60 to-navy-dark/40" />

                  <div className="relative z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-navy/80 backdrop-blur-md text-xs font-bold text-gold-light tracking-wide uppercase border border-white/10">
                      {featuredArticle.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold mt-6 mb-4 group-hover:text-gold-light transition-colors leading-tight">
                      {featuredArticle.title}
                    </h3>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/20 flex items-center gap-4 text-xs text-white/80">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-gold-light" />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gold-light" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                </div>

                {/* Excerpt side */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-white">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                      Executive Summary
                    </h4>
                    <p className="text-dark/85 text-lg leading-relaxed mb-6 font-medium">
                      {featuredArticle.excerpt}
                    </p>

                    {featuredArticle.stats && (
                      <div className="grid grid-cols-3 gap-4 mb-8 pt-4 border-t border-gray-100">
                        {featuredArticle.stats.map((s) => (
                          <div key={s.label}>
                            <div className="text-xl sm:text-2xl font-black text-navy">{s.value}</div>
                            <div className="text-xs text-muted uppercase mt-0.5">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs font-bold text-navy group-hover:text-gold uppercase tracking-wider flex items-center gap-1 transition-colors">
                      Read Full Press Release
                    </span>
                    <div className="w-10 h-10 rounded-full bg-navy/5 group-hover:bg-gold text-navy flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Filters & Search Toolbar */}
          <div className="mb-10 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between border-b border-gray-200 pb-6">
            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-navy text-white shadow-md'
                      : 'bg-light text-muted hover:text-navy hover:bg-gray-200/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles & updates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-light border border-gray-200 rounded-xl text-sm text-dark placeholder-muted focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
              />
            </div>
          </div>

          {/* Articles Grid with Photography */}
          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center bg-light rounded-2xl border border-gray-200">
              <BookOpen className="w-12 h-12 text-muted mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">No articles found</h3>
              <p className="text-muted text-sm max-w-md mx-auto">
                No articles matched your category or search query. Try clearing filters or searching for something else.
              </p>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <StaggerItem key={article.id}>
                  <div
                    onClick={() => setSelectedArticle(article)}
                    className="card-hover group cursor-pointer bg-white rounded-2xl border border-gray-200 overflow-hidden h-full flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      {/* Real Image Header */}
                      <div className="relative h-52 overflow-hidden bg-navy">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy/30 to-transparent" />
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy/90 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-gold-light border border-white/10">
                          {article.category}
                        </span>
                        <div className="absolute bottom-3 left-4 flex items-center gap-3 text-xs text-white/90">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-gold-light" />
                            {article.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-gold-light" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-navy group-hover:text-gold flex items-center gap-1 transition-colors uppercase tracking-wider">
                        Read Story
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {/* Newsletter Box */}
          <FadeIn delay={0.2} className="mt-20">
            <div className="relative bg-navy rounded-3xl p-8 sm:p-12 text-white overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <Image
                  src={IMAGES.heroes.leadership}
                  alt="Corporate background"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-xs font-bold text-gold uppercase tracking-widest mb-2 block">
                    Media & Communications
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                    Looking for Press Kits or Project Commentary?
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                    Our corporate communications team provides high-resolution project photography,
                    executive briefings, and technical subject matter expertise for trade publications.
                  </p>
                </div>
                <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-bold px-6 py-4 rounded-xl text-sm transition-all shadow-lg shadow-gold/20"
                  >
                    Contact Press Office
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Detail Modal with Real Photography */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-gray-200 relative overflow-hidden"
            >
              {/* Modal Header with Photo */}
              <div className="relative h-64 overflow-hidden bg-navy text-white p-8 flex flex-col justify-between">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  sizes="672px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/70 to-navy-dark/40" />

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute right-4 top-4 p-2 rounded-full bg-navy/80 hover:bg-navy text-white z-20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10">
                  <span className="px-3 py-1 rounded-full bg-navy/80 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-gold-light inline-block mb-3 border border-white/10">
                    {selectedArticle.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold leading-snug">
                    {selectedArticle.title}
                  </h2>
                </div>

                <div className="relative z-10 flex items-center gap-4 text-xs text-white/80">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold-light" />
                    {selectedArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold-light" />
                    {selectedArticle.readTime}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                {selectedArticle.stats && (
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-light rounded-xl border border-gray-200">
                    {selectedArticle.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="text-xl font-bold text-navy">{s.value}</div>
                        <div className="text-xs text-muted mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-4 text-dark/85 leading-relaxed text-base">
                  {selectedArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-muted font-medium">
                    Business Venture Group Inc. Official Communications
                  </span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
