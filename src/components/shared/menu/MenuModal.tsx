// Hooks
import { useScrollLock } from "./useScrollLock";

// Components
import { X } from "lucide-react";

// Data
import { links } from "@/data/links";

export default function MenuModal() {
  return (
    <section className="bg-gradient-dark fixed inset-0 flex h-screen w-screen items-center justify-center">
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
    </section>
  );
}
