"use client";
import React, { useState } from "react";
import GlassSurface from './GlassSurface';
import { Phone, Mail, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Button } from './ui/stateful-button'; // Import the new button

export function ContactSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    formData.append("access_key", "716c9b06-557c-412a-8b6b-bd2678a88a77");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      event.target.reset();
      return; // The button will handle success state
    } else {
      console.error("Error from Web3Forms:", result);
      throw new Error(result.message || "An error occurred.");
    }
  };

  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have a question or want to work together? I’d love to hear from you.
          </p>
        </div>

        {/* --- CONTACT DETAILS SECTION --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16 w-full max-w-4xl text-white">
          {/* Phone */}
          <a href="tel:+918591196243" className="group flex flex-col items-center p-4 rounded-lg transition-colors duration-300 hover:bg-white/10">
            <Phone className="h-8 w-8 mb-3 text-purple-400" />
            <h3 className="font-semibold">Phone</h3>
            <p className="text-sm text-white/70 group-hover:text-white transition-colors">+91 85911 96243</p>
          </a>
          
          {/* Email - Now spans 2 columns on medium screens */}
          <a href="mailto:vikramkanaujiya67@gmail.com" className="group flex flex-col items-center p-4 rounded-lg transition-colors duration-300 hover:bg-white/10 md:col-span-1">
            <Mail className="h-8 w-8 mb-3 text-purple-400" />
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-white/70 group-hover:text-white transition-colors break-all">vikramkanaujiya67@gmail.com</p>
          </a>
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/vikram-kanaujiya-084201254" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-4 rounded-lg transition-colors duration-300 hover:bg-white/10">
            <Linkedin className="h-8 w-8 mb-3 text-purple-400" />
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="text-sm text-white/70 group-hover:text-white transition-colors">Vikram Kanaujiya</p>
          </a>
          
        </div>

        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={24}
          className="max-w-3xl"
          backgroundOpacity={0.15}
          blur={15}
        >
          {/* The form's onSubmit is now handled by the button's onClick */}
          <form onSubmit={(e) => e.preventDefault()} className="w-full p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium text-white/80 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-white/80 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-white/80 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none"
                placeholder="Hi Vikram, I'd like to talk about..."
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              {/* The old button is replaced with the new stateful one */}
              <Button onClick={handleSubmit}>
                Send Message
              </Button>
            </div>
          </form>
        </GlassSurface>
      </div>
    </section>
  );
}
