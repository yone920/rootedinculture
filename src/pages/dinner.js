import React from "react"
import { withTheme } from "styled-components"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import HomeSlider from "../components/HomeSlider"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Button from "../components/Button/button"

const Dinner = props => {
  const data = useStaticQuery(graphql`
    query PageDinnerData {
      dinnerContent: wordpressPage(slug: { eq: "dinner" }) {
        title
        content
      }

      slider: allWordpressWpDinnerSlider {
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

      mobileSlider: allWordpressWpDinnerSlider {
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

  // --------------------- Final Render ---------------------- //

  return (
    <Layout>
      <SEO title="Dinner Arrangement" />
      <DinnerContainer>
        <div className="slider-container">
          <HomeSlider desktop={data.slider} mobile={data.mobileSlider} />{" "}
        </div>
        <div className="content-wrapper">
          <div className="catering-title">
            <h2> {data.dinnerContent.title} </h2>{" "}
          </div>{" "}
          <HeaderLine>
            <hr />
          </HeaderLine>{" "}
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: data.dinnerContent.content,
            }}
          />{" "}
        </div>{" "}
        <div className="button">
          <Button title={"Future Dinner Parties"} />
        </div>
      </DinnerContainer>{" "}
    </Layout>
  )
}

// =============== Styled Components  ================= ///
const DinnerContainer = styled.main`
  display: grid;
  grid-template-columns:
    [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(
      8,
      [col-start] minmax(min-content, 13rem) [ col-end ]
    )
    [center-end] minmax(4rem, 1fr) [ full-end ];
  /* grid-template-rows: 70vh min-content; */

  .slider-container {
    grid-column: full-start / full-end;
    margin-bottom: 3rem;
  }

  .content-wrapper {
    grid-column: center-start / center-end;
    justify-items: center;
    margin: 8rem 0;

    @media ${props => props.theme.device.mobileL} {
      margin: 4rem 0;
    }
    .catering-title {
      text-align: center;
      margin-bottom: 3rem 0;
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
  .button {
    grid-column: center-start / center-end;
    margin: 0 auto;

    width: 60%;
  }
`

const HeaderLine = styled.div`
  width: 25rem;
  margin: 1rem auto 3rem auto;

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
`

export default withTheme(Dinner)
