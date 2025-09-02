import React, { useState } from 'react'
import { PiFlowerLotus, PiSun, PiMoon } from 'react-icons/pi'
import { useTheme } from '../hooks/use-theme'

type NavLink = {
  label: string
  href: string
  ariaLabel: string
}

export interface CardNavProps {
  logo?: string
  logoAlt?: string
  className?: string
}

const CardNav: React.FC<CardNavProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks: NavLink[] = [
    { label: 'About', href: '#about', ariaLabel: 'About section' },
    {
      label: 'Experience',
      href: '#experience',
      ariaLabel: 'Experience section'
    },
    { label: 'Projects', href: '#repos', ariaLabel: 'Projects section' },
    { label: 'Contact', href: '#contact', ariaLabel: 'Contact section' }
  ]

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    const hashIndex = href.indexOf('#')
    if (hashIndex === -1) return

    const fragment = href.slice(hashIndex + 1)
    if (!fragment) return

    const targetEl = document.getElementById(fragment)
    if (targetEl) {
      e.preventDefault()
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div
      className={`fixed left-1/2 top-6 z-50 w-[90%] max-w-4xl -translate-x-1/2 ${className}`}
    >
      <nav
        className="flex items-center justify-between rounded-full px-6 py-4 backdrop-blur-md transition-all duration-300"
        style={{
          backgroundColor:
            theme === 'light'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.3)',
          border:
            theme === 'light'
              ? '1px solid rgba(255, 255, 255, 0.2)'
              : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow:
            theme === 'light'
              ? '0 8px 32px rgba(0, 0, 0, 0.1)'
              : '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <PiFlowerLotus
            className="h-6 w-6"
            style={{ color: theme === 'light' ? '#000' : '#fff' }}
          />
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ color: theme === 'light' ? '#000' : '#fff' }}
          >
            Pedro Matumoto
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium transition-opacity duration-200 hover:opacity-70"
              style={{ color: theme === 'light' ? '#000' : '#fff' }}
              aria-label={link.ariaLabel}
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor:
                theme === 'light'
                  ? 'rgba(0, 0, 0, 0.1)'
                  : 'rgba(255, 255, 255, 0.1)'
            }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <PiMoon
                className="h-4 w-4"
                style={{ color: theme === 'light' ? '#000' : '#fff' }}
              />
            ) : (
              <PiSun
                className="h-4 w-4"
                style={{ color: theme === 'light' ? '#000' : '#fff' }}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-full md:hidden"
          style={{
            backgroundColor:
              theme === 'light'
                ? 'rgba(0, 0, 0, 0.1)'
                : 'rgba(255, 255, 255, 0.1)'
          }}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="flex flex-col gap-1">
            <div
              className={`h-0.5 w-4 rounded-full transition-transform duration-200 ${
                isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
              style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}
            />
            <div
              className={`h-0.5 w-4 rounded-full transition-transform duration-200 ${
                isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
              style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="mt-2 rounded-2xl p-4 backdrop-blur-md md:hidden"
          style={{
            backgroundColor:
              theme === 'light'
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(0, 0, 0, 0.3)',
            border:
              theme === 'light'
                ? '1px solid rgba(255, 255, 255, 0.2)'
                : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow:
              theme === 'light'
                ? '0 8px 32px rgba(0, 0, 0, 0.1)'
                : '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  handleLinkClick(e, link.href)
                  setIsMobileMenuOpen(false)
                }}
                className="text-sm font-medium transition-opacity duration-200 hover:opacity-70"
                style={{ color: theme === 'light' ? '#000' : '#fff' }}
                aria-label={link.ariaLabel}
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center justify-between pt-2">
              <span
                className="text-sm font-medium"
                style={{ color: theme === 'light' ? '#000' : '#fff' }}
              >
                Theme
              </span>
              <button
                onClick={toggleTheme}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor:
                    theme === 'light'
                      ? 'rgba(0, 0, 0, 0.1)'
                      : 'rgba(255, 255, 255, 0.1)'
                }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <PiMoon
                    className="h-4 w-4"
                    style={{ color: theme === 'light' ? '#000' : '#fff' }}
                  />
                ) : (
                  <PiSun
                    className="h-4 w-4"
                    style={{ color: theme === 'light' ? '#000' : '#fff' }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardNav
