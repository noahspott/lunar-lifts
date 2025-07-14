// Lib
import { useScrollLock } from "./useScrollLock";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

// Components
import { Menu, X } from "lucide-react";
import MenuModal from "./MenuModal";

export default function MenuButton({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useScrollLock(isOpen);

  return (
    <motion.button
      className={clsx("hover:cursor-pointer", className)}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <MenuModal />
        ) : (
          <motion.div
            initial={{ x: "40px", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            key="menu-button"
          >
            <Menu className="text-lunar-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
