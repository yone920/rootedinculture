import React, { useContext } from 'react'
import { StoreContext } from '../../../context/StoreContext'
import AddCoupon from './addCoupon'
import styled from 'styled-components'


const Coupon = () => {
    const { checkout, removeCoupon } = useContext(StoreContext)



	return (
		<CouponContainer>
				{ checkout.discountApplications.length > 0 ? (
					<div className="coupon-name-div">
						<h4>Applied Coupon</h4>
						<p>
							{ checkout.discountApplications[0].code } - { checkout.discountApplications[0].value.percentage}% off
						</p>
						<button onClick={() => removeCoupon(checkout.discountApplications[0].code)} className="remove-item">Remove Coupon</button>
					</div>
					) : (
				<AddCoupon />
				)}
				<hr className="divider" />
		</CouponContainer>
	)
}

const CouponContainer = styled.div`
    .coupon-name-div {

			h4, p {
				color: #fff;
			}
        button {
            text-transform: uppercase;
            text-decoration: none;
            padding: .5rem 2rem;
            display: inline-block;
            border-radius: .5rem;
            transition: all .2s;
            position: relative;
            font-size: 1rem;
            margin-top: 1rem;
            border: none;
            color: red;
            cursor: pointer;
        }
    }

		.divider {
			margin-top: 4rem;
			color: white;
		}
`

export default Coupon;
