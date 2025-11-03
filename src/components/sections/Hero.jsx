import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Handshake, Zap } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();
  const animatedRef = useRef(false);

  // Try to use Anime.js if available, otherwise Framer Motion handles it
  useEffect(() => {
    if (animatedRef.current) return;
    
    const checkAndAnimate = () => {
      if (typeof window !== 'undefined' && window.anime) {
        animatedRef.current = true;
        
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          try {
            console.log('🎬 Anime.js found - starting animations');
            
            // Create main animation timeline
            const tl = window.anime.timeline({
              autoplay: true
            });
            
            // Title entrance - elastic bounce
            tl.add({
              targets: '.hero-title',
              scale: [0.5, 1.1, 1],
              opacity: [0, 1],
              duration: 1200,
              easing: 'easeOutElastic(1, 0.6)',
            }, 0)
            .add({
              targets: '.hero-subtitle',
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 900,
              easing: 'easeOutQuad',
            }, 300)
            .add({
              targets: '.hero-description',
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 900,
              easing: 'easeOutQuad',
            }, 500)
            .add({
              targets: '.hero-cta',
              opacity: [0, 1],
              scale: [0.7, 1],
              duration: 800,
              easing: 'easeOutQuad',
            }, 800)
            .add({
              targets: '.hero-chip',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 700,
              easing: 'easeOutQuad',
              stagger: 150,
            }, 1000);
            
            // Continuous animations
            window.anime({
              targets: '.hero-title',
              scale: [1, 1.06, 1],
              duration: 3000,
              delay: 3500,
              easing: 'easeInOutQuad',
              loop: true,
            });
            
            window.anime({
              targets: '.hero-chip',
              translateY: [-2, -12, -2],
              duration: 3000,
              delay: window.anime.stagger(200),
              easing: 'easeInOutQuad',
              loop: true,
            });
            
            console.log('✅ Anime.js animations running!');
          } catch (err) {
            console.error('Animation error:', err);
          }
        }, 100);
      } else {
        // Anime.js not available yet, retry
        setTimeout(checkAndAnimate, 300);
      }
    };
    
    checkAndAnimate();
  }, []);

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
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 100 }
            }
          }}
          className="mb-8"
        >
          <motion.h1 
            className="hero-title text-7xl md:text-8xl font-bold text-white drop-shadow-lg"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
          >
            صِلّ
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 }
            }
          }}
          className="hero-subtitle text-2xl md:text-3xl font-semibold text-white mb-4 drop-shadow"
        >
          {t('hero.slogan')}
        </motion.p>

        {/* Description */}
        <motion.p 
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 }
            }
          }}
          className="hero-description text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow"
        >
          {t('hero.description')}
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 }
            }
          }}
          className="hero-cta flex gap-4 justify-center flex-wrap"
        >
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
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Shield, text: t('hero.chipSecure') },
            { icon: Handshake, text: t('hero.chipCommunity') },
            { icon: Zap, text: t('hero.chipModern') },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                ease: 'easeOut',
                delay: 0.5 + index * 0.15
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="hero-chip px-6 py-3 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 rounded-full font-semibold shadow-lg flex items-center gap-2"
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
