'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Target, 
  Star, 
  Rocket, 
  CheckCircle, 
  Clock,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      id: 'free-trial',
      icon: Target,
      title: "6-Day Free Trial",
      subtitle: "Perfect for new brands or businesses exploring our services.",
      features: [
        "10 Custom Brand Assets (Posts, Reels & Visuals)",
        "A Sample Website Design (Homepage + Layout Preview)",
        "Brand Review & Creative Direction Call",
        "Full Support during Trial"
      ],
      bottomLine: "See the quality. Feel the difference. Then decide.",
      ctaText: "Start Free Trial",
      ctaIcon: Target,
      isActive: true,
      gradient: "from-primary to-primary-400",
      bgColor: "bg-gradient-to-br from-primary-50 to-primary-100",
      borderColor: "border-primary-200",
      textColor: "text-primary",
      status: null
    },
    {
      id: 'premium',
      icon: Star,
      title: "Premium Plan",
      subtitle: "For brands that want full creative growth in one place.",
      description: "Website + Marketing + Content — everything covered. A complete digital system built for growing brands.",
      bottomLine: "Stay tuned — launching soon for early clients.",
      ctaText: "Yet to Launch",
      ctaIcon: Clock,
      isActive: false,
      gradient: "from-gray-400 to-gray-600",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      textColor: "text-gray-600",
      status: "Coming Soon"
    },
    {
      id: 'gold',
      icon: Rocket,
      title: "Gold Plan",
      subtitle: "Designed for fast-scaling brands who want more — for less.",
      description: "Exclusive tools, high-end automation & full creative team support. This will redefine brand growth in India.",
      bottomLine: "The future of brand building — almost here.",
      ctaText: "Yet to Launch",
      ctaIcon: Clock,
      isActive: false,
      gradient: "from-yellow-400 to-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-700",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-50 to-transparent rounded-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary-50 to-transparent rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-primary font-semibold text-lg">TRY US FIRST — THEN DECIDE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Experience DevArc — 6 Days Free Trial. No Risk, Only Results.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            See how we work before you pay. Get real creative work, not just promises.
            In just six days, we'll show you how your brand can look and grow online.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`${plan.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${plan.borderColor} hover:border-primary-300 h-full flex flex-col`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                {/* Status Badge */}
                {plan.status && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {plan.status}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="text-center flex-grow">
                  <h3 className={`text-2xl font-bold ${plan.textColor} mb-4 group-hover:text-primary transition-colors`}>
                    {plan.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {plan.subtitle}
                  </p>

                  {/* Features for Free Trial */}
                {/* Features for Free Trial */}
{plan.id === 'free-trial' && Array.isArray(plan.features) && (
  <div className="space-y-3 mb-6">
    {plan.features.map((feature, featureIndex) => (
      <div key={featureIndex} className="flex items-start space-x-3">
        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
      </div>
    ))}
  </div>
)}


                  {/* Description for other plans */}
                  {plan.description && (
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {plan.description}
                    </p>
                  )}

                  <p className={`font-semibold ${plan.textColor} mb-6`}>
                    {plan.bottomLine}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <motion.button
                    whileHover={plan.isActive ? { scale: 1.05 } : {}}
                    whileTap={plan.isActive ? { scale: 0.95 } : {}}
                    disabled={!plan.isActive}
                    className={`w-full px-6 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 transition-all ${
                      plan.isActive
                        ? 'gradient-bg text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <plan.ctaIcon className="w-5 h-5" />
                    <span>{plan.ctaText}</span>
                  </motion.button>

                  {/* Coming Soon Tag */}
                  {plan.status && (
                    <p className="text-center mt-3 text-sm text-gray-500 italic">
                      {plan.status}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want early access or more details about our premium plans?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us today — we'll guide you personally.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 gradient-bg text-white rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact us today</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
