// import React, { useContext, Fragment } from 'react'
// import { StoreContext } from '../../context/StoreContext'
// import { animated } from 'react-spring'
// import Close from '../SVGs/close'
// import styled from 'styled-components'
// import CartList from '../Cart/cartList'
// import EmptyCart from '../Cart/emptyCart'
// import { useMediaQuery } from 'react-responsive'


// const DropDown = ({ style }) => {
//     const {  isDropDownOpen, toggleDropDownOpen } = useContext(StoreContext)
//     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })


//     return (
//         <Fragment>
//             { isTabletOrMobile ?
//             	<p>opps</p>
//             :
//             <animated.div
//                 style={{
//                 position: "fixed",
//                 top: 0,
//                 right: 0,
//                 width:  "50%",
//                 height: "100%",
//                 background: "#404C07",
//                 zIndex: 102,
//                 overflowY: "scroll",
//                 ...style
//                 }}>

//                 <CardWrapper>
//                     <h2>Catering</h2>
//                     <h2>Flower</h2>
//                     <h2>Dinner</h2>
//                 </CardWrapper>
//         </animated.div>
//         }
//         </Fragment>
//     )
// }

// // const CartStyleDesktop = css`

// // `
// // const CartStyleMobile = css`
// // transform: translateY(-3px);
// // box-shadow: 0 1rem 2rem rgba(0, 0, 255,.2);
// // `

// const CardWrapper = styled.div`
//         h3 {
//             color: white;
//         }
// `

// const CloseCartDiv = styled.div`
//     display: inline-block;
//     position: relative;
//     left: 3rem;
//     top: 3rem;
//     cursor: pointer;
// `



// export default DropDown