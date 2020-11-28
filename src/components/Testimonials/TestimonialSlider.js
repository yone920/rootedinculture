import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

 const TestimonialSlider = ({testimonials}) => {

  const settings = {
    dots: true,
    swipeToSlide: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    adaptiveHeight: true,
    beforeChange: function(currentSlide, nextSlide) {
    },
    afterChange: function(currentSlide) {
    }
  };


    const mapmOverTestimonials = () => (

			testimonials.edges.map(node => (
				<div className="single-testimonial" key={node.node.acf.reviewer}>
					<p>{node.node.acf.review}</p>
					<h4>{node.node.acf.reviewer}</h4>
				</div>
			))
    )

    return (
			<SliderWrapper>
				<Slider {...settings}>
					{mapmOverTestimonials()}
				</Slider>
      </SliderWrapper>
    )
}

const SliderWrapper = styled.div`

    .single-testimonial {
      padding: 0 33rem;

      @media ${props => props.theme.device.tablet} {
        padding: 0 4rem;
      }

      h4 {
        margin-top: 4rem;
        color: #ffF;
      }
    }


`

export default TestimonialSlider;
