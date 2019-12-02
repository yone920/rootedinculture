import React from 'react'
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"



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


const Archive = () => (
    <StaticQuery
      query={POST_ARCHIVE_QUERY}
      render={({allMarkdownRemark}) => (
        <Layout>
          <aside>
            <h3>Archive</h3>
            <ul>
              {allMarkdownRemark.edges.map(edge => (
                <li key={edge.node.frontmatter.slug}>
                  <Link to={`./posts${edge.node.frontmatter.slug}`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </Layout>
      )}
    />
  )
  
  export default Archive
