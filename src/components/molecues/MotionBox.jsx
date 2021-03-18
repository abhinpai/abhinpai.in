import React from 'react';
import { motion } from 'framer-motion';

const transition = {
  duration: 0.4,
  delay: 0.25,
  ease: 'easeIn',
};

const variants = {
  hidden: {
    y: 4,
    opacity: 0,
    transition,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition,
  },
  card: {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  },
};

function MotionBox({ className, children }) {
  return (
    <motion.div
      initial='hidden'
      animate='show'
      exit='hidden'
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MotionBox;
