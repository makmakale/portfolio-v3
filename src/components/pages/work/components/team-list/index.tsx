import * as React from "react";
import { cn } from "@/lib/utils";
import { FaUsers } from "react-icons/fa";
import css from "./team-list.module.scss";

const TeamList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn(css.teamList, className)}>
      {children}
    </div>
  );
});
TeamList.displayName = "TeamList";

const TeamListItemChains = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn(css.chainWrapper, className)}>
      <div className={css.chains} />
      <div className={css.chains} />
    </div>
  );
});
TeamListItemChains.displayName = "TeamListItemChains";

const TeamListItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div className={css.listItem}>
      <TeamListItemChains className="left-[.1rem]" />
      <TeamListItemChains className="right-[.1rem]" />

      <div ref={ref} className={cn(css.contentWrapper, className)} {...props}>
        <div className={css.iconWrapper}>
          <FaUsers className={css.icon} />
        </div>
        {children}
      </div>
    </div>
  );
});
TeamListItem.displayName = "TeamListItem";

const TeamListItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn(css.content, className)}>
      {children}
    </div>
  );
});
TeamListItemContent.displayName = "TeamListItemContent";

const TeamListItemCount = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn(css.count, className)}>
      {children}
    </div>
  );
});
TeamListItemCount.displayName = "TeamListItemCount";

export { TeamList, TeamListItem, TeamListItemContent, TeamListItemCount };
