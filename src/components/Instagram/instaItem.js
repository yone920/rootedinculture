import React from 'react'
import Img from "gatsby-image"
import styled from 'styled-components'


 const InstaItem = ( { post } ) => {
    return (
        <a href={post.localFile.url}> 
        <InstaItemContainer>
                <Img fluid={post.localFile.childImageSharp.fluid} />
                <div class="overlay">
                    <div class="text">{post.likes}</div>
                </div>
        </InstaItemContainer>
        </a>
    )
}

const InstaItemContainer = styled.div`
        align-self: center;
        position: relative;

        :hover  .overlay {
            opacity: 1;
            /* background-color: rgba(64, 76, 7, 0.541); */
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
                color: #fff;
            }
            }
`

export default InstaItem;
