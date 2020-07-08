import React from 'react'
import { graphql } from 'gatsby'
// import ProductsListingItem from '../components/ProductsListing/productsListingItem'
import ProductsListing from '../components/ProductsListing/productsListing'
import Layout from "../components/Layout/layout"
import styled from 'styled-components'


const CollectionTemplate = ( { data } ) => {
	// debugger
	// const [ shopifyCollection ] = data
	// console.log(data)

	return (
		<Layout>
			<ProductContainer>
				<ProductsListing collection={data}/>
			</ProductContainer>
		</Layout>
	)
}

const ProductContainer = styled.div`
		display: grid;
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
		/* grid-column-gap: 1rem;
		grid-row-gap: 6rem; */
	`

export const query = graphql`
				query($handle: String!) {
					shopifyCollection(handle: {eq: $handle}) {
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
							variants {
								id
								shopifyId
								title
								price
								weight
							}
						}
					}

				allShopifyCollection(filter: {handle: {ne: "flower-arrangement"}}) {
					edges {
						node {
							title
							handle
							id
							image {
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
				}
			}


        `

export default CollectionTemplate
