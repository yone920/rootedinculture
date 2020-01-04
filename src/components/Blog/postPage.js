import React from 'react'
import styled from 'styled-components'
import SEO from '../seo'
import TitleMenu from './TitleMenu'
import Img from "gatsby-image"

 const PostPage = ( {post} ) => {
    return (
        <PostPageContainer>
                <SEO title={post.title} />
                <div className="post-title">
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                </div>
                <div className="post-image">
                    <Img fluid={post.featured_media.localFile.childImageSharp.fluid} />
                </div> 
                <div className="post-content" dangerouslySetInnerHTML={{
                    __html: post.content,
                }} />
            
                <div className="sidebar">
                    <TitleMenu />
                </div>
        </PostPageContainer>
    )
}

const PostPageContainer = styled.div`
    display: grid;
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
    padding: 8rem 0;
    /* grid-column-gap: 6rem; */
   
    @media only screen and (max-width: 425px) {
        display: grid;
        grid-template-columns: [ full-start ] minmax(2rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(2rem, 1fr) [ full-end ];
        padding: 4rem 0;
    }

        .post-title {
            grid-column: center-start / col-end 6;
            margin-bottom: 4rem;

            @media only screen and (max-width: 425px) {
                grid-column: center-start / center-end;
            }

            p {
                font-style: italic;
                color: rgba(0, 0, 0, 0.5);
            }
        }

        .post-image {
            grid-column: full-start / col-end 6;
            margin-bottom: 7rem;
            
                    
            @media only screen and (max-width: 425px) {
                grid-column: full-start / full-end;
                margin-bottom: 4rem;
            }
        }

        .post-content {
            grid-column: center-start / col-end 6;

            @media only screen and (max-width: 425px) {
                grid-column: center-start / center-end;
            }

            p {
                line-height: 28px; margin-bottom: 15px; color: #666;
            }
        }

        .sidebar {
            grid-column: col-start 7 / center-end;
            grid-row: 2 / 4;
            margin-left: 4rem;

            @media only screen and (max-width: 425px) {
                grid-column: center-start / center-end;
                grid-row: 5 / 6;
                margin: 4rem 0 0 0;
            }
        }

`

export default PostPage;