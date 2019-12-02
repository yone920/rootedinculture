import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../stylesheet/main.scss"

const IndexPage = (props) => {

useStaticQuery(graphql`
  query PageDataQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            slug
            title
            date
          }
        }
      }
    }
  }
`)

  return (
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/archive">Go to the Archive Page</Link>
        {/* {console.log(props.data.allMarkdownRemark)} */}
      </Layout>
    )
  }

export default IndexPage
