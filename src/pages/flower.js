import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsListing from "../components/productsListing"

const Flower = () => (
  <div>
    <Layout>
      <SEO title="Flower Decoration" />
      <h1>Flower Decoration</h1>
      <p>Welcome to Flower Decoration page</p>
      <ProductsListing />
      <Link to="/">Go back to the homepage</Link>
    </Layout>

  </div>
)

export default Flower
