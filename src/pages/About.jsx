



import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

function ContentCounter({ value, duration = 2.4 }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration,
        ease: "easeOut",
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

export default function AboutUsPage() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { number: "1,000+", label: "Happy Customer" },
    { number: "100%", label: "Quality Control" },
    { number: "26+", label: "People Working" },
    { number: "12+", label: "Years of Experience" },
  ];

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
      title: "Satisfaction Is Guaranteed",
      description:
        "We back our eco-friendly chemical applications and mechanical barrier proofings with rigorous structural warranty timelines for ultimate peace of mind.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Insured Eradication Team",
      description:
        "Our complete baseline taskforce consists of fully vetted, licensed, and certified local operators equipped to handle hazardous environments safely.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: "Targeted Local Treatments",
      description:
        "We map out deep localized biological infestation vectors specifically optimized for residential structural layers and massive food processing hubs.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.117-6.942-6.942l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      title: "Free Phone Estimates",
      description:
        "Reach our support desk at any time to break down emergency outbreak pricing variables or setup instant technical diagnostic inspections.",
    },
  ];

  return (
    <main className="bg-white font-sans antialiased text-neutral-900 overflow-hidden w-full">
      <section className="relative min-h-[520px] flex items-center justify-start overflow-hidden bg-[#5C4033] w-full">
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[position:center_18%] sm:bg-[position:center_18%] lg:bg-[position:center_16%] opacity-70 select-none pointer-events-none"
          style={{
            backgroundImage: "url('/images/about/hero-bg.webp')",
          }}
        />

        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#5C4033]/78 via-[#5C4033]/52 to-[#5C4033]/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-left pt-24 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#F2C12E]" />
              <span className="text-[#F2C12E] text-xs font-black uppercase tracking-[0.3em]">
                Who We Are
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
              About Us
            </h1>

            <p className="text-gray-100 text-sm sm:text-base leading-relaxed font-normal pt-2 max-w-xl">
              At PesSave, we provide definitive, rapid, and highly secure pest
              control treatments across the region. We focus on identifying
              structural vulnerabilities directly at the root, delivering direct
              and permanent peace of mind for both commercial and residential
              spaces.
            </p>
          </motion.div>
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

      <section className="bg-white pt-8 pb-20 sm:pt-12 sm:pb-28 text-neutral-900 overflow-hidden relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 relative w-full"
            >
              <div className="overflow-hidden rounded-xl shadow-xl shadow-neutral-200/80 border border-neutral-100 w-full">
                <img
                  src="/images/about/pest-operator.webp"
                  alt="Professional PesSave pest control operator"
                  className="w-full h-[380px] sm:h-[520px] object-cover object-center hover:scale-[1.02] transition-transform duration-500 select-none"
                />
              </div>
            </motion.div>

            <div className="lg:col-span-7 space-y-8 text-left w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.12 }}
                className="space-y-6"
              >
                <motion.h2
                  variants={textVariant}
                  className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 uppercase"
                >
                  A few words about us
                </motion.h2>

                <motion.p
                  variants={textVariant}
                  className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal"
                >
                  PesSave stands at the forefront of advanced, eco-friendly pest
                  eradication. We have designed our workflows around complete
                  operational clarity, substituting traditional, high-toxicity
                  quick fixes with long-term barrier proofing and biological
                  tracking matrices that secure your structural layouts completely.
                </motion.p>

                <motion.p
                  variants={textVariant}
                  className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal"
                >
                  Our certified technicians inspect hidden nested hot-spots,
                  evaluate precise localized risk metrics, and install absolute
                  barriers so pest outbreaks cannot replicate inside your home or
                  corporate kitchen spaces again.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 pt-8 border-t border-neutral-100 mt-12 w-full"
              >
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="space-y-1.5 text-left sm:border-l sm:border-neutral-200 sm:pl-4 first:border-l-0 first:pl-0"
                  >
                    <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#F2C12E] select-none leading-none">
                      <ContentCounter value={stat.number} />
                    </div>

                    <div className="text-xs sm:text-sm font-bold text-[#5C4033] uppercase tracking-wide leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 border-t border-neutral-100 overflow-hidden w-full relative z-20">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[480px] lg:min-h-full flex items-center justify-center p-8 sm:p-12 bg-[#5C4033] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity scale-105 pointer-events-none select-none"
              style={{
                backgroundImage: "url('/images/about/trust-banner-bg.webp')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/90 via-[#5C4033]/70 to-[#5C4033]/90 z-0" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10 text-center space-y-3 max-w-sm"
            >
              <p className="text-[#F2C12E] text-xs font-black uppercase tracking-[0.25em] block leading-none">
                Satisfaction Guaranteed
              </p>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                Why people trust our service?
              </h3>
            </motion.div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 sm:p-16 lg:p-24 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 sm:gap-y-16 w-full max-w-4xl">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="space-y-4 text-left group"
                >
                  <div className="text-[#F2C12E] bg-[#F2C12E]/5 w-14 h-14 rounded-xl flex items-center justify-center border border-[#F2C12E]/10 group-hover:bg-[#F2C12E]/10 transition-all duration-300">
                    {item.icon}
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-black text-neutral-950 uppercase tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 text-sm sm:text-[14px] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}