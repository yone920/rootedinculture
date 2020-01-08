import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import AddToCart from "../Cart/addToCart"
import styled from 'styled-components'
import PlusSvg from '../../images/svg/plus.svg'


const ProductsListingItem = ({ product }) => {

  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product

  return (
    <ProductItemContainer>
      <Link to={`/flower/${product.handle}`}>
        <div className="product-image">
          <Img fluid={firstImage.localFile.childImageSharp.fluid} />
          <div class="overlay">
              <div class="text"><img src={PlusSvg} alt="click to view post"></img></div>
          </div>
        </div>
      </Link>
      <ProductTitleDiv>
        <h3 className="title is-3">{product.title}</h3>
      </ProductTitleDiv>
      <ProductPrice>
        <p>${firstVariant.price}</p>
      </ProductPrice>
      <AddToCart variantId={firstVariant.shopifyId} />
    </ProductItemContainer>
  )
}

const ProductItemContainer = styled.main`
    background-color: #F5F5F5;
    
   .product-image {
        align-self: center;
        position: relative;

        :hover  .overlay {
            opacity: 1;
        }
        
        .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .5s ease;
            background-color: #cf4a2c9c;
            display: flex;
            justify-content: center;
            align-items: center;

            .text {
            }
            }

    }
`
const ProductTitleDiv = styled.div`
  padding: 1rem 0 1rem 0;
`
const ProductPrice = styled.div`
  padding-bottom: 1rem;

  p {
    font-size: 1.7rem;
    font-weight: bold;
    font-style: italic;
  }
`

export default ProductsListingItem
