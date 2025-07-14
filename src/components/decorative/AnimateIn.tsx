import { motion, type Transition } from "framer-motion";

type AnimateInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  initialOpacity?: number;
  isBouncy?: boolean;
};

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.3,
  y = 20,
  className = "",
  initialOpacity = 0,
  isBouncy = false,
}: AnimateInProps) {
  const transition: Transition = isBouncy
    ? {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 1,
        delay,
      }
    : {
        type: "tween",
        ease: "easeOut",
        duration,
        delay,
      };

  return (
    <motion.div
      initial={{ opacity: initialOpacity, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
