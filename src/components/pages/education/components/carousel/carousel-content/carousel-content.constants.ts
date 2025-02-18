export const animateTitle = {
  initial: {
    y: 180,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    y: -180,
    opacity: 0.2,
    transition: { duration: 0.5 },
  },
};

export const animateDescription = {
  initial: {
    y: 180,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 },
  },
  exit: {
    y: -180,
    opacity: 0.2,
    transition: { duration: 0.5, delay: 0.1 },
  },
};
