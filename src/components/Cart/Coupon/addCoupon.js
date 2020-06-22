import React, { useContext, useState } from 'react'
import { StoreContext } from '../../../context/StoreContext'
import styled from 'styled-components'

const AddCoupon = () => {
    const [ coupon, setCoupon ] = useState('')
    const {  addCoupon } = useContext(StoreContext)

	return (
		<CouponForm>
			<form onSubmit={(e) => {
				e.preventDefault()
				addCoupon(coupon)
			}}>
				<input name="coupon" id="coupon" value={coupon} onChange={e => setCoupon(e.target.value)} type="text" placeholder="Coupon code"/>
				<button>Add Coupon</button>
			</form>
		</CouponForm>
	)
}

const CouponForm = styled.div`
	form {
		input {
			display: block;
			box-sizing: border-box;
			width: 50%;
			border-radius: .4rem;
			border: .1rem solid #ccc;
			padding: 0.5rem 1.5rem;
			margin-bottom: 1rem;
			font-size: 1.4rem;
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
`


export default AddCoupon