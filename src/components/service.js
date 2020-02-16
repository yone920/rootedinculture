import React from 'react'
import { Link } from "gatsby"
import styled, {css} from 'styled-components'
import { withTheme } from 'styled-components'
import Img from "gatsby-image"

const Service = (props) => {


  
    return (
        <ServiceWrapper>
              <Link to={props.service.node.acf.link}>
                <div className="post-image">
                        <StyledImage fluid={props.service.node.acf.photo.localFile.childImageSharp.fluid} />
                        <div className="overlay">
                            <div className="text"><button>{props.service.node.title}</button></div>
                        </div>
                    </div>
            </Link>
        </ServiceWrapper>
    )
}


const StyledImage = styled(Img)`
   
`

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
      
      

      :hover {

        button {
        ${buttonStyle2}
      }
      }
    }

    .post-image {
        align-self: center;
        position: relative;

        :hover  .overlay {
            opacity: 1;
            background-color: rgba(207, 74, 44, 0.425);
        }
        
        .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 1;
            transition: .5s ease;
            /* background-color: #cf4a2c9c; */
            display: flex;
            justify-content: center;
            align-items: center;

            .text {
              button {
                ${buttonStyle}
              }
            }
            }

    }
    

`






export default withTheme(Service);

