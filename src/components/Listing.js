import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"


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
                featured_media {
                    localFile {
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
    }
`


const Listing = (props) => (
        <StaticQuery 
            query={LISTING_QUERY}
            render = {({allWordpressPost}) => (
                allWordpressPost.edges.map(({node}) => (
                    <ListWrapper key={node.slug}>
                        <BorderLineWrapper>
                            <TitleBlogWrapper>
                                <Link to={`/posts/${node.slug}`}>
                                    <Title>
                                        <h2>{node.title}</h2>
                                    </Title>
                                </Link>
                                <hr />
                                <Date>{node.date}</Date>
                                <div dangerouslySetInnerHTML={{
                                        __html: node.excerpt,
                                }} />
                                <div className="read-more">
                                    <Link to={`/posts/${node.slug}`}>Read More</Link>
                                </div>
                            </TitleBlogWrapper>
                            <PostImage>
                                <Img fluid={node.featured_media.localFile.childImageSharp.fluid} />
                            </PostImage>
                        </BorderLineWrapper>
                    </ListWrapper>
                ))
            )}
        />
)

const ListWrapper = styled.article`
    width: 80%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    margin: auto;
    padding: 2rem;

    @media only screen and (max-width: 425px) {
        width: 100%;
    }
`
const BorderLineWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 4rem;
    border: 1px solid rgba(0,0,0,.1);
    padding: 4rem;

    @media only screen and (max-width: 425px) {
        padding: 2rem;
    }
`

const TitleBlogWrapper = styled.div`
    grid-column: 1 / 3;
    
    @media only screen and (max-width: 425px) {
        grid-column: 1 / -1;
    }
    hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border-top: 1px dotted #404C07;
    }

    .read-more {
        background-color: #404C07;
        width: 30%;
        text-align: center;
        border-radius: .4rem;
        margin: 1rem 0;
        a:active,
        a:visited,
        a {
            color: #fff;
        }

        @media only screen and (max-width: 425px) {
            margin: 1rem 0 3rem 0;
            width: 50%;
            padding: 1rem 0;
        }
    }
`

const PostImage = styled.div`
    grid-column: 3 / 4;
    align-self: center;
    /* width: 40rem; */

    @media only screen and (max-width: 425px) {
        grid-column: 1 / -1;
    }
    img {
        width: 100%;
    }
`

const Title = styled.h2`
    margin-bottom: 1rem;
    text-transform: uppercase;

    h2:active, h2:visited, h2 {
        color: #404C07;
        font-size: 2rem;
        font-weight: 100;
        letter-spacing: 0.4rem;
    }
`
const Date = styled.p`
    font-style: italic;
    margin-bottom: 1rem;
`


export default Listing;