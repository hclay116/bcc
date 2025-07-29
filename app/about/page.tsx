'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  HeartIcon,
  AcademicCapIcon,
  SparklesIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: 'Amara Thompson',
    role: 'Co-Founder & Creative Director',
    bio: 'Senior studying Art Practice with a focus on digital media and community engagement.',
    image: '/api/placeholder/300/300'
  },
  {
    id: 2,
    name: 'Jamal Rodriguez',
    role: 'Co-Founder & Operations Lead',
    bio: 'Graduate student in Education, passionate about creating inclusive spaces for artistic expression.',
    image: '/api/placeholder/300/300'
  },
  {
    id: 3,
    name: 'Zuri Williams',
    role: 'Events Coordinator',
    bio: 'Junior in Communications, specializing in event planning and community outreach.',
    image: '/api/placeholder/300/300'
  },
  {
    id: 4,
    name: 'Marcus Johnson',
    role: 'Gallery Curator',
    bio: 'PhD candidate in Art History with expertise in contemporary Black artistic movements.',
    image: '/api/placeholder/300/300'
  }
]

const values = [
  {
    icon: HeartIcon,
    title: 'Community',
    description: 'Building a supportive network where Black creatives can thrive, collaborate, and celebrate their unique perspectives.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Excellence',
    description: 'Maintaining the highest standards in artistic practice while fostering growth and learning opportunities.'
  },
  {
    icon: SparklesIcon,
    title: 'Innovation',
    description: 'Pushing boundaries and exploring new forms of creative expression that challenge and inspire.'
  }
]

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center bg-gradient-psychedelic-main relative overflow-hidden grain-texture">
        <div className="absolute inset-0 psychedelic-grid opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-electric-glow opacity-20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-teal-swirl opacity-25 rounded-full blur-2xl animate-pulse-slow-delayed" />
        
        <div className="container mx-auto px-6 lg:px-8 z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold text-psychedelic-soft-white mb-8 text-curved-serif"
            >
              About{' '}
              <span className="text-psychedelic-glow retro-glow">Our</span>{' '}
              <span className="text-psychedelic-neon-mint">Collective</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl lg:text-2xl text-psychedelic-soft-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              We are a vibrant community of Black creatives at Stanford University, dedicated to celebrating, supporting, and amplifying diverse voices in the arts.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 bg-psychedelic-deep-eggplant relative">
        <div className="absolute inset-0 grain-texture" />
        <div className="container mx-auto px-6 lg:px-8 z-10 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={storyInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-psychedelic-soft-white mb-6 text-curved-serif">
                Our <span className="text-psychedelic-electric-lavender">Story</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-lg text-psychedelic-soft-white/90 leading-relaxed">
                  Founded in 2020, the Stanford Black Creative Collective emerged from a shared vision: to create a space where Black artists, writers, musicians, designers, and creators could come together to celebrate their heritage while pushing the boundaries of contemporary art.
                </p>
                <p className="text-lg text-psychedelic-soft-white/90 leading-relaxed">
                  What started as informal gatherings in dorm rooms has grown into a thriving community that hosts exhibitions, workshops, performances, and collaborative projects that showcase the incredible diversity and talent within Stanford's Black creative community.
                </p>
                <p className="text-lg text-psychedelic-soft-white/90 leading-relaxed">
                  Today, we continue to foster connections, provide platforms for artistic expression, and ensure that Black voices remain at the forefront of Stanford's cultural landscape.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <div className="relative w-full h-96 bg-gradient-teal-swirl rounded-3xl shadow-neon-glow retro-glow">
                  <div className="absolute inset-4 bg-gradient-electric-glow rounded-2xl opacity-60" />
                  <div className="absolute inset-8 bg-gradient-dusty-violet rounded-xl opacity-80" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-20 bg-psychedelic-faint-violet relative">
        <div className="absolute inset-0 grain-texture" />
        <div className="container mx-auto px-6 lg:px-8 z-10 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-psychedelic-soft-white mb-6 text-curved-serif">
                Our <span className="text-psychedelic-neon-mint">Values</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="bg-psychedelic-deep-eggplant/80 backdrop-blur-sm rounded-3xl p-8 shadow-psychedelic card-hover y2k-blur"
                >
                  <div className="w-20 h-20 bg-gradient-electric-glow rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-neon-glow">
                    <value.icon className="w-10 h-10 text-psychedelic-deep-eggplant" />
                  </div>
                  <h3 className="text-2xl font-bold text-psychedelic-soft-white mb-4 text-center text-curved-serif">
                    {value.title}
                  </h3>
                  <p className="text-psychedelic-soft-white/80 leading-relaxed text-center">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-psychedelic-dusty-plum relative">
        <div className="absolute inset-0 grain-texture" />
        <div className="container mx-auto px-6 lg:px-8 z-10 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-psychedelic-soft-white mb-6 text-curved-serif">
                Meet Our <span className="text-psychedelic-electric-lavender">Team</span>
              </h2>
              <p className="text-xl text-psychedelic-soft-white/90 max-w-3xl mx-auto">
                The passionate individuals driving our collective forward
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  className="bg-psychedelic-deep-eggplant/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-psychedelic card-hover y2k-blur"
                >
                  <div className="h-64 bg-gradient-creative relative">
                    <div className="absolute inset-0 bg-gradient-electric-glow opacity-50" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-psychedelic-soft-white mb-2 text-curved-serif">
                      {member.name}
                    </h3>
                    <p className="text-psychedelic-electric-lavender font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-psychedelic-soft-white/80 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 bg-gradient-psychedelic-main relative">
        <div className="absolute inset-0 grain-texture" />
        <div className="absolute top-0 left-0 w-full h-full psychedelic-grid opacity-20" />
        
        <div className="container mx-auto px-6 lg:px-8 z-10 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-psychedelic-soft-white mb-6 text-curved-serif">
                Get <span className="text-psychedelic-neon-mint">In Touch</span>
              </h2>
              <p className="text-xl text-psychedelic-soft-white/90 max-w-3xl mx-auto">
                Ready to join our creative community? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="bg-psychedelic-deep-eggplant/80 backdrop-blur-sm rounded-3xl p-8 shadow-psychedelic y2k-blur">
                  <h3 className="text-2xl font-bold text-psychedelic-soft-white mb-6 text-curved-serif">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-electric-glow rounded-full flex items-center justify-center shadow-neon-glow">
                        <EnvelopeIcon className="w-6 h-6 text-psychedelic-deep-eggplant" />
                      </div>
                      <div>
                        <p className="text-psychedelic-soft-white font-semibold">Email</p>
                        <p className="text-psychedelic-soft-white/80">blackcreative@stanford.edu</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-teal-swirl rounded-full flex items-center justify-center shadow-neon-glow">
                        <MapPinIcon className="w-6 h-6 text-psychedelic-deep-eggplant" />
                      </div>
                      <div>
                        <p className="text-psychedelic-soft-white font-semibold">Location</p>
                        <p className="text-psychedelic-soft-white/80">Stanford University Campus</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-dusty-violet rounded-full flex items-center justify-center shadow-neon-glow">
                        <ClockIcon className="w-6 h-6 text-psychedelic-soft-white" />
                      </div>
                      <div>
                        <p className="text-psychedelic-soft-white font-semibold">Office Hours</p>
                        <p className="text-psychedelic-soft-white/80">Tuesdays & Thursdays, 2-4 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="https://www.instagram.com/blackcreativeco/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center btn-secondary"
                    >
                      Follow Us on Instagram
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="bg-psychedelic-deep-eggplant/80 backdrop-blur-sm rounded-3xl p-8 shadow-psychedelic y2k-blur">
                  <h3 className="text-2xl font-bold text-psychedelic-soft-white mb-6 text-curved-serif">
                    Join Our Community
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-psychedelic-soft-white/90">
                      Whether you're an artist, supporter, or simply curious about our community, there are many ways to get involved:
                    </p>
                    
                    <ul className="space-y-4">
                      {[
                        'Attend our monthly showcases and exhibitions',
                        'Participate in collaborative art projects',
                        'Join our workshops and skill-sharing sessions',
                        'Submit your work to our digital gallery',
                        'Volunteer for events and community outreach'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gradient-electric-glow rounded-full flex items-center justify-center mt-0.5 shadow-neon-glow">
                            <span className="text-psychedelic-deep-eggplant text-sm font-bold">•</span>
                          </div>
                          <span className="text-psychedelic-soft-white/90">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6">
                      <Link href="/events" className="btn-primary inline-flex items-center">
                        View Upcoming Events
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-psychedelic-deep-eggplant text-psychedelic-soft-white py-16 relative">
        <div className="absolute inset-0 grain-texture" />
        <div className="container mx-auto px-6 lg:px-8 z-10 relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-curved-serif text-psychedelic-glow">
                Stanford Black Creative Collective
              </h3>
              <p className="text-psychedelic-soft-white/80 leading-relaxed">
                Celebrating Black creativity and culture at Stanford University
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-curved-serif">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-psychedelic-soft-white/80 hover:text-psychedelic-electric-lavender transition-colors">Home</Link></li>
                <li><Link href="/events" className="text-psychedelic-soft-white/80 hover:text-psychedelic-electric-lavender transition-colors">Events</Link></li>
                <li><Link href="/gallery" className="text-psychedelic-soft-white/80 hover:text-psychedelic-electric-lavender transition-colors">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-curved-serif">Connect</h4>
              <a
                href="https://www.instagram.com/blackcreativeco/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-electric-glow rounded-full flex items-center justify-center text-psychedelic-deep-eggplant hover:shadow-neon-glow transition-all duration-300 retro-glow"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.42-3.321c.873-.873 2.024-1.297 3.321-1.297s2.448.424 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.244c-.873.807-2.024 1.297-3.321 1.297zm7.598-10.652c-.424 0-.807-.163-1.103-.49-.296-.326-.424-.709-.424-1.133 0-.424.128-.807.424-1.103.296-.326.679-.49 1.103-.49.424 0 .807.164 1.103.49.296.296.424.679.424 1.103 0 .424-.128.807-.424 1.133-.296.327-.679.49-1.103.49z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-psychedelic-soft-white/20 pt-8 text-center text-psychedelic-soft-white/60">
            <p>&copy; 2024 Stanford Black Creative Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}