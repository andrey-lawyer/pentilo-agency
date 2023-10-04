export const fadeInUp = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: custom => ({
    opacity: 1,
    y: 0,
    transition: {
      //   staggerChildren: 0.3,
      //   type: 'spring',
      //   stiffness: 35,
      delay: custom,
    },
  }),
};
