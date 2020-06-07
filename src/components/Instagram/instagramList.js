import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import InstaItem from './instaItem'

 const InstagramList = ({ data }) => {

  // const data = useStaticQuery(graphql`
  //   query InstaListingQuery {

  //       }
  //     `)
      // console.log(data.edges);
// debugger

  return (
    <InstaContainer>
      {data.nodes.map(edge => (
        <InstaItem key={edge.id} post={edge} />
      ))}
    </InstaContainer>
  )
}

const InstaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

`

export default InstagramList;
