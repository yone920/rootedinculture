import React, {Fragment} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import { withTheme } from 'styled-components'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { useMediaQuery } from 'react-responsive'
import Service from '../components/service'


 const  Flowers = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })


  const data = useStaticQuery(graphql`
    query FlowerPageDataQuery {
      flowerPage: wordpressPage(slug: {eq: "flowers"}) {
        title
				content
        acf {
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
                  fluid(maxWidth: 1500, maxHeight: 1500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
        }
    }
		flowerServices: allWordpressWpFlowerServices {
			edges {
				node {
					id
					acf {
						photo {
							localFile {
								childImageSharp {
                  fluid(maxWidth: 1000, maxHeight: 1400) {
                    ...GatsbyImageSharpFluid
                  }
                }
							}
						}
						link
					}
					title
				}
			}
		}
  }
`)

const MapOverFlowerServices = () => (
  data.flowerServices.edges.map(node => (
    <Fragment key={node.node.id} >
      <Service service={node} />
    </Fragment>
  ))
)

  return (
    <Layout>
      <SEO title="Flowers" />

    {isTabletOrMobile ?
      <div className="hero-image">
        <Img
          fluid={data.flowerPage.acf.fp_hero_image_mobile.localFile.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          />
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
              __html: data.flowerPage.content,
            }}
          />
        </div>
				<div className="flower-services-wrapper">
					{MapOverFlowerServices()}
				</div>

      </FlowerContainer>

    </Layout>
  )
}

const FlowerContainer = styled.main`
  display: grid;
  grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];

  .flower_page_title_content_container {
      z-index: 1;
      position: absolute;
      width: 30%;
      right: 10%;
      top: 31%;
      /* grid-column: center-start / center-end; */

    @media ${props => props.theme.device.desktop} {
      top: 35%;
      width: 40%;
      right: 10%;
      width: 30%;
      /* background-color: green; */
    }
    @media ${props => props.theme.device.laptopL} {
      top: 30%;
      width: 40%;
      right: 6%;
      line-height: 1;
      /* background-color: orange; */
    }
    @media ${props => props.theme.device.laptop} {
      top: 27%;
      /* background-color: yellow; */
    }
    @media ${props => props.theme.device.tablet} {
      /* background-color: pink; */
      grid-column: center-start / center-end;
      position: initial;
      width: 90%;
      margin: 0 auto;
      margin-top: 10rem;

    }
    @media ${props => props.theme.device.mobileL} {
      /* background-color: purple; */
      width: 100%;
      margin-top: 8rem;
    }

    .flower_page_title {
      color: white;
      margin-bottom: 2rem;
      @media ${props => props.theme.device.tablet} {
        color: black;
        text-align: center;
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
		.flower-services-wrapper {
			grid-column: center-start / center-end;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			grid-column-gap: 2rem;
			grid-row-gap: 2rem;

			margin-top: 20rem;
			margin-bottom: 10rem;
      @media ${props => props.theme.device.tablet} {
				margin-top: 10rem;
      }
		}

`

export default withTheme(Flowers);