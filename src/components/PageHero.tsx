'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
  backgroundImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage = 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=2200&q=85',
}: PageHeroProps) {
  return (
    <section className="relative min-h-[380px] md:min-h-[460px] flex items-end overflow-hidden bg-navy">
      {/* Background Photography with Next.js Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 animate-subtle-zoom"
          />
          {/* Multi-layered cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy-dark/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/50 to-transparent" />
        </div>
      )}

      {/* Industrial geometric grid accent */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 pt-36">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-xs sm:text-sm mb-6"
          >
            <Link href="/" className="text-white/60 hover:text-gold transition-colors font-medium">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-gold font-semibold tracking-wide">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="text-white/60 hover:text-gold transition-colors font-medium">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 backdrop-blur-md border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Business Venture Group Inc.
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-[1.15]">
            {title}
          </h1>

          {subtitle && (
            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
