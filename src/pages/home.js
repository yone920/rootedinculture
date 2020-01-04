import React, {Fragment} from "react"
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
// import BackgroundImage from 'gatsby-background-image'
import { withTheme } from 'styled-components'
// import SvgArrowDown from '../components/svgArrowDown'
import Layout from "../components/Layout/layout"
import Service from '../components/service'
import SEO from "../components/seo"
import HomeSlider from '../components/HomeSlider'
import "../stylesheet/main.scss"

const IndexPage = (props) => {
// =============== Query ================= ///
const data = useStaticQuery(graphql`
  query PageDataQuery {

    heroImage: file(relativePath: {
      regex: "/rooted-in-culture-hero/"
    }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    homeContent: wordpressPage(slug: {eq: "fun-innovative-badass"}) {
      title
      content
      acf {
        phrase
      }
    }

    services: allWordpressWpServices {
      edges {
        node {
          id
          acf {
            body
            button
            link
            sub_heading
            photo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, maxHeight: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          title
        }
      }
    }   
  }
`)


// =============== Background Image ================= ///
// const backgroundFluidImageStack = [
//   data.heroImage.childImageSharp.fluid,
//   `linear-gradient(180deg, rgba(211,76,1,1) 0%, rgba(211,76,1,0.7693452380952381) 24%, rgba(64,76,7,0.4248074229691877) 100%)`
// ].reverse()
 

const MapOverServices = () => (
  data.services.edges.map(node => (
    <Fragment key={node.node.id} >
    {console.log(node)}
      <Service service={node} />
    </Fragment>
  ))
)


// =============== Render ================= ///
  return (
    <Layout>
      <SEO title="Home" />
        <SliderContainer>
            <HomeSlider />
          </SliderContainer>
        <HomeWrapper>
          {/* <BackgroundImage
              Tag="section"
              className="hero"
              fluid={backgroundFluidImageStack}
              backgroundColor={`#040e18`}
            >
            <div className="hero-text">
              <h1>
                <span>Rooted</span>
                <span>In</span>
                <span>Culture</span>
              </h1>
              
            </div>
            <div className="hero-down-arrow">
              <Link to="home/#check">
                <SvgArrowDown />  
              </Link>
            </div>
          </BackgroundImage> */}

          <HomePageContentWrapper id="check">
            <h1>{data.homeContent.acf.phrase}</h1>
            <HomeContent 
              dangerouslySetInnerHTML={{
                __html: data.homeContent.content,
              }} 
            />
          </HomePageContentWrapper>
          <ServicesWrapper>
            <Services>
                {MapOverServices()}
            </Services>
          </ServicesWrapper>
          
      </HomeWrapper>
    </Layout>
    )
  }

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
    color: ${props => props.theme.color.fontColor};
    position: relative;
    left: 17rem;
    font-size: 9rem;
    padding-top: 22rem;

    @media ${props => props.theme.device.mobileL} {
      font-size: 6rem;
      left: 3rem;
      }

    span {
      display: block;
      :nth-child(1) {
        position: relative;
        top: 6rem;

        @media ${props => props.theme.device.mobileL} {
          top: 4rem;
         }
      } 

      :nth-child(2) {
        font-size: 5rem;
        color: #000;
        @media ${props => props.theme.device.mobileL} {
          /* top: 6rem; */
          font-size: 3rem;
         }
      }

      :nth-child(3) {
        position: relative;
        bottom: 6rem;

        @media ${props => props.theme.device.mobileL} {
          bottom: 4rem;
         }
      }
    }
    

    .hero-rooted {
      position: relative;
      top: 6rem;
      @media ${props => props.theme.device.mobileL} {
        top: 0rem;
      }
    }
    .hero-in {
      color: ${props => props.theme.color.black};
      z-index: 1;

      @media ${props => props.theme.device.mobileL} {
        position: relative;
        top: -5rem;
      }
    }
    .hero-culture {
      position: relative;
      bottom: 12rem;
      font-size: 12rem;

    @media ${props => props.theme.device.mobileL} {
      font-size: 6rem;
      bottom: 10rem;
    }
    }
  }
 }
 .hero-down-arrow {
    justify-self: center;
    cursor: pointer;
 }
}
`

const SliderContainer = styled.div`
      grid-column: center-start / center-end;
      margin-bottom: 4rem;
`

const HomePageContentWrapper = styled.div`
  grid-column: center-start / center-end;
  display: grid;
  justify-items: center;
  padding: 8rem 0 8rem 0;
  h1 {
    margin-bottom: 4rem;
  }
`

const HomeContent = styled.div`
  justify-self: center;
   p {
     text-align: center;
   }
`




/// =============== Services Section Wrapper Style ================= ///
const ServicesWrapper = styled.div`
grid-column: full-start / full-end;
  display: grid;
  grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
  justify-content: center;
  padding: 5rem 0;

`

/// =============== Services Section Style ================= ///
const Services = styled.div`
grid-column: center-start / center-end;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-column-gap: 1rem;

@media ${props => props.theme.device.mobileL} {
    grid-row-gap: 0.5rem;
  }
`

export default withTheme(IndexPage)
