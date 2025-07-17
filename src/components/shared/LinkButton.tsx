// Lib
import clsx from "clsx";

// Types
import type { LucideProps } from "lucide-react";

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
  ariaLabel,
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
  ariaLabel: string;
}) {
  const baseStyles =
    "font-heading font-1 border-2 drop-shadow-2xl select-none hover:cursor-pointer text-center uppercase hover:scale-[1.02] transition-all duration-100 active:scale-[0.98]";

  const sizeStyles = {
    SM: "py-3 px-4 text-base",
    MD: "py-4 px-8 text-lg",
  };

  const colorStyles = {
    LIGHT: "bg-lunar-white border-lunar-white text-black",
    DARK: "text-lunar-white border-black bg-black",
    ACCENT: "text-lunar-white border-lunar-accent bg-lunar-accent",
  };

  const secondaryOverride =
    variant === "SECONDARY" && color === "LIGHT"
      ? "bg-transparent text-lunar-white"
      : "";

  const classes = clsx(
    baseStyles,
    size && sizeStyles[size],
    color && colorStyles[color],
    secondaryOverride,
    className,
  );

  const ChildrenAndIcon = (
    <span className="flex items-center justify-center gap-2">
      {Icon && <Icon className="size-4.5" />}
      {children}
    </span>
  );

  return !isButton ? (
    <a className={`${classes}`} href={href} aria-label={ariaLabel}>
      {Icon ? ChildrenAndIcon : children}
    </a>
  ) : (
    <button
      type={type}
      onClick={(event) => onClick(event)}
      className={classes}
      aria-label={ariaLabel}
    >
      {Icon ? ChildrenAndIcon : children}
    </button>
  );
}
