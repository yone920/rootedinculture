import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import { withTheme } from 'styled-components'



 const CateringMenu = ({ menu }) => {

        // --------------------- Background Images---------------------- //
    const backgroundFluidImageStack = [
        menu.node.featured_media.localFile.childImageSharp.fluid,
      ].reverse()

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
                    color: ${props => props.theme.color.white};
                }
            }
      `


     return (
             <MenuContainer>
                <Link to={`/catering/${menu.node.slug}`}>
                    <BackgroundImage
                        key={menu.node.id}
                        Tag="div"
                        className="menu"
                        fluid={backgroundFluidImageStack}
                        backgroundColor={`#040e18`}
                    >
                        <h1>{menu.node.title}</h1>
                    </BackgroundImage>
                </Link>
             </MenuContainer>
    )
}

export default withTheme(CateringMenu);