import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import InstaItem from './instaItem'

 const InstagramList = () => {

    const data = useStaticQuery(graphql`
        query InstaListingQuery {
            allInstaNode {
                edges {
                    node {
                        id
                        likes
                        localFile {
                            url
                            childImageSharp {
                              fluid(maxWidth: 1500, maxHeight: 1500) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                         }
                        }
                    }
                }
            }
        `)
        console.log(data.allInstaNode.edges);


    return (
        <InstaContainer>
            {data.allInstaNode.edges.map(edge => (
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
