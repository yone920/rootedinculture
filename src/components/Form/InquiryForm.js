import React, { useContext, Fragment } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Close from '../SVGs/close'
const InquiryForm = () => {

  const { toggleCateringInquiries } = useContext(StoreContext)

  return (
    <Fragment>
      <div onClick={toggleCateringInquiries}>
            <Close />
        </div>
        <div className="inquiry-wrapper">
            <form
                name="catering-inquiries"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact2" />
                <div className="inquiry">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                    </div>
                <div className="inquiry">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="inquiry">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6" required />
                </div>
                <div className="inquiry">
                    <input type="submit" value="Drop a line" />
                    <input type="reset" value="Eraser" />
                </div>
            </form>
        </div>
    </Fragment>
  )
}

export default InquiryForm;