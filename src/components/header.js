import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/white_logo_transparent.png"

const Header = ({ siteTitle }) => (
  <header className="header">
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
        <Link to="/dinner">Dinner</Link>
        <Link to="/contact">Contact Us</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
