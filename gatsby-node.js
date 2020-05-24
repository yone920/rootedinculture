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
                allWordpressWpMenu {
                edges {
                    node {
                    slug
                    }
                    }
                }
                allShopifyProduct {
                    edges {
                      node {
                          handle
                          id
                      }
                      }
										}
								allShopifyCollection {
									edges {
										node {
											title
											handle
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
                    path: `/posts/${node.slug}`,
                    component: path.resolve('./src/template/postTemplate.js'),
                    context: {
                        slug: node.slug,
                    }
                })
            })

            results.data.allWordpressWpMenu.edges.forEach(({node}) => {
                createPage ({
                    path: `/catering/${node.slug}`,
                    component: path.resolve('./src/template/cateringMenuTemplate.js'),
                    context: {
                        slug: node.slug,
                    }
                })
            })

            results.data.allShopifyProduct.edges.forEach(({node}) => {
                createPage ({
                    path: `/flower/${node.handle}`,
                    component: path.resolve('./src/template/productTemplate.js'),
                    context: {
                        id: node.id,
                        handle: node.handle
                    }
                })
						})

            results.data.allShopifyCollection.edges.forEach(({node}) => {
                createPage ({
                    path: `/shop/${node.handle}`,
                    component: path.resolve('./src/template/collectionTemplate.js'),
                    context: {
                        id: node.id,
                        handle: node.handle
                    }
                })
            })
            resolve();
        })
    } )
}