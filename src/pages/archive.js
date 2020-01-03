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
          {/* <div className="blog-heading">
              <h2>Blog</h2>
          </div> */}
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
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
    grid-gap: 2rem;
    justify-items: center;
    padding: 8rem 0;

    @media only screen and (max-width: 425px) {
      grid-template-columns: [ full-start ] minmax(0rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(0rem, 1fr) [ full-end ];
    }

  

`
const ListingWrapper = styled.div`
  grid-column: center-start / center-end;
  /* width: 70%; */
  display: grid;
  grid-gap: 3rem;
  a {
    text-decoration: none;
  }
`
// const TitleMenuWrapper = styled.div`
//   grid-column: col-end 6 / center-end;
// `

  export default Archive;
