import React from 'react'

export default function SvgArrowDown() {
    return (
        <div>
            <svg width="48" height="48" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V11H4L9.06 17L14 11H10V1H8Z" fill="#212B36"/>
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="1" width="10" height="16">
                <path d="M8 1V11H4L9.06 17L14 11H10V1H8Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                <rect width="18" height="18" rx="4" fill="#fff"/>
                </g>
            </svg>
        </div>
    )
}
