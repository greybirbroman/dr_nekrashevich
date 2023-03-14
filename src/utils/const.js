 const educationText = 'Саратовский государственный медицинский университет им. В.И. Разумовского (стоматология)'
 const educationText2 = 'Саратовский государственный медицинский университет им. В.И. Разумовского (стоматология общей практики)'
 const textByXAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
      },
    }),
  };

 export {educationText, educationText2, textByXAnimation}