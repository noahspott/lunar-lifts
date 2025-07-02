export default function Content({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}
