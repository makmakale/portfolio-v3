import { cn } from "@/lib/utils";

export default function Keycap({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "relative size-[0.6rem] inline px-[.15rem] py-[.08rem]",
        "bg-gradient-to-b from-[#282828] to-[#202020]",
        "shadow-[inset_-0.08rem_0_0.08rem_rgba(0,0,0,0.15),inset_0_-0.08rem_0.08rem_rgba(0,0,0,0.25),0.1rem_0.2rem_0.25rem_rgba(0,0,0,0.4),0_0_0_0.02rem_rgba(0,0,0,0.75)]",
        "rounded-[0.1rem] overflow-hidden",
        "before:absolute before:top-[0.05rem] before:left-[0.04rem] before:bottom-[0.1rem] before:right-[0.08rem]",
        "before:bg-gradient-to-r before:from-[#232323] before:to-[#4a4a4a]",
        "before:shadow-[-0.05rem_-0.05rem_0.05rem_rgba(255,255,255,.25),0.1rem_0.05rem_0.1rem_rgba(0,0,0,0.15)]",
        "before:border-l before:border-l-[#0004]",
        "before:border-b before:border-b-[#0004]",
        "before:border-t before:border-t-[#0009]",
        "before:rounded-[0.08rem]",
        "flex justify-center items-center",
      )}
    >
      <span className="relative z-[1] text-white text-[0.16rem] opacity-75">
        {children}
      </span>
    </div>
  );
}
