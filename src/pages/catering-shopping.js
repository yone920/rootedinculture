import React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import CateringSidebar from "../components/CateringSidebar/cateringSidebar"

// import ProductsListing from "../components/ProductsListing/productsListing"

const CateringShopping = () => {



return (
  <Layout>
    <FlowerContainer>
			<SEO title="Flower Decoration" />
			<div className="header-line-wrapper">
				<div className="blog-heading">
						<h2>Catering Shopping</h2>
				</div>
				<div className="line">
					<CateringSidebar />
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
