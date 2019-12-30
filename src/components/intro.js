import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../images/white_logo_transparent.png"
import { Link } from "gatsby"



const Intro = () => {

    const data = useStaticQuery(graphql`
    query HeroImageQuery {

        flowerHero: file(relativePath: {
        regex: "/rooted-in-culture-hero-catering/"
        }) {
        childImageSharp {
            fluid(maxWidth: 1700) {
            ...GatsbyImageSharpFluid
                }
            }
        }

        cateringHero: file(relativePath: {
            regex: "/rooted-in-culture-hero-flower/"
            }) {
            childImageSharp {
                fluid(maxWidth: 1700) {
                ...GatsbyImageSharpFluid
                    }
                }
            }
    }
`)


// =============== Background Image ================= ///
// const backgroundFluidImageStack = [
//   data.cateringHero.childImageSharp.fluid
// ].reverse()

const sources = [
    data.cateringHero.childImageSharp.fluid,
    {
      ...data.flowerHero.childImageSharp.fluid,
      media: `(max-width: 491px)`,
    },
  ]

   return (
        <IntroContainer>
            <BackgroundImage
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
                            “Everything Nostalgic” <br />
                            Creating authentic spaces,<br />
                            with authentic people,<br />
                            through unforgettable experiences,<br />
                            rooted in culture!
                        </p>   
                    </div>
                    <div className="hero-button">
                        <Link to="/home">Welcome</Link>
                    </div>
                </HeroContentWrapper>
            </BackgroundImage>
        </IntroContainer>
    ) 
}

const IntroContainer = styled.div`
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100vh; */

    .hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 100vh;
    }
    `

const HeroContentWrapper = styled.div`
    grid-column: 1 / 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-left: 8rem;

    p {
        color: #fff;
    }

    .logo-wrapper {
        grid-column: 1 / 3;
        img {
            width: 100%;
        }
    }

    .hero-phrase {
        grid-column: 1 / 3;
        align-self: start;
    }

    .hero-button {
        align-self: start;
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