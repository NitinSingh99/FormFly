import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
  transition: { duration: 0.15 },
};

export default function AnimatedPage({ children }: { children: React.ReactNode }) {
  return <motion.div {...pageVariants}>{children}</motion.div>;
}
