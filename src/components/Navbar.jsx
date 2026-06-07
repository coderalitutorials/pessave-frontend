














// import { Link, NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 15) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Desktop Links Style - Dark Background ke liye High-Contrast Pill Accent
//   const navClass = ({ isActive }) =>
//     `px-4 py-1.5 text-xs lg:text-sm font-bold tracking-wider uppercase rounded-md transition-all duration-200 ${
//       isActive
//         ? "text-white bg-[#00A896] shadow-sm shadow-[#00A896]/20"
//         : "text-gray-300 hover:bg-white/10 hover:text-white"
//     }`;

//   // Mobile Dropdown Links
//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-lg px-4 py-3 text-sm font-extrabold tracking-wider uppercase transition-all ${
//       isActive
//         ? "bg-[#00A896] text-white tracking-widest"
//         : "text-gray-300 hover:bg-white/5 border-l-2 border-transparent hover:border-[#00A896]"
//     }`;

//   return (
//     <nav
//       className={`sticky top-0 z-50 transition-all duration-300 bg-[#0F172A] ${
//         isScrolled
//           ? "border-b-2 border-[#00A896] shadow-lg"
//           : "border-b border-white/10"
//       }`}
//     >
//       {/* Top Info Strip with Logo Theme Colors */}
//       <div className="bg-[#D97706] text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase py-1.5 px-4 flex justify-between items-center">
//         <div>📍 Service Area: Morden, London</div>
//         <div className="bg-[#0F172A] text-[#00A896] px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold animate-pulse">
//           ⚡ Emergency Pest Treatment
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 lg:px-6">
//         <div className="h-16 md:h-20 flex items-center justify-between">
          
//           {/* LEFT: Logo Area Alone */}
//           <Link to="/" className="active:scale-95 transition-transform duration-200 block py-2">
//             <img
//               src="/images/logo.png" 
//               alt="SafeSphere Services"
//               className="h-20 md:h-14 w-auto object-contain  px-3 py-1 rounded-lg  shadow-sm"
//             />
//           </Link>

//           {/* RIGHT: All Nav Pages + Contact CTA Aligned Together */}
//           <div className="hidden md:flex items-center gap-2 lg:gap-4 ml-auto">
//             <NavLink to="/" className={navClass}>Home</NavLink>
//             <NavLink to="/about-us" className={navClass}>About</NavLink>
//             <NavLink to="/services" className={navClass}>Services</NavLink>
//             <NavLink to="/contact-us" className={navClass}>Contact</NavLink>
            
//             <div className="h-5 w-[1px] bg-white/20 mx-1" />

//             {/* Compact Gold Call Action Button */}
//             <a
//               href="tel:07448101275"
//               className="bg-[#D97706] hover:bg-white hover:text-[#0F172A] text-white px-4 py-2 rounded-lg font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center gap-1.5 whitespace-nowrap"
//             >
//               <span>📞</span> 07448 101275
//             </a>
//           </div>

//           {/* Hamburger Menu Trigger for Mobile Devices */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden h-9 w-9 rounded-lg bg-white/10 text-white flex items-center justify-center transition-all active:scale-90 hover:bg-white/20"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-lg font-bold">✕</span>
//             ) : (
//               <span className="text-lg">☰</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Dark Theme Mobile Slide-Down Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//             className="md:hidden bg-[#0F172A] border-t border-white/10 shadow-xl overflow-hidden"
//           >
//             <div className="px-4 py-3 flex flex-col gap-1">
//               <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home Overview</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About Our Agency</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Pest Control Treatments</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Get Support</NavLink>
              
//               <div className="border-t border-white/10 mt-2 pt-3 pb-1">
//                 <a
//                   href="tel:07448101275"
//                   className="w-full bg-[#D97706] text-white py-3 rounded-lg font-extrabold text-center block tracking-widest text-xs uppercase active:scale-95 transition-transform"
//                 >
//                   📞 Direct Hotline: 07448 101275
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;















// import { Link, NavLink } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 15) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Desktop Links Style - Dark Background ke liye High-Contrast Pill Accent
//   const navClass = ({ isActive }) =>
//     `px-4 py-1.5 text-xs lg:text-sm font-bold tracking-wider uppercase rounded-md transition-all duration-200 ${
//       isActive
//         ? "text-white bg-[#00A896] shadow-sm shadow-[#00A896]/20"
//         : "text-gray-300 hover:bg-white/10 hover:text-white"
//     }`;

//   // Mobile Dropdown Links
//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-lg px-4 py-3 text-sm font-extrabold tracking-wider uppercase transition-all ${
//       isActive
//         ? "bg-[#00A896] text-white tracking-widest"
//         : "text-gray-300 hover:bg-white/5 border-l-2 border-transparent hover:border-[#00A896]"
//     }`;

//   return (
//     <nav
//       className={`sticky top-0 z-50 transition-all duration-300 bg-[#071827] ${
//         isScrolled
//           ? "border-b-2 border-[#009494] shadow-lg shadow-[#009494]/5"
//           : "border-b border-white/10"
//       }`}
//     >
//       {/* Top Info Strip with Logo Theme Colors */}
//       <div className="bg-[#D97706] text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase py-1.5 px-4 flex justify-between items-center relative z-10">
//         <div>📍 Service Area: Morden, London</div>
//         <div className="bg-[#0F172A] text-[#00A896] px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold animate-pulse">
//           ⚡ Emergency Pest Treatment
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 lg:px-6">
//         <div className="min-h-[4.5rem] md:min-h-[6rem] py-2 flex items-center justify-between gap-4">
          
//           {/* LEFT: Max Optimized Logo Area */}
//           <Link to="/" className="active:scale-95 transition-transform duration-200 block shrink-0 max-w-[55%] sm:max-w-none">
//             <img
//               src="/images/logo.webp" 
//               alt="SafeSphere Services"
//               className="h-12 xs:h-14 sm:h-20 md:h-24 w-auto object-contain block transition-all"
//             />
//           </Link>

//           {/* RIGHT: All Nav Pages + Contact CTA Aligned Together */}
//           <div className="hidden md:flex items-center gap-2 lg:gap-4 ml-auto">
//             <NavLink to="/" className={navClass}>Home</NavLink>
//             <NavLink to="/about-us" className={navClass}>About</NavLink>
//             <NavLink to="/services" className={navClass}>Services</NavLink>
//             <NavLink to="/contact-us" className={navClass}>Contact</NavLink>
            
//             <div className="h-5 w-[1px] bg-white/20 mx-1" />

//             {/* Compact Gold Call Action Button */}
//             <a
//               href="tel:07448101275"
//               className="bg-[#D97706] hover:bg-white hover:text-[#0F172A] text-white px-4 py-2 rounded-lg font-extrabold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center gap-1.5 whitespace-nowrap"
//             >
//               <span>📞</span> 07448 101275
//             </a>
//           </div>

//           {/* Hamburger Menu Trigger for Mobile Devices */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden h-9 w-9 rounded-lg bg-white/10 text-white flex items-center justify-center transition-all active:scale-90 hover:bg-white/20 shrink-0"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-lg font-bold">✕</span>
//             ) : (
//               <span className="text-lg">☰</span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Dark Theme Mobile Slide-Down Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.2, ease: "easeOut" }}
//             className="md:hidden bg-[#071827] border-t border-white/10 shadow-xl overflow-hidden"
//           >
//             <div className="px-4 py-3 flex flex-col gap-1">
//               <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home Overview</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About Our Agency</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Pest Control Treatments</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Get Support</NavLink>
              
//               <div className="border-t border-white/10 mt-2 pt-3 pb-1">
//                 <a
//                   href="tel:07448101275"
//                   className="w-full bg-[#D97706] text-white py-3 rounded-lg font-extrabold text-center block tracking-widest text-xs uppercase active:scale-95 transition-transform"
//                 >
//                   📞 Direct Hotline: 07448 101275
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
















// import React from 'react';
// import { motion } from 'framer-motion';
// import { Phone } from 'lucide-react';

// export default function Navbar() {
//   return (
//     <motion.nav 
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="relative z-50 border-b border-gray-800 bg-[#131E29]/80 backdrop-blur-md text-white w-full"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
          
//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
//             {/* <img src="Ironforce.png.png" alt="Ironforce Logo" className="h-10 w-auto" /> */}
//             <div className="w-10 h-10 bg-[#EE6002] rounded flex items-center justify-center font-bold text-xl shadow-lg shadow-[#EE6002]/20">
//               IF
//             </div>
//             <span className="font-extrabold text-xl tracking-wider text-white">
//               IRON<span className="text-[#EE6002]">FORCE</span>
//             </span>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center gap-8">
//             {['Home', 'Services', 'About Us', 'Contact Us'].map((link) => (
//               <a
//                 key={link}
//                 href={`#${link.toLowerCase().replace(' ', '')}`}
//                 className="text-sm font-medium tracking-wide text-gray-300 hover:text-[#EE6002] transition-colors duration-200 relative py-2 group"
//               >
//                 {link}
//                 <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#EE6002] transition-all duration-300 group-hover:w-full" />
//               </a>
//             ))}
//           </div>

//           {/* Quick Contact Right Side */}
//           <div className="hidden lg:flex items-center gap-3 text-right">
//             <div className="bg-gray-800/40 p-2 rounded-full border border-gray-700/50">
//               <Phone className="w-4 h-4 text-[#EE6002]" />
//             </div>
//             <div>
//               <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold">Have any questions?</p>
//               <a href="tel:07405613595" className="text-sm font-bold hover:text-[#EE6002] transition-colors">
//                 07405 613595
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </motion.nav>
//   );
// }










// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Navbar() {
//   return (
//     <motion.nav 
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="absolute top-0 left-0 w-full z-50 bg-transparent text-white"
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <div className="flex items-center justify-between h-24">
          
//           {/* Logo Section - Img Tag Space */}
//           <div className="flex items-center cursor-pointer">
//             <img 
//               src="Ironforce.png.png" 
//               alt="Ironforce Logo" 
//               className="h-12 w-auto object-contain" 
//             />
//           </div>

//           {/* Navigation Links (Exact placement like reference) */}
//           <div className="hidden md:flex items-center gap-10">
//             {['HOME', 'SERVICES', 'ABOUT', 'CONTACT'].map((link) => (
//               <a
//                 key={link}
//                 href={`#${link.toLowerCase()}`}
//                 className="text-xs font-bold tracking-widest text-gray-200 hover:text-[#EE6002] transition-colors duration-200"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>

//           {/* Right Side Quick Contact */}
//           <div className="hidden sm:block text-right">
//             <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
//               Have any questions?
//             </p>
//             <a 
//               href="tel:07405613595" 
//               className="text-base font-black tracking-tight hover:text-[#EE6002] transition-colors mt-0.5 block"
//             >
//               +44 7405 613595
//             </a>
//           </div>

//         </div>
//       </div>
//     </motion.nav>
//   );
// }











// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Scroll position monitor karne ke liye hook
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.nav 
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       /* absolute se badal kar fixed kiya aur scroll status ke mutabiq background handle kiya */
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white ${
//         isScrolled 
//           ? 'bg-[#131E29]/90 backdrop-blur-md border-b border-gray-800/40 shadow-lg h-20' 
//           : 'bg-transparent h-24'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
          
//           {/* Logo Section */}
//           <div className="flex items-center cursor-pointer">
//             <img 
//               src="Ironforce.png.png" 
//               alt="Ironforce Logo" 
//               className="h-12 w-auto object-contain" 
//             />
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center gap-10">
//             {['HOME', 'SERVICES', 'ABOUT', 'CONTACT'].map((link) => (
//               <a
//                 key={link}
//                 href={`#${link.toLowerCase()}`}
//                 className="text-xs font-bold tracking-widest text-gray-200 hover:text-[#EE6002] transition-colors duration-200"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>

//           {/* Right Side Quick Contact */}
//           <div className="hidden sm:block text-right">
//             <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
//               Have any questions?
//             </p>
//             <a 
//               href="tel:07405613595" 
//               className="text-base font-black tracking-tight hover:text-[#EE6002] transition-colors mt-0.5 block"
//             >
//               +44 7405 613595
//             </a>
//           </div>

//         </div>
//       </div>
//     </motion.nav>
//   );
// }










// import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Scroll handler with your 20px threshold and dynamic transition look
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Desktop links style using your exact subtle gray to orange typography
//   const navClass = ({ isActive }) =>
//     `text-xs font-bold tracking-widest transition-colors duration-200 uppercase ${
//       isActive ? 'text-[#EE6002]' : 'text-gray-200 hover:text-[#EE6002]'
//     }`;

//   // Mobile dropdown links style maintaining same aesthetic variables
//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-lg px-4 py-3 text-sm font-black tracking-widest uppercase transition-all ${
//       isActive
//         ? 'bg-[#EE6002] text-white'
//         : 'text-gray-300 hover:bg-white/5 border-l-2 border-transparent hover:border-[#EE6002]'
//     }`;

//   return (
//     <motion.nav 
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white ${
//         isScrolled 
//           ? 'bg-[#131E29]/90 backdrop-blur-md border-b border-gray-800/40 shadow-lg h-20' 
//           : 'bg-transparent h-24'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
          
//           {/* Logo Section */}
//           <Link to="/" className="flex items-center cursor-pointer active:scale-95 transition-transform shrink-0">
//             <img 
//               src="images/ironlog.webp" 
//               alt="Ironforce Logo" 
//               className="h-12 w-auto object-contain" 
//             />
//           </Link>

//           {/* Navigation Links (Desktop Only) */}
//           <div className="hidden md:flex items-center gap-10">
//             <NavLink to="/" className={navClass}>Home</NavLink>
//             <NavLink to="/services" className={navClass}>Services</NavLink>
//             <NavLink to="/about-us" className={navClass}>About</NavLink>
//             <NavLink to="/contact-us" className={navClass}>Contact</NavLink>
//           </div>

//           {/* Right Side Quick Contact (Desktop/Tablet Layout) */}
//           <div className="hidden sm:block text-right">
//             <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
//               Have any questions?
//             </p>
//             <a 
//               href="tel:07405613595" 
//               className="text-base font-black tracking-tight hover:text-[#EE6002] transition-colors mt-0.5 block"
//             >
//               +44 7405 613595
//             </a>
//           </div>

//           {/* Hamburger Menu Button for Responsive Screen Breakdown */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden h-10 w-10 rounded-lg bg-white/5 text-white flex items-center justify-center transition-all active:scale-90 hover:bg-white/10 shrink-0"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-sm font-black tracking-wider">✕</span>
//             ) : (
//               <span className="text-xl">☰</span>
//             )}
//           </button>

//         </div>
//       </div>

//       {/* Slide-Down Mobile Drawer Menu Layer matching the active background theme */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25, ease: 'easeOut' }}
//             className="md:hidden bg-[#131E29] border-t border-gray-800/60 shadow-xl overflow-hidden"
//           >
//             <div className="px-6 py-4 flex flex-col gap-1.5">
//               <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact</NavLink>
              
//               <div className="border-t border-gray-800/60 mt-3 pt-4 pb-2">
//                 <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 px-1">
//                   Emergency Support Hotline
//                 </p>
//                 <a
//                   href="tel:07405613595"
//                   className="w-full bg-[#EE6002] text-white py-3 rounded-lg font-black text-center block tracking-widest text-xs uppercase active:scale-95 transition-transform"
//                 >
//                   📞 +44 7405 613595
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }












// import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Scroll handler with your 20px threshold and dynamic transition look
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Desktop links style using your exact subtle gray to orange typography
//   const navClass = ({ isActive }) =>
//     `text-xs font-bold tracking-widest transition-colors duration-200 uppercase ${
//       isActive ? 'text-[#EE6002]' : 'text-gray-200 hover:text-[#EE6002]'
//     }`;

//   // Mobile dropdown links style maintaining same aesthetic variables
//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-lg px-4 py-3 text-sm font-black tracking-widest uppercase transition-all ${
//       isActive
//         ? 'bg-[#EE6002] text-white'
//         : 'text-gray-300 hover:bg-white/5 border-l-2 border-transparent hover:border-[#EE6002]'
//     }`;

//   return (
//     <motion.nav 
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white ${
//         isScrolled 
//           ? 'bg-[#131E29]/90 backdrop-blur-md border-b border-gray-800/40 shadow-lg h-20' 
//           : 'bg-transparent h-24'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
          
//           {/* Logo Section - Maximize Space */}
//           <Link 
//             to="/" 
//             className="flex items-center justify-start h-full cursor-pointer active:scale-95 transition-transform shrink-0"
//           >
//             <img 
//               src="images/ironlog.webp" 
//               alt="Ironforce Logo" 
//               /* 
//                 - Mobile par 'h-16' (64px) kar diya jo choti screen ke liye kafi bada hai.
//                 - Tablet par 'sm:h-20' (80px) aur Desktop par 'md:h-[88px]' tak le gaye hain.
//                 - 'max-h-[85%]' lagaya hai taaki jab navbar scroll ho kar 'h-20' ka ho, to logo automatic bina crash huay safely adjust ho jaye.
//               */
//               className="h-16 sm:h-20 md:h-[88px] max-h-[85%] w-auto object-contain py-1" 
//             />
//           </Link>

//           {/* Navigation Links (Desktop Only) */}
//           <div className="hidden md:flex items-center gap-10">
//             <NavLink to="/" className={navClass}>Home</NavLink>
//             <NavLink to="/services" className={navClass}>Services</NavLink>
//             <NavLink to="/about-us" className={navClass}>About</NavLink>
//             <NavLink to="/contact-us" className={navClass}>Contact</NavLink>
//           </div>

//           {/* Right Side Quick Contact (Desktop/Tablet Layout) */}
//           <div className="hidden sm:block text-right">
//             <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
//               Have any questions?
//             </p>
//             <a 
//               href="tel:07405613595" 
//               className="text-base font-black tracking-tight hover:text-[#EE6002] transition-colors mt-0.5 block"
//             >
//               +44 7405 613595
//             </a>
//           </div>

//           {/* Hamburger Menu Button for Responsive Screen Breakdown */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden h-10 w-10 rounded-lg bg-white/5 text-white flex items-center justify-center transition-all active:scale-90 hover:bg-white/10 shrink-0"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-sm font-black tracking-wider">✕</span>
//             ) : (
//               <span className="text-xl">☰</span>
//             )}
//           </button>

//         </div>
//       </div>

//       {/* Slide-Down Mobile Drawer Menu Layer */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25, ease: 'easeOut' }}
//             className="md:hidden bg-[#131E29] border-t border-gray-800/60 shadow-xl overflow-hidden"
//           >
//             <div className="px-6 py-4 flex flex-col gap-1.5">
//               <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact</NavLink>
              
//               <div className="border-t border-gray-800/60 mt-3 pt-4 pb-2">
//                 <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 px-1">
//                   Emergency Support Hotline
//                 </p>
//                 <a
//                   href="tel:07405613595"
//                   className="w-full bg-[#EE6002] text-white py-3 rounded-lg font-black text-center block tracking-widest text-xs uppercase active:scale-95 transition-transform"
//                 >
//                   📞 +44 7405 613595
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }












// import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navClass = ({ isActive }) =>
//     `text-xs font-bold tracking-widest transition-colors duration-200 uppercase ${
//       isActive ? 'text-[#EE6002]' : 'text-gray-200 hover:text-[#EE6002]'
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-lg px-4 py-3 text-sm font-black tracking-widest uppercase transition-all ${
//       isActive
//         ? 'bg-[#EE6002] text-white'
//         : 'text-gray-300 hover:bg-white/5 border-l-2 border-transparent hover:border-[#EE6002]'
//     }`;

//   return (
//     <motion.nav 
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       /* 
//         Navbar ki height ko h-24 par lock rakha hai taaki logo ko shrink hone ka trigger na mile.
//         Sirf background opacity, blur, aur shadow scroll par smooth change honge.
//       */
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white h-24 ${
//         isScrolled 
//           ? 'bg-[#131E29]/95 backdrop-blur-md border-b border-gray-800/40 shadow-lg' 
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
          
//           {/* Logo Container */}
//           <Link 
//             to="/" 
//             className="flex items-center justify-start h-full cursor-pointer active:scale-95 transition-transform shrink-0"
//           >
//             <img 
//               src="images/ironlog.webp" 
//               alt="Ironforce Logo" 
//               /* 
//                 - 'max-h-full' lagaya hai taaki logo bina kisi restriction ke container ki poori space le sake.
//                 - Desktop par isko 'md:h-[105px]' kiya hai aur padding remove kar di hai taaki logo bounding box se bahar nikal kar bada aur premium look de.
//                 - Mobile par 'h-20' aur tablet par 'sm:h-24' tak bump up kar diya hai.
//               */
//               className="h-20 sm:h-24 md:h-[105px] max-h-full w-auto object-contain block" 
//             />
//           </Link>

//           {/* Navigation Links (Desktop Only) */}
//           <div className="hidden md:flex items-center gap-10">
//             <NavLink to="/" className={navClass}>Home</NavLink>
//             <NavLink to="/services" className={navClass}>Services</NavLink>
//             <NavLink to="/about-us" className={navClass}>About</NavLink>
//             <NavLink to="/contact-us" className={navClass}>Contact</NavLink>
//           </div>

//           {/* Right Side Quick Contact (Desktop/Tablet Layout) */}
//           <div className="hidden sm:block text-right">
//             <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
//               Have any questions?
//             </p>
//             <a 
//               href="tel:07405613595" 
//               className="text-base font-black tracking-tight hover:text-[#EE6002] transition-colors mt-0.5 block"
//             >
//               +44 7405 613595
//             </a>
//           </div>

//           {/* Hamburger Menu Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden h-10 w-10 rounded-lg bg-white/5 text-white flex items-center justify-center transition-all active:scale-90 hover:bg-white/10 shrink-0"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-sm font-black tracking-wider">✕</span>
//             ) : (
//               <span className="text-xl">☰</span>
//             )}
//           </button>

//         </div>
//       </div>

//       {/* Slide-Down Mobile Drawer Menu Layer */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25, ease: 'easeOut' }}
//             className="md:hidden bg-[#131E29] border-t border-gray-800/60 shadow-xl overflow-hidden"
//           >
//             <div className="px-6 py-4 flex flex-col gap-1.5">
//               <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact</NavLink>
              
//               <div className="border-t border-gray-800/60 mt-3 pt-4 pb-2">
//                 <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5 px-1">
//                   Emergency Support Hotline
//                 </p>
//                 <a
//                   href="tel:07405613595"
//                   className="w-full bg-[#EE6002] text-white py-3 rounded-lg font-black text-center block tracking-widest text-xs uppercase active:scale-95 transition-transform"
//                 >
//                   📞 +44 7405 613595
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }
















// import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // "image_f06ce6.png" ke mutabik clean layout text styles (Using Golden Yellow for Active state)
//   const navClass = ({ isActive }) =>
//     `text-sm font-semibold tracking-wide transition-colors duration-200 ${
//       isActive ? 'text-[#E5A922]' : 'text-[#5C4033] hover:text-[#E5A922]'
//     }`;

//   const mobileNavClass = ({ isActive }) =>
//     `block rounded-md px-4 py-2.5 text-base font-semibold transition-all ${
//       isActive
//         ? 'bg-[#E5A922] text-white'
//         : 'text-[#5C4033] hover:bg-gray-50'
//     }`;

//   return (
//     <motion.nav 
//       initial={{ opacity: 0, y: -5 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 md:h-24  ${
//         isScrolled 
//           ? 'border-b border-gray-100 shadow-sm' 
//           : 'border-b border-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
//         <div className="flex items-center justify-between h-full">
          
//           {/* Logo Container */}
//           <Link 
//             to="/" 
//             className="flex items-center justify-start h-full cursor-pointer active:scale-98 transition-transform shrink-0"
//           >
//             {/* Aap yahan apna logo path inject kr skte hain */}
//             <img 
//               src="images/peslog.webp" 
//               alt="PesSave Logo" 
//               className="h-12 md:h-16 w-auto object-contain block" 
//             />
//           </Link>

//           {/* Navigation Links & Location (Desktop Only - As seen in image_f06ce6.png) */}
//           <div className="hidden md:flex items-center gap-8 lg:gap-10">
//             <NavLink to="/" className={navClass}>Home</NavLink>
//             <NavLink to="/about-us" className={navClass}>About</NavLink>
//             <NavLink to="/services" className={navClass}>Services</NavLink>
//             <NavLink to="/contact-us" className={navClass}>Contact</NavLink>
            
//             {/* Location Indicator with custom styling matching image_f06ce6.png */}
//             <div className="flex items-center gap-1.5 text-[#5C4033] font-medium text-sm pl-4 border-l border-gray-200">
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 strokeWidth={2} 
//                 stroke="currentColor" 
//                 className="w-4 h-4 text-[#E5A922]"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//               </svg>
//               <span>Chelsea, London</span>
//             </div>
//           </div>

//           {/* Hamburger Menu Button (Mobile Only) */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="md:hidden h-10 w-10 rounded-md text-[#5C4033] flex items-center justify-center transition-all active:scale-90 bg-gray-50 hover:bg-gray-100 shrink-0"
//             aria-label="Toggle menu"
//           >
//             {open ? (
//               <span className="text-lg font-semibold">✕</span>
//             ) : (
//               <span className="text-2xl">☰</span>
//             )}
//           </button>

//         </div>
//       </div>

//       {/* Responsive Slide-Down Mobile Drawer Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.2, ease: 'easeInOut' }}
//             className="md:hidden bg-white border-t border-gray-100 shadow-inner overflow-hidden"
//           >
//             <div className="px-6 py-4 flex flex-col gap-1">
//               <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
//               <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact</NavLink>
              
//               {/* Mobile Location Tab */}
//               <div className="border-t border-gray-100 mt-2 pt-3 flex items-center gap-2 text-xs text-[#5C4033] font-medium px-4 py-2 bg-gray-50/50 rounded-md">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   fill="none" 
//                   viewBox="0 0 24 24" 
//                   strokeWidth={2} 
//                   stroke="currentColor" 
//                   className="w-3.5 h-3.5 text-[#E5A922]"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
//                 </svg>
//                 <span>Chelsea, London, UK</span>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }












import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links are white by default to pop perfectly on top of the hero image
  const navClass = ({ isActive }) =>
    `text-[15px] lg:text-base font-black uppercase tracking-[0.12em] transition-all duration-200 ${
      isActive ? 'text-[#F1C423]' : 'text-white hover:text-[#F1C423]'
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block rounded-xl px-5 py-3.5 text-base font-black uppercase tracking-wider transition-all ${
      isActive
        ? 'bg-[#F1C423] text-neutral-950'
        : 'text-white hover:bg-white/10'
    }`;

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
     
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-24 md:h-28 ${
        isScrolled 
          ? 'bg-neutral-950/40 backdrop-blur-md border-b border-white/5 shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* --- LOGO CONTAINER --- */}
          <Link 
            to="/" 
            className="flex items-center justify-start h-full cursor-pointer active:scale-98 transition-transform shrink-0 py-2"
          >
            <img 
              src="images/peslog.webp" 
              alt="PesSave Logo" 
              className="h-14 md:h-20 lg:h-22 w-auto object-contain block" 
            />
          </Link>

          {/* --- DESKTOP NAVIGATION LINKS & LOCATION --- */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-6 lg:gap-9">
              <NavLink to="/" className={navClass}>Home</NavLink>
              <NavLink to="/about-us" className={navClass}>About</NavLink>
              <NavLink to="/services" className={navClass}>Services</NavLink>
              <NavLink to="/contact-us" className={navClass}>Contact</NavLink>
            </div>
            
            {/* White Text Location Divider to stand out on dark imagery */}
            <div className="flex items-center gap-2 text-white font-black text-sm lg:text-[15px] uppercase tracking-widest pl-6 lg:pl-8 border-l-2 border-white/20 h-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-4.5 h-4.5 text-[#F1C423] shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span className="whitespace-nowrap">Chelsea, London</span>
            </div>
          </div>

          {/* --- HAMBURGER MENU BUTTON (Mobile White/Transparent Theme) --- */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden h-12 w-12 rounded-xl text-white flex items-center justify-center transition-all active:scale-90 bg-white/5 hover:bg-white/10 border border-white/10 shrink-0"
            aria-label="Toggle menu"
          >
            {open ? (
              <span className="text-xl font-black">✕</span>
            ) : (
              <span className="text-3xl font-light">☰</span>
            )}
          </button>

        </div>
      </div>

      {/* --- MOBILE DRAWER SLIDE DOWN (Dark themed background to blend with transparency) --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-neutral-950/95 backdrop-blur-lg border-t border-white/5 shadow-2xl overflow-hidden absolute top-full left-0 w-full"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact</NavLink>
              
              {/* Mobile Dark Theme Location Footer */}
              <div className="border-t border-white/10 mt-3 pt-4 flex items-center gap-2.5 text-xs text-neutral-300 font-black uppercase tracking-widest px-5 py-3 bg-white/5 rounded-xl">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2.5} 
                  stroke="currentColor" 
                  className="w-4 h-4 text-[#F1C423]"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>Chelsea, London, UK</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}