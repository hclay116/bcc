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
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { 
  HomeIcon as HomeIconSolid, 
  UserGroupIcon as UserGroupIconSolid, 
  CalendarIcon as CalendarIconSolid, 
  PhotoIcon as PhotoIconSolid
} from '@heroicons/react/24/solid'

const navigationItems = [
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
    hasDropdown: true,
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
    href: 'https://www.instagram.com/blackcreativeco/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.42-3.321c.873-.873 2.024-1.297 3.321-1.297s2.448.424 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.244c-.873.807-2.024 1.297-3.321 1.297zm7.598-10.652c-.424 0-.807-.163-1.103-.49-.296-.326-.424-.709-.424-1.133 0-.424.128-.807.424-1.103.296-.326.679-.49 1.103-.49.424 0 .807.164 1.103.49.296.296.424.679.424 1.103 0 .424-.128.807-.424 1.133-.296.327-.679.49-1.103.49z"/>
      </svg>
    ),
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleEventsDropdown = () => {
    setEventsDropdownOpen(!eventsDropdownOpen)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08080a] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-[#7aa9c0] to-[#c0b6e5] rounded-lg flex items-center justify-center hover:from-[#c0b6e5] hover:to-[#ac84ac] transition-all duration-300 cursor-pointer">
                <span className="text-[#08080a] font-bold text-lg">BCC</span>
              </div>
            </Link>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = isActive ? item.iconSolid : item.icon
                
                if (item.hasDropdown) {
                  return (
                    <div key={item.name} className="relative">
                      <button
                        onClick={toggleEventsDropdown}
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-[#c0b6e5] bg-[#44334a]'
                            : 'text-[#7aa9c0] hover:text-[#c0b6e5] hover:bg-[#44334a]'
                        }`}
                      >
                        <Icon className="w-5 h-5 mr-2" />
                        {item.name}
                        <ChevronDownIcon className="w-4 h-4 ml-1" />
                      </button>
                      
                      <AnimatePresence>
                        {eventsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-[#44334a] rounded-md shadow-lg py-1 z-50"
                          >
                            <Link
                              href="/events/upcoming"
                              className="block px-4 py-2 text-sm text-[#7aa9c0] hover:text-[#c0b6e5] hover:bg-[#4f8489]"
                              onClick={() => setEventsDropdownOpen(false)}
                            >
                              Upcoming Events
                            </Link>
                            <Link
                              href="/events/past"
                              className="block px-4 py-2 text-sm text-[#7aa9c0] hover:text-[#c0b6e5] hover:bg-[#4f8489]"
                              onClick={() => setEventsDropdownOpen(false)}
                            >
                              Past Events
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#c0b6e5] bg-[#44334a]'
                        : 'text-[#7aa9c0] hover:text-[#c0b6e5] hover:bg-[#44334a]'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-[#44334a] flex items-center justify-center text-[#7aa9c0] hover:text-[#c0b6e5] hover:bg-[#4f8489] transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 bg-[#44334a] rounded-lg flex items-center justify-center text-[#7aa9c0] hover:text-[#c0b6e5] hover:bg-[#4f8489] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

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
                className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-50"
                onClick={toggleMobileMenu}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute top-full left-0 right-0 z-50 bg-[#08080a] shadow-lg md:hidden"
              >
                <div className="px-4 py-6 space-y-4">
                  {navigationItems.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = isActive ? item.iconSolid : item.icon
                    
                    if (item.hasDropdown) {
                      return (
                        <div key={item.name}>
                          <button
                            onClick={toggleEventsDropdown}
                            className={`flex items-center w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                              isActive
                                ? 'text-[#c0b6e5] bg-[#44334a]'
                                : 'text-[#7aa9c0] hover:text-[#c0b6e5] hover:bg-[#44334a]'
                            }`}
                          >
                            <Icon className="w-5 h-5 mr-2" />
                            {item.name}
                            <ChevronDownIcon className="w-4 h-4 ml-auto" />
                          </button>
                          
                          <AnimatePresence>
                            {eventsDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-6 mt-2 space-y-2"
                              >
                                <Link
                                  href="/events/upcoming"
                                  className="block px-3 py-2 text-sm text-[#7aa9c0] hover:text-[#c0b6e5]"
                                  onClick={toggleMobileMenu}
                                >
                                  Upcoming Events
                                </Link>
                                <Link
                                  href="/events/past"
                                  className="block px-3 py-2 text-sm text-[#7aa9c0] hover:text-[#c0b6e5]"
                                  onClick={toggleMobileMenu}
                                >
                                  Past Events
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    }
                    
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={toggleMobileMenu}
                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive
                            ? 'text-[#c0b6e5] bg-[#44334a]'
                            : 'text-[#7aa9c0] hover:text-[#c0b6e5] hover:bg-[#44334a]'
                        }`}
                      >
                        <Icon className="w-5 h-5 mr-2" />
                        {item.name}
                      </Link>
                    )
                  })}
                  
                  {/* Mobile Social Links */}
                  <div className="flex space-x-4 pt-4 border-t border-[#44334a]">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-8 h-8 rounded-full bg-[#44334a] flex items-center justify-center text-[#7aa9c0] hover:text-[#c0b6e5] hover:bg-[#4f8489] transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}