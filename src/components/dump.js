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