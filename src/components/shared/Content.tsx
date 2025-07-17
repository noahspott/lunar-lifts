export default function Content({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
      {children}
    </div>
  );
}
