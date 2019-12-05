import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { withTheme } from 'styled-components'


import Layout from "../components/layout"
import SEO from "../components/seo"
import "../stylesheet/main.scss"

const IndexPage = (props) => {

const data = useStaticQuery(graphql`
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

    heroImage: file(relativePath: {
      regex: "/rooted-in-culture-catering-1/"
    }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

     images: allFile (filter : { relativeDirectory: { eq: "homepage"} }) {
      nodes {
        id
        name
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
      }
      }
    }
    
  }
`)



// const data = useStaticQuery(graphql`
//   query PageDataQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           excerpt
//           frontmatter {
//             slug
//             title
//             date
//           }
//         }
//       }
//     }
//     file(relativePath: {
//       regex: "/DSC_2409/"
//     }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `)




const backgroundFluidImageStack = [
  data.heroImage.childImageSharp.fluid,
  `linear-gradient(180deg, rgba(211,76,1,1) 0%, rgba(211,76,1,0.7693452380952381) 24%, rgba(64,76,7,0.4248074229691877) 100%)`
].reverse()

  const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
    grid-template-rows: min-content min-content;

    .hero {
      grid-column: full-start / full-end;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 85vh;
      background-size: cover;
      background-position: bottom;
    }

    .services {
      grid-column: full-start / full-end;
      /* font-size:  font-size: ${props => props.theme.font.h1}; */

    }
  `

  return (
    <Layout>
      <SEO title="Home" />
        <HomeWrapper>
          <BackgroundImage
              Tag="section"
              className="hero"
              fluid={backgroundFluidImageStack}
              backgroundColor={`#040e18`}
            >
          <h2>gatsby-background-image</h2>
          </BackgroundImage>
          <div className="services">
            {console.log(data)}
            <h1>Hi people</h1>
            <Img fluid={data.images.nodes[3].childImageSharp.fluid} alt="" />
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/archive">Go to the Archive Page</Link>
          </div>
      </HomeWrapper>
    </Layout>
    )
  }

export default withTheme(IndexPage)
