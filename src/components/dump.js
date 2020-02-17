//  {/* <FeaturedImage>
//                                 <Img fluid={node.featured_media.localFile.childImageSharp.fluid} alt="rooted in culture members" />
//                             </FeaturedImage> */}

//                             {/* <Link to={`/catering/${node.slug}`}>Read More</Link> */}

//                             <form
//           onSubmit={handleSubmit}
//           name="contact"
//           method="post"
//           data-netlify="true"
//           data-netlify-honeypot="bot-field"
//           >
//       <div className="contact">
//         <label>Name</label>
//         <input
//           type="text"
//           name="First name"
//           ref={register({ required: true, maxLength: { value: 12, message: "error message" } })}
//         />
//       </div>
//       <div className="contact">
//         <label>Email</label>
//         <input
//           type="text"
//           name="Email"
//           ref={register({
//             required: true,
//             pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//           })}
//         />
//       </div>
//       <div className="contact">
//         <label>Mobile number</label>
//         <input
//           type="tel"
//           name="Mobile number"
//           ref={register({ required: true, maxLength: 11, minLength: 8 })}
//         />
//       </div>
//       <div className="contact">
//       <label>Message</label>
//         <textarea name="message"></textarea>
//       </div>
//       <div className="contact">
//         <input type="submit" />
//       </div>
//     </form>





// const LISTING_QUERY = graphql`
//     query BlogPostListing {
//         allWordpressPost(limit: 10, sort: {
//             order: DESC,
//             fields: [date]
//         }) {
//             edges {
//                 node {
//                 excerpt
//                 date(formatString: "MMMM DD, YYYY")
//                 title
//                 slug
//                 featured_media {
//                     localFile {
//                         childImageSharp {
//                           fluid(maxWidth: 1500, maxHeight: 1500) {
//                             ...GatsbyImageSharpFluid
//                           }
//                         }
//                       }
//                 }
//                 }
//             }
//         }
//     }
// `


// const Listing = (props) => (
//         <StaticQuery
//             query={LISTING_QUERY}
//             render = {({allWordpressPost}) => (
//                 allWordpressPost.edges.map(({node}) => (
//                     <ListWrapper key={node.slug}>
//                         <BorderLineWrapper>
//                             <PostImage>
//                                 <Img fluid={node.featured_media.localFile.childImageSharp.fluid} />
//                             </PostImage>
//                             <TitleBlogWrapper>
//                                 <Link to={`/posts/${node.slug}`}>
//                                     <Title>
//                                         {node.title}
//                                     </Title>
//                                 </Link>
//                                 <hr />
//                                 <Date>{node.date}</Date>
//                                 <div dangerouslySetInnerHTML={{
//                                         __html: node.excerpt,
//                                 }} />
//                                 <div className="read-more">
//                                     <Link to={`/posts/${node.slug}`}>View Post</Link>
//                                 </div>
//                             </TitleBlogWrapper>
//                         </BorderLineWrapper>
//                     </ListWrapper>
//                 ))
//             )}
//         />
// )



        {/* <BackgroundImage
                Tag="div"
                className="hero"
                fluid={backgroundFluidImageStack}
                backgroundColor={`#040e18`}
                >
                { isTabletOrMobile ? <MobileHeader /> : <Header  /> }
            <div className="hero-text">
              <h1>Catering</h1>
            </div>
          </BackgroundImage> */}