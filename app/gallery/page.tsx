'use client'

import { motion } from 'framer-motion'
import { 
  PhotoIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function GalleryPage() {
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
              Our <span className="text-[#c0b6e5]">Gallery</span>
            </h1>
            <p className="text-xl text-[#c0b6e5] max-w-3xl mx-auto">
              Explore the incredible work of our community artists
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Placeholder gallery items - replace with actual artwork */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-[#7aa9c0] to-[#c0b6e5] rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <PhotoIcon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Artwork {i}</p>
                    <p className="text-sm opacity-80">Artist Name</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#44334a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Want to Showcase Your Work?
            </h2>
            <p className="text-lg text-[#c0b6e5] mb-8">
              We're always looking for new artists to feature in our gallery. 
              Submit your work and join our creative community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sbcc@stanford.edu"
                className="inline-flex items-center bg-[#c0b6e5] text-[#08080a] px-6 py-3 rounded-lg font-semibold hover:bg-[#ac84ac] transition-colors"
              >
                Submit Your Work
                <ArrowRightIcon className="w-5 h-5 ml-2" />
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