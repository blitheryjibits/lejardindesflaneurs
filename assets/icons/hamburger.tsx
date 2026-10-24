"use client";

import { motion, type SVGMotionProps, type Variants } from "motion/react";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  size?: number | string;
  isOpen: boolean;
}

const lineVariants: Variants = {
  open: (i: number) => ({
    rotate: 0,
    y: i * 5, // stack lines
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 260, damping: 20, delay: 0.3 },

      opacity: { duration: 0.15 },
    },
  }),

  center: (i: number) => ({
    y: i * 0, // all lines overlap
    rotate: 0,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 260, damping: 20 },
      rotate: { type: "spring", stiffness: 260, damping: 20, duration: 0.2 },
      opacity: { duration: 0.2 },
    },
  }),

  close: (i: number) => {
    // top rotates 45°, bottom rotates -45°
    const angle = i === -1 ? 45 : -45;
    return {
      y: 0,
      rotate: angle,
      opacity: 1,
      transition: {
        rotate: { type: "spring", stiffness: 260, damping: 20, delay: 0.3 },
      },
    };
  },
};

export const HamburgerMenu = ({ size = 40, isOpen, ...props }: IconProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      initial={false}
      animate={
        isOpen
          ? ["open", "center", "close"] // collapse → rotate
          : ["close", "center", "open"] // rotate back → expand
      }
      {...props}
    >
      <title>hamburger menu</title>

      {[-1, 0, 1].map((i) => (
        <motion.rect
          key={i}
          x={4}
          y={12 - 1.5}
          width={16}
          height={3}
          rx={1.5}
          fill="currentColor"
          custom={i}
          variants={lineVariants}
          style={{ originX: 0.5, originY: 0.5 }}
        />
      ))}
    </motion.svg>
  );
};
