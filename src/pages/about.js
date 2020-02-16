import React from "react"
import Header from '../components/header'
import MobileHeader from '../components/mobileHeader'
import Member from '../components/member'
import { withTheme } from 'styled-components'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
// import BackgroundImage from 'gatsby-background-image'
import { useMediaQuery } from 'react-responsive'
import Img from "gatsby-image"


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
              fluid(maxWidth: 2000, maxHeight: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

     firstParagraph: wordpressPage(slug: {eq: "about"}) {
        acf {
          first_paragraph
        }
      }

      secondParagraph: wordpressPage(slug: {eq: "about"}) {
        acf {
          second_paragraph
        }
      }

      nicholeFamilyPhoto: wordpressPage(slug: {eq: "about"}) {
        acf {
          image_2 {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }

     nicholeStandingPhoto: wordpressPage(slug: {eq: "about"}) {
        acf {
          image_1 {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }`)


    /// ============= Map over Members =============== ////
    const mapOverMembers = () => (
      data.allWordpressWpMembers.edges.map(node => (
        <div className="single-member" key={node.node.id}>
          <Member member={node}/>
        </div>

      ))
    )

  // =============== Background Image ================= ///
    // const backgroundFluidImageStack = [
    //   data.aboutContent.featured_media.localFile.childImageSharp.fluid
    // ].reverse()

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })


    return (
    <div>
    <HomeAboutLayout>
      <SEO title="About Us" />
      <div className="about-menu"> </div>
        { isTabletOrMobile ? <MobileHeader /> : <Header  /> }
      <div className="about-header">
        <Img fluid={data.aboutContent.featured_media.localFile.childImageSharp.fluid} />
      </div>
      <AboutContainer>
          <div className="about-content">
            <h2>{data.aboutContent.title}</h2>
            <div className="first-paragraph-nichole-family">
              <div className="first-paragprah-content"
                dangerouslySetInnerHTML={{
                  __html: data.firstParagraph.acf.first_paragraph,
                }}
              />
              <div className="nichole-family-photo">
                <Img fluid={data.nicholeFamilyPhoto.acf.image_2.localFile.childImageSharp.fluid} />
              </div>
            </div>
            <div className="second-paragraph-nichole-portrait">
              <div className="nichole-photo">
                <Img fluid={data.nicholeStandingPhoto.acf.image_1.localFile.childImageSharp.fluid} />
              </div>
              <div className="second-paragprah-content"
                dangerouslySetInnerHTML={{
                  __html: data.secondParagraph.acf.second_paragraph,
                }}
              />
            </div>
          </div>

          <div className="our-team">
             <h2>Our Team</h2>
             <div className="member-wrapper">
             {mapOverMembers()}
             </div>
          </div>
      </AboutContainer>
    </HomeAboutLayout>
    </div>
  )
}

  // =============== Styled Components  ================= ///
  const AboutContainer = styled.main`
  display: grid;
  grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
  /* grid-template-rows: min-content min-content min-content; */

    .about-menu {
      grid-column: full-start / full-end;
    }

    .about-header {
      grid-column: full-start / full-end;
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



    .flower-content {
      grid-column: center-start / center-end;
    }

  .about-content {
    grid-column: center-start / center-end;
    width: 80%;
    margin: 0 auto;

    @media ${props => props.theme.device.mobileL} {
      width: 100%;
    }
    /* grid-row: 1 / 2; */
    /* display: flex; */
    /* flex-direction: column; */
      h2 {
        text-align: center;
        margin: 8rem 8rem;
        font-size: ${props => props.theme.font.h2FontSize};

        @media ${props => props.theme.device.mobileL} {
          margin: 3rem 0;
        }
      }
      p {
        margin-bottom: ${props => props.theme.margin.pMargin};
      }

      .first-paragraph-nichole-family {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 7rem;

        @media ${props => props.theme.device.mobileL} {
          grid-column-gap: 3rem;
        }
        /* margin: auto; */
        /* width: 80%; */
        .first-paragprah-content {
          grid-column: 1 / 3;
          margin-bottom: 5rem;

          @media ${props => props.theme.device.mobileL} {
            margin-bottom: 3rem;
          }
        }
        .nichole-family-photo {
          grid-column: 1 / 3;
          z-index: 100;
        }
      }

      .second-paragraph-nichole-portrait {
          margin: 8rem auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 5rem;

          @media ${props => props.theme.device.mobileL} {
            margin: 3rem auto;
          }
          /* margin: auto; */
          .nichole-photo {
            grid-column: 1 / 2;
            width: 100%;

            @media ${props => props.theme.device.mobileL} {
              grid-column: 1 / 3;
              order: 2;
            }
            @media ${props => props.theme.device.tablet} {
              grid-column: 1 / 3;
              order: 2;
            }
          }
          .second-paragprah-content {
            grid-column: 2 / 3;

            @media ${props => props.theme.device.mobileL} {
              grid-column: 1 / 3;
              order: 1;
              margin-bottom: 3rem;
            }
            @media ${props => props.theme.device.tablet} {
              grid-column: 1 / 3;
              order: 1;
              margin-bottom: 3rem;
            }
          }
        }
  }

  .our-team {
    grid-column: center-start / center-end;
    /* grid-row: 2 / 3; */
    h2 {
        text-align: center;
        margin: 8rem 8rem;
        font-size: ${props => props.theme.font.h2FontSize};
    }

		.member-wrapper {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			grid-gap: 2rem;
			margin-bottom: 5rem;
			h2 {
						text-align: center;
						margin: 8rem 8rem;
						font-size: ${props => props.theme.font.h2FontSize};
				}
		}
 }


  `


export default withTheme(About)
