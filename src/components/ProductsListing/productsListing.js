import React from 'react'
import ProductsListingItem from "./productsListingItem"
import styled from 'styled-components'
import CateringSidebar from '../CateringSIdebar/CateringSidebar'


const ProductsListing = ( {collection} ) => {

	console.log(collection)
  return (
    <Container>
			<div className= "nav-wrapper">
				<div className="nav-title-wrapper">
					<p>Catering Menu</p>
				</div>
				<div className="nav-wrapper">
					<CateringSidebar />
				</div>
			</div>
			<div className="products-header-wrapper">
				<div className="header-wrapper">
					<h2>{collection.title}</h2>
				</div>
				<div className="products-wrapper">
					{collection.products.map(product => (
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

		.nav-wrapper {
			padding-top: 2rem;

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
			}
		}


  `

export default ProductsListing;