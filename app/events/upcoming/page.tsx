'use client'

import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  MapPinIcon,
  ClockIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function UpcomingEventsPage() {
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
            <Link
              href="/events"
              className="inline-flex items-center text-[#c0b6e5] hover:text-[#ac84ac] mb-8"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Events
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-[#c0b6e5]">Upcoming</span> Events
            </h1>
            <p className="text-xl text-[#c0b6e5] max-w-3xl mx-auto">
              Stay tuned for exciting events coming soon!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instagram Follow Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#44334a] rounded-2xl shadow-xl p-12 text-center"
          >
            <svg className="w-20 h-20 text-[#ac84ac] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.42-3.321c.873-.873 2.024-1.297 3.321-1.297s2.448.424 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.244c-.873.807-2.024 1.297-3.321 1.297zm7.598-10.652c-.424 0-.807-.163-1.103-.49-.296-.326-.424-.709-.424-1.133 0-.424.128-.807.424-1.103.296-.326.679-.49 1.103-.49.424 0 .807.164 1.103.49.296.296.424.679.424 1.103 0 .424-.128.807-.424 1.133-.296.327-.679.49-1.103.49z"/>
            </svg>
            <h2 className="text-3xl font-bold text-white mb-4">
              Follow Us on Instagram for Updates!
            </h2>
            <p className="text-lg text-[#c0b6e5] mb-8 max-w-2xl mx-auto">
              We're planning exciting events for the upcoming quarter. Follow us on Instagram to be the first to know about new workshops, exhibitions, performances, and community gatherings!
            </p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4f8489] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalendarIcon className="w-8 h-8 text-[#c0b6e5]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Event Announcements</h3>
                  <p className="text-sm text-[#7aa9c0]">Be the first to know about new events</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4f8489] rounded-full flex items-center justify-center mx-auto mb-4">
                    <ClockIcon className="w-8 h-8 text-[#c0b6e5]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Real-time Updates</h3>
                  <p className="text-sm text-[#7aa9c0]">Get instant notifications about changes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4f8489] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPinIcon className="w-8 h-8 text-[#c0b6e5]" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Behind the Scenes</h3>
                  <p className="text-sm text-[#7aa9c0]">See our community in action</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a
                href="https://www.instagram.com/blackcreativeco/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#7aa9c0] to-[#c0b6e5] text-[#08080a] px-8 py-4 rounded-lg font-semibold hover:from-[#c0b6e5] hover:to-[#ac84ac] transition-all duration-300 text-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.42-3.321c.873-.873 2.024-1.297 3.321-1.297s2.448.424 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.244c-.873.807-2.024 1.297-3.321 1.297zm7.598-10.652c-.424 0-.807-.163-1.103-.49-.296-.326-.424-.709-.424-1.133 0-.424.128-.807.424-1.103.296-.326.679-.49 1.103-.49.424 0 .807.164 1.103.49.296.296.424.679.424 1.103 0 .424-.128.807-.424 1.133-.296.327-.679.49-1.103.49z"/>
                </svg>
                Follow @blackcreativeco
              </a>
            </div>
            
            <p className="text-sm text-[#7aa9c0] mt-6">
              We'll be announcing our Spring 2024 events soon!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#4f8489]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Have an Event Idea?
            </h2>
            <p className="text-lg text-[#c0b6e5] mb-8">
              We're always open to new ideas and collaborations. If you have a creative event in mind, 
              we'd love to hear from you!
            </p>
            <a
              href="mailto:sbcc@stanford.edu"
              className="inline-flex items-center bg-[#c0b6e5] text-[#08080a] px-6 py-3 rounded-lg font-semibold hover:bg-[#ac84ac] transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 