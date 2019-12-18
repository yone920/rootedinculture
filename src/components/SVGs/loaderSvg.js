import React from 'react'
import Heart from '../../images/svg/heart.svg'
import styled from 'styled-components'

 const LoaderSvg = () => {
    return (
        <LoaderSvgContainer>   
            <img alt="" src={Heart} ></img>
        </LoaderSvgContainer>
    )
}

const LoaderSvgContainer = styled.div`
    width: 8rem;
    height: 8rem;
    
    img {
        width: 100%;
    }
`

export default LoaderSvg;