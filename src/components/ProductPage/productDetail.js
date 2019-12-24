import React, { useState  } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import AddToCart from '../Cart/addToCart'


const ProductDetail = ( {product} ) => {
    
    const [selectedVariant, setSelectedvariant] = useState(product.variants[0])
    
    const mapOverImages = () => (
        product.images.map(image => (
            <ItemWrapper key={image.localFile.childImageSharp.fluid.base64}>                
                <Img fluid={image.localFile.childImageSharp.fluid} alt={image.title}  />
            </ItemWrapper>
        ))
    )        


    return (
        <ProductContainer>
            <ImageWrapper>
                {mapOverImages()}
            </ImageWrapper>
            
            <ContentWrapper>
                <ProductName>
                    <h1>{product.title}</h1>
                </ProductName>
                <ProductPrice>
                    <h3>${selectedVariant.price}</h3>
                </ProductPrice>
                <ProductVariant>
                    {product.variants.length > 1 && 
                        <SelectVariant 
                            onChange={e => {
                                const selected = product.variants.filter(variant => variant.sku ===  e.target.value)
                                setSelectedvariant(selected[0])
                            }} 
                            value={selectedVariant.sku}>

                            {product.variants.map(variant => (
                            <option key={variant.id} value={variant.sku}>{variant.title}</option>
                            ))}
                        </SelectVariant>
                        }
                </ProductVariant>
                <DescWrapper>
                    <p>{product.description}</p>
                </DescWrapper>
                <AddToCartWrapper>
                    <AddToCart variantId={selectedVariant.shopifyId}/>
                </AddToCartWrapper>
            </ContentWrapper>
        </ProductContainer>
    )
}

const ProductContainer = styled.main`
grid-column: center-start / center-end;
display: grid;
grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
margin: 10rem 10rem;
`

const ImageWrapper = styled.div`
grid-column: center-start / col-end 4;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: .5rem;
`
const ItemWrapper = styled.div`
        :first-child {
            grid-column: 1 / 4;
        }

`
const ContentWrapper = styled.div`
    grid-column: col-start 5 / center-end;
    margin-left: 5rem;
    /* margin-top: 10rem; */
`
const ProductName = styled.div`
    h1 {
        color: #000;
        font-size: ${props => props.theme.font.h1FontSize};
        text-transform: uppercase;
    }
`
const ProductPrice = styled.div`
margin-bottom: 3rem;
    p {

    }
`
const DescWrapper = styled.div`
margin-top: 3rem;
`
const ProductVariant = styled.div`
    width: 20%;
`
const SelectVariant = styled.select`
    display: block;
	font-size: 1.5rem;
	font-family: sans-serif;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .3em 1.4em .3em .8em;
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .2em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    
    ::-ms-expand {
	    display: none;
    }

    :hover {
        border-color: #888;
    }

    :focus {
        border-color: #aaa;
        box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
        box-shadow: 0 0 0 3px -moz-mac-focusring;
        color: #222;
        outline: none;
    }

    option {
        font-weight:normal;
    }
`
const AddToCartWrapper = styled.div`
    margin-top: 4rem;
`

export default withTheme(ProductDetail)