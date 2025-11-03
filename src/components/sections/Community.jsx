import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Heart, Handshake, Home, Eye, Sparkles, Mail, Bell, Layers } from 'lucide-react';

export default function Community() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const systemFeatures = [
    {
      title: t('community.creation'),
      description: t('community.creationDesc'),
      icon: Sparkles,
    },
    {
      title: t('community.invitation'),
      description: t('community.invitationDesc'),
      icon: Mail,
    },
    {
      title: t('community.notifications'),
      description: t('community.notificationsDesc'),
      icon: Bell,
    },
    {
      title: t('community.counter'),
      description: t('community.counterDesc'),
      icon: Layers,
    },
  ];

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
      id="community"
      ref={ref}
      className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('community.title')}</h2>
          <h3 className="text-2xl font-semibold text-primary mb-6">{t('community.subtitle')}</h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('community.vision')}
          </p>
        </motion.div>

        {/* System Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {systemFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="p-8 bg-gradient-to-br from-primary/5 to-secondary dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-primary/10 dark:border-slate-600 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4 text-primary">
                <feature.icon size={56} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-primary">{feature.title}</h4>
              <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values Section - Modern Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <motion.div
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Built on Islamic teachings, صِلّ embodies values that bring communities together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { value: 'صِلّ', icon: Leaf, color: 'text-emerald-600 dark:text-emerald-400' },
              { value: 'Compassion', icon: Heart, color: 'text-red-600 dark:text-red-400' },
              { value: 'Trust', icon: Handshake, color: 'text-primary dark:text-primary/80' },
              { value: 'Community', icon: Home, color: 'text-blue-600 dark:text-blue-400' },
              { value: 'Transparency', icon: Eye, color: 'text-purple-600 dark:text-purple-400' },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-slate-800 dark:to-slate-700 border border-primary/30 dark:border-primary/20 cursor-pointer transition-all hover:shadow-lg"
                >
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                    <IconComponent className={`w-12 h-12 ${item.color}`} strokeWidth={1.5} />
                  </div>
                  <p className="text-center font-bold text-slate-800 dark:text-white">{item.value}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
