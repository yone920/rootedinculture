
import React from "react"
import Header from '../components/header'
import { withTheme } from 'styled-components'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
// import Reservation from '../components/reservation'
import CateringMenu from '../components/cateringMenu'

import HomeAboutLayout from "../components/HomeAboutLayout"
import SEO from "../components/seo"

const Catering = (props) => {
  
  const data = useStaticQuery(graphql`
  query PageCateringData {
    
    catering1: file(relativePath: {
      regex: "/rooted-catering-hero-2/"
    }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
   

       catMenus: allWordpressWpMenu(limit: 10, sort: {
          order: DESC,
          fields: [date]
      }) {
          edges {
              node {
                  title
                  slug
                  featured_media {
            localFile {
                          childImageSharp {
                              fluid(maxWidth: 1500, maxHeight: 1500, 
                                  duotone: {
                                  highlight: "#f00e2e",
                                  shadow: "#192550",
                                  opacity: 50
                                }) {
                                  ...GatsbyImageSharpFluid
                              } 
                          }
                      }
                  }
              }
          }
      }

      cateringContent:  wordpressPage(slug: {eq: "catering-home"}) {
        title
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`)


  // =============== Background Image ================= ///
    const backgroundFluidImageStack = [
      // data.cateringContent.featured_media.localFile.childImageSharp.fluid
      data.catering1.childImageSharp.fluid,
      `linear-gradient(180deg, rgba(64,76,7,1) 0%, rgba(64,76,7,0.3603816526610645) 45%, rgba(64,76,7,0.09147408963585435) 100%)`
    ].reverse()
    
    console.log(data)
  // ===============  Map Over Catering Menus ================= ///

    const mapOverCatMenus = () => (
      data.catMenus.edges.map(menu => (
        <div key={menu.node.slug}>
          <CateringMenu menu={menu} />
        </div>
        
      ))
    )


    // =============== Styled Components  ================= ///
    const CateringContainer = styled.main`
      display: grid;
      grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
      grid-template-rows: 70vh min-content;

      .hero {
        grid-column: full-start / full-end;
        position: cover !important;
        background-position: bottom center;
        background-size: cover;
        img {
        }
        header {
          background-color: transparent;
          .menu-1 {
        grid-column: col-start 1 / col-end 3;
        a,
        a:link,
        a:active {
           color: ${props => props.theme.color.white};
        }
    }

    .logo {
        grid-column: col-start 4 / col-end 5;
        img {
            width: 100%;
        }
    }

    .menu-2 {
        grid-column: col-start 6 / col-end 8;
        a,
        a:link,
        a:active {
          color: ${props => props.theme.color.white};
        }
      }
    }

      .hero-text {
        position: relative;
        top: 23rem;
        left: 15rem;
        h1 {
          color: ${props => props.theme.color.white};
          font-size: 12rem;
        }
      }
    }

    .flower-content {
      grid-column: center-start / center-end;
    }
    `

    const AboutAndMenuContainer = styled.main `
    grid-column: center-start / center-end;
    justify-items: center;
    `

    const MenuContainer = styled.div`
       display: grid;
       grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
       justify-content: center;
       grid-gap: .5rem;
       margin: 8rem 8rem;  
    `

    const AboutCatering = styled.div`
     
     margin: 8rem auto;
      width: 60%;
      text-align: center;
    `

    // --------------------- Final Render ---------------------- //

    return (
    <HomeAboutLayout>
      <SEO title="About Us" />
      <CateringContainer>
        <BackgroundImage
                Tag="div"
                className="hero"
                fluid={backgroundFluidImageStack}
                backgroundColor={`#040e18`}
                >
          <Header />
          <div className="hero-text">
              <h1>Catering</h1>
            </div>
          </BackgroundImage>
          
          <AboutAndMenuContainer>
            <AboutCatering 
              dangerouslySetInnerHTML={{
                __html: data.cateringContent.content,
              }} 
            />
            <MenuContainer>
              {mapOverCatMenus()}
            </MenuContainer>
          </AboutAndMenuContainer>
          </CateringContainer>
    </HomeAboutLayout> 
  )
}


export default withTheme(Catering)

