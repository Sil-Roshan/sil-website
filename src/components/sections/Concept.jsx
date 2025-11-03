import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, HandshakeIcon, Zap, CheckCircle2, XCircle } from 'lucide-react';

export default function Concept() {
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

  const features = [
    {
      icon: Shield,
      title: t('concept.verified'),
      description: t('concept.verifiedDesc'),
    },
    {
      icon: HandshakeIcon,
      title: t('concept.community'),
      description: t('concept.communityDesc'),
    },
    {
      icon: Zap,
      title: t('concept.safe'),
      description: t('concept.safeDesc'),
    },
  ];

  return (
    <section
      id="concept"
      ref={ref}
      className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4">
            {t('concept.title')}
          </motion.h2>
          <motion.h3 variants={item} className="text-2xl font-semibold text-primary mb-6">
            {t('concept.subtitle')}
          </motion.h3>
          <motion.p variants={item} className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t('concept.description')}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="p-8 bg-gradient-to-br from-primary/5 to-secondary dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-primary/10 dark:border-slate-600 transition-all hover:shadow-lg"
            >
              <div className="text-5xl mb-4 text-primary">
                <feature.icon size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Problem and Solution Animation */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={container}
          className="mt-20 pt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
            {/* Problem Card - Modern Minimal */}
            <motion.div
              whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(239, 68, 68, 0.15)' }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border border-red-200/50 dark:border-red-900/30 backdrop-blur-xl p-10 transition-all duration-500"
            >
              {/* Background Glow */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-500" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-400/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-900/30 mb-6"
                >
                  <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                </motion.div>

                <h4 className="text-3xl font-bold mb-2 text-red-700 dark:text-red-400">{t('concept.problemTitle')}</h4>
                <p className="text-sm text-red-600/60 dark:text-red-400/60 mb-8 font-medium">{t('concept.problemSubtitle')}</p>

                <div className="space-y-4">
                  <motion.div
                    variants={item}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 mt-1 text-red-500">
                      <div className="w-5 h-5 rounded-full border-2 border-red-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">{t('concept.problem1Title')}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('concept.problem1Desc')}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 mt-1 text-red-500">
                      <div className="w-5 h-5 rounded-full border-2 border-red-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">{t('concept.problem2Title')}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('concept.problem2Desc')}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 mt-1 text-red-500">
                      <div className="w-5 h-5 rounded-full border-2 border-red-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">{t('concept.problem3Title')}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('concept.problem3Desc')}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Solution Card - Modern Minimal */}
            <motion.div
              whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(36, 88, 42, 0.15)' }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border border-primary/30 dark:border-primary/20 backdrop-blur-xl p-10 transition-all duration-500"
            >
              {/* Background Glow */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 dark:bg-primary/30 mb-6"
                >
                  <CheckCircle2 className="w-8 h-8 text-primary dark:text-primary/80" />
                </motion.div>

                <h4 className="text-3xl font-bold mb-2 text-primary">{t('concept.solutionTitle')}</h4>
                <p className="text-sm text-primary/60 dark:text-primary/50 mb-8 font-medium">{t('concept.solutionSubtitle')}</p>

                <div className="space-y-4">
                  <motion.div
                    variants={item}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 mt-1 text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">{t('concept.solution1Title')}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('concept.solution1Desc')}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 mt-1 text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">{t('concept.solution2Title')}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('concept.solution2Desc')}</p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={item}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 mt-1 text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 dark:text-slate-100">{t('concept.solution3Title')}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t('concept.solution3Desc')}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
