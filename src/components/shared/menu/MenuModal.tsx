// Components
import { X } from "lucide-react";
import { motion } from "motion/react";

// Data
import { links } from "@/data/links";

export default function MenuModal() {
  return (
    <motion.section
      key="menu-modal"
      initial={{ x: "100%", opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ type: "tween", duration: 0.1, stiffness: 50, damping: 10 }}
      className="bg-gradient-dark fixed inset-0 z-50 flex h-screen w-screen items-center justify-center"
    >
      <div className="relative h-full w-full">
        <X className="text-lunar-white absolute top-9 right-4" />
        <nav className="me-8 mt-48 flex flex-col gap-8">
          {links.map((link) => {
            return (
              <li className="list-none">
                <a
                  className="font-heading font-2 text-lunar-white hover:text-lunar-accent text-right text-4xl uppercase duration-150 hover:cursor-pointer"
                  href={link.href}
                >
                  {link.display}
                </a>
              </li>
            );
          })}
        </nav>
      </div>
    </motion.section>
  );
}
