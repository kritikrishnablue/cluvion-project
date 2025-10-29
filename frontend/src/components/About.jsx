import React from 'react';
import { motion } from 'framer-motion';
import { Award, Film, Users, TrendingUp } from 'lucide-react';
import { aboutData } from '../mock';

const About = () => {
  const statIcons = {
    0: <Film className="h-8 w-8" />,
    1: <TrendingUp className="h-8 w-8" />,
    2: <Award className="h-8 w-8" />,
    3: <Users className="h-8 w-8" />
  };

  return (
    <section id="about" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            {aboutData.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={aboutData.image}
                alt="About Alex Rivera"
                className="w-full h-[500px] object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff6b6b] rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#00d9ff] rounded-full blur-3xl opacity-30"></div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              {aboutData.bio}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              From fast-paced commercials to intimate documentaries, I approach each project with fresh eyes and a commitment to excellence. My goal is simple: create videos that don't just look good, but tell stories that matter.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {aboutData.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-[#1a1a1a] p-6 rounded-xl text-center border border-gray-800 hover:border-[#ff6b6b] transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3 text-[#ff6b6b] group-hover:text-[#00d9ff] transition-colors duration-300">
                {statIcons[index]}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;