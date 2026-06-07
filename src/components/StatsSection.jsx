// import React, { useEffect, useRef } from 'react';
// import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// // Counter Function Component (Har number ko target animation dene k liye)
// function AnimatedCounter({ value, duration = 2 }) {
//   // Check karte hain agar value mein '+' ya '/' jaise characters hain
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
//   const suffix = value.replace(/[0-9]/g, ''); // '+', '%', ya '/5' alag nikalne k liye
  
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(count, numericValue, {
//         duration: duration,
//         ease: "easeOut"
//       });
//       return controls.stop;
//     }
//   }, [isInView, numericValue, count, duration]);

//   return (
//     <span ref={ref} className="inline-flex">
//       <motion.span>{rounded}</motion.span>
//       {suffix}
//     </span>
//   );
// }

// export default function StatsSection() {
//   // Scroll Animation Variants for text layout
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
//   };

//   const stats = [
//     { number: "15+", label: "Years of Expert Service" },
//     { number: "5/5", label: "Customer Rating" }, // Format simplified for smooth math counter
//     { number: "100%", label: "Treatment Guarantee" },
//     { number: "2K+", label: "Properties Protected" }
//   ];

//   return (
//     <div className="w-full min-h-[600px] grid grid-cols-1 lg:grid-cols-2 font-sans overflow-hidden">
      
//       {/* LEFT COLUMN: Clean Text Content Block */}
//       <div className="bg-[#131E29] text-white p-8 sm:p-16 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800">
//         <motion.div 
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//           className="max-w-xl space-y-6"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
//             Providing Soho With Superior Pest Control Solutions
//           </h2>
          
//           <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed tracking-wide">
//             We are dedicated to maintaining clear, safe, and hygienic environments for local residential properties and businesses. Our professional pest control treatments target infestations directly at the source, offering you complete peace of mind with rapid, long-term security.
//           </p>
          
//           <div className="pt-4">
//             <a 
//               href="#contact" 
//               className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#EE6002] hover:text-white transition-colors duration-200 group"
//             >
//               Get a Free Quote
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </a>
//           </div>
//         </motion.div>
//       </div>

//       {/* RIGHT COLUMN: Branded High-Impact Stats Grid Block */}
//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="bg-[#EE6002] text-white p-8 sm:p-16 lg:p-24 flex flex-col justify-center relative group"
//       >
//         <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-500 group-hover:bg-black/10" />
        
//         <div className="max-w-xl w-full mx-auto space-y-8 relative z-10">
//           <motion.p 
//             variants={itemVariants}
//             className="text-xs font-black tracking-[0.25em] uppercase text-white/80"
//           >
//             Let's Numbers Talk
//           </motion.p>

//           {/* Stats 2x2 Grid Layout (Fully Responsive) */}
//           <div className="grid grid-cols-2 gap-x-8 gap-y-12">
//             {stats.map((stat, idx) => (
//               <motion.div 
//                 key={idx} 
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.02 }}
//                 className="space-y-1.5 cursor-default origin-left"
//               >
//                 <div className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none select-none">
//                   {/* Dynamic Custom Counter Trigger */}
//                   <AnimatedCounter value={stat.number} duration={2.5} />
//                 </div>
//                 <div className="text-xs sm:text-sm font-medium tracking-wide text-white/90">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//     </div>
//   );
// }



// import React, { useEffect, useRef } from 'react';
// import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// // Counter Function Component
// function AnimatedCounter({ value, duration = 2 }) {
//   // Check karte hain agar value mein '+' ya '/' jaise characters hain
//   const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
//   const suffix = value.replace(/[0-9]/g, ''); // '+', '%', ya '/5' alag nikalne k liye
  
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const ref = useRef(null);
  
//   /* 
//     Yahan margin ko '-30px' kiya hai taaki mobile screens par scroll trigger 
//     choti height ki wajah se miss na ho aur animate smoothly start ho jaye.
//   */
//   const isInView = useInView(ref, { once: true, margin: "-30px" });

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(count, numericValue, {
//         duration: duration,
//         ease: "easeOut"
//       });
//       return controls.stop;
//     }
//   }, [isInView, numericValue, count, duration]);

//   return (
//     <span ref={ref} className="inline-flex">
//       <motion.span>{rounded}</motion.span>
//       {suffix}
//     </span>
//   );
// }

// export default function StatsSection() {
//   // Scroll Animation Variants for text layout
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
//   };

//   const stats = [
//     { number: "15+", label: "Years of Expert Service" },
//     { number: "5/5", label: "Customer Rating" }, 
//     { number: "100%", label: "Treatment Guarantee" },
//     { number: "2K+", label: "Properties Protected" }
//   ];

//   return (
//     <div className="w-full min-h-[600px] grid grid-cols-1 lg:grid-cols-2 font-sans overflow-hidden">
      
//       {/* LEFT COLUMN: Clean Text Content Block */}
//       <div className="bg-[#131E29] text-white p-8 sm:p-16 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800">
//         <motion.div 
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true, margin: "-30px" }}
//           transition={{ duration: 0.6 }}
//           className="max-w-xl space-y-6"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
//             Providing Soho With Superior Pest Control Solutions
//           </h2>
          
//           <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed tracking-wide">
//             We are dedicated to maintaining clear, safe, and hygienic environments for local residential properties and businesses. Our professional pest control treatments target infestations directly at the source, offering you complete peace of mind with rapid, long-term security.
//           </p>
          
//           <div className="pt-4">
//             <a 
//               href="#contact" 
//               className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#EE6002] hover:text-white transition-colors duration-200 group"
//             >
//               Get a Free Quote
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </a>
//           </div>
//         </motion.div>
//       </div>

//       {/* RIGHT COLUMN: Branded High-Impact Stats Grid Block */}
//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-30px" }}
//         className="bg-[#EE6002] text-white p-8 sm:p-16 lg:p-24 flex flex-col justify-center relative group"
//       >
//         <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-500 group-hover:bg-black/10" />
        
//         <div className="max-w-xl w-full mx-auto space-y-8 relative z-10">
//           <motion.p 
//             variants={itemVariants}
//             className="text-xs font-black tracking-[0.25em] uppercase text-white/80"
//           >
//             Let's Numbers Talk
//           </motion.p>

//           {/* Stats 2x2 Grid Layout (Fully Responsive) */}
//           <div className="grid grid-cols-2 gap-x-8 gap-y-12">
//             {stats.map((stat, idx) => (
//               <motion.div 
//                 key={idx} 
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.02 }}
//                 className="space-y-1.5 cursor-default origin-left"
//               >
//                 <div className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none select-none">
//                   <AnimatedCounter value={stat.number} duration={2.5} />
//                 </div>
//                 <div className="text-xs sm:text-sm font-medium tracking-wide text-white/90">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//     </div>
//   );
// }














import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Counter Function Component - Maintained with performance optimizations
function AnimatedCounter({ value, duration = 2 }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, ''); 
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: duration,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count, duration]);

  return (
    <span ref={ref} className="inline-flex">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function PesSaveStatsSection() {
  const navigate = useNavigate();

  // Scroll Grid Animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Fresh Data Array Structures
  const stats = [
    { number: "15+", label: "Years Professional Service" },
    { number: "5/5", label: "Top Customer Rating" }, 
    { number: "100%", label: "Treatment Guarantee" },
    { number: "2K+", label: "Properties Protected" }
  ];

  return (
    <section className="bg-white py-20 sm:py-28 text-neutral-900 overflow-hidden z-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- TOP ROW LAYOUT: Content Intro Sync --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20 text-left">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1.5px] bg-[#5C4033]" />
              <span className="text-[#5C4033] text-xs font-black uppercase tracking-[0.25em]">
                Our Impact
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 uppercase leading-tight">
              Providing Premium Protection <br />Across The Region
            </h2>
          </div>
          
          <div className="shrink-0 lg:mb-2">
            <button 
              onClick={() => navigate("/contact-us")}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#5C4033] hover:text-[#F2C12E] transition-colors duration-200 group cursor-pointer"
            >
              <span>Book your Inspection</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* --- BOTTOM ROW LAYOUT: Immersive Deep Brown Stats Dashboard Box --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="bg-[#5C4033] rounded-sm text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-neutral-800"
        >
          {/* Subtle Graphic Ambient Vector Background Overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#F2C12E]/5 rounded-full blur-2xl pointer-events-none" />

          {/* Fully Responsive Metric Track Display Block */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="space-y-2 cursor-default text-left lg:border-l lg:border-white/10 lg:pl-6 first:border-l-0 first:pl-0 group"
              >
                {/* Dynamic Counter Output styled with Logo Yellow (#F2C12E) */}
                <div className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none select-none text-[#F2C12E] transition-colors duration-300 group-hover:text-white">
                  <AnimatedCounter value={stat.number} duration={2.2} />
                </div>
                
                {/* Descriptive label summary */}
                <div className="text-xs sm:text-sm font-bold tracking-wide text-gray-200 uppercase leading-tight pt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}