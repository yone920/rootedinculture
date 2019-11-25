import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Catering = () => (
  <Layout>
    <SEO title="Catering" />
    <h1>Catering</h1>
    <p>Welcome to Catering</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Catering
