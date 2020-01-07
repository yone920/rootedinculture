import React from "react"
import styled from 'styled-components'


import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import ProductsListing from "../components/ProductsListing/productsListing"

const Flower = () => { 

return (
  <Layout>
    <FlowerContainer>
        <SEO title="Flower Decoration" />
        <HeaderContainer>
          <h2>Flower Decoration</h2>
        </HeaderContainer>
      <FlowerContentWrapper>
        <ProductsListing />
      </FlowerContentWrapper>
    </FlowerContainer>
  </Layout>
)
}

  const FlowerContainer = styled.main`
    display: grid;
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
  `
  const FlowerContentWrapper = styled.div`
    grid-column: center-start / center-end;
  `
  const HeaderContainer = styled.div`
    grid-column: center-start / center-end;
    margin: 3rem 0 8rem 0;
  `

export default Flower
