"use client";

import * as React from "react";
import { FaMusic } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import css from "../header-menu.module.scss";

export default function MusicButton() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  React.useEffect(() => {
    const player = document.getElementById("media-player") as HTMLAudioElement;
    if (!player) return;

    player.load();
    if (isPlaying) {
      player.volume = 0.15;
      player.play();
    } else {
      player.pause();
    }
  }, [isPlaying]);

  return (
    <button
      className={cn(css.headerButton, "aspect-square")}
      onClick={handleClick}
    >
      {!isPlaying && (
        <div className="absolute w-full h-[.08rem] rotate-45 bg-secondary" />
      )}
      <FaMusic />
    </button>
  );
}
