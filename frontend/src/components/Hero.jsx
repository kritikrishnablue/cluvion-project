import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../mock';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroData.backgroundImage}
          alt="Video editing workspace"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/50 via-[#1a1a1a]/70 to-[#1a1a1a]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
            {heroData.name}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-[#ff6b6b] mb-6">
            {heroData.tagline}
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            {heroData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={scrollToProjects}
            >
              <Play className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff] hover:text-[#1a1a1a] px-8 py-6 text-lg rounded-full transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={scrollToProjects}
          >
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;