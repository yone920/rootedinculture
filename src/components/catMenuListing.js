import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'


const CATERING_MENU_LISTING_QUERY = graphql`
    query CategoryMenutListing {
        allWordpressWpMenu(limit: 10, sort: {
        order: DESC,
        fields: [date]
    }) {
        edges {
            node {
                title
                slug
                featured_media {
					localFile {
                        childImageSharp {
                            fluid(maxWidth: 1500, maxHeight: 1500, 
                                duotone: {
                                highlight: "#f00e2e",
                                shadow: "#192550",
                                opacity: 50
                              }) {
                                ...GatsbyImageSharpFluid
                            } 
                        }
                    }
                }
            }
        }
        }
    }
`

const ListWrapper = styled.div`
    width: 77%;
`
const Title = styled.h2`
    margin-bottom: 1rem;
    /* text-transform: uppercase; */
`
const FeaturedImage = styled.p`
    
`

const catMenuListing = (props) => (
        <StaticQuery 
            query={CATERING_MENU_LISTING_QUERY}
            render = {({allWordpressWpMenu}) => (
                allWordpressWpMenu.edges.map(({node}) => (
                    <ListWrapper key={node.slug}>
                        <Link to={`/catering/${node.slug}`}>
                            <Title>{node.title}</Title>
                            <FeaturedImage>
                                <Img fluid={node.featured_media.localFile.childImageSharp.fluid} alt="rooted in culture members" />
                            </FeaturedImage>
                        </Link>
                        {/* <Link to={`/catering/${node.slug}`}>Read More</Link> */}
                    </ListWrapper>
                ))
            )}
        />
)


export default  catMenuListing;