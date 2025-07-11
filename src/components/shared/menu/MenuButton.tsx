// Lib
import { useScrollLock } from "./useScrollLock";
import { motion } from "motion/react";
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
      {isOpen ? <MenuModal /> : <Menu className="text-lunar-white" />}
    </motion.button>
  );
}
