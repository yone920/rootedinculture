import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'


const LISTING_QUERY = graphql`
    query BlogPostListing {
        allMarkdownRemark(limit: 10, sort: {
        order: DESC,
        fields: [frontmatter___date]
    }) {
        edges {
            node {
            excerpt
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                slug
            }
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
            render = {({allMarkdownRemark}) => (
                allMarkdownRemark.edges.map(({node}) => (
                    <ListWrapper key={node.frontmatter.slug}>
                        <Link to={`/posts${node.frontmatter.slug}`}>
                            <Title>{node.frontmatter.title}</Title>
                        </Link>
                        <Date>{node.frontmatter.date}</Date>
                        <p>{node.excerpt}</p>
                        <Link to={`/posts${node.frontmatter.slug}`}>Read More</Link>
                    </ListWrapper>
                ))
            )}
        />
)


export default  Listing;