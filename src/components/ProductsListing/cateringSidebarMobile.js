// import React from 'react'
// import Slider from "react-slick";
// // import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from 'styled-components'
// // import { useMediaQuery } from 'react-responsive'

//  const CateringSidebarMobile = ({ data }) => {
// // debugger

// // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })

// 	const settings = {
// 		className: "center",
// 		infinite: true,
// 		centerPadding: "60px",
// 		slidesToShow: 5,
// 		swipeToSlide: true,
// 		afterChange: function(index) {
// 			console.log(
// 				`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
// 			);
// 		}
// 	};


//     const mapOverCollections = () => (
// 			data.allShopifyCollection.edges.map(node => (
// 				<div key={node.id}>
// 					<p>{node.title}</p>
// 					{/* <Img fluid={node.node.acf.photo.localFile.childImageSharp.fluid} /> */}
// 				</div>
// 			))
//     )

//     return (
// 			<SliderWrapper>
// 				<Slider {...settings}>
// 					{mapOverCollections()}
// 				</Slider>
//       </SliderWrapper>
//     )
// }

// const SliderWrapper = styled.div`

//     .slid-div {
//         background-color: black;
//     }
// `

// export default CateringSidebarMobile;
