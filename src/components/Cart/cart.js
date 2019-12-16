import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { animated } from 'react-spring'
import Close from '../SVGs/close'
import styled from 'styled-components'
import CartItem from '../Cart/cartItem'

const Cart = ({ style }) => {
    const {  checkout, toggleCartOpen } = useContext(StoreContext)
    console.log(checkout)
    const CardWrapper = styled.div`
        padding: 7rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 4rem;
        h3 {
            color: white;
        }
        .close-cart {
            display: inline;
            position: relative;
            top: -3rem;
            left: -2rem;
            width: 5rem;
            cursor: pointer;
        }
        .divider {
            color: white;
        }
        .total-price {
            display: grid;
            grid-template-columns: 1fr 1fr;
            p {
                font-size: 2rem;
                color: white;
            }
        }
    `

    return (
        <animated.div 
        style={{ 
            position: "fixed",
            top: 0,
            right: 0,
            width:  "30%",
            height: "100%",
            background: "#404C07",
            zIndex: 102,
            ...style 
            }}>
            <CardWrapper>
                <div className="close-cart" onClick={toggleCartOpen}><Close /></div>
                <h3>Cart</h3>
                {checkout.lineItems.map(item => (
                    <CartItem item={item} />
                ))}
                <hr className="divider" />
                <div className="total-price">
                    <p>Total Price: </p><p>${checkout.totalPrice}</p>
                </div>
            </CardWrapper>
        </animated.div>
    )
}


export default Cart 