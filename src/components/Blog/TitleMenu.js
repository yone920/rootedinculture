import React from 'react'
import { Link } from "gatsby"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'


const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allWordpressPost(limit: 15, sort: {
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
        <BlogSidebarContainer>
          <div className="archive-header">
            <h3>Archive</h3>
          </div>
          <div className="blog-title-list">
            <ul>
              {allWordpressPost.edges.map(edge => (
                <li key={edge.node.slug}>
                  <Link to={`./posts/${edge.node.slug}`}>
                    {edge.node.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </BlogSidebarContainer>
    )}
  />
)

const BlogSidebarContainer = styled.aside`

    .archive-header {
      background-color: #404C07;
      padding-left: 2rem;
      h3 {
        color: #fff;

      }
    }

    .blog-title-list {
      padding: 2rem 0 0 2rem;

      ul {

        li {
          list-style-type: none;
          a:visited,
          a {
            text-decoration: none;
            color: rgba(0, 0, 0, 0.7);
          }
          a:hover {
            color: #000;
          }
        }
      }
    }
`

export default TitleMenu