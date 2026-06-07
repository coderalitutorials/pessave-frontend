import React from "react";
import { motion } from "framer-motion";

export default function PesSaveWhyChooseUs() {
  
  // Clean feature metrics points tailored for PesSave
  const trustPoints = [
    "Free emergency assessments over the phone",
    "100% eradication & re-treatment guarantee",
    "Flexible residential & commercial slots including weekends",
    "Eco-certified non-toxic baits and smart detection methods",
    "PesSave technicians are BPCA trained, vetted and insured"
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="bg-white py-16 md:py-24 text-neutral-900 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT SIDE: Content Blocks & Custom Bullet List --- */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Subheading Line - Exact Match with image_e4a9ad.png */}
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1.5px] bg-[#5C4033]" />
              <span className="text-[#5C4033] text-xs font-black uppercase tracking-[0.25em]">
                Why Choose Us
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 uppercase max-w-xl leading-tight">
              Why people trust our services
            </h2>

            {/* Core Description Copy tailored for PesSave */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
              At PesSave, we don't just apply temporary surface treatments. Our local British-certified specialists trace infestations back to their nesting origins, delivering safe, long-lasting biological and physical barriers that secure your building structure permanently.
            </p>

            {/* Custom Interactive Yellow Arrow Bullet Stack */}
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4 pt-4"
            >
              {trustPoints.map((point, index) => (
                <motion.li 
                  key={index}
                  variants={fadeUpVariants}
                  className="flex items-start gap-3.5 text-sm sm:text-base font-bold text-neutral-900 group"
                >
                  {/* Right-pointing Arrow Icon styled with your exact Logo Yellow (#F2C12E) */}
                  <span className="text-[#F2C12E] text-base sm:text-lg select-none shrink-0 transform group-hover:translate-x-1 transition-transform duration-200">
                    ➔
                  </span>
                  <span className="leading-tight pt-0.5">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

          </div>

          {/* --- RIGHT SIDE: Visual Stack with Offset Card Template Overlap --- */}
          <div className="lg:col-span-5 relative pt-6 lg:pt-0">
            
            {/* Soft background box that mimics the structural card overlay in image_e4a9ad.png */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gray-50 rounded-sm -z-10 hidden lg:block" />
            
            {/* Main Image Frame Container */}
            <div className="w-full h-[350px] sm:h-[480px] lg:h-[520px] bg-neutral-100 shadow-xl overflow-hidden relative rounded-sm group">
              <img
                src="/images/why-choose-pessave.webp" // Replace with your exact image path here
                alt=""
                className="
      w-full
      h-auto
      object-contain
      object-center
      select-none

      min-h-[250px]
      sm:min-h-[350px]
      md:min-h-[450px]

      lg:h-full
      lg:min-h-full
      lg:object-cover
      lg:object-top
    "
                loading="lazy"
              />
              
              {/* Subtle overlay layer */}
              <div className="absolute inset-0 bg-[#5C4033]/5 pointer-events-none" />
            </div>

            {/* Bottom-right overlapping micro badge text from image_e4a9ad.png */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm py-3 px-5 shadow-md border-l-4 border-[#F2C12E] select-none">
              <p className="text-[11px] font-black tracking-widest text-neutral-900 uppercase">
                100% Satisfaction Guaranteed
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}