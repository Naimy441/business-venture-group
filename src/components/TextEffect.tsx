"use client";
import { motion, useReducedMotion, type Variant } from "framer-motion";
import React from "react";

type PresetType = "fade-in-blur" | "fade" | "slide" | "scale";
type PerType = "char" | "word" | "line";

interface TextEffectProps {
  children: string;
  per?: PerType;
  preset?: PresetType;
  delay?: number;
  /** Animate when scrolled into view instead of on mount. */
  inView?: boolean;
  className?: string;
  segmentWrapperClassName?: string;
}

const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: (custom: { delay?: number; stagger?: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger ?? 0.05,
      delayChildren: custom.delay ?? 0,
    },
  }),
};

const defaultPresets: Record<
  PresetType,
  { hidden: Variant; visible: Variant }
> = {
  "fade-in-blur": {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 19,
      },
    },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  },
  slide: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  },
};

export function TextEffect({
  children,
  per = "word",
  preset = "fade-in-blur",
  delay = 0,
  inView = false,
  className = "",
  segmentWrapperClassName = "",
}: TextEffectProps) {
  const reduceMotion = useReducedMotion();
  // Each entry is one unbreakable group; char mode keeps a word's letters
  // together so lines only wrap between words.
  const segments = React.useMemo(() => {
    if (per === "char") return children.split(" ").map((w) => w.split(""));
    if (per === "word") return children.split(" ").map((w) => [w]);
    return children.split("\n").map((l) => [l]);
  }, [children, per]);

  const stagger = per === "char" ? 0.03 : 0.1;
  const itemVariants = defaultPresets[reduceMotion ? "fade" : preset];
  const trigger = inView
    ? { whileInView: "visible", viewport: { once: true, amount: 0.6 } }
    : { animate: "visible" };

  return (
    <motion.span
      initial="hidden"
      {...trigger}
      custom={{ delay, stagger }}
      variants={defaultContainerVariants}
      className={`inline-block ${className}`}
    >
      <span className="sr-only">{children}</span>
      {segments.map((group, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`inline-block whitespace-pre ${segmentWrapperClassName}`}
        >
          {group.map((segment, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              className="inline-block whitespace-pre"
            >
              {segment}
            </motion.span>
          ))}
          {per !== "line" && index < segments.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
}
