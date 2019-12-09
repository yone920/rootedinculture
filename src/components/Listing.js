import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'


const LISTING_QUERY = graphql`
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
            }
        }
        }
    }
`

const ListWrapper = styled.article`
    width: 77%;
`
const Title = styled.h2`
    margin-bottom: 1rem;
    text-transform: uppercase;
`
const Date = styled.p`
    font-style: italic;
    margin-bottom: 1rem;
`

const Listing = (props) => (
        <StaticQuery 
            query={LISTING_QUERY}
            render = {({allWordpressPost}) => (
                allWordpressPost.edges.map(({node}) => (
                    <ListWrapper key={node.slug}>
                        <Link to={`/posts${node.slug}`}>
                            <Title>{node.title}</Title>
                        </Link>
                        <Date>{node.date}</Date>
                        <p>{node.excerpt}</p>
                        <Link to={`/posts${node.slug}`}>Read More</Link>
                    </ListWrapper>
                ))
            )}
        />
)


export default  Listing;