import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterWrapper>
           Rooted In Culture © {new Date().getFullYear()},
          {` `}
          Web Development - <a href="http://www.yonedesign.com">Yone Design</a>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    padding: 3rem;
    background-color: #433F40;
    text-align: center;
    color: rgba(255, 255, 255, 0.781);
    font-size: 1rem;
    a {
        color: rgba(255, 255, 255, 0.781);
        text-decoration: none;
        font-size: 1rem;
        :hover {
            color: rgba(255, 255, 255, 0.981);
        }
    }

`

export default Footer;