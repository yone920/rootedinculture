import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import Logo from "../images/white_logo_transparent.png"
import styled, { css } from 'styled-components'
import { StoreContext } from '../context/StoreContext'
import Cart from '../components/Cart/cart'
import { useTransition } from 'react-spring'
import CartIcon from './SVGs/cartIcon'

/// ============== CSS Style for the menu link ================ ///
export const menuLink = css`
        margin-right: 3rem;
        text-transform: uppercase;
        text-decoration: none;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: $default-font-size;
        border: none;
        cursor: pointer;
        color: #fff;
        // margin-right: 5rem;
        justify-content: space-between;
        letter-spacing: .2rem;
`

/// ============== Header Element ================ ///
const HeaderWrapper = styled.header`
  grid-column: full-start / full-end;
    background-color: #D34C01;
    display: grid;
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
    grid-template-rows: 10vh min-content;
    justify-items: center;
    align-items: center;
    padding: 2rem 0;
    column-gap: 1rem;
    /* color: #fff; */
    .menu-1 {
        grid-column: col-start 1 / col-end 3;
        a,
        a:link,
        a:active {
           ${menuLink}
        }
    }

    .logo {
        grid-column: col-start 4 / col-end 5;
        img {
            width: 100%;
        }
    }

    .menu-2 {
        grid-column: col-start 6 / col-end 8;
        a,
        a:link,
        a:active {
          ${menuLink}
        }
    }

    .cart-icon {
      position: relative;
      right: 2rem;
      top: 0.5rem;
      cursor: pointer;
     
    }
`


const Header = ({ siteTitle }) => {

  const {  isCartOpen, toggleCartOpen } = useContext(StoreContext)
  const  transitions = useTransition(isCartOpen, null, {
    from: { transform: 'translate3d(100%, 0, 0)' },
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(100%, 0, 0)' }


  })
  return (
    
    <HeaderWrapper>
      <div className="menu-1">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/catering">Catering</Link>
      </div>
      <div className="logo">
          <img src={Logo} alt="Rooted In Culture Logo"/>
      </div>
      <div className="menu-2">
          <Link to="/flower">Flower</Link>
          <Link to="/archive">Blog</Link>
          <Link to="/contact">Contact Us</Link>
      </div>
      <div className="cart-icon" onClick={toggleCartOpen}>
        <CartIcon />
      </div>
      {transitions.map(({ item, key, props }) => {
        return item && <Cart key={key} style={props} />
      })}
      </HeaderWrapper>


     
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
