"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassSurface from "./GlassSurface";
import { Phone, Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/stateful-button";

const Loader = () => (
  <motion.div key="loader" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
    <motion.svg initial={{ scale: 0, width: 0 }} animate={{ rotate: [0, 360], scale: 1, width: "20px" }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <path d="M12 3a9 9 0 1 0 9 9" />
    </motion.svg>
  </motion.div>
);

const CheckIcon = () => (
  <motion.div key="check" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
    <motion.svg initial={{ scale: 0, width: 0 }} animate={{ scale: 1, width: "20px" }} exit={{ scale: 0, width: 0 }} transition={{ duration: 0.2 }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </motion.svg>
  </motion.div>
);


export function ContactSection() {
  const [status, setStatus] = useState("");
  const [formState, setFormState] = useState("idle");

  useEffect(() => {
    if (status.includes("successfully")) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState("loading");

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "716c9b06-557c-412a-8b6b-bd2678a88a77");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        form.reset();
        setStatus("Message sent successfully!");
        setFormState("success");
      } else {
        console.error("Error from Web3Forms:", result);
        setStatus("Failed to send message. Please try again.");
        setFormState("idle");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("Network error. Please try again.");
      setFormState("idle");
    }

    setTimeout(() => {
        setFormState("idle");
    }, 3000);
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.section id="contact" className="w-full py-20 md:py-32" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants}>
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <motion.div variants={itemVariants} className="text-center mb-12">
          {/* --- UPDATED: Text size class changed from text-4xl --- */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Have a question or want to work together? I'd love to hear from you.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl text-white" variants={containerVariants}>
          <motion.a href="tel:+918591196243" className="group flex flex-col items-center p-4 rounded-lg transition-colors duration-300 hover:bg-white/10" variants={itemVariants} whileHover={{ y: -5 }}><Phone className="h-8 w-8 mb-3 text-purple-400" /><h3 className="font-semibold">Phone</h3><p className="text-sm text-white/70 group-hover:text-white transition-colors">+91 85911 96243</p></motion.a>
          <motion.a href="mailto:vikramkanaujiya67@gmail.com" className="group flex flex-col items-center p-4 rounded-lg transition-colors duration-300 hover:bg-white/10" variants={itemVariants} whileHover={{ y: -5 }}><Mail className="h-8 w-8 mb-3 text-purple-400" /><h3 className="font-semibold">Email</h3><p className="text-sm text-white/70 group-hover:text-white transition-colors break-all">vikramkanaujiya67@gmail.com</p></motion.a>
          <motion.a href="https://www.linkedin.com/in/vikram-kanaujiya-084201254" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-4 rounded-lg transition-colors duration-300 hover:bg-white/10" variants={itemVariants} whileHover={{ y: -5 }}><Linkedin className="h-8 w-8 mb-3 text-purple-400" /><h3 className="font-semibold">LinkedIn</h3><p className="text-sm text-white/70 group-hover:text-white transition-colors">Vikram Kanaujiya</p></motion.a>
        </motion.div>
        
        <motion.div className="w-full max-w-md flex flex-col items-center gap-6 mb-12" variants={itemVariants}>
            <div className="w-full flex items-center gap-4"><div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-white/30"></div><span className="text-sm font-medium text-white/70">OR</span><div className="h-px w-full bg-gradient-to-l from-transparent via-white/30 to-white/30"></div></div>
            <p className="text-white/80 text-lg font-semibold">Write me a message</p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-3xl">
          <GlassSurface width="100%" height="auto" borderRadius={24} backgroundOpacity={0.15} blur={15}>
            <form id="contact-form" onSubmit={handleSubmit} className="w-full p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col"><label htmlFor="name" className="text-sm font-medium text-white/80 mb-2">Your Name</label><motion.input type="text" id="name" name="name" required className="bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" placeholder="John Doe" whileFocus={{ scale: 1.05 }} /></div>
                <div className="flex flex-col"><label htmlFor="email" className="text-sm font-medium text-white/80 mb-2">Your Email</label><motion.input type="email" id="email" name="email" required className="bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300" placeholder="john.doe@example.com" whileFocus={{ scale: 1.05 }} /></div>
              </div>
              <div className="flex flex-col"><label htmlFor="message" className="text-sm font-medium text-white/80 mb-2">Your Message</label><motion.textarea id="message" name="message" required rows="5" className="bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none" placeholder="Hi Vikram, I'd like to talk about..." whileFocus={{ scale: 1.02 }}></motion.textarea></div>
              
              <AnimatePresence>
                {status && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className={`text-sm p-3 rounded-lg ${status.includes("successfully") ? "bg-green-500/20 text-green-300 border border-green-500/30" : "bg-red-500/20 text-red-300 border border-red-500/30"}`}>
                    {status}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={formState === 'loading'}
                  className={formState === 'success' ? 'bg-green-500 hover:bg-green-600' : ''}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {formState === 'idle' && (<motion.span key="idle" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>Send Message</motion.span>)}
                    {formState === 'loading' && (<motion.div key="loading" className="flex items-center gap-2" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}><Loader /><span>Sending...</span></motion.div>)}
                    {formState === 'success' && (<motion.div key="success" className="flex items-center gap-2" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}><CheckIcon /><span>Message Sent!</span></motion.div>)}
                  </AnimatePresence>
                </Button>
              </div>
            </form>
          </GlassSurface>
        </motion.div>
      </div>
    </motion.section>
  );
}