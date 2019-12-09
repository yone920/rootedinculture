const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise ((resolve, reject) => {
        graphql(`
            {
                allWordpressPost {
                    edges {
                      node {
                        slug
                      }
                    }
                  }
            }
        `).then(results => {
            if (results.errors)  {
                console.log(result.errors);
                reject(result.errors)
            }
            results.data.allWordpressPost.edges.forEach(({node}) => {
                createPage ({
                    path: `/posts${node.slug}`,
                    component: path.resolve('./src/components/postLayout.js'),
                    context: {
                        slug: node.slug,
                    }
                })
            })
            resolve();
        })
    } )
}