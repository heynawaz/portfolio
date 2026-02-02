'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <section className="grid h-screen w-screen place-items-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Animated logo */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-3xl font-bold tracking-tight text-palette-navy"
        >
          nawaz<span className="text-palette-black">.</span>
        </motion.div>
        
        {/* Loading spinner */}
        <div className="relative h-10 w-10">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-slate-200"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-violet-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-sm font-medium text-slate-400"
        >
          Loading...
        </motion.p>
      </motion.div>
    </section>
  );
}
