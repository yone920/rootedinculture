import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import styled from 'styled-components'
import CartItem from '../Cart/cartItem'
import Coupon from './Coupon/coupon'

const CartList = () => {
    const { checkout } = useContext(StoreContext)
 
    return (
        <CartContainer>
            {checkout.lineItems.map(item => (
                <div key={item.id}>
                    <CartItem item={item} />
                </div>
            ))}
            <hr className="divider" />
            <div className="total-price">
                <p>Total Price: </p><p>${checkout.totalPrice}</p>
            </div>
            <Coupon />
            <div>
                <a className="check-out-button" href={checkout.webUrl}>Check Out Now</a>
            </div>
        </CartContainer>
    )
}

const CartContainer = styled.div`
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
    .check-out-button{
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

    ` 


export default CartList;