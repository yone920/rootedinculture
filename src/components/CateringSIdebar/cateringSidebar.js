import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'
import { withTheme } from 'styled-components'
import { useStaticQuery, graphql, Link } from "gatsby"


 const CateringSidebar = () => {

	const { allShopifyCollection } = useStaticQuery(
    graphql`
			query allShopifyCollection {
				allShopifyCollection {
					edges {
						node {
							title
							handle
						}
					}
				}
			}
    `
  )

	return (
		<MenuContainer>
				{allShopifyCollection.edges.map(edge => {
					return (
						<div className="menu-item" key={edge.node.handle}>
							<Link to={`/catering-shopping/${edge.node.handle}`}>{edge.node.title}</Link>
						</div>
					)
				})}
		</MenuContainer>
)
}


          // --------------------- Style ---------------------- //
const  MenuContainer = styled.nav`
	.menu-item {
		padding-bottom: 1rem;
		/* background-color: red; */

		a,
		a:link {
				color: ${props => props.theme.color.black};
				text-decoration: none;
		}
		a:hover, a:active {
			font-weight: bold;
		}


	}
	`

// @media ${props => props.theme.device.laptop} {
// 	grid-column: center-start / center-end;
// 	margin: 5rem 0 0 0;
// }


export default withTheme(CateringSidebar);