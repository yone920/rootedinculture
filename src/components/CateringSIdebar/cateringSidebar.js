import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { withTheme } from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"


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
			<nav className="catering-image">
				{allShopifyCollection.edges.map(edge => {
					return (
						<div key={edge.node.handle}>
							<Link to={`/shop/${edge.node.handle}`}>{edge.node.title}</Link>
						</div>
					)
				})}
			</nav>
		</MenuContainer>
)
}


          // --------------------- Style ---------------------- //
const  MenuContainer = styled.div`

      `


export default withTheme(CateringSidebar);