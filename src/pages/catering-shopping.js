import React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout/layout"
import ProductsListing from "../components/ProductsListing/productsListing"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"


const CateringShopping = () => {

	const { shopifyCollection } = useStaticQuery(
    graphql`
			query featuredCollection {
				shopifyCollection(handle: {eq: "featured"}) {
						title
						id
    				handle
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
							variants {
								id
								shopifyId
								title
								price
								weight
							}
						}
					}
			}
    `
  )

	return (
  <Layout>
    <FlowerContainer>
			<SEO title="Flower Decoration" />
			<div className="header-line-wrapper">
				<div className="featured-products-wrapper">
					<ProductsListing collection={shopifyCollection} />
				</div>
			</div>
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
			grid-column: center-start/center-end;
			justify-content: center;

			.blog-heading {
				text-align: center;
			}
		}

  `



export default CateringShopping;
