import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ProductsListingItem from "./productsListingItem"
import styled from 'styled-components'


const ProductsListing = (props) => {
    const data = useStaticQuery(graphql`
        query ProductsListingQuery {
            allShopifyProduct {
                edges {
                    node {
                    description
                    title
                    id
                    handle
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
            }
        `)

    const ProductContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 6rem;
    `

    return (
            <ProductContainer>
                {data.allShopifyProduct.edges.map(edge => (
                        <ProductsListingItem key={edge.node.id} product={edge.node} />
                ))}
            </ProductContainer>
    )
}

export default ProductsListing;