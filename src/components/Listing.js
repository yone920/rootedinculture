import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import PostListingItems from '../components/Blog/postListingItems'


const Listing = (props) => {

    const data = useStaticQuery(graphql`
        query BlogPostListing {
            allWordpressPost(limit: 10, sort: {
                order: DESC,
                fields: [date]
            }) {
                edges {
                    node {
                    excerpt
                    date(formatString: "MMMM DD, YYYY")
                    title
                    slug 
                    featured_media {
                        localFile {
                            childImageSharp {
                            fluid(maxWidth: 1500, maxHeight: 1100) {
                                ...GatsbyImageSharpFluid
                            }
                            }
                        }
                    }
                    }
                }
            }
        }
`)

return( 
            <ListWrapper>
                {data.allWordpressPost.edges.map(edge => (
                    <PostListingItems key={edge.node.id} node={edge.node}/>
                ))}
            </ListWrapper>    
    
        )
}

const ListWrapper = styled.article`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    @media only screen and (max-width: 425px) {
        grid-row-gap: 2.5rem;
    }
`





export default Listing;