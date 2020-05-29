import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { withTheme } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Img from "gatsby-image"


 const CateringSidebar = ( {data} ) => {

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


	console.log(data)

	return (
		<MenuContainer>
			{isMobile ?
			 data.allShopifyCollection.edges.map(edge => {
				return (
					<div className="menu-item" key={edge.node.handle}>
						<Link to={`/catering-shopping/${edge.node.handle}`}>
							<p className="menu-title">
								{edge.node.title}
							</p>
							<Img fluid={edge.node.image.localFile.childImageSharp.fluid} alt={edge.node.title}  />
						</Link>
					</div>
				)
			})
			 :
				 data.allShopifyCollection.edges.map(edge => {
					return (
						<div className="menu-item" key={edge.node.handle}>
							<Link to={`/catering-shopping/${edge.node.handle}`}>{edge.node.title}</Link>
						</div>
					)
				})
			}
		</MenuContainer>
)
}


          // --------------------- Style ---------------------- //
const  MenuContainer = styled.nav`

		@media ${props => props.theme.device.mobileL} {
      display: grid;
			grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
			grid-gap: 1rem;
    }


	.menu-item {
		padding-bottom: 1rem;
		/* background-color: red; */

		a,
		a:link {
				color: ${props => props.theme.color.black};
				text-decoration: none;

			@media ${props => props.theme.device.mobileL} {
				font-size: 1rem;
				line-height: 1;
			}
		}
		a:hover, a:active {
			font-weight: bold;
		}

		.menu-title {
			margin-bottom: 1rem;
		}
	}
	`

// @media ${props => props.theme.device.laptop} {
// 	grid-column: center-start / center-end;
// 	margin: 5rem 0 0 0;
// }


export default withTheme(CateringSidebar);