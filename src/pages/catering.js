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

      slider: allWordpressWpCateringCarousel {
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

      mobileSlider: allWordpressWpCateringCarousel {
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
              link={
                "https://www.rootedinculture.net/wp-content/uploads/2020/08/Rooted_In_Culture_Menu.pdf"
              }
              title={"Download Menu"}
              external={true}
              download={true}
            />
          </div>
          <div>
            <Button
              link={"catering-shopping/featured"}
              title={"Discover Our Menu"}
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
        <div className="catering-inquiry">
          <Button link={"cateringinquiry"} title={"Inquire Now"} />
        </div>
      </CateringContainer>
    </Layout>
  )
}

// =============== Styled Components  ================= ///
const CateringContainer = styled.main`
display: grid;
grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
/* grid-template-rows: 70vh min-content; */

.slider-container {
  grid-column: full-start / full-end;
  margin-bottom: 3rem;
}

.catering-inquiry {
  grid-column: center-start / center-end;
  width: 50%;
  justify-self: center;
}

.catering-shop {
  grid-column: center-start / center-end;
  position: relative;
  bottom: 15rem;
  z-index: 99;
  display: flex;
  margin: 0 auto;

  .shopping {
    margin-right: 1rem;
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
    /* margin-bottom: 3rem; */
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
    width: 60%;
    text-align: center;

    @media ${props => props.theme.device.mobileL} {
      width: 100%;
    }
  }
}

`

export default withTheme(Catering)
