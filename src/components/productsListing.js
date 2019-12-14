import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'


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
                              fluid(maxWidth: 1500) {
                                ...GatsbyImageSharpFluid
                              } 
                            }
                          }
                    }
                    variants {
                        id
                        title
                        price
                        weight
                            }
                        }
                    }
                }
            }
        `)

        const mapOverProducts = () => (
            data.allShopifyProduct.edges.map(edge => (
                <div key={edge.node.id}>
                    <Link to={`./flower/${edge.node.handle}`}>
                        <h2>{edge.node.title}</h2> 
                    </Link>
                </div>
            )
        )
    )

    return (
            <div>
                {mapOverProducts()}
            </div>
    )
}

export default ProductsListing;
