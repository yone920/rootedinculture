
import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
// import { StoreContext, client } from '../../context/StoreContext'

import * as theme from '../../config/theme'

import Header from "../header"
// import "./layout.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          nab
        }
      }
    }
  `)

  const Wrapper = styled.div`
    min-height: calc(100vh - 50px);
    display: grid;
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
    grid-template-rows: min-content  min-content;
  `

  const Footer = styled.div`
    text-align: center;
    background-color: #000;
  `
  
  const Main = styled.main`
    grid-column: full-start / full-end;
  `
  
  return (
    // <StoreContext.Provider value={{ client }}>
    <Fragment>
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata.nab} />
          <Main>
            <ThemeProvider theme={theme}>
              {children}
            </ThemeProvider>
          </Main>
        </Wrapper>
        <Footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="http://www.yonedesign.com">YoneDesign</a>
        </Footer>
        </Fragment>
      // </StoreContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
