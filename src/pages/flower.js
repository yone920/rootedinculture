import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Flower = () => (
  <Layout>
    <SEO title="Flower Decoration" />
    <h1>Flower Decoration</h1>
    <p>Welcome to Flower Decoration page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Flower
