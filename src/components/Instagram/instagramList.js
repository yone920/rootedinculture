import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import InstaItem from './instaItem'

 const InstagramList = ({ data }) => {

  // const data = useStaticQuery(graphql`
  //   query InstaListingQuery {

  //       }
  //     `)
      // console.log(data.edges);


    return (
        <InstaContainer>
            {data.edges.map(edge => (
                    <InstaItem key={edge.node.id} post={edge.node} />
            ))}
        </InstaContainer>
    )
}

const InstaContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

`

export default InstagramList;
