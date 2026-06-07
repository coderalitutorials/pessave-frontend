

// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       details:
//         "Professional ants control treatment to remove ant activity and protect your home or business from recurring infestations.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       details:
//         "Effective bed bugs treatment for bedrooms, furniture, mattresses and affected areas using safe professional methods.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moth.webp",
//       details:
//         "Specialist carpet moth treatment to help protect carpets, rugs and soft furnishings from moth damage.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       details:
//         "Safe targeted extraction of fabric-damaging beetle infestations in residential or commercial premises.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       details:
//         "High-grade gel baiting and premium flushing treatments for instant and total cockroach eradication.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       details:
//         "Fast tracking, trapping, and high-efficiency rodent removal protocols to secure your perimeter structures.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       details:
//         "Residual spraying treatments optimized for domestic and commercial areas to clear flea larvae.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       details:
//         "Safe, rapid neutralizing of active wasp structures with targeted protective safety gear.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       details:
//         "Environmentally conscious management plans and secure live relocation when possible.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       details:
//         "Humane trapping and systematic proofing to clear lofts and attic areas securely.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/proofing.webp",
//       details:
//         "Sealing strategic access gaps, professional sanitization, and heavy-duty structural blocks.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       details:
//         "Humane custom netting, tensioned wires, and visual deterrent bird system installations.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );
//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#071827] min-h-screen text-white font-sans selection:bg-[#009494] selection:text-white overflow-x-hidden">
      
//       {/* PREMIUM MINIMALIST HERO SECTION */}
//       <section className="relative bg-[#0F2133] py-16 md:py-24 border-b border-[#009494]/10 overflow-hidden">
//         {/* Glow Effects */}
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#009494]/5 rounded-full blur-[120px] pointer-events-none" />
//         <div className="absolute -bottom-20 left-10 w-[300px] h-[300px] bg-[#DFA119]/5 rounded-full blur-[100px] pointer-events-none" />
//         <div className="absolute inset-0 bg-[radial-gradient(#009494_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center justify-center">
//           <div className="max-w-3xl mx-auto">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#009494]/10 border border-[#009494]/20 mb-4">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#DFA119]" />
//               <span className="text-[10px] uppercase tracking-widest text-[#DFA119] font-black">Our Expertise</span>
//             </div>
            
//             <h1 className="text-3xl md:text-7xl font-black tracking-tight leading-[1.05] text-white">
//               Professional Pest <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009494] via-[#009494] to-[#DFA119]">
//                 Control Services
//               </span>
//             </h1>
            
//             <p className="mt-4 md:mt-6 text-gray-400 text-xs md:text-lg leading-relaxed max-w-xl mx-auto font-medium">
//               Explore our wide range of safe, effective, and reliable pest treatments tailored to protect your home and business from unwanted pests.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* MODERN ASYMMETRIC BENTO WORKSPACE */}
//       <section className="py-10 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 relative">
//         <div className="grid lg:grid-cols-12 gap-6 md:gap-10 items-stretch">
          
//           {/* LEFT SIDEBAR COLUMN */}
//           <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
//             {/* Top Group: Filters + Helpline Block */}
//             <div className="space-y-6 w-full">
//               {/* Category Filter Box */}
//               <div className="bg-[#0F2133]/60 border border-[#009494]/10 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 backdrop-blur-sm">
//                 <h3 className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-black mb-2 md:mb-4">Select Category</h3>
//                 <p className="text-[11px] md:text-xs text-gray-400 mb-4 md:mb-6 leading-relaxed hidden xs:block">
//                   Filter our services to quickly find the right treatment for your specific pest problem.
//                 </p>
                
//                 <div className="flex flex-col gap-1.5 md:gap-2">
//                   {categories.map((cat) => {
//                     const isActive = selectedCategory === cat;
//                     return (
//                       <button
//                         key={cat}
//                         onClick={() => setSelectedCategory(cat)}
//                         className={`w-full text-left px-4 py-2.5 md:px-5 md:py-4 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-between group ${
//                           isActive
//                             ? "bg-gradient-to-r from-[#009494] to-[#007a7a] text-white shadow-lg shadow-[#009494]/10"
//                             : "bg-[#071827]/60 border border-[#009494]/10 text-gray-400 hover:text-white hover:border-[#DFA119]/50"
//                         }`}
//                       >
//                         <span>{cat}</span>
//                         <span className={`text-xs md:text-sm transition-transform duration-300 ${isActive ? "translate-x-0 text-white" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#DFA119]"}`}>
//                           →
//                         </span>
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Quick Helpline Assist Bento */}
//               <div className="bg-gradient-to-br from-[#0F2133] to-[#071827] border border-[#009494]/20 p-8 rounded-[2rem] relative overflow-hidden hidden lg:block">
//                 <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#DFA119]/5 rounded-full blur-xl pointer-events-none" />
//                 <h4 className="text-[10px] font-black uppercase tracking-widest text-[#DFA119] mb-1">Need Advice?</h4>
//                 <h3 className="text-lg font-black mb-2">Not sure what you need?</h3>
//                 <p className="text-xs text-gray-400 leading-relaxed mb-4">If your specific pest issue is not listed here, get in touch directly with our support team for help.</p>
//                 <a href="tel:07448101275" className="text-xs font-bold text-[#009494] hover:text-[#DFA119] transition-colors inline-flex items-center gap-1">
//                   Call Helpline <span>→</span>
//                 </a>
//               </div>
//             </div>

//             {/* FLEX-GROW DYNAMIC IMAGE SLOTS */}
//             <div className="hidden lg:flex flex-col gap-6 flex-1 w-full min-h-[350px]">
//               {/* IMAGE DIV 1 */}
//               <div className="relative group flex-1 bg-[#0F2133]/30 border border-[#009494]/10 rounded-[2rem] overflow-hidden backdrop-blur-sm shadow-xl min-h-[160px]">
//                 <img 
//                   src="images/home.webp" 
//                   alt="" 
//                   className="w-full h-full object-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 absolute inset-0"
//                   onError={(e) => { e.target.style.opacity = '0'; }} 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#071827] via-[#071827]/30 to-transparent pointer-events-none" />
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <span className="text-[9px] bg-[#DFA119]/10 text-[#DFA119] px-2 py-0.5 rounded border border-[#DFA119]/20 font-black tracking-widest uppercase mb-1.5 inline-block">
//                     Residential Protection
//                   </span>
//                   <h4 className="text-sm font-black text-white tracking-tight">Safe Home Treatments</h4>
//                 </div>
//               </div>

//               {/* IMAGE DIV 2 */}
//               <div className="relative group flex-1 bg-[#0F2133]/30 border border-[#009494]/10 rounded-[2rem] overflow-hidden backdrop-blur-sm shadow-xl min-h-[160px]">
//                 <img 
//                   src="images/business.webp" 
//                   alt="" 
//                   className="w-full h-full object-center opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 absolute inset-0"
//                   onError={(e) => { e.target.style.opacity = '0'; }} 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#071827] via-[#071827]/30 to-transparent pointer-events-none" />
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <span className="text-[9px] bg-[#009494]/10 text-[#009494] px-2 py-0.5 rounded border border-[#009494]/20 font-black tracking-widest uppercase mb-1.5 inline-block">
//                     Commercial Solutions
//                   </span>
//                   <h4 className="text-sm font-black text-white tracking-tight">Business Pest Management</h4>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* STREAMLINED REFACTORED PREMIUM LIST */}
//           <div className="lg:col-span-8 space-y-4 md:space-y-6">
//             {filteredServices.map((service) => (
//               <div
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 className="group bg-[#0F2133]/30 hover:bg-[#0F2133]/60 border border-[#009494]/10 hover:border-[#009494]/40 rounded-[1.25rem] md:rounded-[2rem] p-3 md:p-8 flex flex-row gap-3 md:gap-6 items-center justify-between cursor-pointer transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
//               >
//                 <div className="absolute top-0 left-0 w-1 h-full bg-[#009494] opacity-0 group-hover:opacity-100 transition-opacity" />

//                 {/* Main Content Area - Always Horizontal Stack */}
//                 <div className="flex flex-row items-center gap-3 md:gap-6 flex-1 min-w-0">
                  
//                   {/* Smaller Scaled Image Frame For Perfect Mobile Fit */}
//                   <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-24 sm:h-24 rounded-lg md:rounded-2xl overflow-hidden border border-[#009494]/20 shrink-0 relative group-hover:border-[#DFA119]/50 transition-colors">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-[#071827]/20 mix-blend-multiply" />
//                   </div>

//                   {/* Context Text Box */}
//                   <div className="space-y-0.5 md:space-y-1.5 min-w-0 flex-1">
//                     <div className="flex items-center gap-2">
//                       <span className="text-[7px] md:text-[9px] bg-[#009494]/10 text-[#009494] px-1.5 py-0.5 rounded border border-[#009494]/20 font-black tracking-widest uppercase shrink-0">
//                         {service.cat}
//                       </span>
//                     </div>

//                     <h3 className="text-xs xs:text-sm md:text-xl font-black text-white group-hover:text-[#DFA119] transition-colors tracking-tight truncate sm:whitespace-normal">
//                       {service.title}
//                     </h3>
                    
//                     <p className="text-gray-400 text-[10px] md:text-sm leading-tight md:leading-relaxed font-medium line-clamp-1 sm:line-clamp-none">
//                       {service.details}
//                     </p>
//                   </div>

//                 </div>

//                 {/* Compact CTA Trigger Alignment */}
//                 <div className="shrink-0 pl-1 md:pl-4">
//                   <div className="text-[9px] md:text-xs font-black uppercase tracking-wider text-[#009494] group-hover:text-[#DFA119] transition-all duration-300 flex items-center gap-1 md:gap-1.5 whitespace-nowrap">
//                     <span>Book Inspection</span>
//                     <span className="transform group-hover:translate-x-1 transition-transform font-bold">→</span>
//                   </div>
//                 </div>

//               </div>
//             ))}

//             {filteredServices.length === 0 && (
//               <div className="text-center py-20 bg-[#0F2133]/20 rounded-[2rem] border border-dashed border-[#009494]/20">
//                 <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">No services found in this category.</p>
//               </div>
//             )}
//           </div>

//         </div>
//       </section>

//     </main>
//   );
// };

// export default Services;











// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       details:
//         "Professional ants control treatment to remove ant activity and protect your home or business from recurring infestations. Our expert methods target the root of the colony for long-lasting protection.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       details:
//         "Effective bed bugs treatment for bedrooms, furniture, mattresses and affected areas using safe professional methods. We ensure complete eradication of bugs and larvae to restore your peace of mind safely.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moth.webp",
//       details:
//         "Specialist carpet moth treatment to help protect carpets, rugs and soft furnishings from moth damage. Detailed residual treatment ensures fibers are thoroughly protected from active larvae infestation.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       details:
//         "Safe targeted extraction of fabric-damaging beetle infestations in residential or commercial premises. Thorough inspections and precise spot treatments prevent destruction of valuable textile assets.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       details:
//         "High-grade gel baiting and premium flushing treatments for instant and total cockroach eradication. Our advanced formulas clear deep nesting areas in kitchens and commercial food spaces rapidly.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       details:
//         "Fast tracking, trapping, and high-efficiency rodent removal protocols to secure your perimeter structures. Complete blocking of potential entry points guarantees long-term protection from returning pests.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       details:
//         "Residual spraying treatments optimized for domestic and commercial areas to clear flea larvae. Highly recommended for pet owners dealing with persistent structural outbreaks across living spaces.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       details:
//         "Safe, rapid neutralizing of active wasp structures with targeted protective safety gear. We guarantee swift structural removal, keeping your gardens and entryways risk-free for everyone.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       details:
//         "Environmentally conscious management plans and secure live relocation when possible. We focus on protecting essential local pollinators while removing immediate structural threats from your property.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       details:
//         "Humane trapping and systematic proofing to clear lofts and attic areas securely. Heavy-duty barriers prevent gnawing and structural damage to wiring and insulation frameworks.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/proofing.webp",
//       details:
//         "Sealing strategic access gaps, professional sanitization, and heavy-duty structural blocks. Our preventative proofing ensures complete security against future wildlife or rodent structural intrusion.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       details:
//         "Humane custom netting, tensioned wires, and visual deterrent bird system installations. Protect your building facades, roofs, and solar panels from nesting damage and unhygienic droppings completely.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );
//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#131E29] min-h-screen text-white font-sans selection:bg-[#EE6002] selection:text-white overflow-x-hidden antialiased">
      
//       {/* BIGGER CENTERED HERO SECTION WITH BACKGROUND IMAGE */}
//       <section 
//         className="relative bg-cover bg-center bg-no-repeat pt-32 pb-24 md:pt-48 md:pb-36 border-b border-white/5"
//         style={{ 
//           backgroundImage: `linear-gradient(to bottom, rgba(19, 30, 41, 0.85), rgba(19, 30, 41, 0.95)), url('/images/your-hero-bg.jpg')` 
//         }}
//       >
//         <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
//           <div className="w-16 h-[2px] bg-[#EE6002] mx-auto" />
//           <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none">
//             Pest Control Services
//           </h1>
//           <p className="text-gray-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
//             Explore our straightforward, high-efficiency responsive counter-measures structured for both modern residential spaces and commercial properties.
//           </p>
//         </div>
//       </section>

//       {/* CENTERED FILTER SUBBAR */}
//       <nav className="bg-[#182533]/60 backdrop-blur-md border-b border-white/5 sticky top-0 z-40 py-5">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
//           <div className="flex flex-wrap gap-2 items-center justify-center">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-5 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-200 ${
//                     isActive
//                       ? "bg-[#EE6002] text-white shadow-lg shadow-[#EE6002]/20"
//                       : "bg-transparent text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* COMPACT STATIC SPLIT LAYOUT (SAME ON DESKTOP & MOBILE) */}
//       <section className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 space-y-12 md:space-y-16">
//         {filteredServices.map((service, index) => {
//           const isEven = index % 2 === 0;

//           return (
//             <div
//               key={service.id}
//               data-title={service.title}
//               /* flex-row keeps it side-by-side on all screens. alternating orders are managed gracefully */
//               className="flex flex-row items-center gap-4 sm:gap-8 md:gap-12 unselectable"
//             >
//               {/* FIXED PROPORTIONAL IMAGE CONTAINER (PREVENTS BREAKING ON MOBILE) */}
//               <div 
//                 onClick={() => navigate("/contact-us")}
//                 className={`cursor-pointer group relative overflow-hidden aspect-[4/3] w-[35%] sm:w-[30%] md:w-[25%] flex-shrink-0 ${
//                   isEven ? "order-1" : "order-2"
//                 }`}
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   onError={(e) => { e.target.style.display = 'none'; }}
//                 />
//                 <div className="absolute inset-0 bg-[#131E29]/10 group-hover:bg-transparent transition-colors duration-300" />
//               </div>

//               {/* FLUID CONTENT AREA */}
//               <div 
//                 className={`w-[65%] sm:w-[70%] md:w-[75%] space-y-1 sm:space-y-2 md:space-y-3 text-left ${
//                   isEven ? "order-2" : "order-1"
//                 }`}
//               >
//                 {/* Category Meta Tag */}
//                 <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-[#EE6002]">
//                   // {service.cat}
//                 </span>

//                 {/* Scaled Dynamic Title */}
//                 <h3 
//                   onClick={() => navigate("/contact-us")}
//                   className="text-sm sm:text-xl md:text-2xl font-black tracking-tight text-white uppercase hover:text-[#EE6002] cursor-pointer transition-colors line-clamp-1 sm:line-clamp-none"
//                 >
//                   {service.title}
//                 </h3>

//                 {/* Scaled Plain Text Description */}
//                 <p 
//                   onClick={() => navigate("/contact-us")}
//                   className="text-gray-400 text-[11px] sm:text-xs md:text-sm leading-normal sm:leading-relaxed font-medium cursor-pointer max-w-2xl line-clamp-2 sm:line-clamp-none"
//                 >
//                   {service.details}
//                 </p>

//                 {/* Action Trigger Button */}
//                 <div className="pt-0.5 sm:pt-1">
//                   <button
//                     onClick={() => navigate("/contact-us")}
//                     className="inline-flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs font-black uppercase tracking-widest text-[#EE6002] group transition-all duration-300"
//                   >
//                     <span className="border-b border-[#EE6002]/0 group-hover:border-[#EE6002] pb-0.5 transition-all">
//                       Book Inspection
//                     </span>
//                     <span className="transform group-hover:translate-x-1 transition-transform">
//                       →
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         {/* EMPTY STATE */}
//         {filteredServices.length === 0 && (
//           <div className="text-center py-24 border border-white/5 bg-[#182533]/20 max-w-xl mx-auto">
//             <p className="text-xs font-black uppercase tracking-widest text-gray-500">
//               No service matching selection.
//             </p>
//           </div>
//         )}
//       </section>

//     </main>
//   );
// };

// export default Services;















// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       details:
//         "Professional ants control treatment to remove ant activity and protect your home or business from recurring infestations. Our expert methods target the root of the colony for long-lasting protection.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       details:
//         "Effective bed bugs treatment for bedrooms, furniture, mattresses and affected areas using safe professional methods. We ensure complete eradication of bugs and larvae to restore your peace of mind safely.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       details:
//         "Specialist carpet moth treatment to help protect carpets, rugs and soft furnishings from moth damage. Detailed residual treatment ensures fibers are thoroughly protected from active larvae infestation.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       details:
//         "Safe targeted extraction of fabric-damaging beetle infestations in residential or commercial premises. Thorough inspections and precise spot treatments prevent destruction of valuable textile assets.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       details:
//         "High-grade gel baiting and premium flushing treatments for instant and total cockroach eradication. Our advanced formulas clear deep nesting areas in kitchens and commercial food spaces rapidly.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       details:
//         "Fast tracking, trapping, and high-efficiency rodent removal protocols to secure your perimeter structures. Complete blocking of potential entry points guarantees long-term protection from returning pests.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       details:
//         "Residual spraying treatments optimized for domestic and commercial areas to clear flea larvae. Highly recommended for pet owners dealing with persistent structural outbreaks across living spaces.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       details:
//         "Safe, rapid neutralizing of active wasp structures with targeted protective safety gear. We guarantee swift structural removal, keeping your gardens and entryways risk-free for everyone.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       details:
//         "Environmentally conscious management plans and secure live relocation when possible. We focus on protecting essential local pollinators while removing immediate structural threats from your property.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       details:
//         "Humane trapping and systematic proofing to clear lofts and attic areas securely. Heavy-duty barriers prevent gnawing and structural damage to wiring and insulation frameworks.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       details:
//         "Sealing strategic access gaps, professional sanitization, and heavy-duty structural blocks. Our preventative proofing ensures complete security against future wildlife or rodent structural intrusion.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       details:
//         "Humane custom netting, tensioned wires, and visual deterrent bird system installations. Protect your building facades, roofs, and solar panels from nesting damage and unhygienic droppings completely.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );
//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-[#131E29] min-h-screen text-white font-sans selection:bg-[#EE6002] selection:text-white overflow-x-hidden antialiased">
      
//       {/* BIGGER CENTERED HERO SECTION WITH BACKGROUND IMAGE */}
//       <section 
//         className="relative bg-cover bg-center bg-no-repeat pt-32 pb-24 md:pt-48 md:pb-36 border-b border-white/5"
//         style={{ 
//           backgroundImage: `linear-gradient(to bottom, rgba(19, 30, 41, 0.85), rgba(19, 30, 41, 0.95)), url('/images/servicehero.webp')` 
//         }}
//       >
//         <div className="max-w-5xl mx-auto px-6 text-center space-y-6 relative z-10">
//           <div className="w-16 h-[2px] bg-[#EE6002] mx-auto" />
//           <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none">
//             Pest Control Services
//           </h1>
//           <p className="text-gray-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
//             Explore our straightforward, high-efficiency responsive counter-measures structured for both modern residential spaces and commercial properties.
//           </p>
//         </div>
//       </section>

//       {/* CENTERED FILTER SUBBAR */}
//       <nav className="bg-[#182533]/60 backdrop-blur-md border-b border-white/5 sticky top-0 z-40 py-5">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
//           <div className="flex flex-wrap gap-2 items-center justify-center">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-5 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-200 ${
//                     isActive
//                       ? "bg-[#EE6002] text-white shadow-lg shadow-[#EE6002]/20"
//                       : "bg-transparent text-gray-400 hover:text-white"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* SIDE-BY-SIDE SPLIT LAYOUT WITH DOMINANT LARGE IMAGES */}
//       <section className="py-12 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 space-y-14 md:space-y-24">
//         {filteredServices.map((service, index) => {
//           const isEven = index % 2 === 0;

//           return (
//             <div
//               key={service.id}
//               data-title={service.title}
//               className="flex flex-row items-center gap-6 sm:gap-10 md:gap-16 unselectable"
//             >
//               {/* ACCENTUATED LARGE IMAGE CONTAINER (DOMINANT SIZE) */}
//               <div 
//                 onClick={() => navigate("/contact-us")}
//                 className={`cursor-pointer group relative overflow-hidden aspect-[4/3] w-[42%] md:w-[45%] flex-shrink-0 max-w-xl ${
//                   isEven ? "order-1" : "order-2"
//                 }`}
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   onError={(e) => { e.target.style.display = 'none'; }}
//                 />
//                 <div className="absolute inset-0 bg-[#131E29]/10 group-hover:bg-transparent transition-colors duration-300" />
//               </div>

//               {/* CLEAN BALANCED CONTENT CONTAINER */}
//               <div 
//                 className={`w-[58%] md:w-[55%] space-y-2 sm:space-y-3.5 text-left ${
//                   isEven ? "order-2" : "order-1"
//                 }`}
//               >
//                 {/* Category Meta Tag */}
//                 <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-[#EE6002]">
//                   // {service.cat}
//                 </span>

//                 {/* Scaled Dynamic Title */}
//                 <h3 
//                   onClick={() => navigate("/contact-us")}
//                   className="text-xs sm:text-2xl md:text-3xl font-black tracking-tight text-white uppercase hover:text-[#EE6002] cursor-pointer transition-colors line-clamp-2 sm:line-clamp-none"
//                 >
//                   {service.title}
//                 </h3>

//                 {/* Scaled Plain Text Description */}
//                 <p 
//                   onClick={() => navigate("/contact-us")}
//                   className="text-gray-400 text-[10px] sm:text-sm md:text-[15px] leading-normal sm:leading-relaxed font-medium cursor-pointer max-w-2xl line-clamp-3 sm:line-clamp-none"
//                 >
//                   {service.details}
//                 </p>

//                 {/* Action Trigger Button */}
//                 <div className="pt-0.5 sm:pt-1">
//                   <button
//                     onClick={() => navigate("/contact-us")}
//                     className="inline-flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs font-black uppercase tracking-widest text-[#EE6002] group transition-all duration-300"
//                   >
//                     <span className="border-b border-[#EE6002]/0 group-hover:border-[#EE6002] pb-0.5 transition-all">
//                       Book Inspection
//                     </span>
//                     <span className="transform group-hover:translate-x-1 transition-transform">
//                       →
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}

//         {/* EMPTY STATE */}
//         {filteredServices.length === 0 && (
//           <div className="text-center py-24 border border-white/5 bg-[#182533]/20 max-w-xl mx-auto">
//             <p className="text-xs font-black uppercase tracking-widest text-gray-500">
//               No service matching selection.
//             </p>
//           </div>
//         )}
//       </section>

//     </main>
//   );
// };

// export default Services;












// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       details:
//         "Professional ants control treatment to remove ant activity and protect your home or business from recurring infestations. Our expert methods target the root of the colony for long-lasting protection.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       details:
//         "Effective bed bugs treatment for bedrooms, furniture, mattresses and affected areas using safe professional methods. We ensure complete eradication of bugs and larvae to restore your peace of mind safely.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       details:
//         "Specialist carpet moth treatment to help protect carpets, rugs and soft furnishings from moth damage. Detailed residual treatment ensures fibers are thoroughly protected from active larvae infestation.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       details:
//         "Safe targeted extraction of fabric-damaging beetle infestations in residential or commercial premises. Thorough inspections and precise spot treatments prevent destruction of valuable textile assets.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       details:
//         "High-grade gel baiting and premium flushing treatments for instant and total cockroach eradication. Our advanced formulas clear deep nesting areas in kitchens and commercial food spaces rapidly.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       details:
//         "Fast tracking, trapping, and high-efficiency rodent removal protocols to secure your perimeter structures. Complete blocking of potential entry points guarantees long-term protection from returning pests.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       details:
//         "Residual spraying treatments optimized for domestic and commercial areas to clear flea larvae. Highly recommended for pet owners dealing with persistent structural outbreaks across living spaces.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       details:
//         "Safe, rapid neutralizing of active wasp structures with targeted protective safety gear. We guarantee swift structural removal, keeping your gardens and entryways risk-free for everyone.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       details:
//         "Environmentally conscious management plans and secure live relocation when possible. We focus on protecting essential local pollinators while removing immediate structural threats from your property.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       details:
//         "Humane trapping and systematic proofing to clear lofts and attic areas securely. Heavy-duty barriers prevent gnawing and structural damage to wiring and insulation frameworks.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       details:
//         "Sealing strategic access gaps, professional sanitization, and heavy-duty structural blocks. Our preventative proofing ensures complete security against future wildlife or rodent structural intrusion.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       details:
//         "Humane custom netting, tensioned wires, and visual deterrent bird system installations. Protect your building facades, roofs, and solar panels from nesting damage and unhygienic droppings completely.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );
//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-white text-neutral-900 min-h-screen font-sans antialiased selection:bg-[#F2C12E] selection:text-[#5C4033] overflow-x-hidden w-full">
      
//       {/* ========================================================================= */}
//       {/* 1️⃣ STRUCTURAL HEADER HERO SECTION                                         */}
//       {/* ========================================================================= */}
//       <section className="relative min-h-[400px] sm:min-h-[480px] flex items-center justify-center overflow-hidden bg-[#5C4033] w-full">
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-multiply select-none pointer-events-none"
//           style={{ backgroundImage: "url('/images/servicehero.webp')" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#5C4033]/70 via-[#5C4033]/90 to-[#5C4033] z-0" />

//         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4 py-20">
//           <div className="flex items-center justify-center gap-3">
//             <span className="w-8 h-[2px] bg-[#F2C12E]" />
//             <span className="text-[#F2C12E] text-xs font-black uppercase tracking-[0.3em]">Premium Catalog</span>
//             <span className="w-8 h-[2px] bg-[#F2C12E]" />
//           </div>
//           <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white uppercase leading-none">
//             Pest Control Services
//           </h1>
//           <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal pt-1">
//             Explore our straightforward, high-efficiency responsive counter-measures structured for both modern residential spaces and commercial properties.
//           </p>
//         </div>

//         {/* Structural Curve Wave Divider */}
//         <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180 pointer-events-none select-none z-10">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[35px] fill-white">
//             <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
//           </svg>
//         </div>
//       </section>

//       {/* ========================================================================= */}
//       {/* 2️⃣ CENTERED FILTER NAVIGATION SUBBAR                                      */}
//       {/* ========================================================================= */}
//       <nav className="bg-white/80 backdrop-blur-md border-b border-neutral-100 sticky top-0 z-40 py-4 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
//           <div className="flex flex-wrap gap-1.5 items-center justify-center">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-5 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 rounded-lg border ${
//                     isActive
//                       ? "bg-[#5C4033] text-white border-[#5C4033] shadow-md shadow-[#5C4033]/10"
//                       : "bg-transparent text-neutral-500 border-transparent hover:text-neutral-900 hover:bg-neutral-50"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* ========================================================================= */}
//       {/* 3️⃣ FLOATING GRID OVERLAY DISPLAY MODULE (IMAGE & HALF-OVERLAP DETAILS)     */}
//       {/* ========================================================================= */}
//       <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 relative z-20">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 items-start">
//           {filteredServices.map((service) => (
//             <div
//               key={service.id}
//               data-title={service.title}
//               onClick={() => navigate("/contact-us")}
//               className="group flex flex-col w-full relative cursor-pointer select-none"
//             >
//               {/* Image Segment Block */}
//               <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md bg-neutral-100 border border-neutral-100">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   loading="lazy"
//                   onError={(e) => { e.target.style.display = 'none'; }}
//                 />
//                 {/* Subtle dark layout protective mesh */}
//                 <div className="absolute inset-0 bg-[#5C4033]/5 group-hover:bg-transparent transition-colors duration-300" />
//               </div>

//               {/* Overlapping Details Surface Area (Half Image ke upar float kar raha ha) */}
//               <div className="mx-4 -mt-14 bg-[#FDFBF7] border border-neutral-200/60 rounded-xl p-5 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-30 text-left space-y-3">
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#F2C12E]" />
//                   <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">
//                     {service.cat}
//                   </span>
//                 </div>

//                 <h3 className="text-lg font-black tracking-tight text-neutral-950 uppercase leading-snug group-hover:text-[#5C4033] transition-colors line-clamp-1">
//                   {service.title}
//                 </h3>

//                 <p className="text-neutral-600 text-xs leading-relaxed font-normal line-clamp-3">
//                   {service.details}
//                 </p>

//                 {/* Bottom Trigger Action Anchor Area */}
//                 <div className="pt-2 border-t border-neutral-200/40 flex items-center justify-between">
//                   <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#5C4033] group-hover:text-[#5C4033]/80 transition-colors">
//                     <span>Book Service</span>
//                     <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
//                   </span>
//                   <span className="text-[10px] text-[#F2C12E] font-bold bg-[#5C4033] px-2 py-0.5 rounded-md shadow-sm">
//                     🛡️ Verified
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* EMPTY RECOVERY LAYER FRAMEWORK */}
//         {filteredServices.length === 0 && (
//           <div className="text-center py-20 border border-neutral-200/50 bg-[#FDFBF7] rounded-2xl max-w-xl mx-auto shadow-sm">
//             <p className="text-xs font-black uppercase tracking-widest text-neutral-400">
//               No specific counter-measures match your selection.
//             </p>
//           </div>
//         )}
//       </section>

//     </main>
//   );
// };

// export default Services;
















// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       details:
//         "Professional ants control treatment to remove ant activity and protect your home or business from recurring infestations. Our expert methods target the root of the colony for long-lasting protection.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       details:
//         "Effective bed bugs treatment for bedrooms, furniture, mattresses and affected areas using safe professional methods. We ensure complete eradication of bugs and larvae to restore your peace of mind safely.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       details:
//         "Specialist carpet moth treatment to help protect carpets, rugs and soft furnishings from moth damage. Detailed residual treatment ensures fibers are thoroughly protected from active larvae infestation.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       details:
//         "Safe targeted extraction of fabric-damaging beetle infestations in residential or commercial premises. Thorough inspections and precise spot treatments prevent destruction of valuable textile assets.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       details:
//         "High-grade gel baiting and premium flushing treatments for instant and total cockroach eradication. Our advanced formulas clear deep nesting areas in kitchens and commercial food spaces rapidly.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       details:
//         "Fast tracking, trapping, and high-efficiency rodent removal protocols to secure your perimeter structures. Complete blocking of potential entry points guarantees long-term protection from returning pests.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       details:
//         "Residual spraying treatments optimized for domestic and commercial areas to clear flea larvae. Highly recommended for pet owners dealing with persistent structural outbreaks across living spaces.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       details:
//         "Safe, rapid neutralizing of active wasp structures with targeted protective safety gear. We guarantee swift structural removal, keeping your gardens and entryways risk-free for everyone.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       details:
//         "Environmentally conscious management plans and secure live relocation when possible. We focus on protecting essential local pollinators while removing immediate structural threats from your property.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       details:
//         "Humane trapping and systematic proofing to clear lofts and attic areas securely. Heavy-duty barriers prevent gnawing and structural damage to wiring and insulation frameworks.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       details:
//         "Sealing strategic access gaps, professional sanitization, and heavy-duty structural blocks. Our preventative proofing ensures complete security against future wildlife or rodent structural intrusion.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       details:
//         "Humane custom netting, tensioned wires, and visual deterrent bird system installations. Protect your building facades, roofs, and solar panels from nesting damage and unhygienic droppings completely.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );
//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-white text-neutral-900 min-h-screen font-sans antialiased w-full overflow-x-hidden">
      
//       {/* ========================================================================= */}
//       {/* 1️⃣ PESSAVE HIGH-CONTRAST HERO BANNER (With Dynamic Curve Divider)       */}
//       {/* ========================================================================= */}
//       <section className="relative min-h-[400px] sm:min-h-[460px] flex items-center justify-center overflow-hidden bg-[#5C4033] w-full">
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-multiply select-none pointer-events-none"
//           style={{ backgroundImage: "url('/images/servicehero.webp')" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#5C4033]/70 via-[#5C4033]/90 to-[#5C4033] z-0" />

//         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4 py-20">
//           <div className="flex items-center justify-center gap-3">
//             <span className="w-8 h-[2px] bg-[#F2C12E]" />
//             <span className="text-[#F2C12E] text-xs font-black uppercase tracking-[0.3em]">Premium Solutions</span>
//             <span className="w-8 h-[2px] bg-[#F2C12E]" />
//           </div>
//           <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
//             Our Services
//           </h1>
//           <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal pt-1">
//             Explore our straightforward, high-efficiency responsive counter-measures structured for both modern residential spaces and commercial properties.
//           </p>
//         </div>

//         {/* Structural Curve Wave Divider for Clean Interlocking with Body Grid */}
//         <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180 pointer-events-none select-none z-10">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[35px] fill-white">
//             <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
//           </svg>
//         </div>
//       </section>

//       {/* ========================================================================= */}
//       {/* 2️⃣ STICKY FILTER SUBBAR PANEL                                            */}
//       {/* ========================================================================= */}
//       <nav className="bg-white/90 backdrop-blur-md border-b border-neutral-100 sticky top-0 z-50 py-4 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
//           <div className="flex flex-wrap gap-1.5 items-center justify-center">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-5 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 rounded-lg border ${
//                     isActive
//                       ? "bg-[#5C4033] text-white border-[#5C4033] shadow-md shadow-[#5C4033]/10"
//                       : "bg-transparent text-neutral-500 border-transparent hover:text-neutral-900 hover:bg-neutral-50"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* ========================================================================= */}
//       {/* 3️⃣ EXACT STAGGERED MASONRY GRID LAYOUT (Image & Half Bottom Overlap)     */}
//       {/* ========================================================================= */}
//       <section className="py-24 max-w-6xl mx-auto px-6 relative z-20 bg-white">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-36 items-start">
//           {filteredServices.map((service, index) => {
//             // Even index vs Odd staggered tracking matrix alignment
//             const isStaggered = index % 2 !== 0;

//             return (
//               <div
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 className={`group relative flex flex-col items-center w-full cursor-pointer select-none transition-transform duration-300 ${
//                   isStaggered ? "md:mt-24" : "md:mt-0"
//                 }`}
//               >
//                 {/* 📸 Full-Width Aspect Image Viewframe */}
//                 <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border border-neutral-100 relative">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
//                     loading="lazy"
//                     onError={(e) => { e.target.style.display = 'none'; }}
//                   />
//                   {/* Gentle protection sheet */}
//                   <div className="absolute inset-0 bg-[#5C4033]/5 group-hover:bg-transparent transition-colors duration-300" />
//                 </div>

//                 {/* 📄 Half Floating Overlap Structural Card Block */}
//                 <div className="w-[85%] sm:w-[80%] bg-white text-center p-6 -mt-16 shadow-2xl relative z-30 rounded-xl border border-neutral-100/80 transition-all duration-300 group-hover:translate-y-[-4px]">
                  
//                   {/* Category Tracker Tag */}
//                   <div className="flex items-center justify-center gap-1.5 mb-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#F2C12E]" />
//                     <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">
//                       {service.cat}
//                     </span>
//                   </div>

//                   {/* Service Title */}
//                   <h3 className="text-lg sm:text-xl font-black tracking-tight text-neutral-950 uppercase group-hover:text-[#5C4033] transition-colors duration-200">
//                     {service.title}
//                   </h3>
                  
//                   {/* Service Description Box */}
//                   <p className="text-neutral-600 text-xs sm:text-sm mt-3 leading-relaxed font-normal max-w-sm mx-auto line-clamp-3">
//                     {service.details}
//                   </p>

//                   {/* Core Form Button Anchor Trigger */}
//                   <div className="mt-5 pt-2.5 border-t border-neutral-100 flex items-center justify-center">
//                     <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#5C4033] group-hover:text-[#F2C12E] transition-colors flex items-center gap-1">
//                       <span>Book Service</span>
//                       <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
//                     </span>
//                   </div>

//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* EMPTY RECOVERY SCREEN */}
//         {filteredServices.length === 0 && (
//           <div className="text-center py-20 border border-neutral-200/50 bg-[#FDFBF7] rounded-xl max-w-xl mx-auto shadow-sm">
//             <p className="text-xs font-black uppercase tracking-widest text-neutral-400">
//               No tactical service matching parameters.
//             </p>
//           </div>
//         )}
//       </section>

//     </main>
//   );
// };

// export default Services;












// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const Services = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

//   const servicesData = [
//     {
//       id: 1,
//       cat: "Insects",
//       title: "Ants Control",
//       image: "/images/ants.webp",
//       details:
//         "Professional ants control treatment to remove ant activity and protect your home or business from recurring infestations. Our expert methods target the root of the colony for long-lasting protection.",
//     },
//     {
//       id: 2,
//       cat: "Insects",
//       title: "Bed Bugs Control",
//       image: "/images/bedbugs.webp",
//       details:
//         "Effective bed bugs treatment for bedrooms, furniture, mattresses and affected areas using safe professional methods. We ensure complete eradication of bugs and larvae to restore your peace of mind safely.",
//     },
//     {
//       id: 3,
//       cat: "Insects",
//       title: "Carpet Moth Control Treatment",
//       image: "/images/moths.webp",
//       details:
//         "Specialist carpet moth treatment to help protect carpets, rugs and soft furnishings from moth damage. Detailed residual treatment ensures fibers are thoroughly protected from active larvae infestation.",
//     },
//     {
//       id: 4,
//       cat: "Insects",
//       title: "Carpet Beetle Treatment",
//       image: "/images/beetle.webp",
//       details:
//         "Safe targeted extraction of fabric-damaging beetle infestations in residential or commercial premises. Thorough inspections and precise spot treatments prevent destruction of valuable textile assets.",
//     },
//     {
//       id: 5,
//       cat: "Insects",
//       title: "Cockroach Control Service",
//       image: "/images/cockroach.webp",
//       details:
//         "High-grade gel baiting and premium flushing treatments for instant and total cockroach eradication. Our advanced formulas clear deep nesting areas in kitchens and commercial food spaces rapidly.",
//     },
//     {
//       id: 6,
//       cat: "Rodents & Wildlife",
//       title: "Rats & Mice Control",
//       image: "/images/rodents.webp",
//       details:
//         "Fast tracking, trapping, and high-efficiency rodent removal protocols to secure your perimeter structures. Complete blocking of potential entry points guarantees long-term protection from returning pests.",
//     },
//     {
//       id: 7,
//       cat: "Insects",
//       title: "Flea Control",
//       image: "/images/flea.webp",
//       details:
//         "Residual spraying treatments optimized for domestic and commercial areas to clear flea larvae. Highly recommended for pet owners dealing with persistent structural outbreaks across living spaces.",
//     },
//     {
//       id: 8,
//       cat: "Insects",
//       title: "Wasps Nest Control",
//       image: "/images/wasps.webp",
//       details:
//         "Safe, rapid neutralizing of active wasp structures with targeted protective safety gear. We guarantee swift structural removal, keeping your gardens and entryways risk-free for everyone.",
//     },
//     {
//       id: 9,
//       cat: "Insects",
//       title: "Bumble Bee Control",
//       image: "/images/bee.webp",
//       details:
//         "Environmentally conscious management plans and secure live relocation when possible. We focus on protecting essential local pollinators while removing immediate structural threats from your property.",
//     },
//     {
//       id: 10,
//       cat: "Rodents & Wildlife",
//       title: "Squirrel Control",
//       image: "/images/squirrel.webp",
//       details:
//         "Humane trapping and systematic proofing to clear lofts and attic areas securely. Heavy-duty barriers prevent gnawing and structural damage to wiring and insulation frameworks.",
//     },
//     {
//       id: 11,
//       cat: "Birds & Prevention",
//       title: "Hygiene & Proofing Services",
//       image: "/images/hygene.webp",
//       details:
//         "Sealing strategic access gaps, professional sanitization, and heavy-duty structural blocks. Our preventative proofing ensures complete security against future wildlife or rodent structural intrusion.",
//     },
//     {
//       id: 12,
//       cat: "Birds & Prevention",
//       title: "Birds Control Services",
//       image: "/images/birds.webp",
//       details:
//         "Humane custom netting, tensioned wires, and visual deterrent bird system installations. Protect your building facades, roofs, and solar panels from nesting damage and unhygienic droppings completely.",
//     },
//   ];

//   useEffect(() => {
//     if (location.state) {
//       const targetCategory = location.state.category || "All";
//       setSelectedCategory(targetCategory);

//       if (location.state.scrollToService) {
//         const targetServiceTitle = location.state.scrollToService;

//         const timer = setTimeout(() => {
//           const element = document.querySelector(
//             `[data-title="${targetServiceTitle}"]`
//           );
//           if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "center" });
//           }
//         }, 300);

//         return () => clearTimeout(timer);
//       }
//     }
//   }, [location]);

//   const filteredServices =
//     selectedCategory === "All"
//       ? servicesData
//       : servicesData.filter((s) => s.cat === selectedCategory);

//   return (
//     <main className="bg-white text-neutral-800 min-h-screen font-sans antialiased w-full overflow-x-hidden">
      
//       {/* ========================================================================= */}
//       {/* 1️⃣ BRAND HERO BANNER                                                    */}
//       {/* ========================================================================= */}
//       <section className="relative min-h-[400px] sm:min-h-[460px] flex items-center justify-center overflow-hidden bg-[#5c3a2100] w-full">
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-multiply select-none pointer-events-none"
//           style={{ backgroundImage: "url('/images/serviceshero.webp')" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#5C3A21]/60 via-[#5C3A21]/90 to-[#5C3A21] z-0" />

//         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4 py-20">
//           <div className="flex items-center justify-center gap-3">
//             <span className="w-8 h-[2px] bg-[#E5B228]" />
//             <span className="text-[#F1C423] text-xs font-black uppercase tracking-[0.3em]">Smart Protection</span>
//             <span className="w-8 h-[2px] bg-[#E5B228]" />
//           </div>
//           <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
//             Our Services
//           </h1>
//           <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal pt-1">
//             Explore our professional high-efficiency responsive solutions structured to provide clean, pest-free living environments.
//           </p>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180 pointer-events-none select-none z-10">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[35px] fill-white">
//             <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
//           </svg>
//         </div>
//       </section>

//       {/* ========================================================================= */}
//       {/* 2️⃣ STICKY FILTER SUBBAR PANEL                                            */}
//       {/* ========================================================================= */}
//       <nav className="bg-white/90 backdrop-blur-md border-b border-neutral-100 sticky top-0 z-50 py-4 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
//           <div className="flex flex-wrap gap-1.5 items-center justify-center">
//             {categories.map((cat) => {
//               const isActive = selectedCategory === cat;
//               return (
//                 <button
//                   key={cat}
//                   onClick={() => setSelectedCategory(cat)}
//                   className={`px-5 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 rounded-lg border ${
//                     isActive
//                       ? "bg-[#5C3A21] text-white border-[#5C3A21] shadow-md shadow-[#5C3A21]/10"
//                       : "bg-transparent text-neutral-500 border-transparent hover:text-[#5C3A21] hover:bg-neutral-50"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* ========================================================================= */}
//       {/* 3️⃣ COMPACT MASONRY GRID LAYOUT (Optimized Row Distance to Match Image)   */}
//       {/* ========================================================================= */}
//       <section className="py-20 max-w-6xl mx-auto px-6 relative z-20 bg-white">
//         {/* Adjusted gap-y from 36 down to 16 for tight, clean vertical rows */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
//           {filteredServices.map((service, index) => {
//             const isStaggered = index % 2 !== 0;

//             return (
//               <div
//                 key={service.id}
//                 data-title={service.title}
//                 onClick={() => navigate("/contact-us")}
//                 className={`group relative flex flex-col items-center w-full cursor-pointer select-none transition-transform duration-300 ${
//                   isStaggered ? "md:mt-24" : "md:mb-12"
//                 }`}
//               >
//                 {/* Image Container Frame */}
//                 <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-neutral-100 relative">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
//                     loading="lazy"
//                     onError={(e) => { e.target.style.display = 'none'; }}
//                   />
//                   <div className="absolute inset-0 bg-[#5C3A21]/5 group-hover:bg-transparent transition-colors duration-300" />
//                 </div>

//                 {/* Floating Content Card Block */}
//                 <div className="w-[85%] sm:w-[80%] bg-white text-center p-6 -mt-16 shadow-xl relative z-30 rounded-xl border border-neutral-100 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-2xl">
                  
//                   {/* Category Tracker Tag */}
//                   <div className="flex items-center justify-center gap-1.5 mb-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#F1C423]" />
//                     <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">
//                       {service.cat}
//                     </span>
//                   </div>

//                   {/* Service Title */}
//                   <h3 className="text-lg sm:text-xl font-black tracking-tight text-neutral-900 uppercase group-hover:text-[#5C3A21] transition-colors duration-200">
//                     {service.title}
//                   </h3>
                  
//                   {/* Service Details */}
//                   <p className="text-neutral-600 text-xs sm:text-sm mt-3 leading-relaxed font-normal max-w-sm mx-auto line-clamp-3">
//                     {service.details}
//                   </p>

//                   {/* Interactive Button */}
//                   <div className="mt-5 pt-2.5 border-t border-neutral-100 flex items-center justify-center">
//                     <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#5C3A21] group-hover:text-[#F1C423] transition-colors flex items-center gap-1">
//                       <span>Book Service</span>
//                       <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
//                     </span>
//                   </div>

//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Empty State Recovery */}
//         {filteredServices.length === 0 && (
//           <div className="text-center py-20 border border-neutral-100 bg-neutral-50/50 rounded-xl max-w-xl mx-auto shadow-sm">
//             <p className="text-xs font-black uppercase tracking-widest text-neutral-400">
//               No services found matching this category.
//             </p>
//           </div>
//         )}
//       </section>

//     </main>
//   );
// };

// export default Services;





import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

  const servicesData = [
    {
      id: 1,
      cat: "Insects",
      title: "Ants Control",
      image: "/images/ants.webp",
      details:
        "Professional ants control treatment to remove ant activity and protect your home or business from recurring infestations. Our expert methods target the root of the colony for long-lasting protection.",
    },
    {
      id: 2,
      cat: "Insects",
      title: "Bed Bugs Control",
      image: "/images/bedbugs.webp",
      details:
        "Effective bed bugs treatment for bedrooms, furniture, mattresses and affected areas using safe professional methods. We ensure complete eradication of bugs and larvae to restore your peace of mind safely.",
    },
    {
      id: 3,
      cat: "Insects",
      title: "Carpet Moth Control Treatment",
      image: "/images/moths.webp",
      details:
        "Specialist carpet moth treatment to help protect carpets, rugs and soft furnishings from moth damage. Detailed residual treatment ensures fibers are thoroughly protected from active larvae infestation.",
    },
    {
      id: 4,
      cat: "Insects",
      title: "Carpet Beetle Treatment",
      image: "/images/beetle.webp",
      details:
        "Safe targeted extraction of fabric-damaging beetle infestations in residential or commercial premises. Thorough inspections and precise spot treatments prevent destruction of valuable textile assets.",
    },
    {
      id: 5,
      cat: "Insects",
      title: "Cockroach Control Service",
      image: "/images/cockroach.webp",
      details:
        "High-grade gel baiting and premium flushing treatments for instant and total cockroach eradication. Our advanced formulas clear deep nesting areas in kitchens and commercial food spaces rapidly.",
    },
    {
      id: 6,
      cat: "Rodents & Wildlife",
      title: "Rats & Mice Control",
      image: "/images/rodents.webp",
      details:
        "Fast tracking, trapping, and high-efficiency rodent removal protocols to secure your perimeter structures. Complete blocking of potential entry points guarantees long-term protection from returning pests.",
    },
    {
      id: 7,
      cat: "Insects",
      title: "Flea Control",
      image: "/images/flea.webp",
      details:
        "Residual spraying treatments optimized for domestic and commercial areas to clear flea larvae. Highly recommended for pet owners dealing with persistent structural outbreaks across living spaces.",
    },
    {
      id: 8,
      cat: "Insects",
      title: "Wasps Nest Control",
      image: "/images/wasps.webp",
      details:
        "Safe, rapid neutralizing of active wasp structures with targeted protective safety gear. We guarantee swift structural removal, keeping your gardens and entryways risk-free for everyone.",
    },
    {
      id: 9,
      cat: "Insects",
      title: "Bumble Bee Control",
      image: "/images/bee.webp",
      details:
        "Environmentally conscious management plans and secure live relocation when possible. We focus on protecting essential local pollinators while removing immediate structural threats from your property.",
    },
    {
      id: 10,
      cat: "Rodents & Wildlife",
      title: "Squirrel Control",
      image: "/images/squirrel.webp",
      details:
        "Humane trapping and systematic proofing to clear lofts and attic areas securely. Heavy-duty barriers prevent gnawing and structural damage to wiring and insulation frameworks.",
    },
    {
      id: 11,
      cat: "Birds & Prevention",
      title: "Hygiene & Proofing Services",
      image: "/images/hygene.webp",
      details:
        "Sealing strategic access gaps, professional sanitization, and heavy-duty structural blocks. Our preventative proofing ensures complete security against future wildlife or rodent structural intrusion.",
    },
    {
      id: 12,
      cat: "Birds & Prevention",
      title: "Birds Control Services",
      image: "/images/birds.webp",
      details:
        "Humane custom netting, tensioned wires, and visual deterrent bird system installations. Protect your building facades, roofs, and solar panels from nesting damage and unhygienic droppings completely.",
    },
  ];

  useEffect(() => {
    if (location.state) {
      const targetCategory = location.state.category || "All";
      setSelectedCategory(targetCategory);

      if (location.state.scrollToService) {
        const targetServiceTitle = location.state.scrollToService;

        const timer = setTimeout(() => {
          const element = document.querySelector(
            `[data-title="${targetServiceTitle}"]`
          );

          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 300);

        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.cat === selectedCategory);

  return (
    <main className="bg-white text-neutral-800 min-h-screen font-sans antialiased w-full overflow-x-hidden">
      <section className="relative min-h-[420px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-[#5C3A21] w-full">
        <div
          className="
            absolute inset-0 z-0
            bg-cover bg-no-repeat
            bg-[position:center_45%]
            sm:bg-[position:center_42%]
            lg:bg-[position:center_45%]
            opacity-70
            select-none pointer-events-none
          "
          style={{
            backgroundImage: "url('/images/serviceshero.webp')",
          }}
        />

        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#5C3A21]/45 via-[#5C3A21]/55 to-[#5C3A21]/75" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-4 pt-24 pb-28">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#E5B228]" />
            <span className="text-[#F1C423] text-xs font-black uppercase tracking-[0.3em]">
              Smart Protection
            </span>
            <span className="w-8 h-[2px] bg-[#E5B228]" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
            Our Services
          </h1>

          <p className="text-neutral-100 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal pt-1">
            Explore our professional high-efficiency responsive solutions
            structured to provide clean, pest-free living environments.
          </p>
        </div>

        <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden leading-[0] pointer-events-none select-none z-20">
          <svg
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className="block w-full h-[35px] sm:h-[55px]"
          >
            <path
              fill="#ffffff"
              d="M0,45 C220,80 420,70 650,48 C850,28 1050,25 1240,48 C1320,58 1380,60 1440,50 L1440,90 L0,90 Z"
            />
          </svg>
        </div>
      </section>

      <nav className="bg-white/90 backdrop-blur-md border-b border-neutral-100 sticky top-0 z-50 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <div className="flex flex-wrap gap-1.5 items-center justify-center">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all duration-300 rounded-lg border ${
                    isActive
                      ? "bg-[#5C3A21] text-white border-[#5C3A21] shadow-md shadow-[#5C3A21]/10"
                      : "bg-transparent text-neutral-500 border-transparent hover:text-[#5C3A21] hover:bg-neutral-50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <section className="pt-12 pb-20 sm:pt-16 sm:pb-24 max-w-6xl mx-auto px-6 relative z-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
          {filteredServices.map((service, index) => {
            const isStaggered = index % 2 !== 0;

            return (
              <div
                key={service.id}
                data-title={service.title}
                onClick={() => navigate("/contact-us")}
                className={`group relative flex flex-col items-center w-full cursor-pointer select-none transition-transform duration-300 ${
                  isStaggered ? "md:mt-24" : "md:mb-12"
                }`}
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-neutral-100 relative bg-neutral-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-[#5C3A21]/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                <div className="w-[85%] sm:w-[80%] bg-white text-center p-6 -mt-16 shadow-xl relative z-30 rounded-xl border border-neutral-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <div className="flex items-center justify-center gap-1.5 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F1C423]" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">
                      {service.cat}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-neutral-900 uppercase group-hover:text-[#5C3A21] transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm mt-3 leading-relaxed font-normal max-w-sm mx-auto line-clamp-3">
                    {service.details}
                  </p>

                  <div className="mt-5 pt-2.5 border-t border-neutral-100 flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#5C3A21] group-hover:text-[#F1C423] transition-colors flex items-center gap-1">
                      <span>Book Service</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20 border border-neutral-100 bg-neutral-50/50 rounded-xl max-w-xl mx-auto shadow-sm">
            <p className="text-xs font-black uppercase tracking-widest text-neutral-400">
              No services found matching this category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Services;