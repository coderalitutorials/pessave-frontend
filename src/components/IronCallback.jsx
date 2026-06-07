




import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const brandColors = {
  brown: "#5C4033",
  yellow: "#F2C12E",
  textDark: "#2D221E",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function AboutCallbackSection() {
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "phone") setPhoneError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone.trim()) {
      setPhoneError("Phone number is missing");
      return;
    }

    setLoading(true);

    toast.promise(
      axios.post("http://localhost:5000/api/callback", formData),
      {
        loading: "Processing callback sync...",
        success: () => {
          setFormData({ name: "", postcode: "", phone: "" });
          setLoading(false);
          return "Callback request sent successfully! 📞";
        },
        error: (error) => {
          setLoading(false);
          return error.response?.data?.message || "Connection error. Retry.";
        },
      },
      {
        style: { fontFamily: "sans-serif", fontSize: "13px" },
        success: { style: { background: brandColors.brown, color: "#FFFFFF" } },
        error: { style: { background: "#DC2626", color: "#FFFFFF" } },
      }
    );
  };

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-visible z-30">
    
      {/* <Toaster position="top-right" reverseOrder={false} /> */}




<Toaster
  position="top-center"
  reverseOrder={false}
  gutter={12}
  containerStyle={{
    top: "110px",
    zIndex: 999999,
  }}
  toastOptions={{
    duration: 4000,
    style: {
      background: "#5C4033",
      color: "#FFFFFF",
      border: "1px solid #F2C12E",
      borderRadius: "12px",
      fontSize: "13px",
      fontWeight: "600",
      zIndex: 999999,
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    },
    success: {
      style: {
        background: "#5C4033",
        color: "#FFFFFF",
        border: "1px solid #F2C12E",
      },
      iconTheme: {
        primary: "#F2C12E",
        secondary: "#5C4033",
      },
    },
    error: {
      style: {
        background: "#DC2626",
        color: "#FFFFFF",
        border: "1px solid #FCA5A5",
      },
    },
    loading: {
      style: {
        background: "#5C4033",
        color: "#FFFFFF",
        border: "1px solid #F2C12E",
      },
    },
  }}
/>




      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Exact Layout Grid Structure from image_e612e1.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Clean About Information Layout */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-6 text-left lg:pr-4"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              {/* Reference Blue Border Line replaced with Brand Accent Line */}
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#F2C12E] block"></span>
                <span className="text-[#F2C12E] text-xs md:text-sm font-bold uppercase tracking-widest block">
                  About Our Company
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2D221E] leading-tight">
                Most awarded pest control services since 2008
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              Don't let pests compromise your property or health. Our local expert team in Chelsea is fully certified and equipped to eliminate infestations safely, ensuring your home or business premises remain completely protected and secure.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-500 text-sm leading-relaxed hidden sm:block">
              We focus on smart protection and clean living solutions. By choosing us, you get same-day emergency responses and professional pest eradication treatments tailored to your precise timeline.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE: Elegant Floating Overlay Form Card Block */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full lg:-mt-32 bg-white rounded-md shadow-2xl border border-gray-100 p-6 sm:p-10"
          >
            <div className="text-center md:text-left mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Book a Service
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              
              {/* Field 1: Name */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:bg-white focus:border-[#F2C12E] text-gray-900 placeholder:text-gray-400 font-medium transition-all"
                />
              </div>

              {/* Field 2: Postcode */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                  Postcode <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="e.g. SW3, SW10"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-sm outline-none focus:bg-white focus:border-[#F2C12E] text-gray-900 placeholder:text-gray-400 font-medium transition-all"
                />
              </div>

              {/* Field 3: Phone */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Best number to reach you"
                  required
                  className={`w-full bg-gray-50 border rounded px-4 py-3 text-sm outline-none focus:bg-white font-medium transition-all text-gray-900 placeholder:text-gray-400 ${
                    phoneError ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#F2C12E]"
                  }`}
                />
                {phoneError && (
                  <p className="text-red-500 text-xs font-semibold mt-1">⚠️ {phoneError}</p>
                )}
              </div>

              {/* Submit Button Block - Exact Style Match with Logo Color Yellow */}
              <div className="pt-4">
                <motion.button
                  whileHover={{ backgroundColor: "#dbad24" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#F2C12E] text-neutral-900 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-md shadow-[#F2C12E]/10"
                >
                  {loading ? "SUBMITTING..." : "SUBMIT DETAILS"}
                </motion.button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}