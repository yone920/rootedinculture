import React, { useContext } from 'react'
import styled from 'styled-components'
import { StoreContext } from "../../context/StoreContext"

 const CartItem = ({ item }) => {
    const { removeProductFromCart } = useContext(StoreContext)

    return (
            <CartItemsContainer key={item.id}>
                <h4>{item.title}</h4>
                <div className="quantiry-price-div">
                    <p>Quantity:</p>
                    <p>{item.quantity}</p>
                </div>
                <div className="quantiry-price-div">
                    <p>Price:</p>
                    <p>${item.variant.price}</p>
                </div>
                <button onClick={() => removeProductFromCart(item.id)} className="remove-item">Remove</button>
            </CartItemsContainer>
    )
}

const CartItemsContainer = styled.div`
        h4, p {
            color: white;
        }
        .quantiry-price-div {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .remove-item {
            text-transform: uppercase;
            text-decoration: none;
            padding: .5rem 2rem;
            display: inline-block;
            border-radius: .5rem;
            transition: all .2s;
            position: relative;
            font-size: 1rem;
            margin-top: 1rem;
            border: none;
            color: red;
            cursor: pointer;
        }
        .remove-item:hover {
            /* transform: translateY(-0.5px); */
            /* box-shadow: 0 1rem 2rem rgba(0, 0, 255,.2); */
            background-color: red;
            color: white;
        }
    `

export default CartItem;