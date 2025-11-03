import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Handshake, Zap } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-primary via-primary/20 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-72 h-72 bg-secondary dark:bg-slate-700 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full opacity-10 blur-3xl"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Main Title Animation */}
        <motion.div variants={item} className="mb-8">
          <motion.h1
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-7xl md:text-8xl font-bold text-white drop-shadow-lg"
          >
            صِلّ
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={item} className="text-2xl md:text-3xl font-semibold text-white mb-4 drop-shadow">
          {t('hero.slogan')}
        </motion.p>

        {/* Description */}
        <motion.p variants={item} className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow">
          {t('hero.description')}
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={item} className="flex gap-4 justify-center flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('concept')}
            className="px-8 py-4 bg-white dark:bg-slate-800 text-primary dark:text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all border border-primary/20 dark:border-white/20"
          >
            {t('hero.cta')}
          </motion.button>
        </motion.div>

        {/* Feature Chips Animation */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Shield, text: t('hero.chipSecure') },
            { icon: Handshake, text: t('hero.chipCommunity') },
            { icon: Zap, text: t('hero.chipModern') },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-3 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 rounded-full font-semibold shadow-lg flex items-center gap-2"
            >
              <feature.icon size={20} className="text-primary" />
              <span className="text-slate-900 dark:text-white">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
