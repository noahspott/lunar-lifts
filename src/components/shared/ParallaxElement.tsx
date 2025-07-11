// components/ParallaxElement.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxElementProps = {
  children: React.ReactNode;
  className?: string;
  from?: number;
  to?: number;
};

export default function ParallaxElement({
  children,
  className = "",
  from = 0,
  to = 100,
}: ParallaxElementProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
