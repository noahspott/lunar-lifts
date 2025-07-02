// Lib
import clsx from "clsx";

// Types
import type { LucideProps } from "lucide-react";
import { Children } from "react";

export default function LinkButton({
  href = "/",
  variant = "PRIMARY",
  color = "ACCENT",
  size = "MD",
  className = "",
  isButton = false,
  type,
  onClick = () => {},
  Icon,
  children = "CLICK HERE",
}: {
  href?: string;
  variant?: "PRIMARY" | "SECONDARY";
  color?: "LIGHT" | "DARK" | "ACCENT";
  size?: "SM" | "MD";
  className?: string;
  isButton?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  Icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  children: React.ReactNode;
}) {
  const classes = clsx(
    "font-heading font-1 border drop-shadow-2xl select-none hover:cursor-pointer text-center uppercase",
    {
      "py-3 px-4 text-base": size === "SM",
    },
    {
      "py-4 px-8 text-lg": size === "MD",
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
    {
      "bg-transparent text-lunar-white":
        variant === "SECONDARY" && color === "LIGHT",
    },
    className,
  );

  const ChildrenAndIcon = (
    <span className="flex items-center justify-center gap-2">
      {Icon && <Icon className="size-4.5" />}
      {children}
    </span>
  );

  return !isButton ? (
    <a className={classes} href={href}>
      {Icon ? ChildrenAndIcon : children}
    </a>
  ) : (
    <button type={type} onClick={(event) => onClick(event)} className={classes}>
      {Icon ? ChildrenAndIcon : children}
    </button>
  );
}
