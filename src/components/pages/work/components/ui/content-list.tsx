export default function ContentList({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <ul className="list-disc ml-3 space-y-0.5">{children}</ul>;
}
