import clsx from "clsx";

export default function Link({
  href = "/",
  variant = "PRIMARY",
  color = "ACCENT",
  size = "MD",
  className = "",
  children = "CLICK HERE",
}: {
  href: string;
  variant?: "PRIMARY" | "SECONDARY";
  color?: "LIGHT" | "DARK" | "ACCENT";
  size?: "SM" | "MD";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={clsx(
        "font-heading font-1 border px-4 drop-shadow-2xl",
        {
          "py-3 text-base": size === "SM",
        },
        {
          "py-8 text-lg": size === "MD",
        },
        {
          "bg-lunar-white border-lunar-white text-black": color === "LIGHT",
        },
        {
          "text-lunar-white border-black bg-black": color === "DARK",
        },
        {
          "text-lunar-white border-lunar-accent bg-lunar-accent":
            color === "ACCENT",
        },
        { "bg-transparent": variant === "SECONDARY" },
        className,
      )}
      href={href}
    >
      {children}
    </a>
  );
}
