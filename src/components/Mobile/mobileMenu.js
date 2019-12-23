import React, { useContext, Fragment } from 'react'
import { animated } from 'react-spring'
import { StoreContext } from '../../context/StoreContext'


 const MobileMenu = ({ style }) => {

    const { toggleMobileMenu } = useContext(StoreContext)

    return (
        <Fragment>
            <animated.div
            style={{ 
                position: "fixed",
                top: 0,
                right: 0,
                width:  "100%",
                height: "100%",
                background: "#404C07",
                zIndex: 102,
                overflow: "scroll",
                ...style 
                }}>
            <button onClick={toggleMobileMenu}>Close</button>
            <p>Hi from Header</p>
            </animated.div>
        </Fragment>
    )
}

export default MobileMenu;