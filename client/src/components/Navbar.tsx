import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import Logo from './Logo';
import { NAV } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Navbar background
  const solid = scrolled || open || pathname !== '/';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid
          ? 'bg-navy-950/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* ==================== LOGO ==================== */}
        <Link
          to="/"
          className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-90"
          aria-label="Fenvora Infotech Pvt. Ltd. Home"
        >
          <Logo />
        </Link>

        {/* ==================== DESKTOP NAVIGATION ==================== */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map(([label, to]) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `border-b-2 pb-1 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'border-accent text-white'
                      : 'border-transparent text-slate-300 hover:border-accent/50 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ==================== DESKTOP CTA ==================== */}
        <Link
          to="/contact"
          className="btn-primary hidden lg:inline-flex"
        >
          Get Started
        </Link>

        {/* ==================== MOBILE MENU BUTTON ==================== */}
        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((previous) => !previous)}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* ==================== MOBILE NAVIGATION ==================== */}
      {open && (
        <div className="border-t border-white/10 bg-navy-950/98 shadow-xl backdrop-blur-md lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-5 pb-5 pt-3 sm:px-6">
            {NAV.map(([label, to]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? 'bg-navy-800 text-accent'
                        : 'text-slate-200 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}

            {/* Mobile CTA */}
            <li>
              <Link
                to="/contact"
                className="btn-primary mt-3 w-full justify-center"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}