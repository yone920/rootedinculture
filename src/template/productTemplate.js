import React from 'react'
import ProductDetail from '../components/ProductPage/productDetail'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'


const ProductTemplate = ( { data } ) => {
    
    
    return (
        <Layout>   
            <ProductDetail product={ data.shopifyProduct }/>
        </Layout>
    )
}

export const query = graphql`
        query ProductQuery($handle: String!) {
            shopifyProduct(handle: {eq: $handle}) {
                id
                title
                images {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1000, maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                      } 
                    }
                  }
                }
                publishedAt(formatString: "YYYY")
                description
                descriptionHtml
                variants {
                  sku
                  id
                  shopifyId
                  title
                  price
                }
            }
        }
        `

export default ProductTemplate
