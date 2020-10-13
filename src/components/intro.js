import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../images/white_logo_transparent.png"
import { Link } from "gatsby"



const Intro = () => {

    const data = useStaticQuery(graphql`
    query HeroImageQuery {

        cateringHero: file(relativePath: {
        regex: "/rooted-in-culture-hero-catering/"
        }) {
        childImageSharp {
            fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid
                }
            }
        }

    flowerHero: file(relativePath: {
        regex: "/rooted-in-culture-hero-flower/"
        }) {
        childImageSharp {
            fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid
                }
            }
        }

    flowerHeroMobile: file(relativePath: {
        regex: "/rooted-in-culture-hero-flower-mobile/"
        }) {
        childImageSharp {
            fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)



const sources = [
    data.cateringHero.childImageSharp.fluid,
    {
      ...data.flowerHeroMobile.childImageSharp.fluid,
      media: `(max-width: 491px)`,
    },
  ]

   return (
      <IntroContainer>
        <StyledBackground
              Tag="section"
              className="hero"
              fluid={sources}
              backgroundColor={`#040e18`}
            >
          <HeroContentWrapper>
              <div className="logo-wrapper">
                <img src={Logo} alt="Rooted In Culture Logo"/>
              </div>
              <div className="hero-phrase">
                <p>
                  <span>“Everything Nostalgic”</span><br />
                  <span>Creating authentic spaces,</span><br />
                  <span>with authentic people,</span><br />
                  <span>through unforgettable experiences,</span><br />
                  <span>rooted in culture!</span><br />
                </p>
              </div>
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
    grid-column: 1 / 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-left: 8rem;

    @media only screen and (max-width: 425px) {
        grid-column: 1 / 3;
        padding: 0 3rem;
    }


    .logo-wrapper {
        grid-column: 1 / 3;
        img {
            width: 100%;

            @media only screen and (max-width: 425px) {
                width: 70%;
            }
        }

        @media only screen and (max-width: 425px) {
            align-self: start;
            padding-top: 3rem;
        }
    }

    .hero-phrase {
        grid-column: 1 / 3;
        align-self: start;
        justify-self: center;

        @media only screen and (max-width: 425px) {
            align-self: end;
        }
        p {
            text-align: center;
            font-size: 2rem;
            line-height: 3rem;
            font-weight: italic;

            @media only screen and (max-width: 425px) {
                font-size: 2rem;
                line-height: 2rem;
            }

            span {
                display: inline-block;
                color: #fff;
                margin: 0.1rem;
                padding: 0 4rem;


                @media only screen and (max-width: 425px) {
                    background-color: transparent;
                    padding: 0 2rem;
                    color: #fff;
                }
            }
        }
    }

    .hero-button {
        grid-column: 1 / 3;
        width: 50%;
        align-self: start;
        justify-self: center;

        @media only screen and (max-width: 425px) {
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