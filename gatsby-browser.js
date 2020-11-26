import React from "react"

import "./src/styles/styles.scss"

import Layout from "./src/components/Layout.component"

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
