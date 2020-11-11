import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../images/white_logo_transparent.png"
import { Link } from "gatsby"
import SEO from "../components/seo"


const Intro = () => {

const data = useStaticQuery(graphql`
  query IntoPageData {
      introPageContent: wordpressPage(slug: {eq: "intro"}) {
          title
          content
          acf {
            into_photo {
              localFile {
                childImageSharp {
                    fluid(maxWidth: 1700) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
          }
            into_photo_mobile {
              localFile {
                childImageSharp {
                    fluid(maxWidth: 1700) {
                      ...GatsbyImageSharpFluid
                    }
                  }
              }
          }
            into_photo_tablet {
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
    }
`)



    const sources = [
      data.introPageContent.acf.into_photo.localFile.childImageSharp.fluid,
      {
        ...data.introPageContent.acf.into_photo_mobile.localFile.childImageSharp.fluid,
        media: `(max-width: 500px)`,
      },
      // {
      //   ...data.introPageContent.acf.into_photo_tablet.localFile.childImageSharp.fluid,
      //   media: `(max-width: 1000px)`,
      // },
    ]

   return (
      <IntroContainer>
        <SEO title="Welcome" />
        <StyledBackground
              Tag={`section`}
              className="hero"
              fluid={sources}
              backgroundColor={`#040e18`}
            >
          <HeroContentWrapper>
              <div className="logo-wrapper">
                <img src={Logo} alt="Rooted In Culture Logo"/>
              </div>
              <div className="hero-phrase"
                dangerouslySetInnerHTML={{
                  __html: data.introPageContent.content,
                }}
              />
              <div className="hero-button">
                <Link to="/home">Welcome</Link>
              </div>
          </HeroContentWrapper>
        </StyledBackground>

      </IntroContainer>
    )
}

const IntroContainer = styled.div`
    .hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100vh;
    }
		`

const StyledBackground = styled(BackgroundImage)`
	background-position: 50% 20%;
`

const HeroContentWrapper = styled.div`
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-left: 8rem;

    @media only screen and (max-width: 600px) {
        grid-column: 1 / 3;
        padding: 0 3rem;
    }


    .logo-wrapper {
        grid-column: 1 / 3;
        margin: 0 auto;
        width: 50%;
        img {
          width: 100%;
          @media only screen and (max-width: 600px) {
              width: 70%;
          }
        }

        @media only screen and (max-width: 600px) {
          width: 100%;
          align-self: start;
          padding-top: 3rem;
        }
    }

    .hero-phrase {
        grid-column: 1 / 3;
        align-self: start;
        justify-self: center;

        @media only screen and (max-width: 600px) {
            align-self: end;
        }

        p {
          color: #fff;
          text-align: center;
          font-size: 2rem;
          line-height: 3rem;
          font-weight: italic;

          @media only screen and (max-width: 600px) {
            font-size: 2rem;
            line-height: 3rem;
          }
        }
    }

    .hero-button {
        grid-column: 1 / 3;
        width: 50%;
        align-self: start;
        justify-self: center;

        @media only screen and (max-width: 600px) {
            align-self: center;
        }

        a {
          display: inline-block;
          width: 100%;
          background-color: #cf4a2c;
          text-align: center;
          padding: 1rem 1rem;
          text-decoration: none;
          color: white;
          text-transform: uppercase;
          border-radius: 1rem;
          :hover {
            background-color: white;
            color: #cf4a2c;
        }
     }
  }
`

export default Intro;