



import React from "react";
import { motion } from "framer-motion";

// High-Impact Verified Pest Control Reviews for PesSave
const highImpactReviews = [
  {
    id: 1,
    name: "Morgan Rogers",
    // role: "Property Resident",
    image: "/images/reviews/user1.webp",
    text: "Absolutely fantastic response from PesSave. Had a severe mouse infestation in our structural loft space. The team arrived promptly, tracked down entry pathways, and locked the area down permanently.",
  },
  {
    id: 2,
    name: "Eoin bell",
    // role: "Restaurant Operations",
    image: "/images/reviews/user2.webp",
    text: "Very straightforward premium pricing structure. No hidden inspection parameters or useless traps. They cleared our active commercial kitchen area with total biological safety and transparency.",
  },
  {
    id: 3,
    name: "Andrew Ellis",
    // role: "Estate Landlord",
    image: "/images/reviews/user6.webp",
    text: "Had a highly persistent bed bug outbreak across two flat layouts. PesSave resolved it completely using specialized deep thermal heat treatments. Unmatched reliability and execution.",
  },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function PesSaveTestimonials() {
  return (
    <section className="bg-gray-50/60 py-20 sm:py-28 text-neutral-900 relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- CENTER HEADER LAYOUT: Exact Symmetry from image_e42b00.png --- */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-gray-300 hidden sm:block" />
            <span className="text-[#5C4033] text-xs font-black uppercase tracking-[0.3em] block">
              Testimonials
            </span>
            <span className="w-12 h-[1px] bg-gray-300 hidden sm:block" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
            What our customers say
          </h2>
        </div>

        {/* --- CARDS GRID: 3-Column Solid Box Frame with Soft Watermark Shadows --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {highImpactReviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardFadeUp}
              whileHover={{ y: -6 }}
              className="bg-white p-8 sm:p-10 shadow-xl shadow-neutral-200/50 hover:shadow-xl hover:shadow-neutral-300/60 transition-all duration-300 relative flex flex-col justify-between rounded-sm border border-neutral-100/40 h-full group"
            >
              
              {/* Review Statement Text Block */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal relative z-10 text-left">
                "{review.text}"
              </p>

              {/* Identity Footer Info Sync */}
              <div className="flex items-center gap-4 pt-8 mt-8 border-t border-neutral-100 relative z-10">
                {/* Profile Image Circle */}
                <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-100 shrink-0 border-2 border-transparent group-hover:border-[#F2C12E] transition-colors duration-300">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Identity Text Strings */}
                <div className="text-left min-w-0">
                  <h4 className="text-sm font-extrabold text-neutral-900 tracking-tight truncate">
                    {review.name}
                  </h4>
                  <span className="text-xs font-semibold text-[#5C4033] block mt-0.5">
                    {review.role}
                  </span>
                </div>
              </div>

              {/* --- BACKGROUND WATERMARK QUOTE: Exact Skin Copy from image_e42b00.png --- */}
              <span className="absolute bottom-4 right-6 text-7xl sm:text-8xl font-serif text-neutral-100 select-none pointer-events-none transition-colors duration-300 group-hover:text-amber-50/70 leading-none z-0">
                ”
              </span>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}