import { cn } from "@/lib/utils";
import css from "./time-photo-card.module.scss";
import TimeDisplay from "./time-display";

type TimePhotoCardProps = {
  className?: string;
  children?: React.ReactNode;
};

export const TimePhotoCard = ({
  className,
  children,
  ...props
}: TimePhotoCardProps) => {
  return (
    <div {...props} className={cn(css.card, className)}>
      {children}
    </div>
  );
};

export const TimePhotoCardTimeBox = ({
  className,
  children,
  ...props
}: TimePhotoCardProps) => {
  return (
    <div {...props} className={cn(css.cardTimeBox, className)}>
      {children}
    </div>
  );
};

export const TimePhotoCardTimeContent = ({
  className,
  ...props
}: TimePhotoCardProps) => {
  return (
    <div {...props} className={cn(css.cardTimeContent, className)}>
      <TimeDisplay />
    </div>
  );
};

export const TimePhotoCardImageBox = ({
  className,
  children,
  ...props
}: TimePhotoCardProps) => {
  return (
    <div {...props} className={cn(css.cardImageBox, className)}>
      <div className={cn(css.cardImageBoxGradient, className)}>
        <div className={cn(css.imageWrapper, className)}>
          <div className={cn(css.imageInnerWrapper, className)}>{children}</div>
        </div>
      </div>
    </div>
  );
};
