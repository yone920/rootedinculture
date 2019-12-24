import React from 'react'
import TitleMenu from '../components/TitleMenu'
import Layout from "../components/Layout/layout"
import Listing from "../components/Listing"
import styled from 'styled-components'



const Archive = () => (
    <Layout>
      <ArchiveWrapper>
        <ListingWrapper>
          <Listing />
        </ListingWrapper>
        <TitleMenu />
      </ArchiveWrapper>
    </Layout>
  )
  


const ArchiveWrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 2rem;
    margin-top: 3.5rem;
`
const ListingWrapper = styled.div`
  grid-column: 1 /  2;
  display: grid;
  grid-gap: 3rem;
  a {
    text-decoration: none;
  }
`

  export default Archive;
