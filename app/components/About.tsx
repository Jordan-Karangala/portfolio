"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 text-gray-400 text-lg leading-relaxed"
        >

          <p>
            I began my career as an <span className="text-white font-medium">IB Physics educator  with 16 years of experience</span>, where I developed a strong foundation in 
            <span className="text-white"> analytical thinking</span> and 
            <span className="text-white"> structured problem-solving</span>.
          </p>

          <p>
            I transitioned into <span className="text-white font-medium">AI/ML engineering</span>, focusing on 
            <span className="text-white"> real-world systems</span> rather than isolated models. My work includes 
            <span className="text-white"> computer vision pipelines</span> such as liveness detection, pose estimation, and intelligent feedback systems.
          </p>

          <p>
            I design <span className="text-white font-medium">end-to-end AI systems</span> — from data collection and custom model training to 
            <span className="text-white"> real-time inference</span> and deployment-ready pipelines.
          </p>

          <p>
            Recently, I have been working on <span className="text-white font-medium">multi-modal AI agents</span>, integrating vision, structured data, and language models to build 
            <span className="text-white"> intelligent decision-making systems</span>.
          </p>

          <p>
            My focus is on building scalable AI solutions in 
            <span className="text-white"> security</span>, 
            <span className="text-white"> human movement analysis</span>, and 
            <span className="text-white"> applied automation</span>.
          </p>

        </motion.div>

      </div>
    </section>
  );
}