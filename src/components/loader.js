import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { animated, useTransition } from 'react-spring'
import LoaderSvg from '../components/SVGs/loaderSvg'


const Loader = () => {
    const { isLoading } = useContext(StoreContext)

    const transitions = useTransition(isLoading, null , {
        from: { transform: "translate3d(0%, 0, 0)", opacity: 0, },
        enter: { transform: "translate3d(0%, 0, 0)", opacity: 1 },
        leave: { transform: "translate3d(0%, 0, 0)", opacity: 0 },
    }) 

    return transitions.map(({ item, key, props }) => 
         item &&  (
            <animated.div
            key={key}
            style={{ 
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(211, 74, 1, 1)",
                zIndex: 1000,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ...props 
                }}>
                <LoaderSvg />
        </animated.div>
        )
    )
}

export default Loader;