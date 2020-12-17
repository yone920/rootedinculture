import React from "react"
import { withTheme } from "styled-components"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import HomeSlider from "../components/HomeSlider"
import Button from "../components/Button/button"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const Catering = props => {
  const data = useStaticQuery(graphql`
    query PageCateringData {
      catering1: file(relativePath: { regex: "/rooted-catering-hero-2/" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      cateringContent: wordpressPage(slug: { eq: "catering-home" }) {
        title
        content
        acf {
          upload_file {
            url {
              source_url
            }
          }
        }
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

      slider: allWordpressWpCateringCarousel(sort: {fields: acf___order, order: ASC}) {
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

      mobileSlider: allWordpressWpCateringCarousel(sort: {fields: acf___order, order: ASC}) {
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
    }
  `)

  return (
    <Layout>
      <SEO title="About Us" />
      <CateringContainer>
        <div className="slider-container">
          <HomeSlider desktop={data.slider} mobile={data.mobileSlider} />{" "}
        </div>
        <div className="catering-shop">
          <div className="shopping">
            <Button
              link={data.cateringContent.acf.upload_file.url.source_url}

              title={"Download Menu"}
              external={true}
              download={true}
            />
          </div>
          <div>
            <Button
              link={"catering-shopping/jerk"}
              title={"Ready to order?"}
              className={"secondary"}
            />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="catering-title">
            <h2> {data.cateringContent.title} </h2>
          </div>
          <div className="line">
            <hr />
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: data.cateringContent.content,
            }}
          />
        </div>
        <div className="inquiry-call-buttons">
          <div className="catering-inquiry">
            <Button link={"cateringinquiry"} title={"Inquire Now"} />
          </div>
          <div className="catering-inquiry__schedule">
              <Button
                link={"https://calendly.com/rootedinculture"}
                title="Schedule a call"
                whiteBackground={true}
                external={true}
                className={"secondary"}
              />
          </div>
        </div>
      </CateringContainer>
    </Layout>
  )
}

const CateringContainer = styled.main`
display: grid;
grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];

.slider-container {
  grid-column: full-start / full-end;
  margin-bottom: 3rem;
}

.catering-shop {
  grid-column: center-start / center-end;
  display: grid;
  grid-template-columns: 5fr 2fr;
  position: relative;
  bottom: 15rem;
  z-index: 99;
  margin: 0 auto;

  @media ${props => props.theme.device.mobileL} {
    bottom: 20rem;
    grid-template-columns: 1fr;
    bottom: 0;
    width: 100%;
  }

  .shopping {
    margin-right: 1rem;
    @media ${props => props.theme.device.mobileL} {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }

  a {
    padding: 2rem 5rem;
  }


  @media ${props => props.theme.device.mobileL} {
      width: 100%;
    }

    p {
      font-size: 1.3rem;
      line-height: 1;
    }
   }

  @media ${props => props.theme.device.mobileL} {
    bottom: 0rem;

  }

  button {

    a {
      font-size: 1.6rem;
      color: #fff;
      text-decoration: none;
    }
  }
}

.content-wrapper {
  grid-column: center-start / center-end;
  justify-items: center;
  margin: 8rem 0;

    @media ${props => props.theme.device.mobileL} {
      margin: 10rem 0 6rem 0;
    }
  .catering-title {
    text-align: center;
  }

  .line {
    width: 25rem;
    margin: 1rem auto 3rem auto;

      hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
      }
  }

  .content {
    margin: 0 auto;
    /* width: 80%; */

    @media ${props => props.theme.device.mobileL} {
      width: 100%;
    }

    .catering-li {
      padding-left: 1.5rem;
    }
  }

}

  .inquiry-call-buttons {
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
    margin: 0 auto;
    width: 80%;

    @media ${props => props.theme.device.tablet} {
      width: 100%;
      grid-template-columns: 1fr;
    }

    .catering-inquiry {
      width: 100%;
      margin-right: 2rem;

      @media ${props => props.theme.device.tablet} {
        margin-right: 0;
        margin-bottom: 2rem;
      }
    }

    .catering-inquiry__schedule {
      width: 100%;

    }
  }


`

export default withTheme(Catering)
