import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from 'styled-components'
import { withTheme } from 'styled-components'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { useMediaQuery } from 'react-responsive'


 const  Flowers = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })


  const data = useStaticQuery(graphql`
    query FlowerPageDataQuery {
      flowerPage: wordpressPage(slug: {eq: "flowers"}) {
        title
        acf {
          fp_content
          fp_events
          fp_flower_arrangement
          fp_plants
          fp_plant_image {
            localFile {
                childImageSharp {
                  fluid(maxWidth: 1700) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          fp_hero_image {
            localFile {
                childImageSharp {
                  fluid(maxWidth: 1700) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          fp_hero_image_mobile {
            localFile {
                childImageSharp {
                  fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
          fp_events_image {
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
console.log(data)

  return (
    <Layout>
      <SEO title="Flowers" />

		{isTabletOrMobile ?
      <div className="hero-image">
        <Img fluid={data.flowerPage.acf.fp_hero_image_mobile.localFile.childImageSharp.fluid} />
      </div>
			:
      <div className="hero-image">
        <Img fluid={data.flowerPage.acf.fp_hero_image.localFile.childImageSharp.fluid} />
      </div>
			}

      <FlowerContainer>
        <div className="flower_page_title_content_container">
          <div className="flower_page_title">
            <h2>{data.flowerPage.title}</h2>
          </div>
          <div className="hero-content"
            dangerouslySetInnerHTML={{
              __html: data.flowerPage.acf.fp_content,
            }}
          />
        </div>

      </FlowerContainer>

    </Layout>
  )
}

const FlowerContainer = styled.main`
  display: grid;
  grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];

  /* .hero-image {
    grid-column: full-start / full-end;
  } */
  .flower_page_title_content_container {
      z-index: 1;
      position: absolute;
      width: 30%;
      right: 10%;
      top: 31%;
			/* grid-column: center-start / center-end; */

    @media ${props => props.theme.device.desktop} {
      top: 30%;
			width: 40%;
			right: 10%;
      width: 30%;
      /* background-color: green; */
    }
    @media ${props => props.theme.device.laptopL} {
      top: 25%;
			width: 40%;
			right: 6%;
      line-height: 1;
      /* background-color: orange; */
    }
    @media ${props => props.theme.device.laptop} {
      top: 23%;
      /* background-color: yellow; */
    }
    @media ${props => props.theme.device.tablet} {
      /* background-color: pink; */
			grid-column: center-start / center-end;
			position: initial;
			width: 70%;
			margin: 0 auto;
			margin-top: 12rem;

    }
    @media ${props => props.theme.device.mobileL} {
      /* background-color: purple; */
    }

    .flower_page_title {
      color: white;
      margin-bottom: 2rem;
    @media ${props => props.theme.device.tablet} {
      color: black;
    }
    }

    .hero-content {
      color: white;
      line-height: 2.1;
    @media ${props => props.theme.device.tablet} {
      color: black;
    }

    @media ${props => props.theme.device.laptopL} {
      line-height: 1.8;
    }
    }

  }

`

export default withTheme(Flowers);