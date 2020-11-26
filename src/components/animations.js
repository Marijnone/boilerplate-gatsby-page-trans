// A much nicer easing used like: ...transition
export const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

export const homePageTransitionVariant = {
  enter: { opacity: 0 },
  active: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  leave: { opacity: 0, transition: { duration: 1.2, ease: "easeOut" } }
}

const contactPageTransitionVariant = {
  enter: { opacity: 0 },
  active: { opacity: 1 },
  leave: { opacity: 0 }
}
