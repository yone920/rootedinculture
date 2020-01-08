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
        <div className="header-line-wrapper">
              <div className="blog-heading">
                  <h2>Flower Decoration</h2>
              </div>
              <div className="line">
                <hr />
              </div>
          </div>
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
  
    @media ${props => props.theme.device.mobileL} {
      grid-template-columns: [ full-start ] minmax(2rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(2rem, 1fr) [ full-end ];
    }

    .header-line-wrapper { 
        grid-column: center-start / center-end;
        text-align: center;
        margin-bottom: 2rem;
        grid-column: center-start / center-end;
        display: flex;
        flex-direction: column;
        justify-items: center;
        padding: 0 0 2rem 0;

        .blog-heading {
          grid-column: full-start / full-end;
          text-align: center;
      }

      .line {
        width: 25rem;
        margin: 1rem auto;

          hr {
            border: 0;
            height: 1px;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
          }
      }
    }
  `
  const FlowerContentWrapper = styled.div`
    grid-column: center-start / center-end;
  `
  

export default Flower
