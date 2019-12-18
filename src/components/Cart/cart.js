import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { animated } from 'react-spring'
import Close from '../SVGs/close'
import styled from 'styled-components'
import CartItem from '../Cart/cartItem'

    

const Cart = ({ style }) => {
    // const { coupon, setCoupon } = useState('')
    const [ coupon, setCoupon ] = useState('')
    const {  checkout, toggleCartOpen, addCoupon } = useContext(StoreContext)
    // debugger
 
    const qty = checkout.lineItems.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    console.log(qty)
    

        
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
                {qty > 0 ?
                <div className="cart-container">
                    {checkout.lineItems.map(item => (
                        <div key={item.id}>
                            <CartItem item={item} />
                        </div>
                    ))}
                    <hr className="divider" />
                    <div className="total-price">
                        <p>Total Price: </p><p>${checkout.totalPrice}</p>
                    </div>
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            addCoupon(coupon)
                        }}>
                            <div className="coupon-label-div">
                                <label htmlFor="coupon" className="coupon-label">Coupon</label>
                            </div>
                            <input name="coupon" id="coupon" value={coupon} onChange={e => setCoupon(e.target.value)} type="text"/>
                            <button>Add Coupon</button>
                        </form>
                    </div>
                    <div>
                        <a className="check-out-button-div" href={checkout.webUrl}>Check Out Now</a>
                    </div>
                </div>
                :
                <div>
                    <p>Opss Cart is Empty</p>
                </div>

                }
            </CardWrapper>
        </animated.div>
    )
}

const CardWrapper = styled.div`
        
        h3 {
            color: white;
        }
        .close-cart {
            display: inline;
            position: relative;
            /* top: -3rem;
            left: -2rem; */
            width: 5rem;
            cursor: pointer;
        }
        .cart-container {
            padding: 7rem;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 4rem;


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
            .check-out-button-div {
                    display: inline-block;
                    width: 100%;
                    background-color: #5db544;
                    text-align: center;
                    padding: 1rem 1rem;
                    text-decoration: none;
                    color: white;
                    text-transform: uppercase;
                    border-radius: 1rem;
                    :hover {
                        background-color: white;
                        color: #5db544;
                    }
            }
        }
    `

export default Cart 