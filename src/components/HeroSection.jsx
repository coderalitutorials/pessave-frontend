// import React from 'react';
// import { motion } from 'framer-motion';
// import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

// export default function HeroSection() {
//   // Animation Variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   return (
//     <div className="relative min-h-[calc(100vh-80px)] bg-[#131E29] text-white overflow-hidden font-sans flex flex-col justify-between">
//       {/* Background Glows */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EE6002]/5 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-10 left-[-10%] w-[600px] h-[600px] bg-slate-900/50 rounded-full blur-[100px] pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pt-20 md:pb-32 w-full my-auto">
        
//         {/* Main Grid Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
//           {/* Left Side Copywriting */}
//           <motion.div 
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//             className="lg:col-span-7 space-y-6 z-10"
//           >
//             <motion.div 
//               variants={fadeInUp}
//               className="inline-flex items-center gap-2 bg-[#EE6002]/10 border border-[#EE6002]/30 px-3 py-1.5 rounded-full"
//             >
//               <ShieldCheck className="w-4 h-4 text-[#EE6002]" />
//               <span className="text-xs font-semibold tracking-wider uppercase text-[#EE6002]">
//                 15+ Years of Expert Pest Protection
//               </span>
//             </motion.div>

//             <motion.h1 
//               variants={fadeInUp}
//               className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
//             >
//               Elite Pest Control <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#EE6002]">
//                 Services in Soho
//               </span>
//             </motion.h1>

//             <motion.p 
//               variants={fadeInUp}
//               className="text-base sm:text-lg text-gray-400 max-w-xl font-normal leading-relaxed"
//             >
//               Complete, fast, and reliable pest control treatments tailored for Soho homes and businesses. We eliminate infestations safely, ensuring your property remains protected and secure.
//             </motion.p>

//             <motion.div 
//               variants={fadeInUp}
//               className="flex flex-wrap items-center gap-4 pt-2"
//             >
//               <button className="bg-[#EE6002] hover:bg-[#d45502] text-white font-bold text-sm tracking-wide px-6 py-3.5 rounded shadow-lg shadow-[#EE6002]/20 transition-all duration-200 active:scale-95 inline-flex items-center gap-2 group">
//                 Book a Treatment
//                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </button>
//               <button className="bg-transparent hover:bg-gray-800/40 text-white font-semibold text-sm tracking-wide px-6 py-3.5 rounded border border-gray-700 transition-all duration-200">
//                 Our Services
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Right Side Image Block */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-square bg-gray-900/60 border border-gray-800 rounded-lg overflow-hidden shadow-2xl group flex items-center justify-center backdrop-blur-sm"
//           >
//             <div className="absolute inset-0 bg-gradient-to-tr from-[#131E29] to-transparent z-10" />
            
//             {/* --- APNI IMAGE YAHAN LGAEIN --- */}
//             {/* <img src="your-hero-image.jpg" alt="Pest Control" className="absolute inset-0 w-full h-full object-cover" /> */}
            
//             <div className="z-20 text-center p-6">
//               <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Image United Here</p>
//               <p className="text-sm text-gray-400 max-w-[240px] mx-auto font-light">Aap yahan apni high-quality pest control background lagayein.</p>
//             </div>
//           </motion.div>

//         </div>

//         {/* --- BOTTOM INFORMATION CALL TO ACTION BAR --- */}
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="w-full mt-16 bg-gradient-to-r from-[#EE6002] to-[#d45502] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl shadow-[#EE6002]/10 border border-[#EE6002]/20 relative overflow-hidden group"
//         >
//           <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 translate-x-10 pointer-events-none transition-transform duration-700 group-hover:translate-x-0" />
          
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <div className="bg-white/10 p-3.5 rounded-full backdrop-blur-sm">
//               <Phone className="w-6 h-6 text-white animate-pulse" />
//             </div>
//             <div>
//               <p className="text-xs uppercase tracking-widest text-white/80 font-bold">Need Immediate Help? Call Us Today:</p>
//               <a href="tel:07405613595" className="text-2xl sm:text-3xl font-black text-white hover:underline block mt-0.5 tracking-tight">
//                 07405 613595
//               </a>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-y-3 gap-x-6 border-t border-white/20 md:border-t-0 pt-4 md:pt-0 w-full md:w-auto text-sm text-white/90">
//             <div className="flex items-center gap-2">
//               <MapPin className="w-4 h-4 text-white/80" />
//               <span className="font-medium">Soho, London</span>
//             </div>
//             <div className="hidden sm:block w-1.5 h-1.5 bg-white/40 rounded-full" />
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4 text-white/80" />
//               <a href="mailto:info@pestcontrolsoho.co.uk" className="hover:underline font-medium">
//                 info@pestcontrolsoho.co.uk
//               </a>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// }














// import React from 'react';
// import { motion } from 'framer-motion';
// import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

// export default function HeroSection() {
//   // Animation Variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   return (
//     <div 
//       className="relative min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat text-white overflow-hidden font-sans flex flex-col justify-between"
//       /* Yahan aap apni custom professional pest control worker ki premium image lagayein */
//       style={{ 
//         backgroundImage: `linear-gradient(to bottom, rgba(19, 30, 41, 0.82), rgba(19, 30, 41, 0.93)), url('/images/herohome.webp')` 
//       }}
//     >
//       {/* Premium Glassmorphism Background Glows */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#EE6002]/10 rounded-full blur-[140px] pointer-events-none" />

//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-28 md:pb-24 w-full my-auto z-10">
        
//         {/* CENTERED TEXT COPYWRITING */}
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="text-center space-y-6 max-w-4xl mx-auto"
//         >
//           {/* Badge */}
//           <motion.div 
//             variants={fadeInUp}
//             className="inline-flex items-center gap-2 bg-[#EE6002]/10 border border-[#EE6002]/30 px-4 py-1.5 rounded-full backdrop-blur-sm"
//           >
//             <ShieldCheck className="w-4 h-4 text-[#EE6002]" />
//             <span className="text-xs font-black tracking-widest uppercase text-[#EE6002]">
//               15+ Years of Expert Pest Protection
//             </span>
//           </motion.div>

//           {/* Main Centered Bold Heading */}
//           <motion.h1 
//             variants={fadeInUp}
//             className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white uppercase"
//           >
//             Elite Pest Control <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-[#EE6002]">
//               Services in Soho
//             </span>
//           </motion.h1>

//           {/* Subtitle Description */}
//           <motion.p 
//             variants={fadeInUp}
//             className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed"
//           >
//             Complete, fast, and reliable pest control treatments tailored for Soho homes and businesses. We eliminate infestations safely, ensuring your property remains protected and secure.
//           </motion.p>

//           {/* Action Trigger Buttons */}
//           <motion.div 
//             variants={fadeInUp}
//             className="flex flex-wrap items-center justify-center gap-4 pt-4"
//           >
//             <button className="bg-[#EE6002] hover:bg-[#d45502] text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded shadow-lg shadow-[#EE6002]/30 transition-all duration-200 active:scale-95 inline-flex items-center gap-2 group">
//               Book a Treatment
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </button>
//             <button className="bg-transparent hover:bg-white/5 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded border border-white/20 transition-all duration-200 backdrop-blur-sm">
//               Our Services
//             </button>
//           </motion.div>
//         </motion.div>

//       </div>

//       {/* --- BOTTOM INFORMATION CALL TO ACTION BAR --- */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 z-20">
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="w-full bg-[#182533]/80 backdrop-blur-md rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl border border-white/5 relative overflow-hidden group"
//         >
//           <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 translate-x-10 pointer-events-none transition-transform duration-700 group-hover:translate-x-0" />
          
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//             <div className="bg-[#EE6002]/10 p-3.5 rounded-full border border-[#EE6002]/20">
//               <Phone className="w-6 h-6 text-[#EE6002] animate-pulse" />
//             </div>
//             <div>
//               <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black">Need Immediate Help? Call Us Today:</p>
//               <a href="tel:07405613595" className="text-2xl sm:text-3xl font-black text-white hover:text-[#EE6002] block mt-0.5 tracking-tight transition-colors">
//                 07405 613595
//               </a>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-y-3 gap-x-6 border-t border-white/5 md:border-t-0 pt-4 md:pt-0 w-full md:w-auto text-xs uppercase tracking-wider text-gray-300">
//             <div className="flex items-center gap-2">
//               <MapPin className="w-4 h-4 text-[#EE6002]" />
//               <span className="font-bold">Soho, London</span>
//             </div>
//             <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4 text-[#EE6002]" />
//               <a href="mailto:info@pestcontrolsoho.co.uk" className="hover:underline font-bold text-white">
//                 info@pestcontrolsoho.co.uk
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//     </div>
//   );
// }














// import React from 'react';
// import { motion } from 'framer-motion';
// import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

// export default function HeroSection() {
//   // Animation Variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   return (
//     <div className="relative min-h-[calc(100vh-80px)] bg-[#131E29] text-white overflow-hidden font-sans flex flex-col justify-between">
      
//       {/* 1. DYNAMIC RESPONSIVE IMAGE LAYER (ART DIRECTION) */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <picture>
//           {/* Agar screen 768px (md) ya usse badi hai, to desktop wali image load hogi */}
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
          
//           {/* Mobile aur baqi choti screens par automatic 9:16 vertical image load hogi */}
//           <img 
//             src="/images/herohome-mobile.webp" 
//             alt="Pest Control Service Soho" 
//             className="w-full h-full object-cover object-center select-none pointer-events-none"
//           />
//         </picture>
        
//         {/* Premium Dark Gradient Overlay for absolute text contrast */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#131E29]/90 via-[#131E29]/80 to-[#131E29]/95 md:from-[#131E29]/85 md:via-[#131E29]/75 md:to-[#131E29]/90 z-10" />
//       </div>

//       {/* Background Glow Aesthetic */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#EE6002]/10 rounded-full blur-[140px] pointer-events-none z-10" />

//       {/* 2. MAIN CONTENT WRAPPER */}
//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-28 md:pb-24 w-full my-auto z-20">
        
//         {/* CENTERED TEXT COPYWRITING */}
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="text-center space-y-5 md:space-y-6 max-w-4xl mx-auto"
//         >
//           {/* Badge */}
//           <motion.div 
//             variants={fadeInUp}
//             className="inline-flex items-center gap-2 bg-[#EE6002]/20 border border-[#EE6002]/40 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full backdrop-blur-md"
//           >
//             <ShieldCheck className="w-3.5 h-3.5 text-[#EE6002]" />
//             <span className="text-[10px] md:text-xs font-black tracking-widest uppercase text-[#EE6002]">
//               15+ Years of Expert Pest Protection
//             </span>
//           </motion.div>

//           {/* Main Centered Bold Heading */}
//           <motion.h1 
//             variants={fadeInUp}
//             className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] md:leading-[1.05] text-white uppercase drop-shadow-md"
//           >
//             Elite Pest Control <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#EE6002]">
//               Services in Soho
//             </span>
//           </motion.h1>

//           {/* Subtitle Description */}
//           <motion.p 
//             variants={fadeInUp}
//             className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow"
//           >
//             Complete, fast, and reliable pest control treatments tailored for Soho homes and businesses. We eliminate infestations safely, ensuring your property remains protected and secure.
//           </motion.p>

//           {/* Action Trigger Buttons */}
//           <motion.div 
//             variants={fadeInUp}
//             className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4"
//           >
//             <button className="bg-[#EE6002] hover:bg-[#d45502] text-white font-black text-[10px] md:text-xs uppercase tracking-widest px-6 py-3.5 md:px-8 md:py-4 rounded shadow-lg shadow-[#EE6002]/30 transition-all duration-200 active:scale-95 inline-flex items-center gap-2 group">
//               Book a Treatment
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </button>
//             <button className="bg-transparent hover:bg-white/10 text-white font-black text-[10px] md:text-xs uppercase tracking-widest px-6 py-3.5 md:px-8 md:py-4 rounded border border-white/30 transition-all duration-200 backdrop-blur-md">
//               Our Services
//             </button>
//           </motion.div>
//         </motion.div>

//       </div>

//       {/* 3. BOTTOM INFORMATION CALL TO ACTION BAR */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 md:pb-8 z-30">
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="w-full bg-[#182533]/85 backdrop-blur-md rounded-lg p-5 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 shadow-2xl border border-white/10 relative overflow-hidden group"
//         >
//           <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 translate-x-10 pointer-events-none transition-transform duration-700 group-hover:translate-x-0" />
          
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
//             <div className="bg-[#EE6002]/10 p-2.5 md:p-3.5 rounded-full border border-[#EE6002]/20">
//               <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#EE6002] animate-pulse" />
//             </div>
//             <div>
//               <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-black">Need Immediate Help? Call Us Today:</p>
//               <a href="tel:07405613595" className="text-xl sm:text-3xl font-black text-white hover:text-[#EE6002] block mt-0.5 tracking-tight transition-colors">
//                 07405 613595
//               </a>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-y-2 gap-x-4 md:gap-x-6 border-t border-white/5 md:border-t-0 pt-3 md:pt-0 w-full md:w-auto text-[11px] md:text-xs uppercase tracking-wider text-gray-300">
//             <div className="flex items-center gap-2">
//               <MapPin className="w-3.5 h-3.5 text-[#EE6002]" />
//               <span className="font-bold">Soho, London</span>
//             </div>
//             <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
//             <div className="flex items-center gap-2">
//               <Mail className="w-3.5 h-3.5 text-[#EE6002]" />
//               <a href="mailto:info@pestcontrolsoho.co.uk" className="hover:underline font-bold text-white">
//                 info@pestcontrolsoho.co.uk
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//     </div>
//   );
// }













// import React from 'react';
// import { Link } from 'react-router-dom'; // Imported Link for route transitions
// import { motion } from 'framer-motion';
// import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

// export default function HeroSection() {
//   // Animation Variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   return (
//     <div className="relative min-h-[calc(100vh-80px)] bg-[#131E29] text-white overflow-hidden font-sans flex flex-col justify-between">
      
//       {/* 1. DYNAMIC RESPONSIVE IMAGE LAYER (ART DIRECTION) */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <picture>
//           {/* Agar screen 768px (md) ya usse badi hai, to desktop wali image load hogi */}
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
          
//           {/* Mobile aur baqi choti screens par automatic 9:16 vertical image load hogi */}
//           <img 
//             src="/images/herohome-mobile.webp" 
//             alt="Pest Control Service Soho" 
//             className="w-full h-full object-cover object-center select-none pointer-events-none"
//           />
//         </picture>
        
//         {/* Premium Dark Gradient Overlay for absolute text contrast */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#131E29]/90 via-[#131E29]/80 to-[#131E29]/95 md:from-[#131E29]/85 md:via-[#131E29]/75 md:to-[#131E29]/90 z-10" />
//       </div>

//       {/* Background Glow Aesthetic */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#EE6002]/10 rounded-full blur-[140px] pointer-events-none z-10" />

//       {/* 2. MAIN CONTENT WRAPPER */}
//       <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-28 md:pb-24 w-full my-auto z-20">
        
//         {/* CENTERED TEXT COPYWRITING */}
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="text-center space-y-5 md:space-y-6 max-w-4xl mx-auto"
//         >
//           {/* Badge */}
//           <motion.div 
//             variants={fadeInUp}
//             className="inline-flex items-center gap-2 bg-[#EE6002]/20 border border-[#EE6002]/40 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full backdrop-blur-md"
//           >
//             <ShieldCheck className="w-3.5 h-3.5 text-[#EE6002]" />
//             <span className="text-[10px] md:text-xs font-black tracking-widest uppercase text-[#EE6002]">
//               15+ Years of Expert Pest Protection
//             </span>
//           </motion.div>

//           {/* Main Centered Bold Heading */}
//           <motion.h1 
//             variants={fadeInUp}
//             className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] md:leading-[1.05] text-white uppercase drop-shadow-md"
//           >
//             Elite Pest Control <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#EE6002]">
//               Services in Soho
//             </span>
//           </motion.h1>

//           {/* Subtitle Description */}
//           <motion.p 
//             variants={fadeInUp}
//             className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow"
//           >
//             Complete, fast, and reliable pest control treatments tailored for Soho homes and businesses. We eliminate infestations safely, ensuring your property remains protected and secure.
//           </motion.p>

//           {/* Action Trigger Links (Updated with React Router Link) */}
//           <motion.div 
//             variants={fadeInUp}
//             className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4"
//           >
//             {/* Book a Treatment Button -> Navigates to /contact-us */}
//             <Link 
//               to="/contact-us" 
//               className="bg-[#EE6002] hover:bg-[#d45502] text-white font-black text-[10px] md:text-xs uppercase tracking-widest px-6 py-3.5 md:px-8 md:py-4 rounded shadow-lg shadow-[#EE6002]/30 transition-all duration-200 active:scale-95 inline-flex items-center gap-2 group text-center"
//             >
//               Book a Treatment
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </Link>

//             {/* Our Services Button -> Navigates to /services */}
//             <Link 
//               to="/services" 
//               className="bg-transparent hover:bg-white/10 text-white font-black text-[10px] md:text-xs uppercase tracking-widest px-6 py-3.5 md:px-8 md:py-4 rounded border border-white/30 transition-all duration-200 backdrop-blur-md text-center"
//             >
//               Our Services
//             </Link>
//           </motion.div>
//         </motion.div>

//       </div>

//       {/* 3. BOTTOM INFORMATION CALL TO ACTION BAR */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 md:pb-8 z-30">
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="w-full bg-[#182533]/85 backdrop-blur-md rounded-lg p-5 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 shadow-2xl border border-white/10 relative overflow-hidden group"
//         >
//           <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 translate-x-10 pointer-events-none transition-transform duration-700 group-hover:translate-x-0" />
          
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
//             <div className="bg-[#EE6002]/10 p-2.5 md:p-3.5 rounded-full border border-[#EE6002]/20">
//               <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#EE6002] animate-pulse" />
//             </div>
//             <div>
//               <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-black">Need Immediate Help? Call Us Today:</p>
//               <a href="tel:07405613595" className="text-xl sm:text-3xl font-black text-white hover:text-[#EE6002] block mt-0.5 tracking-tight transition-colors">
//                 07405 613595
//               </a>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-y-2 gap-x-4 md:gap-x-6 border-t border-white/5 md:border-t-0 pt-3 md:pt-0 w-full md:w-auto text-[11px] md:text-xs uppercase tracking-wider text-gray-300">
//             <div className="flex items-center gap-2">
//               <MapPin className="w-3.5 h-3.5 text-[#EE6002]" />
//               <span className="font-bold">Soho, London</span>
//             </div>
//             <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
//             <div className="flex items-center gap-2">
//               <Mail className="w-3.5 h-3.5 text-[#EE6002]" />
//               <a href="mailto:info@pestcontrolsoho.uk" className="hover:underline font-bold text-white">
//                 info@pestcontrolsoho.uk
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//     </div>
//   );
// }













// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// export default function HeroSection() {
//   // Smooth animations for exact replication
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 25 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
//     }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-[#3d2a21] text-white overflow-hidden font-sans flex items-center">
      
//       {/* 1. BACKGROUND IMAGE LAYER */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <picture>
//           <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
//           <img 
//             src="/images/herohome.webp" 
//             alt="PesSave Pest Control Chelsea" 
//             className="w-full h-full object-cover object-center select-none pointer-events-none"
//           />
//         </picture>
        
//         {/* Exact professional blue-tinted dark premium overlay screen as seen in image_e67480_2.png */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/90 via-[#112233]/75 to-[#0d1b2a]/40 md:from-[#0d1b2a]/85 md:via-[#112233]/65 md:to-transparent z-10" />
//       </div>

//       {/* 2. MAIN CONTENT CONTAINER (Exact Layout Symmetry from image_e67480_2.png) */}
//       <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20 pt-24 pb-12">
        
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//           className="max-w-3xl space-y-5 md:space-y-6 text-left"
//         >
//           {/* Top Small Subheading Tracking Text */}
//           <motion.p 
//             variants={fadeInUp}
//             className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gray-300"
//           >
//             Smart Protection. Clean Living.
//           </motion.p>

//           {/* Main Solid Massive Left-Aligned Heading */}
//           <motion.h1 
//             variants={fadeInUp}
//             className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold tracking-tight leading-[1.1] text-white"
//           >
//             We Are Here For <br />
//             <span className="block mt-1">Pest Control Needs!</span>
//           </motion.h1>

//           {/* Clean Descriptive Paragraph Block */}
//           <motion.p 
//             variants={fadeInUp}
//             className="text-sm sm:text-base md:text-lg text-gray-300/90 max-w-xl font-normal leading-relaxed pt-1"
//           >
//             Complete residential and commercial pest management solutions across Chelsea, London. Fast, safe, and fully certified treatments to secure your home or business premises today.
//           </motion.p>

//           {/* Action Call Row (Exact arrangement of Button + Icon + Phone No. with original Logo Yellow) */}
//           <motion.div 
//             variants={fadeInUp}
//             className="flex flex-wrap items-center gap-6 sm:gap-8 pt-5 md:pt-7"
//           >
//             {/* Exact Logo Golden Yellow (#F2C12E) Accent Button */}
//             <Link 
//               to="/contact-us" 
//               className="bg-[#F2C12E] hover:bg-[#dbad24] text-neutral-900 font-bold text-xs md:text-sm uppercase tracking-wider px-7 py-3.5 md:px-9 md:py-4 rounded-sm transition-all duration-300 active:scale-95 inline-flex items-center gap-2 group shadow-lg shadow-[#F2C12E]/10"
//             >
//               Book Now
//               <span className="transition-transform group-hover:translate-x-1 font-semibold">➔</span>
//             </Link>

//             {/* Phone Number Call Integration Layout with Inline Icon */}
//             <div className="flex items-center gap-2">
//               {/* Custom SVG Phone Icon matching image_e67480_2.png styling using exact #F2C12E */}
//               <svg 
//                 className="w-5 h-5 text-[#F2C12E]" 
//                 fill="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
//               </svg>
//               <a 
//                 href="tel:07440112498" 
//                 className="text-lg md:text-xl font-extrabold text-[#F2C12E] hover:text-white transition-colors tracking-tight"
//               >
//                 07440 112498
//               </a>
//             </div>
//           </motion.div>

//         </motion.div>

//       </div>

//     </div>
//   );
// }













import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  // Smooth premium animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] sm:min-h-screen bg-[#5C3A21] text-white overflow-hidden font-sans flex items-center w-full[-1px]">
      
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 w-full h-full z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/herohome.webp" />
          <img 
            src="/images/mobile-herohome.webp" 
            alt="PesSave Pest Control Chelsea" 

            className="w-full h-full object-cover object-[center_15%] select-none pointer-events-none"
          />
        </picture>
        
        {/* Balanced premium gradient shade overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-900/70 to-neutral-900/40 md:from-neutral-950/85 md:via-neutral-900/60 md:to-transparent z-10" />
      </div>

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-20 pt-20 pb-16">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-5 md:space-y-6 text-left"
        >
          {/* Top Small Tracker Subheading */}
          <motion.p 
            variants={fadeInUp}
            className="text-xs md:text-sm mt-10 font-black tracking-[0.25em] uppercase text-[#F1C423]"
          >
            Smart Protection. Clean Living.
          </motion.p>

          {/* Main Solid Massive Left-Aligned Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-6xl lg:text-[74px] font-black tracking-tight leading-[1.05] text-white uppercase"
          >
            We Are Here For <br />
            <span className="block mt-1 text-white">Pest Control Needs!</span>
          </motion.h1>

          {/* Clean Descriptive Paragraph Block */}
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg text-neutral-200 max-w-xl font-normal leading-relaxed pt-1"
          >
            Complete residential and commercial pest management solutions across Chelsea, London. Fast, safe, and fully certified treatments to secure your home or business premises today.
          </motion.p>

          {/* Action Call Trigger Row */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-6 sm:gap-8 pt-5 md:pt-6"
          >
            {/* Corporate Logo Yellow (#F1C423) Button */}
            <Link 
              to="/contact-us" 
              className="bg-[#F1C423] hover:bg-[#e5b228] text-neutral-950 font-black text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 active:scale-95 inline-flex items-center gap-2 group shadow-lg shadow-[#F1C423]/10"
            >
              Book Now
              <span className="transition-transform group-hover:translate-x-1 font-semibold">➔</span>
            </Link>

            {/* Direct Phone Number Action Anchoring */}
            <div className="flex items-center gap-2.5">
              <svg 
                className="w-5 h-5 text-[#F1C423]" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
              </svg>
              <a 
                href="tel:07440112498" 
                className="text-xl md:text-2xl font-black text-[#F1C423] hover:text-white transition-colors tracking-tight"
              >
                07440 112498
              </a>
            </div>
          </motion.div>

        </motion.div>

      </div>

    </div>
  );
}