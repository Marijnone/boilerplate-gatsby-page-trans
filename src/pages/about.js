import React from "react"
import { motion } from "framer-motion"

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

const aboutPageTransitionVariant = {
  enter: { opacity: 0 },
  active: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  leave: { opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }
}

const h1Variant = {
  initial: { x: "-100%" },
  animate: {
    x: 0,
    transition: { delay: 0.1, duration: 0.6, ..transition }
  }
}

const pVariant = {
  initial: { x: -20 },
  animate: {
    x: 0,
    transition: { delay: 0.14, duration: 0.6, ...transition }
  }
}

const AboutPage = ({ location }) => (
  <motion.main
    key={location.pathname}
    variants={aboutPageTransitionVariant}
    initial="enter"
    animate="active"
    exit="leave"
  >
    <div className="h1-container">
      <motion.h1 variants={h1Variant} initial="initial" animate="animate">
        About Us
      </motion.h1>
    </div>
    <motion.p variants={pVariant} initial="initial" animate="animate">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
      exercitationem magni odio ab praesentium iste fuga.
    </motion.p>
  </motion.main>
)

export default AboutPage
