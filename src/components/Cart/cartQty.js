import React, { Fragment } from "react"
import styled from 'styled-components'
import { withTheme } from 'styled-components'


 const CartQty = (props) => {

    const qty = props.items.reduce((total, item) => {
        return total + item.quantity
    }, 0)

return (
        <Fragment>
        {qty > 0 &&
            <QtyContainer>
                {qty}
            </QtyContainer>
        }
        </Fragment>
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

@media ${props => props.theme.device.laptop} {
    right: -2rem;
    top: 1rem;
  }
`
export default withTheme(CartQty);