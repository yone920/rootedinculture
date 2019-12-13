import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import TitleMenu from '../components/TitleMenu'

export default class menuLayout extends Component {

  state = {
    menuHover: false
  }

   handleHover = () => {
    this.setState({
      menuHover: !this.state
    })
  }
  
  
  render() {
    console.log(this.state.menuHover)
      const { data } = this.props;
        return (
            <Layout>
              <div onMouseEnter={this.handleHover}>
               <h4>{data.wordpressWpMenu.title}</h4>
              {/* <div dangerouslySetInnerHTML={{
                __html: data.wordpressPost.content,
              }} /> */} */}

              </div>
            </Layout>
        )
    }
}

export const query = graphql`
  query MenuQuery($slug: String!) {
    wordpressWpMenu(slug: { eq: $slug }) {
      title
      slug
      
    }
  }
`