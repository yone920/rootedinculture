import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { withTheme } from "styled-components"
import Layout from "../components/Layout/layout"
import Service from "../components/service"
import SEO from "../components/seo"
import HomeSlider from "../components/HomeSlider"
import "../stylesheet/main.scss"
import InstagramList from "../components/Instagram/instagramList"

const IndexPage = props => {
  // =============== Query ================= ///
  const data = useStaticQuery(graphql`
    query PageDataQuery {
      heroImage: file(relativePath: { regex: "/rooted-in-culture-hero/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      homeContent: wordpressPage(slug: { eq: "fun-innovative-badass" }) {
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

      slider: allWordpressWpHomeCarousel {
        edges {
          node {
            id
            acf {
              photo {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, maxHeight: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }

      mobileSlider: allWordpressWpHomeCarousel {
        edges {
          node {
            id
            acf {
              photo {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, maxHeight: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      instagramNodes: allInstaNode(limit: 15) {
        nodes {
          id
          # likes
          localFile {
            url
            childImageSharp {
              fluid(maxWidth: 1500, maxHeight: 1500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const MapOverServices = () =>
    data.services.edges.map(node => (
      <Fragment key={node.node.id}>
        {console.log(node)}
        <Service service={node} />
      </Fragment>
    ))

  // debugger

  // =============== Render ================= ///
  return (
    <Layout>
      <SEO title="Home" />
      <SliderContainer>
        <HomeSlider desktop={data.slider} mobile={data.mobileSlider} />
      </SliderContainer>
      <HomeWrapper>
        <HomePageContentWrapper id="check">
          <div className="header-wrapper">
            <h2>{data.homeContent.acf.phrase}</h2>
            <div className="line">
              <hr />
            </div>
          </div>
          <HomeContent
            dangerouslySetInnerHTML={{
              __html: data.homeContent.content,
            }}
          />
        </HomePageContentWrapper>
        <ServicesWrapper>
          <Services>{MapOverServices()}</Services>
        </ServicesWrapper>
        <InstaWrapper>
          <div className="insta-header-wrapper">
            <h2>Browse Our</h2>
            <div className="line">
              <hr />
            </div>
            <h1>Instagram</h1>
          </div>
          <InstagramList data={data.instagramNodes} />
        </InstaWrapper>
      </HomeWrapper>
    </Layout>
  )
}

// =============== Style ================= ///

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(
      8,
      [col-start] minmax(min-content, 13rem) [ col-end ]
    ) [center-end] minmax(4rem, 1fr) [ full-end ];
  grid-template-rows: min-content min-content;
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

  @media ${props => props.theme.device.mobileL} {
    padding: 4rem 0 8rem 0;
  }

  .header-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;

    h2 {
      font-size: 2.3rem;
    }
    .line {
      width: 25rem;
      margin: 1rem auto;
      hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.75),
          rgba(0, 0, 0, 0)
        );
      }
    }
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
  grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(
      8,
      [col-start] minmax(min-content, 13rem) [ col-end ]
    ) [center-end] minmax(4rem, 1fr) [ full-end ];
  justify-content: center;
  /* padding: 5rem 0; */
  background-color: #f5f5f5;
`

/// =============== Services Section Style ================= ///
const Services = styled.div`
  grid-column: center-start / center-end;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 1rem;
`

const InstaWrapper = styled.div`
  grid-column: full-start / full-end;
  padding: 17rem 0 4rem 0;

  .insta-header-wrapper {
    padding: 0rem 0 5rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2,
    h1 {
      text-align: center;
    }

    .line {
      width: 25rem;
      margin: 0 auto;
      hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.75),
          rgba(0, 0, 0, 0)
        );
      }
    }
  }
`

export default withTheme(IndexPage)
