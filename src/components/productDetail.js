import React, { useState, useContext  } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import { StoreContext } from '../context/StoreContext'


const ProductDetail = ( {product} ) => {
    
    const [selectedVariant, setSelectedvariant] = useState(product.variants[0])
    const { client } = useContext(StoreContext)
    console.log(client);
    
    const addToCart = async variantId => {
        const newCheckout = await client.checkout.create()
        const lineItems = [
           {
                variantId: variantId.replace("Shopify__ProductVariant__", ""),
                quantity:  1,
            },
        ]
        const addItems = await client.checkout.addLineItems(
            newCheckout.id,
            lineItems
        )
        window.open(addItems.webUrl, "_blank")
    }
    // const mapOverImages = () => (
    //     product.images.map(image => (
    //         <div key={indexOf(image)}>
    //             {cons ole.log(image)
    //             }
    //             <Img fluid={image.localFile.childImageSharp.fluid} alt={image.title} />
    //         </div>
    //     ))
    // )

    // console.log(ShopifyBuy.UI);
    

    const ProductContainer = styled.main`
        display: grid;
        grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
        margin-top: 10rem;
    `

    const ImageWrapper = styled.div`
        grid-column: center-start / col-end 3;
    `
    const ContentWrapper = styled.div`
            grid-column: col-start 4 / center-end;
            margin-left: 8rem;
    `
    const ProductName = styled.div`

        h1 {
            color: ${props => props.theme.color.primary};
            font-size: ${props => props.theme.font.h1FontSize};
            text-transform: uppercase;
        }
    `
    const DescWrapper = styled.div`
        margin-top: 3rem;
    `
    const ProductVariant = styled.div`
    
    `
    
    return (
        <ProductContainer>
            <ImageWrapper>
                <Img fluid={product.images[0].localFile.childImageSharp.fluid} alt="wey" />
            </ImageWrapper>
            <ContentWrapper>
                <ProductName>
                    <h1>{product.title}</h1>
                    <p>{selectedVariant.price}</p>
                </ProductName>
                <ProductVariant>
                        <select 
                            onChange={e => {
                                const selected = product.variants.filter(variant => variant.sku ===  e.target.value)
                                setSelectedvariant(selected[0])
                            }} 
                            value={selectedVariant.sku}
                            
                            >

                            {product.variants.map(variant => (
                            <option key={variant.id} value={variant.sku}>{variant.title}</option>
                            ))}
                        </select>
                        <button onClick={() => addToCart(selectedVariant.id)}>Buy Now</button>
                </ProductVariant>
                <DescWrapper
                    // dangerouslySetInnerHTML={{
                    //     __html: product.descriptionHtml,
                    //   }} 
                >
                    <p>{product.description}</p>
                </DescWrapper>
            </ContentWrapper>
        </ProductContainer>
    )
}

export default withTheme(ProductDetail)