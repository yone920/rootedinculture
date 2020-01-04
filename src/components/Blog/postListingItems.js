import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Link } from 'gatsby'


 const PostListingItems = ({ node }) => {
    return (
            <PostItemsContainer>
                <Link to={`/posts/${node.slug}`}>
                    <div className="post-image">
                        <StyledImage fluid={node.featured_media.localFile.childImageSharp.fluid} />
                    </div>
                </Link>
                <div className="title-content">
                    <Link to={`/posts/${node.slug}`}>
                        <div className="post-title">
                            {node.title}
                        </div>
                    </Link>
                    <hr />
                    <div className="post-date">{node.date}</div>
                    <div className="post-excerpt" dangerouslySetInnerHTML={{
                            __html: node.excerpt,
                    }} />
                    <div className="read-more">
                        <Link to={`/posts/${node.slug}`}>View Post</Link>
                    </div>
                </div>
            </PostItemsContainer>
    )
}

    const PostItemsContainer = styled.div`

    background-color: #F5F5F5;

    .post-image {
        align-self: center;
      

        :hover {

            img {
                width: 50%;
            }
        }
    }

    .title-content {

        padding: 3rem 3rem;

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

        .post-title {
            margin-bottom: 1rem;
            text-transform: uppercase;

            h2:active, h2:visited, h2 {
                color: #404C07;
                font-size: 2rem;
                font-weight: 100;
                letter-spacing: 0.4rem;
            }
        }

        .post-date {
            font-style: italic;
            margin-bottom: 1rem;
        }

        .post-excerpt {
            p {
                color: #777777;
            }
        }
    }
    
`

const StyledImage = styled(Img)`
    :hover {
        /* transform: scale(1) */
        object-fit: contain;
        transform: scale(1.01);
        transition: transform ease-in 0.7s;
        transition: transform ease-out 0.7s;
    }
`

export default PostListingItems;