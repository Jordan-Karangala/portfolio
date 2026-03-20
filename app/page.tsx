"use client";
import { motion } from "framer-motion";


import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Expertise from "./components/Expertise";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
    {/* Navbar */}
    <Navbar />
    <main className="bg-black text-white pt-20">
      
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div 
            className="max-w-3xl text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>

          <h1 className="text-4xl md:text-6xl font-bold">
            Jordan Stevenson
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-gray-400">
            AI/ML Engineer — Computer Vision & Real-Time AI Systems
          </h2>

          <p className="mt-6 text-gray-500 text-base md:text-lg">
            Building real-time AI systems — from liveness detection to intelligent multi-modal agents.
          </p>
        </motion.div>
      </section>

      {/* About */}
      <About />

      {/* Expertise */}
      <Expertise />


      {/* Projects */}
      <Projects />

        {/* Blog */}
      <Blog />

      {/* Contact */}
      <Contact />

    </main>
    </>
  );
}