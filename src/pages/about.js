import React from "react"
import Header from '../components/header'
import Member from '../components/member'
import { withTheme } from 'styled-components'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'


import HomeAboutLayout from "../components/Layout/HomeAboutLayout"
import SEO from "../components/seo"

const About = (props) => {
  
  const data = useStaticQuery(graphql`
  query PageAboutData {
    
        allWordpressWpMembers {
        edges {
          node {
            title
            id
            acf {
              full_name
              role
              photo {
                source_url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, maxHeight: 1500) {
                      ...GatsbyImageSharpFluid
                    } 
                  }
                }
              }
            }
          }
        }
      }
   
      aboutContent:  wordpressPage(slug: {eq: "about"}) {
        title
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`)


    /// ============= Map over Members =============== ////
    const mapOverMembers = () => (
      data.allWordpressWpMembers.edges.map(node => (
        <MembersDiv key={node.node.id}>
          <Member  member={node} />
        </MembersDiv>

      ))
    )

  // =============== Background Image ================= ///
    const backgroundFluidImageStack = [
      data.aboutContent.featured_media.localFile.childImageSharp.fluid
    ].reverse()


    return (
    <div>
    <HomeAboutLayout>
      <SEO title="About Us" />
      <AboutContainer>
        <BackgroundImage
                Tag="div"
                className="hero"
                fluid={backgroundFluidImageStack}
                backgroundColor={`#040e18`}
                >
          <Header />
          </BackgroundImage>
          <AboutContent>
            <h2>{data.aboutContent.title}</h2>
            <div className="flower-content"
              dangerouslySetInnerHTML={{
                __html: data.aboutContent.content,
              }}
            />
          </AboutContent>
          <OurTeam>
            <h2>Our Team</h2>
            <MembersWrapper>
              {mapOverMembers()}
            </MembersWrapper>
          </OurTeam>
      </AboutContainer>
    </HomeAboutLayout>
    </div>
  )
}

  // =============== Styled Components  ================= ///
  const AboutContainer = styled.main`
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
       color: ${props => props.theme.color.black};
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
          color: ${props => props.theme.color.black};
        }
          }
        }
      }

    .flower-content {
      grid-column: center-start / center-end;
    }
  `


const AboutContent = styled.div`
  grid-column: center-start / center-end;
  display: flex;
  flex-direction: column;
    h2 {
      text-align: center;
      margin: 8rem 8rem;
      font-size: ${props => props.theme.font.h2FontSize};
    }
    p {
      margin-bottom: ${props => props.theme.margin.pMargin};
    }
    `

const OurTeam = styled.div`
    grid-column: center-start / center-end;
    h2 {
        text-align: center;
        margin: 8rem 8rem;
        font-size: ${props => props.theme.font.h2FontSize};
    }
`

const MembersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  margin-bottom: 5rem;
  h2 {
        text-align: center;
        margin: 8rem 8rem;
        font-size: ${props => props.theme.font.h2FontSize};
    }
`
const MembersDiv = styled.div`

`


export default withTheme(About)
