import { FaInfo } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import css from "@/components/portfolio/header/header-menu/header-menu.module.scss";

export default function InfoButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={cn(css.headerButton, "aspect-square")}>
          <FaInfo />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-[12rem]">
        <DialogHeader>
          <DialogTitle>Portfolio Info</DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-1">
          <p>
            Inspired by <b>Zenless Zone Zero</b>:
          </p>
          <Button variant="link" asChild>
            <Link
              href="https://zenless.hoyoverse.com/ru-ru"
              target="_blank"
              rel="noopener noreferrer"
              className="italic"
            >
              https://zenless.hoyoverse.com
            </Link>
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
