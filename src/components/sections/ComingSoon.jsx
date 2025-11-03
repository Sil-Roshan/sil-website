import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Apple, Play, Smartphone, Zap, Shield } from 'lucide-react';

export default function ComingSoon() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="comingSoon"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-primary via-primary/80 to-primary/60 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative z-10 text-center text-white"
        >
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4">
            {t('comingSoon.title')}
          </motion.h2>
          <motion.h3 variants={item} className="text-3xl font-semibold mb-8 opacity-90">
            {t('comingSoon.subtitle')}
          </motion.h3>
          <motion.p variants={item} className="text-lg opacity-85 max-w-2xl mx-auto mb-12">
            {t('comingSoon.description')}
          </motion.p>

          {/* App Store Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          >
            {/* App Store */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/95 text-slate-900 font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all backdrop-blur-sm border border-white/50"
            >
              <Apple className="mr-3 group-hover:scale-110 transition-transform" size={24} />
              <div className="text-left">
                <div className="text-xs opacity-70">Download on</div>
                <div className="text-lg font-bold">{t('comingSoon.appStore')}</div>
              </div>
            </motion.a>

            {/* Play Store */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/95 text-slate-900 font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all backdrop-blur-sm border border-white/50"
            >
              <Play className="mr-3 group-hover:scale-110 transition-transform" size={24} fill="currentColor" />
              <div className="text-left">
                <div className="text-xs opacity-70">Get it on</div>
                <div className="text-lg font-bold">{t('comingSoon.playStore')}</div>
              </div>
            </motion.a>
          </motion.div>

          {/* Coming Soon Badge */}
          <motion.div
            variants={item}
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md border-2 border-white rounded-full text-white font-bold text-lg"
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2"
            >
              <span className="inline-block w-3 h-3 bg-white rounded-full"></span>
              Coming Soon
            </motion.span>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={item}
            className="grid md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/20"
          >
            {[
              { icon: Smartphone, title: 'iOS & Android', desc: 'Available on all platforms' },
              { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed and performance' },
              { icon: Shield, title: 'Secure & Private', desc: 'End-to-end encryption' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-white/40 transition-all"
              >
                <feature.icon className="w-12 h-12 mb-4 mx-auto" />
                <div className="font-bold text-lg mb-2">{feature.title}</div>
                <div className="text-sm opacity-80">{feature.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
