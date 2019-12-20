import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { animated } from 'react-spring'
import Close from '../SVGs/close'
import styled from 'styled-components'
import CartList from '../Cart/cartList'
import EmptyCart from '../Cart/emptyCart'
    

const Cart = ({ style }) => {
    const {  checkout, toggleCartOpen } = useContext(StoreContext)
 
    const qty = checkout.lineItems.reduce((total, item) => {
        return total + item.quantity
    }, 0)
    
    return (
        <animated.div
        style={{ 
            position: "fixed",
            top: 0,
            right: 0,
            width:  "50%",
            height: "100%",
            background: "#404C07",
            zIndex: 102,
            overflow: "scroll",
            ...style 
            }}>
            <CardWrapper>
                <CloseCartDiv onClick={toggleCartOpen}>
                    <Close />
                    <h3>Cart</h3>
                </CloseCartDiv>
                {qty > 0 ?
                <CartList />
                :
                <EmptyCart />
                }
            </CardWrapper>
        </animated.div>
    )
}

const CardWrapper = styled.div`
        
        h3 {
            color: white;
        }
        
        `

const CloseCartDiv = styled.div`
    display: inline;
    position: relative;
    left: 5rem;
    top: 3rem;
    /* width: 5rem; */
    cursor: pointer;
`

export default Cart 