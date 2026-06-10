


import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const colors = {
  bgMain: "#FFFFFF",
  bgDarkBlock: "#5C4033",
  accentYellow: "#F2C12E",
  neutralDark: "#0A0A0A",
  cardBg: "#FDFBF7",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    "Ants Control",
    "Bed Bugs Control",
    "Carpet Moth Control Treatment",
    "Carpet Beetle Treatment",
    "Cockroach Control Service",
    "Rats & Mice Control",
    "Flea Control",
    "Wasps Nest Control",
    "Bumble Bee Control",
    "Squirrel Control",
    "Hygiene and Proofing Services",
    "Birds Control Services",
    "Pigeons Control Services",
  ];

  const faqs = [
    {
      question: "How quickly can you treat a pest problem in Chelsea?",
      answer:
        "We offer immediate local dispatch times across Chelsea and surrounding premium UK territories. For emergency threats, our specialists aim to deploy within hours.",
    },
    {
      question: "Are your pest control treatments safe for pets and children?",
      answer:
        "Yes, family safety is our prime constraint. We utilize highly targeted biological eradication systems and guide you safely through containment timelines.",
    },
    {
      question: "Do you offer proofing to stop rodents from returning?",
      answer:
        "Absolutely. We locate hidden nested hotspots, block incoming structural pathways with heavy meshes, and establish premium permanent seal safeguards.",
    },
    {
      question: "Will I need more than one visit?",
      answer:
        "Outbreak dynamics vary. While simple treatments conclude instantly, complex rodent structures or bed bugs require a systematic 2 to 3 stage clearance procedure.",
    },
    {
      question: "Do you provide commercial pest control?",
      answer:
        "Yes, PesSave operates discreet premium coverage accounts for retail outlets, corporate high-rises, and major commercial kitchen setups across London.",
    },
  ];

  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loaderToast = toast.loading("Sending your request securely...", {
      style: {
        background: colors.bgDarkBlock,
        color: "#FFFFFF",
        borderRadius: "12px",
        border: `1px solid ${colors.accentYellow}33`,
      },
    });

    try {
      const res = await axios.post(
        "https://pessave-backend.vercel.app/api/contact",
        formData
      );

      toast.success(
        res.data.message || "Pest service request submitted successfully!",
        {
          id: loaderToast,
          duration: 4000,
          icon: "🛡️",
          style: {
            background: colors.bgDarkBlock,
            color: "#FFFFFF",
            border: `1px solid ${colors.accentYellow}88`,
            borderRadius: "12px",
          },
        }
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
        {
          id: loaderToast,
          duration: 4000,
          style: {
            background: "#7f1d1d",
            color: "#FFFFFF",
            borderRadius: "12px",
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-neutral-900 min-h-screen font-sans antialiased selection:bg-[#F2C12E] selection:text-[#5C4033] overflow-x-hidden w-full">
      <Toaster position="top-right" reverseOrder={false} />

      <section className="relative min-h-[420px] sm:min-h-[520px] flex items-center justify-start overflow-hidden bg-[#5C4033] w-full">
        <div
          className="
            absolute inset-0 z-0
            bg-cover bg-no-repeat
            bg-[position:center_28%]
            sm:bg-[position:center_24%]
            lg:bg-[position:center_20%]
            opacity-70
            select-none pointer-events-none
          "
          style={{
            backgroundImage: "url('/images/contact-hero.webp')",
          }}
        />

        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#5C4033]/78 via-[#5C4033]/52 to-[#5C4033]/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-left pt-24 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#F2C12E]" />
              <span className="text-[#F2C12E] text-xs font-black uppercase tracking-[0.3em]">
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-none">
              Contact Us
            </h1>

            <p className="text-gray-100 text-sm sm:text-base leading-relaxed max-w-xl pt-1">
              Have an urgent infestation problem? Connect with our dedicated
              London dispatch office right now for instant elite clearance
              procedures.
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

      <section className="pt-12 pb-20 sm:pt-16 sm:pb-28 bg-white relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-full flex flex-col justify-between p-8 sm:p-12 bg-[#cdbdb6] shadow-xl shadow-neutral-200/50 group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 mix-blend-luminosity scale-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                style={{
                  backgroundImage:
                    "url('/images/sidebanner.webp')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/95 via-[#5C4033]/70 to-[#5C4033]/40 z-0" />

              <div className="relative z-10 space-y-4 text-left">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#F2C12E] bg-[#F2C12E]/10 px-3 py-1.5 rounded-md border border-[#F2C12E]/20">
                  PesSave Hub
                </span>

                <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight pt-2">
                  Premium Eradication Frameworks
                </h3>
              </div>

              <div className="relative z-10 text-left pt-12 space-y-4 border-t border-white/10">
                <p className="text-gray-200 text-sm leading-relaxed font-medium">
                  We secure residential grids and complex corporate
                  architectures using zero-compromise mechanical barriers and
                  toxicologically filtered treatments.
                </p>

                <div className="pt-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#F2C12E]">
                    // Emergency Response
                  </p>
                  <p className="text-base font-black text-white mt-0.5">
                   07440 112498
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 w-full flex flex-col justify-center text-left"
            >
              <div className="mb-8">
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-neutral-950">
                  Request Inspection
                </h2>

                <p className="text-gray-500 text-sm sm:text-base mt-2 font-normal">
                  Fill out our verification module below to receive direct,
                  transparent quotes. No surprise margins.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      label: "Your Full Name",
                      name: "name",
                      type: "text",
                      placeholder: "e.g. John Doe",
                    },
                    {
                      label: "Email Address",
                      name: "email",
                      type: "email",
                      placeholder: "e.g. john@example.com",
                    },
                    {
                      label: "Phone Number",
                      name: "phone",
                      type: "tel",
                      placeholder: "e.g. +44 7405 613595",
                    },
                    {
                      label: "Postcode Location",
                      name: "postcode",
                      type: "text",
                      placeholder: "e.g. W1D",
                    },
                  ].map((field) => (
                    <div key={field.name} className="space-y-2 w-full">
                      <label className="block text-xs font-black text-neutral-800 tracking-wider uppercase">
                        {field.label}{" "}
                        <span className="text-[#5C4033]">*</span>
                      </label>

                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full bg-[#FDFBF7] border border-neutral-200/70 focus:border-[#5C4033] rounded-xl px-4 py-3.5 outline-none transition-all text-neutral-950 placeholder:text-neutral-400 text-sm font-medium focus:ring-2 focus:ring-[#5C4033]/5"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2 w-full">
                  <label className="block text-xs font-black text-neutral-800 tracking-wider uppercase">
                    Required Pest Target{" "}
                    <span className="text-[#5C4033]">*</span>
                  </label>

                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#FDFBF7] border border-neutral-200/70 focus:border-[#5C4033] rounded-xl pl-4 pr-12 py-3.5 outline-none transition-all text-neutral-950 appearance-none cursor-pointer text-sm font-medium focus:ring-2 focus:ring-[#5C4033]/5"
                    >
                      <option value="" className="text-neutral-400">
                        Select target infection route...
                      </option>

                      {services.map((srv, idx) => (
                        <option key={idx} value={srv} className="text-neutral-900">
                          {srv}
                        </option>
                      ))}
                    </select>

                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <label className="block text-xs font-black text-neutral-800 tracking-wider uppercase">
                    Situation Description{" "}
                    <span className="text-[#5C4033]">*</span>
                  </label>

                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about structural damages or pest sightings..."
                    required
                    className="w-full bg-[#FDFBF7] border border-neutral-200/70 focus:border-[#5C4033] rounded-xl px-4 py-3.5 outline-none transition-all text-neutral-950 placeholder:text-neutral-400 text-sm font-medium resize-none focus:ring-2 focus:ring-[#5C4033]/5"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-4 bg-[#5C4033] border border-[#5C4033] text-white hover:bg-[#5C4033]/90 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#5C4033]/10 disabled:opacity-50"
                  >
                    {loading
                      ? "Processing Securely..."
                      : "Book Immediate Inspection"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 border-t border-b border-neutral-100 w-full relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#5C4033]/5 border border-[#5C4033]/10 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-[#5C4033]/5 border border-[#5C4033]/10 text-[#5C4033] px-2 py-0.5 rounded font-black tracking-wider uppercase">
                    Verified UK Listing
                  </span>

                  <span className="text-[#F2C12E] text-xs">★★★★★</span>
                </div>

                <h4 className="text-base font-black text-neutral-950 uppercase tracking-tight">
                  PesSave Google Profile
                </h4>

                <p className="text-xs text-gray-500 font-medium">
                  Access reviews and localized service coverage across Chelsea
                  and surrounding London areas.
                </p>

                <a
                  href="https://maps.app.goo.gl/poPJmd5HMSX5WBxM9?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black text-[#5C4033] hover:underline inline-flex items-center gap-1 pt-1"
                >
                  Explore Profile →
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 w-full rounded-2xl overflow-hidden border border-neutral-200/70 h-[340px] relative shadow-md">
            <iframe
              title="Chelsea London UK"
              src="https://www.google.com/maps?q=Chelsea,%20London,%20UK&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 relative z-20 border-b border-neutral-100 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              label: "Local Premium Hub",
              val: "Chelsea, London, UK",
              icon: "📍",
            },
            {
              label: "Corporate Support",
              val: "info@pestcontrolchelsea.uk",
              icon: "✉️",
              link: "mailto:info@pestcontrolchelsea.uk",
            },
            {
              label: "Direct Emergency Helpline",
              val: "07440 112498",
              icon: "📞",
              link: "tel:07440 112498",
            },
          ].map((node, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#FDFBF7] border border-neutral-200/50 rounded-xl p-5 hover:border-[#5C4033]/30 transition-all duration-300"
            >
              <div className="text-xl bg-white w-10 h-10 rounded-lg flex items-center justify-center border border-neutral-200/30 shadow-sm">
                {node.icon}
              </div>

              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">
                  {node.label}
                </p>

                {node.link ? (
                  <a
                    href={node.link}
                    className="text-sm font-black text-neutral-900 hover:text-[#5C4033] transition-colors"
                  >
                    {node.val}
                  </a>
                ) : (
                  <p className="text-sm font-black text-neutral-900">
                    {node.val}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-[#FDFBF7] relative z-20 w-full">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs text-[#5C4033] font-black uppercase tracking-[0.2em]">
              // Faq Interface
            </span>

            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-neutral-900 mt-2">
              Frequently Answered Frameworks
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;

              return (
                <div
                  key={idx}
                  className={`border transition-all duration-300 rounded-xl overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#5C4033]/30 shadow-md"
                      : "bg-white border-neutral-200/70 hover:border-[#5C4033]/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left outline-none"
                  >
                    <span className="font-black text-sm sm:text-base text-neutral-900 tracking-tight">
                      {faq.question}
                    </span>

                    <span
                      className={`text-xl font-light transform transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-[#5C4033]" : "text-neutral-400"
                      }`}
                    >
                      ＋
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "linear" }}
                      >
                        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-neutral-100 pt-3 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;