'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HomeIcon, 
  UserGroupIcon, 
  CalendarIcon, 
  PhotoIcon,
  Bars3Icon,
  XMarkIcon,
  PaletteIcon
} from '@heroicons/react/24/outline'
import { 
  HomeIcon as HomeIconSolid, 
  UserGroupIcon as UserGroupIconSolid, 
  CalendarIcon as CalendarIconSolid, 
  PhotoIcon as PhotoIconSolid
} from '@heroicons/react/24/solid'

const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon,
    iconSolid: HomeIconSolid,
  },
  {
    name: 'About Us',
    href: '/about',
    icon: UserGroupIcon,
    iconSolid: UserGroupIconSolid,
  },
  {
    name: 'Events',
    href: '/events',
    icon: CalendarIcon,
    iconSolid: CalendarIconSolid,
  },
  {
    name: 'Gallery',
    href: '/gallery',
    icon: PhotoIcon,
    iconSolid: PhotoIconSolid,
  },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.42-3.321c.873-.873 2.024-1.297 3.321-1.297s2.448.424 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.244c-.873.807-2.024 1.297-3.321 1.297zm7.598-10.652c-.424 0-.807-.163-1.103-.49-.296-.326-.424-.709-.424-1.133 0-.424.128-.807.424-1.103.296-.326.679-.49 1.103-.49.424 0 .807.164 1.103.49.296.296.424.679.424 1.103 0 .424-.128.807-.424 1.133-.296.327-.679.49-1.103.49z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 z-50 h-screen w-[280px] bg-gradient-stanford text-white shadow-2xl hidden lg:flex flex-col">
        {/* Logo Section */}
        <div className="p-8 border-b border-white/10">
          <Link href="/" className="flex items-center group">
            <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:-translate-y-1 transition-all duration-300">
              <PaletteIcon className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">SBCC</span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 py-8">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = isActive ? item.iconSolid : item.icon
              
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-6 py-4 mx-4 rounded-r-3xl transition-all duration-300 group relative ${
                      isActive
                        ? 'bg-white/10 text-white transform translate-x-2 nav-link-active'
                        : 'text-white/80 hover:text-white hover:bg-white/5 hover:translate-x-2'
                    }`}
                  >
                    <Icon className="w-6 h-6 mr-4" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Social Links */}
        <div className="p-6 border-t border-white/10">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-creative-gold hover:-translate-y-1 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-6 left-6 z-50 lg:hidden w-12 h-12 bg-gradient-stanford rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden mobile-nav-overlay"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.nav
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 z-50 h-screen w-[280px] bg-gradient-stanford text-white shadow-2xl lg:hidden flex flex-col"
            >
              {/* Logo Section */}
              <div className="p-8 border-b border-white/10 mt-16">
                <Link href="/" className="flex items-center group" onClick={toggleMobileMenu}>
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                    <PaletteIcon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold tracking-tight">SBCC</span>
                </Link>
              </div>

              {/* Navigation Menu */}
              <div className="flex-1 py-8">
                <ul className="space-y-2">
                  {navigationItems.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = isActive ? item.iconSolid : item.icon
                    
                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={toggleMobileMenu}
                          className={`flex items-center px-6 py-4 mx-4 rounded-r-3xl transition-all duration-300 group relative ${
                            isActive
                              ? 'bg-white/10 text-white transform translate-x-2 nav-link-active'
                              : 'text-white/80 hover:text-white hover:bg-white/5 hover:translate-x-2'
                          }`}
                        >
                          <Icon className="w-6 h-6 mr-4" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Social Links */}
              <div className="p-6 border-t border-white/10">
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-creative-gold hover:-translate-y-1 transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}