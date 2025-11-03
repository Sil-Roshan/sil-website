import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            صِلّ
          </h3>
          <p className="text-slate-400 text-sm mb-6 max-w-2xl mx-auto">
            Rebuilding community connections through secure, modern digital platforms inspired by Islamic values.
          </p>
          
          {/* Contact Email */}
          <motion.a
            href={`mailto:${t('footer.email')}`}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 hover:bg-primary/30 rounded-full text-primary hover:text-primary/80 transition-all"
          >
            <Mail size={18} />
            {t('footer.email')}
          </motion.a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-sm"
          >
            {t('footer.copyright')}
          </motion.p>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6 text-sm"
          >
            <motion.a
              href="#"
              whileHover={{ x: 2 }}
              className="text-slate-400 hover:text-primary transition-colors"
            >
              {t('footer.privacy')}
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ x: 2 }}
              className="text-slate-400 hover:text-primary transition-colors"
            >
              {t('footer.terms')}
            </motion.a>
          </motion.div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-40"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
}
