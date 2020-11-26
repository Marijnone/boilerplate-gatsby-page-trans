import React from "react"
import { motion } from "framer-motion"

const contactPageTransitionVariant = {
  enter: { opacity: 0 },
  active: { opacity: 1 },
  leave: { opacity: 0 }
}

const ContactPage = ({ location }) => (
  <motion.main
    key={location.pathname}
    variants={contactPageTransitionVariant}
    initial="enter"
    animate="active"
    exit="leave"
  >
    <h1>Contact Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </motion.main>
)

export default ContactPage
