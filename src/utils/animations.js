const sectionListVariants = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
    },
  }),
  hidden: {
    opacity: 0,
    x: -100,
  },
};
const sectionColsVariants = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
  hidden: {
    opacity: 0,
    x: -100,
  },
};

const container = {
  hidden: { opacity: 0, x: '100vh'},
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.20,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export { sectionListVariants, sectionColsVariants, textVariant, container, item };
