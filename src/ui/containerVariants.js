const containerVariants = {
  hidden: { 
    right: 0,
  },
  visible: {
    roght: -100,
    transition: { duration: .6,},
  },
  exit: {
    right: 0,
    transition: { duration: .6, ease: 'easeIn' },
  }
}

export default containerVariants;