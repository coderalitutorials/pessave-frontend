


// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const stagger = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const Footer = () => {
//   return (
//     <motion.footer
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={stagger}
//       className="bg-[#131E29] text-white pt-16 pb-6 relative overflow-hidden border-t border-[#EE6002]/20"
//     >
//       {/* 🎯 Purana Layout Style: Radial Gradient Dot Matrix (Ironforce Color Shift) */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#EE6002_1px,transparent_1px)] [background-size:28px_28px]" />

//       {/* 🎯 Purana Layout Style: Right Bottom Floating Glow Circle */}
//       <motion.div
//         animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
//         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#EE6002]/10 rounded-full blur-3xl pointer-events-none"
//       />

//       {/* 🎯 Purana Layout Style: Left Top Floating Glow Circle */}
//       <motion.div
//         animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute -left-20 -top-20 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none"
//       />

//       <div className="max-w-7xl mx-auto px-5 grid sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        
//         {/* 1️⃣ Brand Segment */}
//         <motion.div variants={fadeUp} className="space-y-4">
//           <motion.img
//             whileHover={{ scale: 1.04 }}
//             src="/images/peslog.webp"
//             alt="Ironforce Pest Control"
//             className="h-16 bg-white p-2 rounded-xl object-contain shadow-lg shadow-black/20"
//           />

//           <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
//             Professional and reliable pest control solutions tailored for homes
//             and businesses across Morden and surrounding areas.
//           </p>
//         </motion.div>

//         {/* 2️⃣ Navigation Segment */}
//         <motion.div variants={fadeUp}>
//           <h3 className="text-lg font-black mb-4 uppercase tracking-wider text-[#EE6002]">
//             Quick Links
//           </h3>

//           <div className="flex flex-col gap-3 text-sm text-gray-300 font-medium">
//             {[
//               { name: "Home", path: "/" },
//               { name: "About Us", path: "/about-us" },
//               { name: "Services", path: "/services" },
//               { name: "Contact Us", path: "/contact-us" },
//             ].map((link) => (
//               <motion.div
//                 key={link.name}
//                 whileHover={{ x: 5 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <Link
//                   to={link.path}
//                   className="hover:text-[#EE6002] transition-all duration-200 inline-block"
//                 >
//                   {link.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* 3️⃣ Custom Targets Segment */}
//         <motion.div variants={fadeUp}>
//           <h3 className="text-lg font-black mb-4 uppercase tracking-wider text-[#EE6002]">
//             Services
//           </h3>

//           <div className="flex flex-col gap-3 text-sm text-gray-300">
//             {[
//               {
//                 name: "Rat & Mice Control",
//                 state: {
//                   scrollToService: "Rats & Mice Control",
//                   category: "Rodents & Wildlife",
//                 },
//               },
//               {
//                 name: "Bed Bugs Control",
//                 state: {
//                   scrollToService: "Bed Bugs Control",
//                   category: "Insects",
//                 },
//               },
//               {
//                 name: "Carpet Moth Treatment",
//                 state: {
//                   scrollToService: "Carpet Moth Control Treatment",
//                   category: "Insects",
//                 },
//               },
//               {
//                 name: "Safe Pest Removal",
//                 state: { scrollToService: null, category: "All" },
//               },
//             ].map((service) => (
//               <motion.div
//                 key={service.name}
//                 whileHover={{ x: 5 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <Link
//                   to="/services"
//                   state={service.state}
//                   className="hover:text-[#EE6002] cursor-pointer transition inline-block"
//                 >
//                   {service.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* 4️⃣ Strategic Communication Panel */}
//         <motion.div variants={fadeUp}>
//           <h3 className="text-lg font-black mb-4 uppercase tracking-wider text-[#EE6002]">
//             Contact Us
//           </h3>

//           <div className="flex flex-col gap-3 text-sm text-gray-300">
//             <p className="flex items-center gap-2">
//               <span className="text-[#EE6002]">📍</span> Soho, UK
//             </p>

//             <motion.a
//               whileHover={{ x: 5 }}
//               href="tel:07405 613595"
//               className="flex items-center gap-2 hover:text-[#EE6002] transition w-max"
//             >
//               <span className="text-[#EE6002]">📞</span> 07405 613595
//             </motion.a>

//             <motion.a
//               whileHover={{ x: 5 }}
//               href="mailto:info@pestcontrolsoho.uk"
//               className="flex items-center gap-2 hover:text-[#EE6002] transition w-max break-all"
//             >
//               <span className="text-[#EE6002]">✉️</span>
//               info@pestcontrolsoho.uk
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>

//       {/* Bottom Sub-Copyright Section */}
//       <motion.div
//         variants={fadeUp}
//         className="max-w-7xl mx-auto px-5 mt-14 pt-6 border-t border-[#EE6002]/20 text-center text-xs md:text-sm text-gray-400 tracking-wide relative z-10"
//       >
//         © {new Date().getFullYear()} IRONFORCE. All Rights Reserved.
//       </motion.div>
//     </motion.footer>
//   );
// };

// export default Footer;










import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="relative overflow-hidden bg-[#5C4033] text-white"
    >
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#F2C12E_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="absolute -right-24 -bottom-24 w-80 h-80 bg-[#F2C12E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-24 -top-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
          
          <motion.div variants={fadeUp} className="space-y-6">
            <img
              src="/images/peslog.webp"
              alt="PesSave Services"
              className="h-20 w-auto object-contain"
            />

            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Professional and reliable pest control solutions tailored for homes
              and businesses across Chelsea and surrounding London areas.
            </p>

            {/* <div className="flex items-center gap-4 pt-2">
              <span className="text-lg font-medium">Follow us:</span>

              <a href="#" className="text-white hover:text-[#F2C12E] transition">
                f
              </a>
              <a href="#" className="text-white hover:text-[#F2C12E] transition">
                𝕏
              </a>
              <a href="#" className="text-white hover:text-[#F2C12E] transition">
                ✦
              </a>
              <a href="#" className="text-white hover:text-[#F2C12E] transition">
                ▶
              </a>
            </div> */}
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-black mb-6 tracking-tight text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-white/80 text-sm font-medium">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Services", path: "/services" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-[#F2C12E] transition w-max"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-black mb-6 tracking-tight text-white">
              Services
            </h3>

            <div className="flex flex-col gap-4 text-white/80 text-sm font-medium">
              {[
                {
                  name: "Rat & Mice Control",
                  state: {
                    scrollToService: "Rats & Mice Control",
                    category: "Rodents & Wildlife",
                  },
                },
                {
                  name: "Bed Bugs Control",
                  state: {
                    scrollToService: "Bed Bugs Control",
                    category: "Insects",
                  },
                },
                {
                  name: "Carpet Moth Treatment",
                  state: {
                    scrollToService: "Carpet Moth Control Treatment",
                    category: "Insects",
                  },
                },
                {
                  name: "Safe Pest Removal",
                  state: { scrollToService: null, category: "All" },
                },
              ].map((service) => (
                <Link
                  key={service.name}
                  to="/services"
                  state={service.state}
                  className="hover:text-[#F2C12E] transition w-max"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-2xl font-black mb-6 tracking-tight text-white">
              Contact Us
            </h3>

            <div className="flex flex-col gap-5 text-white/85 text-sm">
              <p className="flex items-start gap-4">
                <span className="text-[#F2C12E] text-lg">📍</span>
                <span>
                  Chelsea, London, UK
                </span>
              </p>

              <a
                href="tel:07405 613595"
                className="flex items-center gap-4 hover:text-[#F2C12E] transition w-max"
              >
                <span className="text-[#F2C12E] text-lg">📞</span>
                07405 613595
              </a>

              <a
                href="mailto:info@pessave.co.uk"
                className="flex items-center gap-4 hover:text-[#F2C12E] transition break-all"
              >
                <span className="text-[#F2C12E] text-lg">✉️</span>
                info@pestcontrolchelsea.uk
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 bg-[#4A3329] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/80">
          <p>Copyright © {new Date().getFullYear()} PesSave Services</p>
          <p>Powered by PesSave Services</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;