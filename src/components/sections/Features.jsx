import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Car, Megaphone, Handshake, Lock, Building2, DoorOpen } from 'lucide-react';

export default function Features() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: Car,
      title: t('features.feature1'),
      description: t('features.feature1Desc'),
      expanded: t('features.feature1Expanded'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Megaphone,
      title: t('features.feature2'),
      description: t('features.feature2Desc'),
      expanded: t('features.feature2Expanded'),
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Handshake,
      title: t('features.feature3'),
      description: t('features.feature3Desc'),
      expanded: t('features.feature3Expanded'),
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Lock,
      title: t('features.feature4'),
      description: t('features.feature4Desc'),
      expanded: t('features.feature4Expanded'),
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Building2,
      title: t('features.feature5'),
      description: t('features.feature5Desc'),
      expanded: t('features.feature5Expanded'),
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: DoorOpen,
      title: t('features.feature6'),
      description: t('features.feature6Desc'),
      expanded: t('features.feature6Expanded'),
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-secondary to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Discover what makes صِلّ special
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedFeature(index)}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                selectedFeature === index
                  ? 'ring-2 ring-primary shadow-xl'
                  : 'hover:shadow-lg'
              } bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600`}
            >
              <div className="text-4xl mb-4 text-primary">
                <feature.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Feature Detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`bg-gradient-to-r ${features[selectedFeature].color} p-12 rounded-2xl text-white overflow-hidden relative`}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full -ml-32 -mb-32" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-white">
                {React.createElement(features[selectedFeature].icon, { size: 64, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-3xl font-bold">{features[selectedFeature].title}</h3>
            </div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg font-semibold">
                {features[selectedFeature].description}
              </p>
              <p className="text-base opacity-90 leading-relaxed">
                {features[selectedFeature].expanded}
              </p>
            </motion.div>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-6 text-sm font-semibold"
            >
              ← Tap another feature to explore →
            </motion.div>
          </div>
        </motion.div>

        {/* Feature Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '6', label: 'Core Features' },
            { number: '100%', label: 'Secure' },
            { number: '24/7', label: 'Available' },
            { number: '∞', label: 'Scalable' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white dark:bg-slate-700 rounded-xl"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-slate-600 dark:text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
