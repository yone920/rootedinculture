import React, { useState, useContext } from 'react'
import ProductsListingItem from "./productsListingItem"
import styled from 'styled-components'
import CateringSidebar from "./cateringSidebar"
import { withTheme } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import SEO from '../seo'
import { StoreContext } from '../../context/StoreContext'
import ArrowBold from '../SVGs/arrowBold'

const ProductsListing = ( {collection, parent} ) => {
  const { isCateringMenuOnMobileOpen, toggleCateringMobileMenu } = useContext(StoreContext)
  const [isClicked, setClick] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' })



  return (
    <Container>
      <SEO title="Shop" />

      { parent === "arrangement" ?
        null
        :
      <div className= "nav-wrapper">
        <div className="nav-title-wrapper">
          {isMobile ?
          <div className="nav-menu-wrapper" onClick={() => setClick(prevState => !prevState)}>
            <button onClick={toggleCateringMobileMenu}>Catering Menu  <ArrowBold className={isClicked ? "rotate" : ""}/></button>
          </div>
            :
            <p>Catering Menu</p>
          }
        </div>
        <div className={`nav-wrapper ${isMobile && !isCateringMenuOnMobileOpen ? 'hidden' : null}`}>
          <CateringSidebar data={collection}/>
        </div>
      </div>
      }
      { parent === "arrangement" ?
			<div className="products-wrapper-flower">
				{collection.shopifyCollection.products.map(product => (
					<ProductsListingItem key={product.id} product={product} parent={parent}/>
					))}
			</div>
      :
      <div className="products-header-wrapper">
        <div className="header-wrapper">
          <h2>{collection.shopifyCollection.title}</h2>
        </div>
        <div className="products-wrapper">
          {collection.shopifyCollection.products.map(product => (
						<ProductsListingItem key={product.id} product={product} parent={parent}/>
						))}
        </div>
      </div>
			}
    </Container>
  )
}

  const Container = styled.div`
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: 1fr 4fr;

    @media ${props => props.theme.device.tablet} {
    	grid-column: full-start / full-end;
      grid-template-columns: none;
    }

    .nav-wrapper {
      padding-top: 2rem;

      @media ${props => props.theme.device.tablet} {
      padding-top: 0;
        margin-bottom: 3rem;
      }

      .nav-title-wrapper {
        border-bottom: 0.1rem solid black;
        margin-right: 3rem;

        @media ${props => props.theme.device.tablet} {
          margin-right: 0;
          /* padding: 0 3rem; */
          border-bottom: 0;

        }

        p {
          font-size: 1.4rem;
          font-weight: 100;
        }

        .nav-menu-wrapper {
          display: flex;
          flex-direction: column;

          button {
            width: 100%;
            padding: 1.5rem 0;
            border: none;
            text-align: center;
            vertical-align: middle;
            display: inline-block;
            background-color: ${props => props.theme.color.primary};
            color: #fff;

            svg {
            vertical-align: middle;
            display: inline-block;
            transform: rotate(-90deg)
            }

            .rotate {
              transform: rotate(0)

            }
          }
        }
      }
    }
    .products-header-wrapper {

       @media ${props => props.theme.device.tablet} {
          padding: 0 3rem;
        }

      .header-wrapper {
        margin-bottom: 2rem;
      }

      .products-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 6rem;


       @media ${props => props.theme.device.tablet} {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-row-gap: 3rem;
        }
      }
    }
		.products-wrapper-flower {
			margin: 10rem 0;
			grid-column: 1 / 3;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
			grid-gap: 7rem;
       @media ${props => props.theme.device.mobileL} {
				grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
				margin: 0;
        }
		}

    .hidden {
      display: none;
    }
	`

export default withTheme(ProductsListing);