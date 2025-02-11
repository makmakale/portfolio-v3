import Link from "next/link";
import BouncyText from "@/components/animations/bouncy-text";
import DownloadButtonAnimation from "@/components/portfolio/footer/components/download-button/download-button.animation";

export default function FooterDownloadBtn() {
  if (!process.env.NEXT_PUBLIC_RESUME_LINK) return null;

  return (
    <Link
      href={process.env.NEXT_PUBLIC_RESUME_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[3.84rem] h-[1.01rem] group"
    >
      <BouncyText
        text="Click!"
        className="absolute left-[2.92rem] top-[-0.15rem] uppercase leading-none -skew-x-6"
      />

      <div className="absolute inset-0 rounded-tl-[.2rem] rounded-br-[.2rem] overflow-hidden">
        <DownloadButtonAnimation>Download</DownloadButtonAnimation>
      </div>
    </Link>
  );
}
