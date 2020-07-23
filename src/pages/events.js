
import React from "react"
// import React, { useContext } from "react"
// import { StoreContext } from '../context/StoreContext'
// import { useTransition } from 'react-spring'
import { withTheme } from 'styled-components'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby"
import HomeSlider from '../components/HomeSlider'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
// import CateringInquiries from "../components/Form/CateringInquiries"
import Img from "gatsby-image"


const Events = (props) => {

  const data = useStaticQuery(graphql`
  query PageEventsData {

      eventsContent: wordpressPage(slug: {eq: "events"}) {
          acf {
            events_cta_title
            events_photo_2 {
              id
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, maxHeight: 1500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            event_photo_1 {
              id
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000, maxHeight: 1500) {
                  ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          title
					content
        }

      slider: allWordpressWpEventsSlider {
            edges {
              node {
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

      mobileSlider: allWordpressWpEventsSlider {
            edges {
              node {
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
    }`)


    // const {  isCateringInquiriesOpen, toggleCateringInquiries } = useContext(StoreContext)

    // const  transitions = useTransition(isCateringInquiriesOpen, null, {
    //   rom: { position: 'absolute', opacity: 0 },
    //   enter: { opacity: 1 },
    //   leave: { opacity: 0 }
    // })



    // --------------------- Final Render ---------------------- //

  return (
    <Layout>
      <SEO title="Events | Rooted in Culture" />
      <CateringContainer>
       <div className="slider-container">
          <HomeSlider desktop={data.slider} mobile={data.mobileSlider}/>
       </div>

      <div className="content-title-images-wrapper">
        <div className="content-images-wrapper">
          <div className="catering-title">
            <h2>{data.eventsContent.title}</h2>
          </div>
          <div className="content-wrapper"
            dangerouslySetInnerHTML={{
              __html: data.eventsContent.content,
            }}
          />
          <div className="images-wrapper">
            <div className="image-1">
              <Img fluid={data.eventsContent.acf.event_photo_1.localFile.childImageSharp.fluid} />
            </div>
            <div className="image-2">
              <Img fluid={data.eventsContent.acf.events_photo_2.localFile.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="inquiry-button">
        <button onClick={toggleCateringInquiries}>{data.eventsContent.acf.events_cta_title}</button>
      </div>
      {transitions.map(({ item, key, props }) => {
        return item && <CateringInquiries key={key} style={props} />
      })} */}
			<div className="catering-inquiry">
					<Link to="/schedulecall/"><p>{data.eventsContent.acf.events_cta_title}</p></Link>
			</div>

     </CateringContainer>
      {/* <ProductsListing /> */}
   </Layout>
  )
}


// =============== Styled Components  ================= ///
const CateringContainer = styled.main`
display: grid;
grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
/* grid-template-rows: 70vh min-content; */
  @media ${props => props.theme.device.tablet} {
    margin-bottom: 8rem;
  }

.slider-container {
  grid-column: full-start / full-end;
  margin-bottom: 3rem;
}

.content-title-images-wrapper {
  grid-column: center-start / center-end;
  justify-items: center;
  margin: 8rem 0;

    @media ${props => props.theme.device.mobileL} {
      margin: 4rem 0 15rem 0;
    }

  .content-images-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;

    .catering-title {
      grid-column: 1 / 2;
      margin: 3rem auto;
      width: 70%;

      @media ${props => props.theme.device.tablet} {
        width: 100%;
        grid-column: 1 / -1;
      }
    }

    .content-wrapper {
      grid-column: 1 / 2;
      margin: 0 auto;
      width: 70%;

      @media ${props => props.theme.device.tablet} {
        grid-column: 1 / -1;
        width: 100%;
        margin-bottom: 3rem;
      }

    }
    .images-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
      @media ${props => props.theme.device.tablet} {
        grid-column: 1 / -1;
        width: 100%;
      }
      .image-1 {
        grid-column: 1 / 2;
      }
    }
  }

}

.inquiry-button {
  grid-column: center-start / center-end;
  justify-self: center;
  width: 50%;
	margin-bottom: 9rem;

  @media ${props => props.theme.device.mobileL} {
      width: 100%;
			margin-bottom: 2rem;
  }
   button {
    display: inline-block;
    width: 100%;
    background-color: ${props => props.theme.color.secondary};
    text-align: center;
    padding: 2rem 2rem;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    border-radius: .5rem;
    cursor: pointer;
		border: none;
    :hover {
        background-color: ${props => props.theme.color.primary};
        /* color: #5db544; */
  }
   }
}

.catering-inquiry {
	grid-column: center-start / center-end;
	width: 50%;
	justify-self: center;

	a {
    display: inline-block;
    width: 100%;
    background-color: ${props => props.theme.color.secondary};
    text-align: center;
    padding: 2rem 2rem;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    border-radius: .5rem;
    cursor: pointer;
		border: none;
    :hover {
        background-color: ${props => props.theme.color.primary};
        /* color: #5db544; */
  	}

		p {
			font-size: 1.3rem;
			line-height: 1;
		}
   }
}
`


export default withTheme(Events)

