import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import AddToCart from "../Cart/addToCart"

const ProductsListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
console.log(product.title)

  return (
    <article>
      <Link to={`/flower/${product.handle}`}>
        <Image fluid={firstImage.localFile.childImageSharp.fluid} />
        <h3 className="title is-3">{product.title}</h3>
        <p className="subtitle is-4">${firstVariant.price}</p>
      </Link>
      <AddToCart variantId={firstVariant.shopifyId} />
    </article>
  )
}

export default ProductsListingItem
