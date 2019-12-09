import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { withTheme } from 'styled-components'
import SvgArrowDown from '../components/svgArrowDown'

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../stylesheet/main.scss"

const IndexPage = (props) => {


// =============== Query ================= ///
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
      regex: "/rooted-in-culture-hero/"
    }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    catering1: file(relativePath: {
      regex: "/rooted-in-culture-catering/"
    }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    flower: file(relativePath: {
      regex: "/rooted-in-culture-flower1/"
    }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    dinner: file(relativePath: {
      regex: "/rooted-in-culture-dinner-party1/"
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



// =============== Background Image ================= ///
const backgroundFluidImageStack = [
  data.heroImage.childImageSharp.fluid,
  `linear-gradient(180deg, rgba(211,76,1,1) 0%, rgba(211,76,1,0.7693452380952381) 24%, rgba(64,76,7,0.4248074229691877) 100%)`
].reverse()


// =============== Style ================= ///
  const HomeWrapper = styled.div`
    display: grid;
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
    grid-template-rows: min-content min-content;

    .hero {
      grid-column: full-start / full-end;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 75vh 10vh;
     .hero-text {
      display: flex;
      justify-content: left;
      align-items: center;
      h1 {
        color: ${props => props.theme.color.white};
        display: flex;
        flex-direction: column;
        position: relative;
        left: 17rem;
        font-size: 6rem;
        padding-top: 22rem;
        .hero-rooted {
          position: relative;
          top: 6rem;
        }
        .hero-in {
          color: ${props => props.theme.color.black};
          z-index: 1;
        }
        .hero-culture {
          position: relative;
          bottom: 12rem;
          font-size: 12rem;
        }
      }
     }
     .hero-down-arrow {
       justify-self: center;
       cursor: pointer;
     }
    }
  `
/// =============== Services Section Wrapper Style ================= ///
  const ServicesWrapper = styled.div`
    grid-column: full-start / full-end;
      /* font-size:  font-size: ${props => props.theme.font.h1}; */
      display: grid;
      grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
      justify-content: center;
      padding: 15rem 0;
  `

/// ========= Button Style ========== ///
const buttonStyle = css`
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 7rem;
    display: inline-block;
    border-radius: 1rem;
    transition: all .2s;
    position: relative;
    font-size: $default-font-size;
    margin-top: 3rem;
    border: none;
    cursor: pointer;
`
const buttonHover = css`
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 255,.2);
`
const buttonSpan = css`
  font-size: 1.5rem;
`

/// ======= Featured Services CSS ======== ///

/// =============== Services Section Style ================= ///


  const Services = styled.div`
    grid-column: center-start / center-end;
    
    .catering-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .cat-image-1 {
        padding: 2rem 0 2rem 2rem;
        position: relative;
        /* bottom:150px; */
        left: 30px;
        img {
          width: 80%;
        }
      }
      .cat-box-1 {
        background-color: ${props => props.theme.color.secondary};
        .cat-box-1-inner {
          padding: 7rem;
          padding-top: 10rem;
          h6 {
            font-size: ${props => props.theme.font.microHeadingH6};
            color: ${props => props.theme.color.white};
            position: relative;
            top: 1rem;
          }
          h4 {
            font-size: ${props => props.theme.font.h4FontSize};
          }
          p {
            color: ${props => props.theme.color.white};
          }
          button {
            ${buttonStyle}
            span {
              ${buttonSpan}
            }
          }
          button:hover {
            ${buttonHover}
          }
        }
      }
  }


  .flower-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .flower-box {
      background-color: ${props => props.theme.color.primary};
      .flower-box-inner {
        padding: 7rem;
          padding-top: 10rem;
          h6 {
            font-size: ${props => props.theme.font.microHeadingH6};
            color: ${props => props.theme.color.white};
            position: relative;
            top: 1rem;
          }
          h4 {
            font-size: ${props => props.theme.font.h4FontSize};
          }
          p {
            color: ${props => props.theme.color.white};
          }
          button {
            ${buttonStyle}
            span {
              ${buttonSpan}
            }
          }
          button:hover {
            ${buttonHover}
          }
    }
  }
  .flower-image {
    padding: 2rem 2rem 2rem 0;
        position: relative;
        /* bottom:150px; */
        right: 30px;
        img {
          width: 80%;
        }
  }
  }

  .dinner-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .dinner-image {
        padding: 2rem 0 2rem 2rem;
        position: relative;
        /* bottom:150px; */
        left: 30px;
        img {
          width: 80%;
        }
      }

      .dinner-box {
        background-color: ${props => props.theme.color.secondary};
        .dinner-box-inner {
          padding: 7rem;
          padding-top: 10rem;
          h6 {
            font-size: ${props => props.theme.font.microHeadingH6};
            color: ${props => props.theme.color.white};
            position: relative;
            top: 1rem;
          }
          h4 {
            font-size: ${props => props.theme.font.h4FontSize};
          }
          p {
            color: ${props => props.theme.color.white};
          }
          button {
            ${buttonStyle}
            span {
              ${buttonSpan}
            }
          }
          button:hover {
            ${buttonHover}
          }
        }
      }
  }
  }
  `




// =============== Render ================= ///
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
            <div className="hero-text">
              <h1>
                <span className="hero-rooted">Rooted</span>
                <span className="hero-in">In</span>
                <span className="hero-culture">Culture</span>
              </h1>
            </div>
            <div className="hero-down-arrow">
              <Link to="#check">
                <SvgArrowDown />
              
              </Link>
            </div>
          </BackgroundImage>
          <ServicesWrapper id="check">
            <Services>

              <div className="catering-wrapper">
                <div className="cat-image-1">
                  <Img fluid={data.catering1.childImageSharp.fluid} alt="" />
                </div>
                <div className="cat-box-1">
                  <div className="cat-box-1-inner">
                    <h6>Rooted In Culture</h6>
                    <h4>Catering</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, lectus hendrerit neque leo aliquet sagittis, nec, tristique tortor. Diam eu arcu nunc, potenti. Tellus cursus non ipsum pretium habitasse orci turpis. Quam convallis sit sed lacus. Ullamcorper iaculis sed eu proin erat.
                    </p>
                    <Link to="/catering">
                    <button ><span>Catering</span></button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flower-wrapper">
                <div className="flower-box">
                  <div className="flower-box-inner">
                    <h6>Rooted In Culture</h6>
                    <h4>Catering</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, lectus hendrerit neque leo aliquet sagittis, nec, tristique tortor. Diam eu arcu nunc, potenti. Tellus cursus non ipsum pretium habitasse orci turpis. Quam convallis sit sed lacus. Ullamcorper iaculis sed eu proin erat.
                    </p>
                    <Link to="/flower">
                    <button ><span>Flowers</span></button>
                    </Link>
                  </div>
                </div>
                <div className="flower-image">
                  <Img fluid={data.flower.childImageSharp.fluid} alt="" />
                </div>
              </div>

              <div className="dinner-wrapper">
                <div className="dinner-image">
                  <Img fluid={data.dinner.childImageSharp.fluid} alt="" />
                </div>
                <div className="dinner-box">
                  <div className="dinner-box-inner">
                    <h6>Rooted In Culture</h6>
                    <h4>Catering</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, lectus hendrerit neque leo aliquet sagittis, nec, tristique tortor. Diam eu arcu nunc, potenti. Tellus cursus non ipsum pretium habitasse orci turpis. Quam convallis sit sed lacus. Ullamcorper iaculis sed eu proin erat.
                    </p>
                    <Link to="/dinner">
                    <button ><span>Dinner</span></button>
                    </Link>
                  </div>
                </div>
              </div>

            </Services>
            
          </ServicesWrapper>
      </HomeWrapper>
    </Layout>
    )
  }

export default withTheme(IndexPage)
