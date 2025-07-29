'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  CalendarIcon, 
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function EventsPage() {
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
              Our <span className="text-[#c0b6e5]">Events</span>
            </h1>
            <p className="text-xl text-[#c0b6e5] max-w-3xl mx-auto">
              Join us for workshops, exhibitions, performances, and community gatherings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#44334a] rounded-2xl shadow-xl p-8"
            >
              <div className="text-center mb-8">
                <CalendarIcon className="w-16 h-16 text-[#c0b6e5] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
                <p className="text-[#7aa9c0]">
                  Follow us on Instagram for the latest updates and announcements!
                </p>
              </div>
              
              <div className="text-center py-8">
                <svg className="w-12 h-12 text-[#ac84ac] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.42-3.321c.873-.873 2.024-1.297 3.321-1.297s2.448.424 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.244c-.873.807-2.024 1.297-3.321 1.297zm7.598-10.652c-.424 0-.807-.163-1.103-.49-.296-.326-.424-.709-.424-1.133 0-.424.128-.807.424-1.103.296-.326.679-.49 1.103-.49.424 0 .807.164 1.103.49.296.296.424.679.424 1.103 0 .424-.128.807-.424 1.133-.296.327-.679.49-1.103.49z"/>
                </svg>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-[#7aa9c0] mb-6">
                  We're planning exciting events for the upcoming quarter. Follow us on Instagram to be the first to know!
                </p>
                <a
                  href="https://www.instagram.com/blackcreativeco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#7aa9c0] to-[#c0b6e5] text-[#08080a] px-6 py-3 rounded-lg font-semibold hover:from-[#c0b6e5] hover:to-[#ac84ac] transition-all duration-300"
                >
                  Follow on Instagram
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Past Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#44334a] rounded-2xl shadow-xl p-8"
            >
              <div className="text-center mb-8">
                <CalendarIcon className="w-16 h-16 text-[#c0b6e5] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Past Events</h2>
                <p className="text-[#7aa9c0]">
                  Relive the amazing moments from our previous events
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Sample past events - replace with actual events */}
                {[
                  {
                    title: "Spring Art Showcase 2024",
                    date: "March 15, 2024",
                    location: "Stanford Art Gallery",
                    description: "A celebration of Black student artists featuring paintings, sculptures, and digital art."
                  },
                  {
                    title: "Poetry Night",
                    date: "February 28, 2024",
                    location: "Black Community Services Center",
                    description: "An evening of spoken word, poetry readings, and open mic performances."
                  },
                  {
                    title: "Creative Workshop Series",
                    date: "January 2024",
                    location: "Various Campus Locations",
                    description: "A month-long series of workshops covering photography, digital art, and creative writing."
                  }
                ].map((event, index) => (
                  <div key={index} className="border border-[#4f8489] rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-white mb-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-[#7aa9c0] mb-2">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-[#7aa9c0] mb-3">
                      <MapPinIcon className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <p className="text-[#c0b6e5] text-sm">{event.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link
                  href="/events/past"
                  className="inline-flex items-center text-[#c0b6e5] hover:text-[#ac84ac] font-semibold"
                >
                  View All Past Events
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#4f8489]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Want to Get Involved?
            </h2>
            <p className="text-lg text-[#c0b6e5] mb-8">
              Whether you're an artist, performer, or simply want to support our community, 
              there are many ways to participate in our events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sbcc@stanford.edu"
                className="inline-flex items-center bg-[#c0b6e5] text-[#08080a] px-6 py-3 rounded-lg font-semibold hover:bg-[#ac84ac] transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://www.instagram.com/blackcreativeco/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#7aa9c0] text-[#08080a] px-6 py-3 rounded-lg font-semibold hover:bg-[#4f8489] transition-colors"
              >
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 