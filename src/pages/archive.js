import React from 'react'
// import TitleMenu from '../components/TitleMenu'
import Layout from "../components/Layout/layout"
import Listing from "../components/Listing"
import styled from 'styled-components'
import SEO from "../components/seo"



const Archive = () => (
    <Layout>
      <SEO title="Blog" />
      <ArchiveWrapper>
          <div className="header-line-wrapper">
            <div className="blog-heading">
                <h2>Blog</h2>
            </div>
            <div className="line">
              <hr />
            </div>
          </div>
        <ListingWrapper>
          <Listing />
        </ListingWrapper>
        {/* <TitleMenuWrapper>
          <TitleMenu />
        </TitleMenuWrapper> */}
      </ArchiveWrapper>
    </Layout>
  )
  


const ArchiveWrapper = styled.div`
    display: grid;
    grid-template-columns: [ full-start ] minmax(1rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(1rem, 1fr) [ full-end ];
    justify-content: center;
    padding: 4rem 0;


    @media only screen and (max-width: 425px) {
      grid-template-columns: [ full-start ] minmax(0rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(0rem, 1fr) [ full-end ];
    }

    .header-line-wrapper {
      grid-column: center-start / center-end;
      display: flex;
      flex-direction: column;
      justify-items: center;
      padding: 0 0 4rem 0;

      .blog-heading {
        grid-column: full-start / full-end;
        text-align: center;
      }

      .line {
        width: 15rem;
        margin: 1rem auto;

          hr {
            border: 0;
            height: 1px;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
          }
      }
    }

`
const ListingWrapper = styled.div`
  grid-column: full-start / full-end;
  padding: 0 5rem;

  @media only screen and (max-width: 425px) {
      padding: 0 2rem;
    }

  a {
    text-decoration: none;
  }
`

  export default Archive;
