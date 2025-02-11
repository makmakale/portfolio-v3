export default function Logo() {
  const shadow = { size: "0.03rem", color: "hsl(var(--primary))" };

  return (
    <div
      className="font-teko text-[0.56rem] text-black/90 font-bold leading-none"
      style={{
        textShadow:
          // left bottom
          `-${shadow.size} ${shadow.size} ${shadow.color},` +
          // right bottom
          `${shadow.size} ${shadow.size} ${shadow.color},` +
          // left top
          `-${shadow.size} -${shadow.size} ${shadow.color},` +
          // right top
          `${shadow.size} -${shadow.size} ${shadow.color}`,
        // textShadow,
      }}
    >
      MakMakAle
    </div>
  );
}
