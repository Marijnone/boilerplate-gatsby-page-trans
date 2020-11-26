import React from "react"
import { motion } from "framer-motion"
import transition from "../pages/contact"
const homePageTransitionVariant = {
  enter: { opacity: 0 },
  active: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  leave: { opacity: 0, transition: { duration: 1.2, ease: "easeOut" } }
}

const h1Variant = {
  initial: { y: -100 },
  animate: {
    y: 0,
    transition: { delay: 0.1, duration: 1.1, ...transition }
  }
}

const pVariant = {
  initial: { y: 25 },
  animate: {
    y: 0,
    transition: { delay: 0.25, duration: 0.6, ...transition }
  }
}

const imgVariant = {
  initial: { y: 25 },
  animate: {
    y: 0,
    transition: { delay: 0.35, duration: 0.6, ease: "easeOut" }
  }
}

const HomePage = ({ location }) => (
  <motion.main
    key={location.pathname}
    variants={homePageTransitionVariant}
    initial="enter"
    animate="active"
    exit="leave"
  >
    <div className="h1-container">
      <motion.h1 variants={h1Variant} initial="initial" animate="animate">
        Hello World
      </motion.h1>
    </div>
    <motion.p variants={pVariant} initial="initial" animate="animate">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatem
      fuga adipisci iure tempore consequuntur facilis ut, vel cum incidunt
      debitis nulla possimus repudiandae consequatur! Velit fuga ullam
      perferendis.
    </motion.p>
    <motion.img
      variants={imgVariant}
      initial="initial"
      animate="animate"
      src="https://images.pexels.com/photos/1749057/pexels-photo-1749057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="hero image"
    />
  </motion.main>
)

export default HomePage
