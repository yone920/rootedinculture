import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
// import AddToCart from "../Cart/addToCart"
import styled from 'styled-components'
import PlusSvg from '../../images/svg/plus.svg'


const ProductsListingItem = ({ product }) => {

  const {
    images: [firstImage],
    // variants: [firstVariant],
  } = product

  return (
    <ProductItemContainer>
      <Link to={`/catering-shopping/${product.vendor}/${product.handle}`}>
        <div className="product-image">
					{ firstImage ?
          	<Img fluid={firstImage.localFile.childImageSharp.fluid} />
						:
						null
					}
          <div className="overlay">
              <div className="text"><img src={PlusSvg} alt="click to view post"></img></div>
          </div>
        </div>
      </Link>
			<div className="product-name-price-wrapper">
				<div className="product-name">
					<h4 className="title is-3">{product.title}</h4>
				</div>
				{/* <div className="product-price">
					<p>${firstVariant.price}</p>
				</div> */}
			</div>
      {/* <div className="add-to-cart-button">
        <AddToCart variantId={firstVariant.shopifyId} />
      </div> */}
    </ProductItemContainer>
  )
}

const ProductItemContainer = styled.div`

    /* background-color: #F5F5F5; */
    display: grid;

   .product-image {
        align-self: center;
        position: relative;

      :hover .overlay {
          opacity: 1;
      }

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;;
        height: 100%;
        left: 0;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: #cf4a2c9c;
        display: flex;
        justify-content: center;
        align-items: center;
      }
		}

		.product-name-price-wrapper {
			padding: 0 1rem;

			.product-name {
				padding: 0.5rem 0 2rem 0;

				p {
					font-size: 1.8rem;
				}
			}

			.product-price {
				padding-bottom: 1rem;

				p {
					font-weight: bold;
					/* font-style: italic; */
				}
			}
		}


    .add-to-cart-button {
      align-self: end;
    }
`


export default ProductsListingItem
