import React from 'react'
// import { withTheme } from 'styled-components'
import styled from 'styled-components'

 const ShippingInfo = ({info}) => {
  console.log('info:', info)
  return (
    <ShippingContainer>
      <div className="shipping-info"
        dangerouslySetInnerHTML={{
          __html: info.content,
        }}
      />
    </ShippingContainer>
  )
}

const ShippingContainer = styled.div`
  background-color: #E5E5E5;
  padding: 7rem 7rem;
`

export default ShippingInfo;