import React from "react"
import { Link } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"

// Use below variant & motion.div wrapper for the same page transition across all routes
// otherwise define unique variant in each page using unique location pathname as key
// const globalPageTransitionVariant = {
//   enter: { x: "-100%" },
//   active: { x: 0, transition: { duration: 1, ease: "easeInOut" } },
//   leave: { x: "100%", transition: { duration: 0.5, ease: "easeOut" } },
// }

const ulVariant = { active: { transition: { staggerChildren: 0.15 } } }

const liVariant = {
  enter: { opacity: 0, y: 12, skewY: "3deg" },
  active: {
    opacity: 1,
    y: 0,
    skewY: "0deg",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const Layout = ({ children }) => (
  <>
    <nav>
      <div>
        <Link to="/">LOGO</Link>
      </div>

      <motion.ul variants={ulVariant} initial="enter" animate="active">
        <motion.li variants={liVariant}>
          <Link to="/" activeClassName="activeLink">
            Home
          </Link>
        </motion.li>
        <motion.li variants={liVariant}>
          <Link to="/about" activeClassName="activeLink">
            About
          </Link>
        </motion.li>
        <motion.li variants={liVariant}>
          <Link to="/contact" activeClassName="activeLink">
            Contact
          </Link>
        </motion.li>
      </motion.ul>
    </nav>

    <AnimatePresence exitBeforeEnter>
      {/* <motion.div
          key={path}
          variants={globalPageTransitionVariant}
          initial="enter"
          animate="active"
          exit="leave"
        > */}
      {children}
      {/* </motion.div> */}
    </AnimatePresence>

    <footer>Copyright {new Date().getFullYear()}</footer>
  </>
)

export default Layout
