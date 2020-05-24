import React from 'react'
import ProductsListingItem from "./productsListingItem"
import styled from 'styled-components'
import CateringSidebar from "../../components/CateringSidebar/cateringSidebar"


const ProductsListing = ( {collection} ) => {


	return (
		<Container>
			<div className="header-products-wrapper">
				<div className="header-wrapper">
					<h2>{collection.title}</h2>
				</div>
				<div className="nav-products-wrapper">
					<div className="nav-wrapper"><CateringSidebar /></div>
					<div className="products-wrapper">
						{collection.products.map(product => (
							<ProductsListingItem key={product.id} product={product} />
						))}
					</div>
				</div>
			</div>
		</Container>
	)
}

	const Container = styled.div`
		grid-column: center-start / center-end;

		.header-products-wrapper {

			.header-wrapper {

			}

			.nav-products-wrapper {

				.nav-wrapper {

				}

				.products-wrapper {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
					grid-column-gap: 1rem;
					grid-row-gap: 6rem;
				}
			}

		}
	`

export default ProductsListing;