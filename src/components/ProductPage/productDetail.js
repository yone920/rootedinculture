import React, { useState  } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import AddToCart from '../Cart/addToCart'
import { Link } from "gatsby"


const ProductDetail = ( {product} ) => {

    const [selectedVariant, setSelectedvariant] = useState(product.variants[0])

    const mapOverImages = () => (
				product.images.map(image => {
					if (!image) {
						return null;
					}
					return (
						<div className="image-wrapper" key={image.localFile.childImageSharp.fluid.base64}>
							<Img fluid={image.localFile.childImageSharp.fluid} alt={image.title}  />
						</div>
					)
				})
				)
				const vendor = product.vendor.replace(/-/g, ' ');
				const Vendor = (str) => {
					str = str.toLowerCase().split(' ');

					for(var i = 0; i < str.length; i++){
						str[i] = str[i].split('');
						str[i][0] = str[i][0].toUpperCase();
						str[i] = str[i].join('');
					}
					return str.join(' ');
				}

  return (
    <ProductContainer>
			<div className="breadcrumbs">
				<Link to={`/catering-shopping/featured`}>
					Catering Shopping
				</Link>
				<span>/</span>
				<Link to={`/catering-shopping/${product.vendor}`}>
					{Vendor(vendor)}
				</Link>

			</div>
      {mapOverImages()}
			<div className="content-add-to-cart-wrapper">
				<div className="content-wrapper">
					<div className="product-name">
						<h1>{product.title}</h1>
					</div>
					<div className="product-price">
						<h3>${selectedVariant.price}</h3>
					</div>
					<div className="">
						{product.variants.length > 1 &&
							<select className="variant-select" onChange={e => {
								const selected = product.variants.filter(variant => variant.sku ===  e.target.value)
								setSelectedvariant(selected[0])
								}}
								value={selectedVariant.sku}>
								{product.variants.map(variant => (
								<option key={variant.id} value={variant.sku}>{variant.title}</option>
								))}
							</select>
								}
					</div>
					<div className="desc-wrapper">
							<p>{product.description}</p>
					</div>
				</div>
				<div className="add-to-cart-button">
					<AddToCart variantId={selectedVariant.shopifyId}/>
				</div>
			</div>
    </ProductContainer>
  )
}

const ProductContainer = styled.main`
  grid-column: center-start / center-end;

  display: grid;
	/* grid-row:  */
  grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
	margin-top: 2rem;
	margin-bottom: 20rem;


  @media ${props => props.theme.device.mobileL} {
    grid-template-columns: [ full-start ] minmax(2rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(2rem, 1fr) [ full-end ];
    margin: 4rem 0 6rem 0;
  }

	.breadcrumbs {
		grid-column: center-start / center-end;
		margin-bottom: 4rem;

		a,
		a:link,
		a:active {
			color: #676767;
			text-decoration: none;
		}
		a:hover {
			text-decoration: none;
			color: #000;
		}

		span {
			margin: 0 1rem;
		}
	}

  .image-wrapper {
    grid-column: center-start / col-end 4;
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-gap: .5rem;

    @media ${props => props.theme.device.laptop} {
     grid-column: center-start / center-end;
    }

    /* :first-child {
      grid-column: 1 / 4;
    } */
  }

  .content-add-to-cart-wrapper {
    grid-column: col-start 5 / center-end;
    margin-left: 5rem;
    display: grid;
    align-items: start;

    @media ${props => props.theme.device.laptop} {
        grid-column: center-start / center-end;
        margin: 5rem 0 0 0;
		}

		.content-wrapper {

			.product-name {
				margin-bottom: 1rem;

				h1 {
						color: #000;
						font-size: 2rem;
						text-transform: uppercase;
				}
			}

			.product-price {
				margin-bottom: 5rem;
					h3 {
						font-weight: 300;
					}
			}

				option {
						font-weight:normal;
				}
			}

			.variant-select {

			}

			.desc-wrapper {
				margin-top: 3rem;
			}
		}


    .add-to-cart-button {
      /* margin-top: 4rem; */
      align-self: end;

			@media ${props => props.theme.device.mobile} {
        margin-top: 4rem;
		}
    }

  }

`



export default withTheme(ProductDetail)