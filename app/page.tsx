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
    <div className="min-h-screen bg-[#08080a]">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center bg-[#44334a] relative overflow-hidden">
        {/* Wavy animated backgrounds */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              y: [0, -40, 0],
              rotate: [0, 3, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <svg viewBox="0 0 1200 800" className="w-full h-full">
              <defs>
                <pattern id="grain1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="#7aa9c0" opacity="0.3"/>
                  <circle cx="5" cy="5" r="0.5" fill="#c0b6e5" opacity="0.2"/>
                  <circle cx="15" cy="15" r="0.8" fill="#ac84ac" opacity="0.25"/>
                  <circle cx="8" cy="12" r="0.3" fill="#4d716c" opacity="0.2"/>
                </pattern>
                <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7aa9c0" />
                  <stop offset="20%" stopColor="#c0b6e5" />
                  <stop offset="40%" stopColor="#ac84ac" />
                  <stop offset="60%" stopColor="#4f8489" />
                  <stop offset="80%" stopColor="#4d716c" />
                  <stop offset="100%" stopColor="#7aa9c0" />
                </linearGradient>
              </defs>
              <path
                d="M0,150 Q200,50 400,150 T800,150 T1200,150 L1200,800 L0,800 Z"
                fill="url(#wave1)"
                opacity="0.4"
              />
              <path
                d="M0,200 Q300,100 600,200 T1200,200 L1200,800 L0,800 Z"
                fill="url(#grain1)"
                opacity="0.6"
              />
            </svg>
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -2, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <svg viewBox="0 0 1200 800" className="w-full h-full">
              <defs>
                <pattern id="grain2" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                  <circle cx="7.5" cy="7.5" r="0.8" fill="#c0b6e5" opacity="0.4"/>
                  <circle cx="3" cy="3" r="0.4" fill="#ac84ac" opacity="0.3"/>
                  <circle cx="12" cy="12" r="0.6" fill="#4f8489" opacity="0.35"/>
                  <circle cx="6" cy="10" r="0.2" fill="#4d716c" opacity="0.25"/>
                </pattern>
                <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#c0b6e5" />
                  <stop offset="30%" stopColor="#ac84ac" />
                  <stop offset="60%" stopColor="#4f8489" />
                  <stop offset="90%" stopColor="#7aa9c0" />
                  <stop offset="100%" stopColor="#c0b6e5" />
                </linearGradient>
              </defs>
              <path
                d="M0,250 Q400,150 800,250 T1200,250 L1200,800 L0,800 Z"
                fill="url(#wave2)"
                opacity="0.3"
              />
              <path
                d="M0,300 Q500,200 1000,300 T1200,300 L1200,800 L0,800 Z"
                fill="url(#grain2)"
                opacity="0.5"
              />
            </svg>
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 2.5, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8
            }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <svg viewBox="0 0 1200 800" className="w-full h-full">
              <defs>
                <pattern id="grain3" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                  <circle cx="12.5" cy="12.5" r="1.2" fill="#ac84ac" opacity="0.35"/>
                  <circle cx="6" cy="6" r="0.6" fill="#4f8489" opacity="0.3"/>
                  <circle cx="19" cy="19" r="0.9" fill="#7aa9c0" opacity="0.4"/>
                  <circle cx="3" cy="18" r="0.4" fill="#c0b6e5" opacity="0.25"/>
                  <circle cx="15" cy="8" r="0.3" fill="#4d716c" opacity="0.3"/>
                </pattern>
                <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ac84ac" />
                  <stop offset="17%" stopColor="#4f8489" />
                  <stop offset="33%" stopColor="#7aa9c0" />
                  <stop offset="50%" stopColor="#c0b6e5" />
                  <stop offset="67%" stopColor="#4d716c" />
                  <stop offset="83%" stopColor="#ac84ac" />
                  <stop offset="100%" stopColor="#4f8489" />
                </linearGradient>
              </defs>
              <path
                d="M0,350 Q600,250 1200,350 L1200,800 L0,800 Z"
                fill="url(#wave3)"
                opacity="0.25"
              />
              <path
                d="M0,400 Q700,300 1200,400 L1200,800 L0,800 Z"
                fill="url(#grain3)"
                opacity="0.4"
              />
            </svg>
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -1.5, 0]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 12
            }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <svg viewBox="0 0 1200 800" className="w-full h-full">
              <defs>
                <pattern id="grain4" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                  <circle cx="9" cy="9" r="0.7" fill="#4f8489" opacity="0.3"/>
                  <circle cx="4" cy="4" r="0.3" fill="#7aa9c0" opacity="0.25"/>
                  <circle cx="14" cy="14" r="0.5" fill="#c0b6e5" opacity="0.35"/>
                  <circle cx="2" cy="15" r="0.2" fill="#ac84ac" opacity="0.2"/>
                  <circle cx="11" cy="6" r="0.25" fill="#4d716c" opacity="0.25"/>
                </pattern>
                <linearGradient id="wave4" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4f8489" />
                  <stop offset="20%" stopColor="#7aa9c0" />
                  <stop offset="40%" stopColor="#c0b6e5" />
                  <stop offset="60%" stopColor="#ac84ac" />
                  <stop offset="80%" stopColor="#4d716c" />
                  <stop offset="100%" stopColor="#4f8489" />
                </linearGradient>
              </defs>
              <path
                d="M0,450 Q800,350 1200,450 L1200,800 L0,800 Z"
                fill="url(#wave4)"
                opacity="0.2"
              />
              <path
                d="M0,500 Q900,400 1200,500 L1200,800 L0,800 Z"
                fill="url(#grain4)"
                opacity="0.3"
              />
            </svg>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            {/* Hero Text */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Stanford{' '}
                <span className="text-[#c0b6e5]">BLACK</span>{' '}
                <span className="text-[#7aa9c0]">CREATIVE</span>{' '}
                <span className="text-[#ac84ac]">COLLECTIVE</span>
              </h1>
                  <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Celebrating and amplifying Black creativity, culture, and artistic excellence at Stanford University
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="bg-[#c0b6e5] text-[#08080a] px-8 py-3 rounded-lg font-semibold hover:bg-[#ac84ac] transition-colors inline-flex items-center justify-center">
                  Learn More
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/gallery" className="border-2 border-[#c0b6e5] text-[#c0b6e5] px-8 py-3 rounded-lg font-semibold hover:bg-[#c0b6e5] hover:text-[#08080a] transition-colors inline-flex items-center justify-center">
                  View Gallery
                </Link>
              </div>
            </motion.div>

            {/* Hero Visual - Wavy Design */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative w-80 h-80">
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, 6, 0]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="curve1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7aa9c0" />
                        <stop offset="33%" stopColor="#c0b6e5" />
                        <stop offset="66%" stopColor="#ac84ac" />
                        <stop offset="100%" stopColor="#4d716c" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M10,100 Q30,60 50,100 T90,100 T130,100 T170,100"
                      stroke="url(#curve1)"
                      strokeWidth="4"
                      fill="none"
                      opacity="0.9"
                    />
                    <path
                      d="M15,120 Q35,80 55,120 T95,120 T135,120 T175,120"
                      stroke="#4f8489"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.7"
                    />
                    <path
                      d="M5,80 Q25,40 45,80 T85,80 T125,80 T165,80"
                      stroke="#ac84ac"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.8"
                    />
                  </svg>
                </motion.div>
                
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -4, 0]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                  }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="curve2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#c0b6e5" />
                        <stop offset="25%" stopColor="#ac84ac" />
                        <stop offset="50%" stopColor="#4f8489" />
                        <stop offset="75%" stopColor="#4d716c" />
                        <stop offset="100%" stopColor="#7aa9c0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M20,140 Q40,100 60,140 T100,140 T140,140 T180,140"
                      stroke="url(#curve2)"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.6"
                    />
                    <path
                      d="M10,60 Q30,20 50,60 T90,60 T130,60 T170,60"
                      stroke="#7aa9c0"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.7"
                    />
                  </svg>
                </motion.div>
                
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 3, 0]
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 6
                  }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                      d="M5,160 Q25,120 45,160 T85,160 T125,160 T165,160"
                      stroke="#4f8489"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.5"
                    />
                    <path
                      d="M15,40 Q35,0 55,40 T95,40 T135,40 T175,40"
                      stroke="#ac84ac"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.6"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Artists Preview */}
      <section ref={featuredRef} className="py-20 bg-[#44334a]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Featured Artists</h2>
              <p className="text-xl text-[#c0b6e5] max-w-3xl mx-auto">
                Discover the incredible talent within our community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {featuredArtists.map((artist, index) => (
                <motion.div
                  key={artist.id}
                  variants={itemVariants}
                  className="bg-[#08080a] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-64 bg-gradient-to-br from-[#7aa9c0] to-[#c0b6e5]" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
                    <p className="text-[#c0b6e5] font-semibold mb-3">{artist.medium}</p>
                    <p className="text-[#7aa9c0] text-sm leading-relaxed">{artist.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center">
              <Link href="/gallery" className="border-2 border-[#c0b6e5] text-[#c0b6e5] px-8 py-3 rounded-lg font-semibold hover:bg-[#c0b6e5] hover:text-[#08080a] transition-colors inline-flex items-center">
                View Full Gallery
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section ref={eventsRef} className="py-20 bg-[#08080a]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={eventsInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Upcoming Events</h2>
              <p className="text-xl text-[#c0b6e5] max-w-3xl mx-auto">
                Join us for workshops, exhibitions, performances, and community gatherings
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  className="bg-[#44334a] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-gradient-to-br from-[#7aa9c0] to-[#c0b6e5] text-[#08080a] p-6 text-center">
                    <div className="text-3xl font-bold">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-sm opacity-90">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-[#c0b6e5] text-sm mb-4">{event.time}</p>
                    <p className="text-[#7aa9c0] leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="text-center">
              <Link href="/events" className="border-2 border-[#c0b6e5] text-[#c0b6e5] px-8 py-3 rounded-lg font-semibold hover:bg-[#c0b6e5] hover:text-[#08080a] transition-colors inline-flex items-center">
                View All Events
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section ref={involvedRef} className="py-20 bg-gradient-to-br from-[#44334a] to-[#4f8489] text-white">
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
                    <CheckIcon className="w-6 h-6 text-[#c0b6e5] mr-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about#contact" className="border-2 border-[#c0b6e5] text-[#c0b6e5] px-8 py-3 rounded-lg font-semibold hover:bg-[#c0b6e5] hover:text-[#08080a] transition-colors inline-flex items-center">
                Contact Us
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative w-64 h-64">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 4, 0]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <pattern id="grain5" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                        <circle cx="6" cy="6" r="0.8" fill="#c0b6e5" opacity="0.4"/>
                        <circle cx="2" cy="2" r="0.3" fill="#7aa9c0" opacity="0.3"/>
                        <circle cx="10" cy="10" r="0.5" fill="#ac84ac" opacity="0.35"/>
                        <circle cx="4" cy="8" r="0.2" fill="#4d716c" opacity="0.25"/>
                      </pattern>
                      <linearGradient id="curve3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7aa9c0" />
                        <stop offset="25%" stopColor="#c0b6e5" />
                        <stop offset="50%" stopColor="#ac84ac" />
                        <stop offset="75%" stopColor="#4d716c" />
                        <stop offset="100%" stopColor="#4f8489" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M10,100 Q30,60 50,100 T90,100 T130,100 T170,100"
                      stroke="url(#curve3)"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.8"
                    />
                    <path
                      d="M15,120 Q35,80 55,120 T95,120 T135,120 T175,120"
                      stroke="#4f8489"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.6"
                    />
                    <path
                      d="M5,80 Q25,40 45,80 T85,80 T125,80 T165,80"
                      stroke="#ac84ac"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.7"
                    />
                    <rect x="0" y="0" width="200" height="200" fill="url(#grain5)" opacity="0.3"/>
                  </svg>
                </motion.div>
                
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -3, 0]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                  }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <pattern id="grain6" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                        <circle cx="4" cy="4" r="0.4" fill="#4f8489" opacity="0.3"/>
                        <circle cx="1" cy="1" r="0.2" fill="#c0b6e5" opacity="0.25"/>
                        <circle cx="7" cy="7" r="0.3" fill="#7aa9c0" opacity="0.35"/>
                        <circle cx="3" cy="5" r="0.15" fill="#4d716c" opacity="0.2"/>
                      </pattern>
                    </defs>
                    <path
                      d="M20,140 Q40,100 60,140 T100,140 T140,140 T180,140"
                      stroke="#7aa9c0"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.5"
                    />
                    <path
                      d="M10,60 Q30,20 50,60 T90,60 T130,60 T170,60"
                      stroke="#c0b6e5"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.6"
                    />
                    <rect x="0" y="0" width="200" height="200" fill="url(#grain6)" opacity="0.2"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08080a] text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stanford Black Creative Collective</h3>
              <p className="text-[#7aa9c0] leading-relaxed">
                Celebrating Black creativity and culture at Stanford University
              </p>
            </div>
            <div className="flex justify-end">
              <a
                href="https://www.instagram.com/blackcreativeco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#44334a] rounded-full flex items-center justify-center text-[#7aa9c0] hover:text-[#c0b6e5] hover:bg-[#4f8489] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.42-3.321c.873-.873 2.024-1.297 3.321-1.297s2.448.424 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.244c-.873.807-2.024 1.297-3.321 1.297zm7.598-10.652c-.424 0-.807-.163-1.103-.49-.296-.326-.424-.709-.424-1.133 0-.424.128-.807.424-1.103.296-.326.679-.49 1.103-.49.424 0 .807.164 1.103.49.296.296.424.679.424 1.103 0 .424-.128.807-.424 1.133-.296.327-.679.49-1.103.49z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-[#44334a] pt-8 text-center text-[#7aa9c0]">
            <p>&copy; 2024 Stanford Black Creative Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}