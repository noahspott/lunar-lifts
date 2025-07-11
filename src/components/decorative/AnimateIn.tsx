import { motion } from "framer-motion";

type AnimateInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
};

export default function AnimateIn({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  className = "",
}: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
