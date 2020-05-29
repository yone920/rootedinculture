import React from 'react'
import ProductsListingItem from "./productsListingItem"
import styled from 'styled-components'
import CateringSidebar from "./cateringSidebar"
// import CateringSidebarMobile from "./cateringSidebarMobile"
import { withTheme } from 'styled-components'
// import { useMediaQuery } from 'react-responsive'
// import { useStaticQuery, graphql } from "gatsby"


const ProductsListing = ( {collection} ) => {
	console.log(collection)
	// debugger
	// const { allShopifyCollection } = useStaticQuery(
  //   graphql`
	// 		query noName {
	// 			allShopifyCollection {
	// 				edges {
	// 					node {
	// 						title
	// 						handle
	// 					}
	// 				}
	// 			}
	// 		}
  //   `
	// )

	// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })


  return (
    <Container>
			<div className= "nav-wrapper">
				<div className="nav-title-wrapper">
					<p>Catering Menu</p>
				</div>
				<div className="nav-wrapper">
					<CateringSidebar data={collection}/>
					{/* {isTabletOrMobile ?
						<CateringSidebarMobile data={collection}/>
					:
						<CateringSidebar data={collection}/>
					} */}
				</div>
			</div>
			<div className="products-header-wrapper">
				<div className="header-wrapper">
					<h2>Featured</h2>
				</div>
				<div className="products-wrapper">
					{collection.shopifyCollection.products.map(product => (
						<ProductsListingItem key={product.id} product={product} />
					))}
				</div>
			</div>
    </Container>
  )
}

  const Container = styled.div`
    grid-column: center-start / center-end;
		display: grid;
		grid-template-columns: 1fr 4fr;

		@media ${props => props.theme.device.mobileL} {
			grid-template-columns: none;
    }

		.nav-wrapper {
			padding-top: 2rem;

			@media ${props => props.theme.device.mobileL} {
				margin-bottom: 3rem;
    	}

			.nav-title-wrapper {
				border-bottom: 0.1rem solid black;
				margin-right: 3rem;

				p {
					font-size: 1.4rem;
					font-weight: 100;
				}
			}
		}
		.products-header-wrapper {



			.header-wrapper {
				margin-bottom: 2rem;
			}

			.products-wrapper {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
				grid-column-gap: 1rem;
				grid-row-gap: 6rem;


			 @media ${props => props.theme.device.mobileL} {
				grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
				grid-row-gap: 3rem;
				}
			}
		}


  `

export default withTheme(ProductsListing);