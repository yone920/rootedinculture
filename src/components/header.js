import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/white_logo_transparent.png"
import styled from 'styled-components'

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

    &__menu-1 {
        grid-column: col-start 1 / col-end 3;
        a,
        a:link,
        a:active {
            @include menuLink;
        }
    }

    &__logo {
        grid-column: col-start 4 / col-end 5;
        img {
            width: 100%;
        }
    }

    &__menu-2 {
        grid-column: col-start 6 / col-end 8;
        a,
        a:link,
        a:active {
            @include menuLink;
        }
    }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div className="header__menu-1">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/catering">Catering</Link>
    </div>
    <div className="header__logo">
        <img src={Logo} alt="Rooted In Culture Logo"/>
    </div>
    <div className="header__menu-2">
        <Link to="/flower">Flower</Link>
        <Link to="/archive">Blog</Link>
        <Link to="/contact">Contact Us</Link>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
