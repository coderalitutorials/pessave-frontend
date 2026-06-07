import React from 'react';
import { motion } from 'framer-motion';

export default function CertifiedLogosSection() {
  // Simple clean container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  // UK Pest Control Authority Logo Badges
  const certifications = [
    { name: "BPCA", label: "BRITISH PEST CONTROL ASSOC." },
    { name: "CEPA", label: "CERTIFIED EUROPEAN STANDARDS" },
    { name: "NPTA", label: "NATURAL PEST TECHNICIANS" },
    { name: "PROMPT", label: "BASIS PROFESSIONAL REGISTER" },
    { name: "RSPH", label: "MEMBER OF PUBLIC HEALTH" }
  ];

  return (
    <section className="bg-gray-50/70 border-b border-gray-100 py-12 md:py-16 text-center z-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Exact Uppercase Subheading Tracker From image_e60309.png */}
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs md:text-sm font-black tracking-[0.25em] text-[#5C4033] uppercase mb-10 md:mb-12"
        >
          We Are Certified By
        </motion.p>

        {/* Distributed Clean Inline Grid View Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-center opacity-80"
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, opacity: 1 }}
              className="flex flex-col items-center justify-center text-center select-none cursor-default group"
            >
              {/* Graphic Icon Layout Badge Container */}
              <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 group-hover:border-[#F2C12E] transition-colors duration-300">
                <svg 
                  className="w-6 h-6 text-[#5C4033] group-hover:text-[#F2C12E] transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              {/* Authority Bold Initials Text */}
              <h4 className="text-base font-black tracking-tight text-gray-800 group-hover:text-[#5C4033] transition-colors">
                {cert.name}
              </h4>
              
              {/* Context Tag Tracking Subtext Description */}
              <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5 max-w-[140px] block leading-tight">
                {cert.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}