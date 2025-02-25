export default function DetailsTemplate({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <h3 className="font-bold text-[0.24rem] leading-loose">{title}</h3>

      {children}
    </div>
  );
}
