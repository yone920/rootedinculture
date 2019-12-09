import React from 'react'
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allWordpressPost(limit: 5, sort: {
    order: DESC,
    fields: [date]
  }) {
      edges {
        node {
          
            title
            slug
          
        }
      }
    }
  }
`

const TitleMenu = () => ( 
    <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allWordpressPost}) => (
        <aside>
          <h3>Archive</h3>
          <ul>
            {allWordpressPost.edges.map(edge => (
              <li key={edge.node.slug}>
                <Link to={`./posts${edge.node.slug}`}>
                  {edge.node.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
    )}
  />
)



export default TitleMenu