import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import PostPage from '../components/Blog/postPage'
import styled from 'styled-components'


export default class postLayout extends Component {
    render() {
      const { data } = this.props;
        return (
            <Layout>
              <PostTemplateContainer>
                <PostPage post={data.wordpressPost} />
              </PostTemplateContainer>
            </Layout>
        )
    }
}

const PostTemplateContainer = styled.div`
  /* grid-column: full-start / full-end; */
`

export const query = graphql`
  query PostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        localFile {
            childImageSharp {
              fluid(maxWidth: 1500, maxHeight: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`