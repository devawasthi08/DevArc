'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Palette, 
  Globe, 
  Share2, 
  Zap, 
  Video, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Palette,
      title: "Brand & Logo Design",
      description: "Your brand's first impression starts with a strong identity.",
      details: "We design logos and visuals that truly represent your story and help people remember you.",
      features: ["Logos", "Packaging", "Brand colors", "Visual identity"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Website Design & Development",
      description: "A good website is like a good shop — clean, simple, and built for results.",
      details: "We design fast, mobile-friendly, and user-focused websites that turn visitors into customers.",
      features: ["Landing pages", "Business websites", "Portfolio & product sites"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Share2,
      title: "Social Media & Marketing",
      description: "We help you reach the right audience with the right message.",
      details: "From daily posts to ad campaigns, we plan, design, and run everything that builds your presence online.",
      features: ["Social media setup", "Ads", "Content strategy", "Growth tracking"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Automation & Business Systems",
      description: "Save your time and effort. We set up tools that help you manage leads, customers, and marketing automatically.",
      details: "So your business runs smoother every day.",
      features: ["CRM", "Funnels", "Email & WhatsApp automation", "AI Agent"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Video,
      title: "Motion Graphics & Videos",
      description: "Videos catch eyes and build emotions.",
      details: "We make short videos, explainers, and product ads that tell your brand story beautifully.",
      features: ["Product videos", "Explainers", "Animated ads"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
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
            <span className="text-primary font-semibold text-lg">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Everything your brand needs, under one roof.
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-primary-200">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <p className="text-gray-500 leading-relaxed">
                    {service.details}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 mb-2">We Do:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          <CheckCircle className="w-3 h-3 text-primary" />
                          <span>{feature}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to build something amazing?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's create something great for your brand together.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 gradient-bg text-white rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl transition-all"
            >
              <span>Let's Build Together</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


