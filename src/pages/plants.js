
import React from "react"
import { withTheme } from 'styled-components'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import ProductsListing from '../components/ProductsListing/productsListing'



const Plants = (props) => {

  const data = useStaticQuery(graphql`
  query PlantsData {
      plantsContent: wordpressPage(slug: {eq: "plants"}) {
          acf {
            plants_content
          }
          title
        }

			shippingInfo:	wordpressPage(slug: {eq: "shipping-info"}) {
					content
				}

      shopifyCollection(handle: {eq: "plants"}) {
          title
            products {
              description
              title
              id
              handle
              vendor
              images {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, maxHeight: 1500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }

            }
        }

    }`)


    // debugger

    // --------------------- Final Render ---------------------- //

  return (
    <Layout>
      <SEO title="Events | Rooted in Culture" />
      <PlantsContainer>
        <div className="content-title-wrapper">
          <div className="catering-title">
            <h2>{data.plantsContent.title}</h2>
          </div>
          <div className="content-wrapper"
            dangerouslySetInnerHTML={{
              __html: data.plantsContent.acf.plants_content,
            }}
          />
					<div className="shipping-info"
            dangerouslySetInnerHTML={{
              __html: data.shippingInfo.content,
            }}
          />
        </div>
        <div className="products-wrapper">
          <ProductsListing collection={data} parent={"arrangement"}/>
        </div>
     </PlantsContainer>
   </Layout>
  )
}


// =============== Styled Components  ================= ///
const PlantsContainer = styled.main`
display: grid;
grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
/* grid-template-rows: 70vh min-content; */
  @media ${props => props.theme.device.tablet} {
    margin-bottom: 8rem;
  }


  .content-title-wrapper {
    grid-column: center-start / center-end;
      @media ${props => props.theme.device.tablet} {
        grid-column: center-start / center-end;
        margin: 5rem 0;
      }

    .catering-title {
      margin-bottom: 2rem;
      /* margin: 3rem auto; */
      /* width: 60%; */
			text-align: center;

      @media ${props => props.theme.device.tablet} {
        width: 100%;

      }
    }

    .content-wrapper {
			line-height: 2;
      margin: 0 auto;
      width: 60%;
			text-align: center;

      @media ${props => props.theme.device.tablet} {
        width: 100%;
        margin-bottom: 3rem;
      }
    }

		.shipping-info {
			line-height: 2;
			margin-top: 3rem;
			text-align: center;
		}
  }

  .products-wrapper {
    grid-column: full-start / full-end;
    display: grid;
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
    /* grid-template-columns: 1fr 1fr; */
      @media ${props => props.theme.device.tablet} {
        grid-column: center-start / center-end;

      }
  }

`


export default withTheme(Plants)

