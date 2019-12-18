import React from "react"
import styled from 'styled-components'


 const CartQty = ({ items }) => {

    const qty = items.reduce((total, item) => {
        return total + item.quantity
    }, 0)

return (
        <>
        {qty > 0 &&
            <QtyContainer>
            {qty}
            </QtyContainer>
        }
        </>
)
}

const QtyContainer = styled.div`
color: white;
background-color: #404C07;
position: relative;
right: -3rem;
top: -1.5rem;
height: 2rem;
width: 2rem;
line-height: 2rem;
text-align: center;
border-radius: 50%;
font-size: 1.2rem;
`


export default CartQty;