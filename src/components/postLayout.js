import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import TitleMenu from '../components/TitleMenu'

export default class postLayout extends Component {
    render() {
      const { data } = this.props;
        return (
            <Layout>
              <h4>{data.wordpressPost.title}</h4>
              <div dangerouslySetInnerHTML={{
                __html: data.wordpressPost.content,
              }} />
              <TitleMenu />
            </Layout>
        )
    }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      slug
      content
    }
  }
`