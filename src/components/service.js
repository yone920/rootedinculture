import React from 'react'
import { Link } from "gatsby"
import styled, {css} from 'styled-components'
import { withTheme } from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const Service = (props) => {

  const backgroundFluidImageStack = [
    props.service.node.acf.photo.localFile.childImageSharp.fluid,
    `linear-gradient(180deg, rgba(64,76,7,0.25674019607843135) 0%, rgba(64,76,7,0.34637605042016806) 100%)`
  ].reverse()

  
    return (
        <ServiceWrapper>
              <Link to={props.service.node.acf.link}>
                <BackgroundImage
                    Tag="section"
                    className="service-images"
                    fluid={backgroundFluidImageStack}
                    backgroundColor={`#040e18`}
                  >
                      <button>{props.service.node.title}</button>
                </BackgroundImage>
            </Link>
        </ServiceWrapper>
    )
}


const buttonStyle = css`
text-transform: uppercase;
text-decoration: none;
padding: 1.5rem 5rem;
display: inline-block;
border-radius: 0.5rem;
transition: all .2s;
position: relative;
border: none;
cursor: pointer;
font-size: 1.5rem;
`
const buttonStyle2 = css`
text-transform: uppercase;
text-decoration: none;
padding: 1.5rem 5rem;
display: inline-block;
border-radius: 0.5rem;
transition: all .2s;
position: relative;
border: none;
cursor: pointer;
background-color: #cf4a2c;
color: #fff;
`

const ServiceWrapper = styled.div`
    a {
        text-decoration: none;
    }
    .service-images {
      display: flex;
      justify-content: center;
      padding: 15rem 0;
      
      button {
        ${buttonStyle}
      }

      :hover {

        button {
        ${buttonStyle2}
      }
      }
    }

    

`






export default withTheme(Service);

