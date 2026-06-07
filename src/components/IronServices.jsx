// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const homeServices = [
//   {
//     id: 1,
//     title: "Ants Eradication",
//     image: "/images/ants.webp",
//     details:
//       "Targeted pest control treatment to clear out active ant colonies and block entry points to stop them from coming back.",
//   },
//   {
//     id: 2,
//     title: "Bed Bugs Treatment",
//     image: "/images/bedbugs.webp",
//     details:
//       "Complete deep-clean treatments for mattresses, fabrics, and furniture frames using highly safe and practical local methods.",
//   },
//   {
//     id: 3,
//     title: "Carpet Moth Removal",
//     image: "/images/moth.webp",
//     details:
//       "Specialist removal solutions to fully protect your premium carpets, clothing, and interior rugs from severe fiber damage.",
//   },
// ];

// // Stagger container animation for smooth entrance elements
// const staggerContainer = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.15 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// export default function IronServices() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-white py-16 sm:py-24 text-[#131E29]">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
        
//         {/* Section Header: Aliquam Flat Template Aesthetic Layout */}
//         <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
//           <span className="text-[#EE6002] text-xs font-black uppercase tracking-[0.25em] block mb-3">
//             Ironforce Services
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#131E29] uppercase">
//             Our Services
//           </h2>
//           <div className="w-16 h-1 bg-[#EE6002] mx-auto mt-4 mb-6" />
//           <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto font-medium leading-relaxed">
//             Select a targeted pest control treatment to permanently clear active infestations from your property infrastructure.
//           </p>
//         </div>

//         {/* Services Structural Grid Layout (Matching Clean Container Proportions) */}
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.15 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
//         >
//           {homeServices.map((service) => (
//             <motion.div
//               key={service.id}
//               variants={fadeUp}
//               whileHover={{ y: -6 }}
//               onClick={() => navigate("/contact-us")}
//               className="group bg-[#131E29] rounded-none border border-transparent shadow-xl shadow-black/5 hover:shadow-black/10 transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden"
//             >
              
//               {/* Top/Visual: Clean Fixed Image Frame Container */}
//               <div className="h-56 sm:h-64 w-full overflow-hidden relative bg-gray-900 shrink-0">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   loading="lazy"
//                 />
//                 {/* Subtle dark overlay matching template presentation depth */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#131E29]/30 to-transparent" />
//               </div>

//               {/* Bottom/Content: Balanced Editorial Typography Typography Wrapper */}
//               <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow text-left">
//                 <div className="space-y-3">
//                   <h3 className="text-xl font-black text-white group-hover:text-[#EE6002] transition-colors duration-200 uppercase tracking-wide">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
//                     {service.details}
//                   </p>
//                 </div>

//                 {/* Explicit Clean Action Text Trigger */}
//                 <div className="pt-6 mt-auto flex items-center gap-2 text-xs font-black text-[#EE6002] uppercase tracking-widest border-t border-white/5 group-hover:gap-4 transition-all duration-300">
//                   <span>Book Treatment</span>
//                   <span className="text-sm">→</span>
//                 </div>
//               </div>

//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }










// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const homeServices = [
//   {
//     id: 1,
//     title: "Ants Eradication",
//     image: "/images/ants.webp",
//     details:
//       "Targeted pest control treatment to clear out active ant colonies and block entry points to stop them from coming back.",
//   },
//   {
//     id: 2,
//     title: "Bed Bugs Treatment",
//     image: "/images/bedbugs.webp",
//     details:
//       "Complete deep-clean treatments for mattresses, fabrics, and furniture frames using highly safe and practical local methods.",
//   },
//   {
//     id: 3,
//     title: "Carpet Moth Removal",
//     image: "/images/moth.webp",
//     details:
//       "Specialist removal solutions to fully protect your premium carpets, clothing, and interior rugs from severe fiber damage.",
//   },
// ];

// const staggerContainer = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.15 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// export default function IronServices() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#131E29] py-16 sm:py-24 text-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
        
//         {/* Section Header */}
//         <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
//           <span className="text-[#EE6002] text-xs font-black uppercase tracking-[0.25em] block mb-3">
//             Ironforce Services
//           </span>
//           <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
//             Our Services
//           </h2>
//           <div className="w-16 h-1 bg-[#EE6002] mx-auto mt-4 mb-6" />
//           <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-medium leading-relaxed">
//             Select a targeted pest control treatment to permanently clear active infestations from your property infrastructure.
//           </p>
//         </div>

//         {/* Services Structural Grid */}
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.15 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
//         >
//           {homeServices.map((service) => (
//             <motion.div
//               key={service.id}
//               variants={fadeUp}
//               whileHover={{ y: -6 }}
//               onClick={() => navigate("/contact-us")}
//               className="group bg-[#1A2633] rounded-none border border-white/5 shadow-2xl shadow-black/20 hover:shadow-black/40 transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden"
//             >
              
//               {/* Top/Visual Container */}
//               <div className="h-56 sm:h-64 w-full overflow-hidden relative bg-gray-900 shrink-0">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#1A2633] via-transparent to-transparent opacity-80" />
//               </div>

//               {/* Bottom/Content */}
//               <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow text-left">
//                 <div className="space-y-3">
//                   <h3 className="text-xl font-black text-white group-hover:text-[#EE6002] transition-colors duration-200 uppercase tracking-wide">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
//                     {service.details}
//                   </p>
//                 </div>

//                 {/* Action Trigger Link Line */}
//                 <div className="pt-6 mt-auto flex items-center gap-2 text-xs font-black text-[#EE6002] uppercase tracking-widest border-t border-white/10 group-hover:gap-4 transition-all duration-300">
//                   <span>Book Treatment</span>
//                   <span className="text-sm">→</span>
//                 </div>
//               </div>

//             </motion.div>
//           ))}
//         </motion.div>

//         {/* --- Global Call to Action Button Layout --- */}
//         <motion.div 
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-center mt-12 sm:mt-16"
//         >
//           <motion.button
//             whileHover={{ scale: 1.04, backgroundColor: "#ff6f0b" }}
//             whileTap={{ scale: 0.96 }}
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center gap-3 bg-[#EE6002] text-white font-black text-xs sm:text-sm uppercase tracking-widest px-8 sm:px-10 py-4 rounded-lg shadow-xl shadow-[#EE6002]/10 hover:shadow-[#EE6002]/20 transition-all duration-200 cursor-pointer"
//           >
//             <span>View All Services</span>
//             <span className="text-base">➔</span>
//           </motion.button>
//         </motion.div>

//       </div>
//     </section>
//   );
// }











// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// // Brand Color Standards
// const brandColors = {
//   brown: "#5C4033",
//   yellow: "#F2C12E",
//   textMain: "#1A1512",
// };

// // Completely Fresh and New Descriptive Pest Data (Different from the old site code)
// const homeServices = [
//   {
//     id: 1,
//     num: "01.",
//     title: "Mice & Rodent Control",
//     image: "/images/rodents.webp",
//     details:
//       "Advanced baiting and strategic structural exclusion methods designed to eliminate internal rodent nests and securely seal common entry pathways around your property floorboards.",
//   },
//   {
//     id: 2,
//     num: "02.",
//     title: "Wasp Nest Eradication",
//     image: "/images/wasps.webp",
//     details:
//       "High-grade protective extraction treatments targeting structural voids and garden spaces. Safely neutralizing active wasp populations with rapid, eco-certified solutions.",
//   },
//   {
//     id: 3,
//     num: "03.",
//     title: "Heat Treatment for Bed Bugs",
//     image: "/images/bedbugs.webp",
//     details:
//       "Premium chemical-free thermal heat solutions engineered to penetrate deep mattress fibers, joints, and luxury textiles, ensuring complete elimination in a single visit.",
//   },
// ];

// const staggerContainer = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.2 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 35 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
// };

// export default function PesSaveServices() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-white py-20 sm:py-28 text-neutral-900 overflow-hidden z-20 relative">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
        
//         {/* --- SECTION HEADER: Exact Layout Match with image_e58efe.png --- */}
//         <div className="text-left max-w-3xl mb-16 sm:mb-24 space-y-3">
//           <div className="flex items-center gap-3">
//             <span className="w-12 h-[2px] bg-[#F2C12E] block"></span>
//             <span className="text-[#F2C12E] text-xs font-bold uppercase tracking-[0.25em] block">
//               Services
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1512] leading-tight">
//             Offering best pest <br />
//             management services
//           </h2>
//         </div>

//         {/* --- SERVICES STACK: Exact Split Row Structure from image_e58efe.png --- */}
//         <motion.div 
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           className="space-y-20 sm:space-y-32"
//         >
//           {homeServices.map((service, index) => {
//             // Alternating rows layout logic (Left Image, Right Content, and vice versa)
//             const isEven = index % 2 === 1;
            
//             return (
//               <motion.div
//                 key={service.id}
//                 variants={fadeUp}
//                 className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-24 ${
//                   isEven ? "lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Visual Image Screen Container */}
//                 <div className="w-full lg:w-1/2 h-[300px] sm:h-[420px] overflow-hidden relative bg-gray-100 shadow-xl rounded-sm group shrink-0">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-[#5C4033]/5 group-hover:bg-transparent transition-colors duration-300" />
//                 </div>

//                 {/* Content Side Container with Dynamic Linking Lines */}
//                 <div className="w-full lg:w-1/2 text-left relative flex flex-col justify-center">
                  
//                   {/* Subtle Connecting Line - Replicating the image_e58efe.png layout aesthetic */}
//                   <div className={`hidden lg:block absolute top-7 w-16 h-[1px] bg-gray-200 ${
//                     isEven ? "-right-20" : "-left-24"
//                   }`} />

//                   {/* Serial Number Counter */}
//                   <span className="text-sm font-bold text-[#F2C12E] tracking-widest block mb-4">
//                     {service.num}
//                   </span>

//                   {/* Service Headline Title */}
//                   <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1A1512] tracking-tight mb-4 hover:text-[#5C4033] transition-colors">
//                     {service.title}
//                   </h3>

//                   {/* Core Paragraph description text block */}
//                   <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal mb-6 max-w-xl">
//                     {service.details}
//                   </p>

//                   {/* Read More Inline Link with Arrow layout matching image_e58efe.png */}
//                   <div 
//                     onClick={() => navigate("/contact-us")}
//                     className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1A1512] uppercase tracking-wider cursor-pointer group w-fit hover:text-[#5C4033] transition-colors"
//                   >
//                     <span>Read More</span>
//                     <span className="transition-transform group-hover:translate-x-1.5 duration-300">➔</span>
//                   </div>

//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* --- GLOBAL CALL TO ACTION: View More Services Layout --- */}
//         <motion.div 
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-center mt-20 sm:mt-28"
//         >
//           <motion.button
//             whileHover={{ scale: 1.02, backgroundColor: "#5C4033", color: "#FFFFFF" }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => navigate("/services")}
//             className="inline-flex items-center gap-3 bg-transparent text-[#5C4033] border-2 border-[#5C4033] font-bold text-xs sm:text-sm uppercase tracking-widest px-8 sm:px-10 py-4 rounded-sm transition-all duration-200 cursor-pointer shadow-sm"
//           >
//             <span>View More Services</span>
//             <span className="text-xs">➔</span>
//           </motion.button>
//         </motion.div>

//       </div>
//     </section>
//   );
// }












import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Brand Color Standards mapped precisely to PesSave Identity
const brandColors = {
  brown: "#5C3A21",
  yellow: "#F1C423",
  textMain: "#1A1512",
};

// Completely Fresh and New Descriptive Pest Data
const homeServices = [
  {
    id: 1,
    num: "01.",
    title: "Mice & Rodent Control",
    image: "/images/rodents.webp",
    details:
      "Advanced baiting and strategic structural exclusion methods designed to eliminate internal rodent nests and securely seal common entry pathways around your property floorboards.",
  },
  {
    id: 2,
    num: "02.",
    title: "Wasp Nest Eradication",
    image: "/images/wasps.webp",
    details:
      "High-grade protective extraction treatments targeting structural voids and garden spaces. Safely neutralizing active wasp populations with rapid, eco-certified solutions.",
  },
  {
    id: 3,
    num: "03.",
    title: "Heat Treatment for Bed Bugs",
    image: "/images/bedbugs.webp",
    details:
      "Premium chemical-free thermal heat solutions engineered to penetrate deep mattress fibers, joints, and luxury textiles, ensuring complete elimination in a single visit.",
  },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function PesSaveServices() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20 sm:py-28 text-neutral-900 overflow-hidden z-20 relative w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- SECTION HEADER: Exact Layout Match --- */}
        <div className="text-left max-w-3xl mb-16 sm:mb-24 space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#F1C423] block"></span>
            <span className="text-[#F1C423] text-xs font-black uppercase tracking-[0.25em] block">
              Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1A1512] leading-tight uppercase">
            Offering best pest <br />
            management services
          </h2>
        </div>

        {/* --- SERVICES STACK: Exact Split Row Structure --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-20 sm:space-y-32"
        >
          {homeServices.map((service, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                onClick={() => navigate("/contact-us")}
                className={`group flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-24 cursor-pointer select-none ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image Screen Container */}
                <div className="w-full lg:w-1/2 h-[300px] sm:h-[420px] overflow-hidden relative bg-neutral-50 shadow-xl rounded-2xl border border-neutral-100 shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#5C3A21]/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Content Side Container with Dynamic Linking Lines */}
                <div className="w-full lg:w-1/2 text-left relative flex flex-col justify-center">
                  
                  {/* Subtle Connecting Line Aesthetic */}
                  <div className={`hidden lg:block absolute top-7 w-16 h-[1px] bg-neutral-200 transition-colors group-hover:bg-[#F1C423] ${
                    isEven ? "-right-20" : "-left-24"
                  }`} />

                  {/* Serial Number Counter */}
                  <span className="text-sm font-black text-[#F1C423] tracking-widest block mb-4">
                    {service.num}
                  </span>

                  {/* Service Headline Title */}
                  <h3 className="text-2xl sm:text-4xl font-black text-[#1A1512] uppercase tracking-tight mb-4 group-hover:text-[#5C3A21] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Core Paragraph description text block */}
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal mb-6 max-w-xl">
                    {service.details}
                  </p>

                  {/* Updated Interactive Action Trigger Button Anchor */}
                  <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#1A1512] uppercase tracking-widest group-hover:text-[#F1C423] transition-colors duration-200 w-fit">
                    <span>Book Your Inspection</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">➔</span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- GLOBAL CALL TO ACTION: View More Services Layout --- */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-20 sm:mt-28"
        >
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#5C3A21", borderColor: "#5C3A21", color: "#FFFFFF" }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.stopPropagation(); // Main section grid redirection clear link structure
              navigate("/services");
            }}
            className="inline-flex items-center gap-3 bg-transparent text-[#5C3A21] border-2 border-[#5C3A21] font-black text-xs sm:text-sm uppercase tracking-widest px-8 sm:px-10 py-4 rounded-xl transition-all duration-200 cursor-pointer shadow-sm"
          >
            <span>View More Services</span>
            <span className="text-xs">➔</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}