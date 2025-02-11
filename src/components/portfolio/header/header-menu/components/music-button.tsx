"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaMusic } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import css from "../header-menu.module.scss";

export default function MusicButton() {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.volume = 0.15;
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <button
        ref={btnRef}
        className={cn(css.headerButton, "aspect-square")}
        onClick={handleClick}
      >
        {!isPlaying && (
          <div className="absolute w-full h-[.08rem] rotate-45 bg-secondary" />
        )}
        <FaMusic />
      </button>
      <audio ref={audioRef} loop autoPlay>
        <source src={"/music/bg-music.mp3"} type="audio/mp3" />
      </audio>
    </>
  );
}
