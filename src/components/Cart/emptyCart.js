import React from 'react'
import styled from 'styled-components'
import EmptyCartSvg from '../../images/svg/empty-cart-svgrepo-com.svg'

const EmptyCart = () => {
    return (
        <EmptyCartContainer>
            <img src={EmptyCartSvg} alt=""></img>
            <p>Opss Your Cart is Empty</p>
        </EmptyCartContainer>
    )
}

const EmptyCartContainer = styled.div`
    display: flex;
    position: relative;
    top: 18rem;
    left: 12rem;
    align-items: flex-end;
    p {
        color: #fff;
    }
    img {
        width: 8rem;
    }
    
`

export default EmptyCart;
