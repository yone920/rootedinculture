import React, { useContext, useState } from 'react'
import { StoreContext } from '../../../context/StoreContext'

const AddCoupon = () => {
    const [ coupon, setCoupon ] = useState('')
    const {  addCoupon } = useContext(StoreContext)

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                addCoupon(coupon)
            }}>
                <div className="coupon-label-div">
                    <label htmlFor="coupon" className="coupon-label">Coupon</label>
                </div>
                <input name="coupon" id="coupon" value={coupon} onChange={e => setCoupon(e.target.value)} type="text"/>
                <button>Add Coupon</button>
            </form>
        </div>
    )
}


export default AddCoupon