'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  CalendarIcon, 
  MapPinIcon,
  UserGroupIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function AboutPage() {
  const [email, setEmail] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleMailingListSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle mailing list signup
    console.log('Mailing list signup:', email)
    setEmail('')
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle contact form submission
    console.log('Contact form:', contactForm)
    setContactForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-[#08080a]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#c0b6e5]">Stanford Black Creative Collective</span>
            </h1>
            <p className="text-xl text-[#c0b6e5] max-w-3xl mx-auto">
              Celebrating and amplifying Black creativity, culture, and artistic excellence at Stanford University
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Placeholder images - replace with actual photos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-[#7aa9c0] to-[#c0b6e5] rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <UserGroupIcon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Event Photo {i}</p>
                    <p className="text-sm opacity-80">Spring 2024</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#44334a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[#c0b6e5] mb-6">
                We are a vibrant community dedicated to fostering Black creativity and artistic expression at Stanford. 
                Through events, workshops, and collaborative projects, we create spaces where Black students can showcase 
                their talents and build meaningful connections.
              </p>
              <div className="flex items-center space-x-4">
                <HeartIcon className="w-8 h-8 text-[#c0b6e5]" />
                <span className="text-lg font-medium text-white">Building Community Through Art</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#7aa9c0] to-[#c0b6e5] rounded-2xl p-8 text-[#08080a]">
                <SparklesIcon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="text-lg mb-6">
                  Stay connected with our latest events, workshops, and creative opportunities.
                </p>
                <form onSubmit={handleMailingListSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#08080a] text-[#c0b6e5] px-6 py-3 rounded-lg font-semibold hover:bg-[#44334a] transition-colors"
                  >
                    Join Our Mailing List
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Tap in.</h2>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#c0b6e5] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[#4f8489] rounded-lg focus:ring-2 focus:ring-[#c0b6e5] focus:border-transparent bg-[#44334a] text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[#c0b6e5] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[#4f8489] rounded-lg focus:ring-2 focus:ring-[#c0b6e5] focus:border-transparent bg-[#44334a] text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#c0b6e5] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 border border-[#4f8489] rounded-lg focus:ring-2 focus:ring-[#c0b6e5] focus:border-transparent bg-[#44334a] text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#c0b6e5] text-[#08080a] px-6 py-3 rounded-lg font-semibold hover:bg-[#ac84ac] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Floating Info Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-[#44334a] rounded-2xl shadow-xl p-8 border border-[#4f8489]">
                <h3 className="text-2xl font-bold text-white mb-6">Contact & Meeting Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <EnvelopeIcon className="w-6 h-6 text-[#c0b6e5] mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-[#7aa9c0]">sbcc@stanford.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CalendarIcon className="w-6 h-6 text-[#c0b6e5] mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Meeting Times</h4>
                      <p className="text-[#7aa9c0]">Every Tuesday at 7:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="w-6 h-6 text-[#c0b6e5] mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-[#7aa9c0]">Black Community Services Center</p>
                      <p className="text-[#7aa9c0]">Stanford University</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-[#4f8489] rounded-lg">
                  <p className="text-sm text-[#08080a]">
                    <strong>Note:</strong> All students are welcome to attend our meetings and events, 
                    regardless of their background or experience level.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}