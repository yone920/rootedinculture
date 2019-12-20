import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const Contact = () => {

    
  return ( 
    <Layout>
    <SEO title="Contact Us" />
    <h1>Contact Us</h1>
    <p>Welcome to Contact Us page</p>

    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
}

export default Contact
