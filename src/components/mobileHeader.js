import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import Logo from "../images/white_logo_transparent.png"
import styled from 'styled-components'
import { StoreContext } from '../context/StoreContext'
import Cart from '../components/Cart/cart'
import { useTransition } from 'react-spring'
import CartIcon from './SVGs/cartIcon'
import Qty from '../components/Cart/cartQty'
import Loader from "./loader"
import MobileMenu from './Mobile/mobileMenu'
import MobMenuSVG from './SVGs/mobMenu'


const MobileHeader = ({ siteTitle }) => {

    const {  isCartOpen, toggleCartOpen, checkout, toggleMobileMenu, isMobileMenuOpen } = useContext(StoreContext)

    const  transitions = useTransition(isCartOpen, null, {
      from: { transform: 'translate3d(100%, 0, 0)' },
      enter: { transform: 'translate3d(0, 0, 0)' },
      leave: { transform: 'translate3d(100%, 0, 0)' }
    })

    const  menuTransitions = useTransition(isMobileMenuOpen, null, {
        from: { transform: 'translate3d(-100%, 0, 0)' },
        enter: { transform: 'translate3d(0, 0, 0)' },
        leave: { transform: 'translate3d(-100%, 0, 0)' }
      })

    return (
        <MobileMenuContainer>
            <MenuIconWrapper onClick={toggleMobileMenu}>
                <MobMenuSVG />
            </MenuIconWrapper>
            <LogoWrapper>
                <Link to="/">
                    <img src={Logo} alt="Rooted In Culture Logo"/>
                </Link>
            </LogoWrapper>
            <CartIconWrapper onClick={toggleCartOpen}>
                <div className="cart-qty">
                    <Qty items={checkout.lineItems}/>
                </div>
                <div className="cart-icon" >
                    <CartIcon />
                </div>
            </CartIconWrapper>
            {transitions.map(({ item, key, props }) => {
                return item && <Cart key={key} style={props} />
            })}
            {menuTransitions.map(({ item, key, props }) => {
                return item && <MobileMenu key={key} style={props} />
            })}
            <Loader />
        </MobileMenuContainer>
    )
}

MobileHeader.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  MobileHeader.defaultProps = {
    siteTitle: ``,
  }

const MobileMenuContainer = styled.div`
    grid-column: full-start / full-end;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 10vh;
    justify-items: center;
    align-items: center;

    background-color: #D34C01;
`
const LogoWrapper = styled.div`
    grid-column: 2 / 5;
    /* margin-left: 2rem; */
    img {
        width: 100%;
    }
`
const CartIconWrapper = styled.div`
    grid-column: 6 / -1;
`
const MenuIconWrapper = styled.div`
    grid-column: 1 / 2;
`

export default MobileHeader
