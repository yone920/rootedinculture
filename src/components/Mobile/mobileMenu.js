import React, { useContext, Fragment } from 'react'
import { animated } from 'react-spring'
import { StoreContext } from '../../context/StoreContext'
import styled from 'styled-components'
import Close from '../SVGs/close'
import { Link } from "gatsby"


const MobileMenu = ({ style }) => {

    const { toggleMobileMenu } = useContext(StoreContext)

    return (
        <Fragment>
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
                    <MobileMenuContainer>
                        <div onClick={toggleMobileMenu}>
                            <Close />
                        </div>
                        <MobileMenuWrapper>
                            <Link onClick={toggleMobileMenu} to="/"><h4>Home</h4></Link>
                            <Link  onClick={toggleMobileMenu} to="/about"><h4>About</h4></Link>
                            <Link onClick={toggleMobileMenu} to="/catering"><h4>Catering</h4></Link>
                            <Link onClick={toggleMobileMenu} to="/catering-shopping/featured"><h4>Shop</h4></Link>
                            <Link onClick={toggleMobileMenu} to="/archive"><h4>Blog</h4></Link>
                            <Link onClick={toggleMobileMenu} to="/contactPage"><h4>Contact Us</h4></Link>
                        </MobileMenuWrapper>
                    </MobileMenuContainer>
            </animated.div>
        </Fragment>
    )
}

const MobileMenuContainer =  styled.div`
    margin: 3rem;
`
const MobileMenuWrapper = styled.div`
    margin-top: 3rem;
    a {
        text-decoration: none;

				h4 {
        	color: #fff;
				}

        :hover {
            color: ${props => props.theme.color.secondary};
            text-decoration: underline;
            text-decoration-color: ${props => props.theme.color.fontColor};
        }
    }

    h4 {
        font-size: 6rem;
    }
`

export default MobileMenu;
