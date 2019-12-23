import React from 'react'
import { Link } from "gatsby"
import Img from 'gatsby-image'
import styled, {css} from 'styled-components'
import { withTheme } from 'styled-components'



const Service = (props) => {

    // const linkUrl = `${props.service.node.acf.link}`
    
    return (
        <ServiceWrapper>
            <div className="cat-image-1">
                <Img fluid={props.service.node.acf.photo.localFile.childImageSharp.fluid} alt="" />
            </div>
            <div className="cat-box-1">
                <div className="cat-box-1-inner">
                <h6>Rooted In Culture</h6>
                <h4>{props.service.node.title}</h4>
                <div className="catering-content"><p>{props.service.node.acf.body}</p></div>
                    <Link to={props.service.node.acf.link}>
                        <button ><span>{props.service.node.acf.button}</span></button>
                    </Link>
                </div>
            </div>
        </ServiceWrapper>
    )
}


const buttonStyle = css`
text-transform: uppercase;
text-decoration: none;
padding: 1.5rem 7rem;
display: inline-block;
border-radius: 1rem;
transition: all .2s;
position: relative;
/* font-size: $default-font-size; */
margin-top: 3rem;
border: none;
cursor: pointer;
`
const buttonHover = css`
transform: translateY(-3px);
box-shadow: 0 1rem 2rem rgba(0, 0, 255,.2);
`
const buttonSpan = css`
font-size: 1.5rem;
`

const ServiceWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    .cat-image-1 {
      padding: 2rem 0 2rem 2rem;
      position: relative;
      left: 30px;
      img {
        width: 80%;
      }

      @media ${props => props.theme.device.mobileL} {
        grid-column: 1 / span 2;
        left: 0;
        padding: 0;
        order: 2;
        img {
        width: 80%;
      }
      }
    }

    .cat-box-1 {
      background-color: ${props => props.theme.color.secondary};
      .cat-box-1-inner {
        padding: 7rem;
        padding-top: 10rem;
        
        @media ${props => props.theme.device.mobileL} {
          padding: 10rem 5rem 10rem 5rem;
        }

        h6 {
          font-size: ${props => props.theme.font.microHeadingH6};
          color: ${props => props.theme.color.white};
          position: relative;
          top: 1rem;
        }
        h4 {
          font-size: ${props => props.theme.font.h4FontSize};
          color: ${props => props.theme.color.white};
        }
        .catering-content {
          color: ${props => props.theme.color.white};
        }
        button {
          ${buttonStyle}
          span {
            ${buttonSpan}
          }
        }
        button:hover {
          ${buttonHover}
        }
      }

      @media ${props => props.theme.device.mobileL} {
        grid-column: 1 / span 2;
        left: 0;
        padding: 0;
        order: 1;
      }
    }

    :nth-child(2) {
    .cat-image-1 {
        order: 2;
        left: -50px;

        @media ${props => props.theme.device.mobileL} {
          left: 0;
        }
    }
    .cat-box-1 {
        order: 1;
        background-color: ${props => props.theme.color.primary};
    } 
  }
`






export default withTheme(Service);

