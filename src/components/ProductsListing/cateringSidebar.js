import React,  {useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { withTheme } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Img from "gatsby-image"
import { StoreContext } from '../../context/StoreContext'


 const CateringSidebar = ( {data} ) => {
  const { toggleCateringMobileMenu } = useContext(StoreContext)
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })


	return (
		<MenuContainer>
			{isMobile ?
			 data.allShopifyCollection.edges.map(edge => {
				return (
					<div className="menu-item mobile-catering-menu" key={edge.node.handle} onClick={toggleCateringMobileMenu}>
						<Link to={`/catering-shopping/${edge.node.handle}`} className="menu-link">
							<p className="menu-title">
								{edge.node.title}
							</p>
							<div className="collection-image">
								<Img fluid={edge.node.image.localFile.childImageSharp.fluid} alt={edge.node.title}  />
							</div>
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

		@media ${props => props.theme.device.tablet} {
      display: grid;
			grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
			grid-gap: 1rem;
			padding: 4rem 3rem;
      align-items: end;
      background-color: ${props => props.theme.color.primary};
    }

	.menu-item {
		padding-bottom: 1rem;

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
      color: #fff;
      font-size: 1.2rem;
      text-align: center;
		}

    .menu-link {
        display: grid;
        justify-content: center;
      .collection-image {
        width: 8rem;
        img {
          border-radius: 50%;
          margin: auto;
			  }
		  }
    }

	}
	`

export default withTheme(CateringSidebar);