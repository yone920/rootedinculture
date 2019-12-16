import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { animated } from 'react-spring'
import Close from '../SVGs/close'
// import styled from 'styled-components'

const Cart = ({ style }) => {
    const {  checkout, toggleCartOpen } = useContext(StoreContext)
    
    return (
        <animated.div 
        style={{ 
            position: "fixed",
            top: 0,
            right: 0,
            width:  "50%",
            height: "100%",
            background: "yellow",
            zIndex: 102,
            padding: "8rem",
            ...style 
            }}>
            <div>
                <div onClick={toggleCartOpen}><Close /></div>
                <h3>Cart</h3>
                {checkout.lineItems.map(item => (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.variant.price}</p>
                    </div>
                ))}
            </div>
        </animated.div>
    )
}


export default Cart 