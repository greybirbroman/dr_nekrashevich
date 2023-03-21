const sectionListVariants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
  hidden: {
    opacity: 0,
    y: -1000,
  },
};
const sectionColsVariants = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "tween",

      dumping: 20,
    },
  }),
  hidden: {
    opacity: 0,
    x: -500,
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
      staggerChildren: 0.25,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export { sectionListVariants, sectionColsVariants, container, item };
