import React, { useContext, Fragment } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { animated } from 'react-spring'
import Close from '../SVGs/close'
import styled from 'styled-components'
import CartList from '../Cart/cartList'
import EmptyCart from '../Cart/emptyCart'
import { useMediaQuery } from 'react-responsive'


const Cart = ({ style }) => {
    const {  checkout, toggleCartOpen } = useContext(StoreContext)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const qty = checkout.lineItems.reduce((total, item) => {
        return total + item.quantity
    }, 0)
    
    return (
        <Fragment>
            { isTabletOrMobile ? 
            <animated.div
            style={{ 
            position: "fixed",
            top: 0,
            right: 0,
            width:  "100%",
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
            : 
            <animated.div
                style={{ 
                position: "fixed",
                top: 0,
                right: 0,
                width:  "50%",
                height: "100%",
                background: "#404C07",
                zIndex: 102,
                overflowY: "scroll",
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
        }
        </Fragment>
    )
}

// const CartStyleDesktop = css`

// `
// const CartStyleMobile = css`
// transform: translateY(-3px);
// box-shadow: 0 1rem 2rem rgba(0, 0, 255,.2);
// `

const CardWrapper = styled.div` 
        h3 {
            color: white;
        }
`

const CloseCartDiv = styled.div`
    display: inline-block;
    position: relative;
    left: 3rem;
    top: 3rem;
    cursor: pointer;
`



export default Cart 