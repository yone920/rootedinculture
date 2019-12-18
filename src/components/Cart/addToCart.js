import React, { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"


const AddToCart = ({ variantId }) => {
  const { addProductToCart } = useContext(StoreContext)

  const handleClick = () => {
    addProductToCart(variantId)
  }

  return (
    <button
      className=""
      onClick={handleClick}
    >
      Add To Cart
    </button>
  )
}

export default AddToCart