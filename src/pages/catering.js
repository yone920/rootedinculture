
import React from "react"
// import { StoreContext } from '../context/StoreContext'
// import { useTransition } from 'react-spring'
// import MobileHeader from '../components/mobileHeader'
// import Header from '../components/header'
// import { useMediaQuery } from 'react-responsive'
import { withTheme } from 'styled-components'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby"
// import BackgroundImage from 'gatsby-background-image'
// import Reservation from '../components/reservation'
import HomeSlider from '../components/HomeSlider'
// import CateringMenu from '../components/cateringMenu'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
// import CateringInquiries from "../components/Form/CateringInquiries"
// import ProductsListing from "../components/ProductsListing/productsListing"


const Catering = (props) => {

  const data = useStaticQuery(graphql`
  query PageCateringData {

    catering1: file(relativePath: {
      regex: "/rooted-catering-hero-2/"
    }) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }


       catMenus: allWordpressWpMenu(limit: 10, sort: {
          order: DESC,
          fields: [date]
      }) {
          edges {
              node {
                  title
                  slug
                  featured_media {
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
      }

      cateringContent:  wordpressPage(slug: {eq: "catering-home"}) {
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
      <SEO title="About Us" />
      <CateringContainer>
       <div className="slider-container">
          <HomeSlider desktop={data.slider} mobile={data.mobileSlider}/>
       </div>
				<div className="catering-shop">
					<Link to="/catering-shopping/featured/"><p>Discover Our Menu</p></Link>
				</div>

      <div className="content-wrapper">
        <div className="catering-title">
          <h2>{data.cateringContent.title}</h2>
        </div>
        <div className="content"
          dangerouslySetInnerHTML={{
            __html: data.cateringContent.content,
          }}
        />
      </div>
      {/* <div className="inquiry-button">
        <button onClick={toggleCateringInquiries}><p>Inquire Now</p></button>
      </div> */}
      {/* {transitions.map(({ item, key, props }) => {
        return item && <CateringInquiries key={key} style={props} />
      })} */}
			<div className="catering-inquiry">
					<Link to="/cateringinquiry/"><p>Inquire Now</p></Link>
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

.slider-container {
  grid-column: full-start / full-end;
  margin-bottom: 3rem;
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

.catering-shop {
	grid-column: center-start / center-end;
	position: relative;
	bottom: 15rem;
	z-index: 99;
	/* width: 30%; */

  justify-self: center;
  width: 50%;

  @media ${props => props.theme.device.mobileL} {
      width: 100%;
    }
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
    margin-bottom: 3rem;
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

.inquiry-button {
  grid-column: center-start / center-end;
  justify-self: center;
  width: 50%;

  @media ${props => props.theme.device.mobileL} {
      width: 100%;
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

		p {
			font-size: 1.3rem;
		}
   }
}
`


export default withTheme(Catering)

