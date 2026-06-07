import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function PesSaveFeatureSection() {
  const navigate = useNavigate();

  // Animation sets for smooth scannable display
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const listStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden z-20">
      
      {/* 1. BACKGROUND ACCENT STRIP - Replaced reference blue with your exact Logo Yellow (#F2C12E) */}
      <div className="absolute top-0 left-0 right-0 h-[320px] md:h-[400px] bg-[#F2C12E] z-0" />

      {/* 2. MAIN SPLIT CONTAINER CARD (Exact layout symmetry from image_e50896.png) */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white shadow-2xl rounded-sm overflow-hidden items-stretch border border-gray-100">
          
          
          {/* <div className="lg:col-span-5 min-h-[300px] sm:min-h-[400px] lg:h-auto relative bg-neutral-900 shrink-0">
            <img
              src="/images/moth-control.webp" // Replace with your exact filename here
              alt="Professional mouse or moth pest control inspection in Chelsea"
              className="w-full h-full object-cover object-center  absolute inset-0 select-none"
              loading="lazy"
            />
          </div> */}


          {/* LEFT SIDE: Responsive Image Frame Block */}
<div className="lg:col-span-5 relative bg-[#F2C12E] flex items-center justify-center overflow-hidden">

  <img
    src="/images/moth-control.webp"
    alt="Professional moth pest control treatment in Chelsea"
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

</div>

          {/* RIGHT SIDE: Information Block with Premium Typography */}
          <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center text-left bg-white">
            
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="space-y-4"
            >
              {/* Premium Heading Text without any discount metrics */}
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Complete eradication when you secure your premium treatment
              </h2>
              
              {/* Trust Descriptive Paragraph block */}
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal pt-1">
                Our local Chelsea technicians deploy targeted eco-certified systems to neutralize nests permanently. We focus on long-term prevention protocols so your premises remain clean, safe, and hygienic year-round.
              </p>
            </motion.div>

            {/* Feature Points Row List with custom Leaf SVGs matching image_e50896.png layout */}
            <motion.ul
              variants={listStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3.5 pt-6 pb-8 text-sm font-semibold text-neutral-800"
            >
              <motion.li variants={fadeInUp} className="flex items-center gap-3">
                {/* Custom Leaf SVG matching original image accent skin with brand color tint */}
                <svg className="w-4 h-4 text-[#F2C12E] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5 2c-2.3 0-4.5 1.4-5.5 3.5-1-2.1-3.2-3.5-5.5-3.5C3.5 2 1 4.5 1 7.5c0 5 6.5 11.2 11 14.5 4.5-3.3 11-9.5 11-14.5C23 4.5 20.5 2 17.5 2zM12 20.1C8.1 17.1 3 11.6 3 7.5 3 5.6 4.6 4 6.5 4c1.7 0 3.2 1.2 3.8 2.8h1.4c.6-1.6 2.1-2.8 3.8-2.8 1.9 0 3.5 1.6 3.5 3.5 0 4.1-5.1 9.6-9 12.6z"/>
                </svg>
                Client oriented and certified approach
              </motion.li>

              <motion.li variants={fadeInUp} className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#F2C12E] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5 2c-2.3 0-4.5 1.4-5.5 3.5-1-2.1-3.2-3.5-5.5-3.5C3.5 2 1 4.5 1 7.5c0 5 6.5 11.2 11 14.5 4.5-3.3 11-9.5 11-14.5C23 4.5 20.5 2 17.5 2zM12 20.1C8.1 17.1 3 11.6 3 7.5 3 5.6 4.6 4 6.5 4c1.7 0 3.2 1.2 3.8 2.8h1.4c.6-1.6 2.1-2.8 3.8-2.8 1.9 0 3.5 1.6 3.5 3.5 0 4.1-5.1 9.6-9 12.6z"/>
                </svg>
                Eco-Friendly oriented premium products
              </motion.li>

              <motion.li variants={fadeInUp} className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#F2C12E] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5 2c-2.3 0-4.5 1.4-5.5 3.5-1-2.1-3.2-3.5-5.5-3.5C3.5 2 1 4.5 1 7.5c0 5 6.5 11.2 11 14.5 4.5-3.3 11-9.5 11-14.5C23 4.5 20.5 2 17.5 2zM12 20.1C8.1 17.1 3 11.6 3 7.5 3 5.6 4.6 4 6.5 4c1.7 0 3.2 1.2 3.8 2.8h1.4c.6-1.6 2.1-2.8 3.8-2.8 1.9 0 3.5 1.6 3.5 3.5 0 4.1-5.1 9.6-9 12.6z"/>
                </svg>
                Complete structural safety guarantee
              </motion.li>
            </motion.ul>

            {/* Core Action Call Button Block */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <button
                onClick={() => navigate("/contact-us")}
                className="w-full sm:w-auto bg-[#F2C12E] text-neutral-900 font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-[#dbad24] transition-all duration-200 active:scale-95 shadow-md shadow-[#F2C12E]/10 cursor-pointer"
              >
                Make Appointment
              </button>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}