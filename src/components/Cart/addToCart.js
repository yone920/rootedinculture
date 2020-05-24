import React, { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import styled from 'styled-components'
import { withTheme } from 'styled-components'



const AddToCart = ({ variantId }) => {
  const { addProductToCart } = useContext(StoreContext)

  const handleClick = () => {
    addProductToCart(variantId)
  }

  return (
    <Button
      className=""
      onClick={handleClick}
    >
      Add To Cart
    </Button>
  )
}

const Button = styled.button`
  display: inline-block;
  width: 100%;
  background-color: ${props => props.theme.color.secondary};
  text-align: center;
  padding: 2rem 2rem;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  border-radius: .5rem;
  cursor: pointer;
  :hover {
      background-color: ${props => props.theme.color.primary};
      /* color: #5db544; */
  }
`


export default withTheme(AddToCart)