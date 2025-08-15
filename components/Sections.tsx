'use client';

import React from "react";
import { motion } from "framer-motion";

function Card({ title, desc, img }: { title: string; desc: string; img: string }) {
  return (
    <motion.div
      className="card rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.01] hover:from-white/10 hover:to-white/[0.03] transition-all duration-500 group shadow-lg hover:shadow-2xl backdrop-blur-sm"
      initial={{ opacity: 0, y: 40, rotateX: 5, rotateY: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        y: -8, 
        rotateZ: 0.5,
        boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)"
      }}
      style={{
        transformStyle: "preserve-3d",
        transformPerspective: 1000
      }}
    >
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="opacity-80 text-sm">{desc}</p>
        <motion.div
          className="w-8 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-2"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section 
      id="features" 
      className="section-padding bg-gradient-to-b from-white/5 to-transparent dark:from-black/5 relative overflow-hidden"
    >
      {/* Cinematic background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] animate-float-delayed" />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
         <motion.span
  className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-500 drop-shadow-[0_0_6px_rgba(0,0,0,0.5)] inline-block mb-3"
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  viewport={{ once: true }}
>
  Features
</motion.span>

          <motion.h2
  className="text-4xl md:text-5xl font-bold mb-5 bg-clip-text text-transparent 
             bg-gradient-to-r from-white via-gray-300 to-gray-500 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  viewport={{ once: true }}
>
  Powerful capabilities
</motion.h2>
          <motion.p
            className="max-w-2xl mx-auto opacity-80 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore our comprehensive suite of features designed to elevate your experience
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Card
              key={i}
              title={`Feature ${i + 1}`}
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              img={`https://picsum.photos/seed/${i+100}/800/600`}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 rounded-xl bg-gradient-to-br from-primary via-pink-500 to-accent text-white font-medium shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.03] active:scale-95 relative overflow-hidden"
  whileHover={{ 
    boxShadow: "0 10px 30px -5px rgba(124, 58, 237, 0.5)",
    y: -3
  }}
  whileTap={{ scale: 0.97 }}
>
  <span className="relative z-10 animate-text-shimmer">Explore all features</span>
  
  {/* Glow ring effect */}
  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-pink-500 to-accent opacity-0 hover:opacity-30 blur-lg transition-opacity duration-500"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-16 border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent dark:from-black/20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Shimmer line effect */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-pulse" />

      {/* Footer gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent blur-xl" />
      </div>
      
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo with gradient animation */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-3xl font-bold"
          >
            <span className="bg-gradient-to-r from-primary via-pink-500 to-accent bg-clip-text text-transparent animate-gradient">
              Vignam
            </span>
          </motion.div>

          {/* Social links with glow effect */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 relative group"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 0.7 }}
                whileHover={{ y: -3, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                <span className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-30 blur-lg bg-primary transition-all duration-500"></span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/5 text-sm opacity-75 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          © {currentYear} Vignam — Assignment demo. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}
