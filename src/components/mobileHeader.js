import React from 'react'
import styled from 'styled-components'
import Logo from "../images/white_logo_transparent.png"
import { Link } from "gatsby"


const MobileHeader = () => {
    return (
        <MobileMenuContainer>
            <LogoWrapper>
                <Link to="/">
                    <img src={Logo} alt="Rooted In Culture Logo"/>
                </Link>
            </LogoWrapper>
        </MobileMenuContainer>
    )
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
    grid-column: 1 / 4;
    margin-left: 2rem;
    img {
        width: 100%;
    }
`

export default MobileHeader
