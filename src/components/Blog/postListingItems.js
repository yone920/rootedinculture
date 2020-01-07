import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import PlusSvg from '../../images/svg/plus.svg'


 const PostListingItems = ({ node }) => {



    return (
            <PostItemsContainer>
                <Link to={`/posts/${node.slug}`}>
                    <div className="post-image">
                        <StyledImage fluid={node.featured_media.localFile.childImageSharp.fluid} />
                        <div class="overlay">
                            <div class="text"><img src={PlusSvg} alt="click to view post"></img></div>
                        </div>
                    </div>
                </Link>
                <div className="title-content">
                    <Link to={`/posts/${node.slug}`}>
                        <div className="post-title">
                            <h2>{node.title}</h2>
                        </div>
                    </Link>
                    <hr />
                    <div className="post-date"><p>{node.date}</p></div>
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
        position: relative;

        :hover  .overlay {
            opacity: 1;
        }
        
        .overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .5s ease;
            background-color: #cf4a2c9c;
            display: flex;
            justify-content: center;
            align-items: center;

            .text {
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
            margin-top: 2rem;

            a:active,
            a:visited,
            a {
                color: #404C07;
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

            p {
                color: black;
            }
        }

        .post-excerpt {
            p {
                color: #777777;
            }
        }
    }
    
`

const StyledImage = styled(Img)`
   
`

export default PostListingItems;