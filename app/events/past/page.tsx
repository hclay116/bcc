'use client'

import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  MapPinIcon,
  ClockIcon,
  ArrowLeftIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PastEventsPage() {
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
              <span className="text-[#c0b6e5]">Past</span> Events
            </h1>
            <p className="text-xl text-[#c0b6e5] max-w-3xl mx-auto">
              Relive the amazing moments from our previous events and exhibitions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Past Events Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Sample past events - replace with actual events */}
            {[
              {
                title: "Spring Art Showcase 2024",
                date: "March 15, 2024",
                location: "Stanford Art Gallery",
                description: "A celebration of Black student artists featuring paintings, sculptures, and digital art.",
                image: "/api/placeholder/400/300"
              },
              {
                title: "Poetry Night",
                date: "February 28, 2024",
                location: "Black Community Services Center",
                description: "An evening of spoken word, poetry readings, and open mic performances.",
                image: "/api/placeholder/400/300"
              },
              {
                title: "Creative Workshop Series",
                date: "January 2024",
                location: "Various Campus Locations",
                description: "A month-long series of workshops covering photography, digital art, and creative writing.",
                image: "/api/placeholder/400/300"
              },
              {
                title: "Holiday Art Market",
                date: "December 10, 2023",
                location: "White Plaza",
                description: "A festive market showcasing student artwork and handmade crafts.",
                image: "/api/placeholder/400/300"
              },
              {
                title: "Film Screening & Discussion",
                date: "November 15, 2023",
                location: "Building 200",
                description: "Screening of independent films by Black filmmakers followed by community discussion.",
                image: "/api/placeholder/400/300"
              },
              {
                title: "Fall Photography Exhibition",
                date: "October 20, 2023",
                location: "Cantor Arts Center",
                description: "Exhibition featuring photography work from our community members.",
                image: "/api/placeholder/400/300"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#44334a] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-[#7aa9c0] to-[#c0b6e5] flex items-center justify-center">
                  <div className="text-center text-white">
                    <PhotoIcon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">{event.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex items-center text-sm text-[#7aa9c0] mb-2">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-[#7aa9c0] mb-3">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <p className="text-[#c0b6e5] leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              Want to Be Part of Our Next Event?
            </h2>
            <p className="text-lg text-[#c0b6e5] mb-8">
              Whether you're an artist, performer, or simply want to support our community, 
              there are many ways to get involved in our upcoming events.
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