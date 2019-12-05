import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import TitleMenu from '../components/TitleMenu'

export default class postLayout extends Component {
    render() {
      const { markdownRemark } = this.props.data;
        return (
            <Layout>
              <h4>{markdownRemark.frontmatter.title}</h4>
              <div dangerouslySetInnerHTML={{
                __html: markdownRemark.html
              }} />
              <TitleMenu />
            </Layout>
        )
    }
}

export const query = graphql`
    query PostQuery($slug: String!) {   
            markdownRemark(frontmatter: {
              slug: {
                eq: $slug
              }
            }) {
                  html
              frontmatter {
                      title
                date
                slug
              }
            }    
    }
`