"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const convertToString = (value: number): string =>
  value.toString().padStart(2, "0");

export default function DetailsPagination() {
  const [page, setPage] = React.useState(1);
  const total = 1;

  const handlePrevPage = () => {
    const newPage = page - 1;
    setPage(newPage < 1 ? 1 : newPage);
  };
  const handleNextPage = () => {
    const newPage = page + 1;
    setPage(newPage > total ? total : newPage);
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if (total === 0) return null;

  return (
    <div
      className={cn(
        "absolute bottom-[0.25rem] left-1/2",
        "border-[0.04rem] border-black rounded-full",
        "bg-[#323232] h-[0.6rem] w-[3rem]",
        "flex justify-between items-center gap-2",
      )}
    >
      <Button
        variant="pagination"
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        <HiChevronLeft className="stroke-2" />
      </Button>
      <div className="font-semibold font-dela">
        {convertToString(page)} / {convertToString(total)}
      </div>
      <Button
        variant="pagination"
        onClick={handleNextPage}
        disabled={page === total}
      >
        <HiChevronRight className="stroke-2" />
      </Button>
    </div>
  );
}
