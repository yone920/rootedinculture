import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Close from '../SVGs/close'
import styled from 'styled-components'
import { navigate } from 'gatsby-link'
import { withTheme } from 'styled-components'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


const InquiryForm = () => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  console.log(state);


  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  const { toggleCateringInquiries } = useContext(StoreContext)

	console.log()

  return (
    <InquiryContainer>
      <div onClick={toggleCateringInquiries}>
            <Close />
      </div>
      <div className="inquiry-wrapper">
          <form
              name="InquiryForm"
              method="post"
              action="/success/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="InquiryForm" />
              <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <div className="inquiry">
                  <label htmlFor="name">First Name</label>
                  <input type="text" name="name" id="name" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" name="last-name" id="lsat-name" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="company-name">Company Name</label>
                  <input type="text" name="company-name" id="company-name" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="email">Company Email</label>
                  <input type="text" name="email" id="email" onChange={handleChange}/>
              </div>
              <div className="inquiry">
                  <label htmlFor="phone">Company Phone Number</label>
                  <input type="tel" name="phone" id="phone" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="date">Date of the event</label>
                  <input type="date" name="date" id="date" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="time">Time of the event</label>
                  <input type="time" name="time" id="time" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="address">Venue Address</label>
                  <input type="address" name="address" id="address" onChange={handleChange} />
              </div>
              <div className="inquiry">
                  <label htmlFor="city">City</label>
                  <input type="city" name="city" id="city" onChange={handleChange} />
              </div>
              <div className="inquiry">
              <label htmlFor="state">State</label>
              <select name="state" className="inquiry" onChange={handleChange}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              </div>
              <div className="inquiry">
                <label htmlFor="service-entrance">Service Entrance?</label>
                <select name="service-entrance" className="service-entrance" onChange={handleChange}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="inquiry">
                <label htmlFor="service-elevator">Service elevator on the premises?</label>
                <select name="service-elevator" className="service-elevator" onChange={handleChange}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="inquiry">
                <label htmlFor="service-kitchen">Service Kitchen Available?</label>
                <select name="service-kitchen" className="service-kitchen" onChange={handleChange}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="inquiry">
                {/* <div>
                  <input type="checkbox" id="scales" name="scales" onChange={handleChange} />
                  <label htmlFor="scales">Drop-Off Only</label>
                </div>
                <div>
                  <input type="checkbox" id="horns" name="horns" onChange={handleChange} />
                  <label htmlFor="horns">Drop-Off and Set-up</label>
                </div>
                <div>
                  <input type="checkbox" id="horns" name="horns" onChange={handleChange} />
                  <label htmlFor="horns">Full Service htmlFor the Duration of the Event</label>
                </div> */}
              </div>

              <div className="inquiry">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="6" required onChange={handleChange} />
              </div>
              <div className="inquiry">
                <button type="submit">Send</button>
              </div>
          </form>
      </div>
    </InquiryContainer>
  )
}

const InquiryContainer =  styled.div`
    margin: 3rem;

    .inquiry-wrapper {
				form {
						max-width: 500px;
						margin: 0 auto;
				}

    .inquiry {

        input {
        display: block;
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        }

        textarea {
        display: block;
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        }

        label {
        line-height: 2;
        text-align: left;
        display: block;
        margin-bottom: 13px;
        margin-top: 20px;
        color: white;
        font-size: 14px;
        font-weight: 200;
        }

        input:disabled {
        opacity: 0.4;
        }

        input[type="button"]:hover {
        transition: 0.3s all;
        }

        button[type="submit"],
        input[type="button"],
        input[type="submit"] {
        -webkit-appearance: none;
        }

        button {
					display: inline-block;
					width: 100%;
					background-color: ${props => props.theme.color.secondary};
					text-align: center;
					padding: 2rem 2rem;
					text-decoration: none;
					color: white;
					text-transform: uppercase;
					border-radius: .5rem;
					cursor: pointer;
					border: none;
        	margin: 6rem 0;
					:hover {
        	background-color: white;
					color: ${props => props.theme.color.secondary};
	        }

        hr {
        margin-top: 30px;
        }
				}

    }
  }
`


export default withTheme(InquiryForm);