'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  PaintBrushIcon, 
  HandRaisedIcon, 
  SpeakerWaveIcon,
  CheckIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Sample data (in a real app, this would come from a CMS or API)
const featuredArtists = [
  {
    id: 1,
    name: 'Maya Johnson',
    medium: 'Digital Art & Photography',
    bio: 'Exploring identity and culture through vibrant digital compositions and portrait photography.',
    image: '/api/placeholder/300/250'
  },
  {
    id: 2,
    name: 'Marcus Williams',
    medium: 'Sculpture & Installation',
    bio: 'Creating powerful installations that speak to the Black experience in contemporary America.',
    image: '/api/placeholder/300/250'
  },
  {
    id: 3,
    name: 'Zara Davis',
    medium: 'Painting & Mixed Media',
    bio: 'Blending traditional techniques with modern themes to tell stories of resilience and joy.',
    image: '/api/placeholder/300/250'
  }
]

const upcomingEvents = [
  {
    id: 1,
    title: 'Black History Month Art Exhibition',
    date: '2024-02-15',
    time: '6:00 PM - 9:00 PM',
    description: 'Join us for our annual exhibition celebrating Black artists and their contributions to contemporary art.'
  },
  {
    id: 2,
    title: 'Creative Writing Workshop',
    date: '2024-02-22',
    time: '2:00 PM - 4:00 PM',
    description: 'A hands-on workshop exploring storytelling techniques and narrative voice with published author Sarah Mitchell.'
  }
]

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [featuredRef, featuredInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [eventsRef, eventsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [involvedRef, involvedInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center bg-gradient-psychedelic-main relative overflow-hidden grain-texture">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-electric-glow opacity-20 transform skew-x-12 origin-top-right y2k-blur" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-teal-swirl opacity-15 transform -skew-x-12 origin-bottom-left" />
        
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            {/* Hero Text */}
            <motion.div variants={itemVariants} className="space-y-8 z-10 relative">
              <h1 className="text-4xl lg:text-6xl font-bold text-psychedelic-soft-white leading-tight text-curved-serif">
                Stanford{' '}
                <span className="text-psychedelic-glow retro-glow">BLACK</span>{' '}
                <span className="text-psychedelic-neon-mint">CREATIVE</span>{' '}
                <span className="text-psychedelic-electric-lavender">COLLECTIVE</span>
              </h1>
              <p className="text-xl lg:text-2xl text-psychedelic-soft-white/90 leading-relaxed">
                Celebrating and amplifying Black creativity, culture, and artistic excellence at Stanford University
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary inline-flex items-center justify-center">
                  Learn More
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/gallery" className="btn-secondary inline-flex items-center justify-center">
                  View Gallery
                </Link>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div variants={itemVariants} className="flex justify-center z-10 relative">
              <div className="relative w-80 h-80">
                <div className="absolute w-48 h-48 bg-gradient-teal-swirl rounded-3xl shadow-neon-glow animate-float retro-glow" />
                <div className="absolute w-32 h-32 bg-gradient-electric-glow rounded-3xl shadow-psychedelic top-16 right-0 animate-float-delayed" />
                <div className="absolute w-28 h-28 bg-gradient-dusty-violet rounded-3xl shadow-neon-glow bottom-0 left-1/2 transform -translate-x-1/2 animate-float-delayed-2" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fostering a vibrant community of Black creatives at Stanford
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: PaintBrushIcon,
                  title: 'Create',
                  description: 'Providing platforms and resources for Black artists to express their creativity and share their unique perspectives.',
                  gradient: 'bg-gradient-stanford'
                },
                {
                  icon: HandRaisedIcon,
                  title: 'Connect',
                  description: 'Building bridges between artists, fostering collaboration, and creating lasting professional and personal relationships.',
                  gradient: 'bg-gradient-purple'
                },
                {
                  icon: SpeakerWaveIcon,
                  title: 'Amplify',
                  description: 'Elevating Black voices in the arts and ensuring our stories and experiences are heard throughout the Stanford community.',
                  gradient: 'bg-gradient-teal'
                }
              ].map((mission, index) => (
                <motion.div
                  key={mission.title}
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 shadow-lg card-hover"
                >
                  <div className={`w-20 h-20 ${mission.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <mission.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{mission.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{mission.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Artists Preview */}
      <section ref={featuredRef} className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Artists</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the incredible talent within our community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {featuredArtists.map((artist, index) => (
                <motion.div
                  key={artist.id}
                  variants={itemVariants}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover"
                >
                  <div className="h-64 bg-gradient-creative" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{artist.name}</h3>
                    <p className="text-stanford-red font-semibold mb-3">{artist.medium}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{artist.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center">
              <Link href="/gallery" className="btn-outline inline-flex items-center">
                View Full Gallery
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section ref={eventsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us for workshops, exhibitions, and community gatherings
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover"
                >
                  <div className="bg-gradient-stanford text-white p-6 text-center">
                    <div className="text-3xl font-bold">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-sm opacity-90">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{event.time}</p>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center">
              <Link href="/events" className="btn-outline inline-flex items-center">
                View All Events
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section ref={involvedRef} className="py-20 bg-gradient-stanford text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={involvedInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold">Get Involved</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Whether you're an artist, supporter, or simply curious about our community, there are many ways to connect with the Stanford Black Creative Collective.
              </p>
              <ul className="space-y-4">
                {[
                  'Attend our events and workshops',
                  'Submit your work for our gallery',
                  'Collaborate with fellow artists',
                  'Join our mailing list for updates'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-white/90">
                    <CheckIcon className="w-6 h-6 text-creative-gold mr-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about#contact" className="btn-secondary inline-flex items-center">
                Contact Us
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute w-24 h-24 bg-creative-gold rounded-full top-0 left-0 animate-pulse-slow opacity-80" />
                <div className="absolute w-20 h-20 bg-gradient-teal rounded-full top-12 right-0 animate-pulse-slow-delayed opacity-70" />
                <div className="absolute w-32 h-32 bg-white/20 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 animate-pulse-slow-delayed-2" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stanford Black Creative Collective</h3>
              <p className="text-gray-400 leading-relaxed">
                Celebrating Black creativity and culture at Stanford University
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-creative-gold transition-colors">About Us</Link></li>
                <li><Link href="/events" className="text-gray-400 hover:text-creative-gold transition-colors">Events</Link></li>
                <li><Link href="/gallery" className="text-gray-400 hover:text-creative-gold transition-colors">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/blackcreativeco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-electric-glow transition-all duration-300 retro-glow"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.42-3.321c.873-.873 2.024-1.297 3.321-1.297s2.448.424 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.244c-.873.807-2.024 1.297-3.321 1.297zm7.598-10.652c-.424 0-.807-.163-1.103-.49-.296-.326-.424-.709-.424-1.133 0-.424.128-.807.424-1.103.296-.326.679-.49 1.103-.49.424 0 .807.164 1.103.49.296.296.424.679.424 1.103 0 .424-.128.807-.424 1.133-.296.327-.679.49-1.103.49z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Stanford Black Creative Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}