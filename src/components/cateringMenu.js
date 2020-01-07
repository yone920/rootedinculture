import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { withTheme } from 'styled-components'
import Img from "gatsby-image"
import PlusSvg from '../images/svg/plus.svg'



 const CateringMenu = ({ menu }) => {


     return (
             <MenuContainer>
                <Link to={`/catering/${menu.node.slug}`}>
                    <div className="catering-image">
                        <Img fluid={menu.node.featured_media.localFile.childImageSharp.fluid} />
                        <div class="overlay">
                            <div class="text"><img src={PlusSvg} alt="click to view post"></img>
                        </div>
                    </div>
          </div>
                </Link>
             </MenuContainer>
    )
}


          // --------------------- Style ---------------------- //
const  MenuContainer = styled.div`
            a {
                text-decoration: none;
            }
            .menu {
                /* padding: 3rem; */

                h1 {
                    padding: 15rem 0 15rem 0;
                    text-align: center;
                    text-decoration: none;
                    color: ${props => props.theme.color.fontColor};
                }
            }

            .catering-image {
        align-self: center;
        position: relative;

        :hover  .overlay {
            opacity: 1;
        }
        
        .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .5s ease;
            background-color: #cf4a2c9c;
            display: flex;
            justify-content: center;
            align-items: center;

            .text {
            }
            }

    }
      `


export default withTheme(CateringMenu);