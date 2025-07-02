// Lib
import clsx from "clsx";

// Components
import { Phone, Mail, MapPin } from "lucide-react";
import { text } from "motion/react-client";

const iconMap = {
  PHONE: Phone,
  EMAIL: Mail,
  LOCATION: MapPin,
} as const;

export default function ContactItem({
  label,
  contactInfo,
  type,
  theme = "LIGHT",
}: {
  label: string;
  contactInfo: string;
  type: keyof typeof iconMap;
  theme?: "DARK" | "LIGHT";
}) {
  const Icon = iconMap[type];

  const textClasses = clsx(
    { "text-lunar-white": theme === "DARK" },
    { "text-lunar-primary": theme === "LIGHT" },
  );

  return (
    <div className="flex gap-4">
      <div
        className={clsx(
          "flex size-12 items-center justify-center rounded-full border-2",
          { "border-lunar-white": theme === "DARK" },
          { "border-lunar-primary": theme === "LIGHT" },
        )}
      >
        <Icon className={textClasses} />
      </div>
      <div className={textClasses}>
        <p className="subtitle">{label}</p>
        <p className="body-copy">{contactInfo}</p>
      </div>
    </div>
  );
}
