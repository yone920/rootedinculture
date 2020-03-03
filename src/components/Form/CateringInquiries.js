import React, { Fragment } from 'react'
import { animated } from 'react-spring'
// import { StoreContext } from '../../context/StoreContext'
import InquiryForm from '../../components/Form/InquiryForm'
// import Close from '../SVGs/close'
// import { Link } from "gatsby"
import { useMediaQuery } from 'react-responsive'


const CateringInquiries = ({ style }) => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <Fragment>
            {isTabletOrMobile ?
            <animated.div
            style={{
                position: "fixed",
                top: 0,
                // marginLeft: "10%",
                width:  "100%",
                height: "100%",
                background: "#404C07",
                zIndex: 102,
                overflow: "scroll",
                ...style
                }}>
                <InquiryForm />
            </animated.div>
            :
            <animated.div
            style={{
                position: "fixed",
                top: 0,
                marginLeft: "17.5%",
                marginRight: "17.5%",
                // marginLeft: "10%",
                width:  "65%",
                height: "100%",
                background: "#404C07",
                zIndex: 102,
                overflow: "scroll",
                ...style
                }}>
                    <InquiryForm />
            </animated.div>
            }
        </Fragment>
    )
}


export default CateringInquiries;
