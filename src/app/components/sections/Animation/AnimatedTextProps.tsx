"use client";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delayPerChar?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delayPerChar = 0.02,
  className = "",
}) => {
  // Tách text thành từng ký tự, giữ nguyên khoảng trắng
  const chars = text.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: delayPerChar,
      },
    },
  };

  const charAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap justify-center ${className}`}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          variants={charAnimation}
          className="text-white text-[64px] font-semibold leading-[76.8px] tracking-[-0.8px]"
        >
          {char === " " ? "\u00A0" : char} {/* Sử dụng non-breaking space cho khoảng trắng */}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
export type { AnimatedTextProps };