export default function Content({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className="w-full px-4">{children}</div>;
}
