import { Phone, Mail, MapPin } from "lucide-react";

const iconMap = {
  PHONE: Phone,
  EMAIL: Mail,
  LOCATION: MapPin,
} as const;

export default function ContactItem({
  label,
  contactInfo,
  type,
}: {
  label: string;
  contactInfo: string;
  type: keyof typeof iconMap;
}) {
  const Icon = iconMap[type];
  return (
    <div className="flex gap-4">
      <div className="border-lunar-white flex size-12 items-center justify-center rounded-full border-2">
        <Icon className="text-lunar-white" />
      </div>
      <div>
        <p className="subtitle">{label}</p>
        <p className="body-copy">{contactInfo}</p>
      </div>
    </div>
  );
}
