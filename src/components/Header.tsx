'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  {
    label: 'Leadership',
    href: '/leadership',
    children: [
      { label: 'Executive Team', href: '/leadership' },
      { label: 'Operations Management', href: '/leadership/operations-management' },
      { label: 'Construction Managers', href: '/leadership/construction-managers' },
    ],
  },
  { label: 'Our Companies', href: '/companies' },
  { label: 'News', href: '/news' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center font-bold text-navy text-lg
                          group-hover:scale-105 transition-transform duration-300">
            BV
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-tight tracking-tight">
              Business Venture
            </span>
            <span className="text-gold text-xs font-medium tracking-widest uppercase">
              Group Inc.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="nav-link text-white/80 hover:text-white px-4 py-2 text-sm font-medium
                           transition-colors duration-200 flex items-center gap-1"
              >
                {link.label}
                {link.children && (
                  <ChevronDown className={clsx(
                    'w-3.5 h-3.5 transition-transform duration-200',
                    activeDropdown === link.label && 'rotate-180'
                  )} />
                )}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[220px] overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gold/10 hover:text-navy
                                     transition-colors duration-150 font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-2.5 rounded-lg
                       text-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.label ? null : link.label
                          )
                        }
                        className="w-full flex items-center justify-between text-white/80 hover:text-white
                                   py-3 px-4 rounded-lg hover:bg-white/5 transition-colors text-base font-medium"
                      >
                        {link.label}
                        <ChevronDown
                          className={clsx(
                            'w-4 h-4 transition-transform duration-200',
                            activeDropdown === link.label && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2.5 px-4 text-white/60 hover:text-gold text-sm
                                           transition-colors duration-150"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-white/80 hover:text-white py-3 px-4 rounded-lg
                                 hover:bg-white/5 transition-colors text-base font-medium"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-gold hover:bg-gold-light text-navy font-semibold
                             px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
