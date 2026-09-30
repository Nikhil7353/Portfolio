"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  as: Component = "h2",
  className = "",
  delay = 0,
  stagger = 0.04,
  duration = 0.75,
  once = true,
}) => {
  const words = children.split(" ");

  return (
    <Component className={`inline-block ${className}`}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="inline-flex flex-wrap gap-x-[0.28em] gap-y-0">
        {words.map((word, idx) => (
          <span key={idx} className="inline-block overflow-hidden py-1">
            <motion.span
              initial={{ y: "115%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once, margin: "-40px" }}
              transition={{
                duration,
                delay: delay + idx * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Component>
  );
};
