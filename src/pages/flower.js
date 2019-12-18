import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'


import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import ProductsListing from "../components/ProductsListing/productsListing"

const Flower = () => {
  const FlowerContainer = styled.main`

    display: grid;
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];

  `
  const FlowerContentWrapper = styled.div`
    grid-column: center-start / center-end;
  `

return (
  <Layout>
    <FlowerContainer>
      <FlowerContentWrapper>
        <SEO title="Flower Decoration" />
        <h1>Flower Decoration</h1>
        <p>Welcome to Flower Decoration page</p>
        <ProductsListing />
        <Link to="/">Go back to the homepage</Link>
      </FlowerContentWrapper>
      </FlowerContainer>
    </Layout>
)
}

export default Flower
