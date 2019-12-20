import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import AddToCart from "../Cart/addToCart"
import styled from 'styled-components'


const ProductsListingItem = ({ product }) => {

  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product

  return (
    <ProductItemContainer>
      <Link to={`/flower/${product.handle}`}>
        <Image fluid={firstImage.localFile.childImageSharp.fluid} />
      </Link>
      <ProductTitleDiv>
        <h3 className="title is-3">{product.title}</h3>
      </ProductTitleDiv>
      <ProductPrice>
        <p className="subtitle is-4">${firstVariant.price}</p>
      </ProductPrice>
      <AddToCart variantId={firstVariant.shopifyId} />
    </ProductItemContainer>
  )
}

const ProductItemContainer = styled.main`

`
const ProductTitleDiv = styled.div`
  padding: 1rem 0 1rem 0;
`
const ProductPrice = styled.div`
  padding-bottom: 1rem;
`

export default ProductsListingItem
