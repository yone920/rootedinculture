import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'


const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(limit: 5, sort: {
    order: DESC,
    fields: [frontmatter___date]
  }) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`


export default function archive() {
    <StaticQuery 
        query = {POST_ARCHIVE_QUERY}
        render={({allMarkdownRemark}) => (
            <>
                <aside>
                    <h3>Archive</h3>
                    <ul>
                        {allMarkdownRemark.edge.map(edge => (
                            <li key={edge.node.frontmatter.slug}>
                                {edge.node.frontmatter.title}
                            </li>
                        ))}
                    </ul>
                </aside>
            </>
        )}
        />

        }

