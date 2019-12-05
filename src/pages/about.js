import React from "react"
import { Link } from "gatsby"
import { withTheme } from 'styled-components'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const theme = {
  main: "mediumseagreen"
};

const Header = styled.div`
  background-color: ${props => props.theme.color.primary};
  `



const About = (props) => (
  <Layout>
    <SEO title="About Us" />
    <Header>
      <h1>About Us</h1>
    </Header>
    <p>Welcome to About us</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default withTheme(About)
