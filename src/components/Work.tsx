'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Eye, 
  ArrowRight, 
  Sparkles,
  Clock,
  Users,
  Star
} from 'lucide-react';

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Brand Identity for TechStart",
      category: "Brand Design",
      description: "Complete brand identity including logo, colors, and visual guidelines for a growing tech startup.",
      image: "/api/placeholder/400/300",
      status: "Completed",
      tags: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
      title: "E-commerce Website for FashionHub",
      category: "Web Development",
      description: "Modern,  responsive e-commerce platform with seamless user experience and mobile optimization.",
      image: "/api/placeholder/400/300",
      status: "In Progress",
      tags: ["E-commerce", "Responsive Design", "Mobile First"]
    },
    {
      title: "Social Media Campaign for Foodie",
      category: "Digital Marketing",
      description: "Comprehensive social media strategy and content creation for a local restaurant chain.",
      image: "/api/placeholder/400/300",
      status: "Completed",
      tags: ["Social Media", "Content Strategy", "Brand Awareness"]
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Star, label: "Projects Completed", value: "100+" },
    { icon: Clock, label: "Years Experience", value: "3+" },
    { icon: Sparkles, label: "Creative Ideas", value: "500+" }
  ];

  return (
    <section id="work" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100 to-transparent rounded-full opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary-100 to-transparent rounded-full opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-primary font-semibold text-lg">Our Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Work Speaks for Us.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We've worked with growing brands that trusted us with their vision — and together, we made it real.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <div className="mb-4">
                  <span className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Currently at MVP stage.
                </h3>
                <p className="text-gray-600 mb-6">
                  We're working on some amazing projects that will showcase our capabilities. 
                  Stay tuned for our portfolio updates!
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Brand Design", "Web Development", "Digital Marketing"].map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 gradient-bg text-white rounded-full font-semibold flex items-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Project</span>
                </motion.a>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center p-8">
                <div className="text-center">
                  <Sparkles className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                  <p className="text-primary-600 font-semibold">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Next */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Coming Next
            </h3>
            <p className="text-gray-600 mb-6">
              More creative stories in progress. We're constantly working on new projects 
              that push the boundaries of design and technology.
            </p>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 gradient-bg text-white rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl transition-all"
            >
              <Eye className="w-5 h-5" />
              <span>View Our Work</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;


