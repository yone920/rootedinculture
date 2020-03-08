import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout/layout'
import styled, { withTheme } from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import AddressIcon from '../images/svg/address.svg'
import PhoneIcon from '../images/svg/phone.svg'
import EmailIcon from '../images/svg/email.svg'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactPage = () => {
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

  const data = useStaticQuery(graphql`
  query ContactPageDataQuery {
    contactContent: wordpressPage(slug: {eq: "contact-us"}) {
      content
      acf {
        email
        tele
        address
      }
    }
  }
`)

  console.log(state);


  return (
    <Layout>
        <ContactPageContainer>
            <div className="contact-line-wrapper">
              <div className="blog-heading">
                  <h2>Contact Us</h2>
              </div>
              <div className="line">
                <hr />
              </div>
          </div>
            <div className="contact-form-wrapper">
                <form
                    name="contactPage"
                    method="post"
                    action="/success/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contactPage" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                    </p>
                    <p className="contact">
                        <label htmlFor="name">Your name: </label>
                        <input type="text" name="name" onChange={handleChange} />
                    </p>
                    <p className="contact">
                        <label htmlFor="email">Your email: </label>
                        <input type="email" name="email" onChange={handleChange} />
                    </p>
                    <p className="contact">
                        <label>Message: </label>
                        <textarea name="message" onChange={handleChange} />
                    </p>
                    <p className="contact">
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
            <div className="contact-detail-wrapper">
                <div className="contact-box-wrapper">
                  <div className="our-address contact-box">
                      <div className="our-address-icon icon">
                        <img src={AddressIcon} alt="Our Address Icon"></img>
                      </div>
                      <div>
                        <p>{data.contactContent.acf.address}</p>
                      </div>
                  </div>
                  <div className="our-tele contact-box">
                      <div className="our-tele-icon icon">
                        <img src={PhoneIcon} alt="Our Address Icon"></img>
                      </div>
                      <div>
                        <p>{data.contactContent.acf.tele}</p>
                      </div>
                  </div>
                  <div className="our-email contact-box">
                      <div className="our-email-icon icon">
                        <img src={EmailIcon} alt="Our Address Icon"></img>
                      </div>
                      <div>
                        <p>{data.contactContent.acf.email}</p>
                      </div>
                  </div>
                </div>
                <div className="contact-us-message">
                    <div dangerouslySetInnerHTML={{
                          __html: data.contactContent.content,
                      }} >
                    </div>
                </div>
            </div>
      </ContactPageContainer>
    </Layout>
  )
}

const ContactPageContainer = styled.div`
    display: grid;
    grid-template-columns: [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(8, [col-start] minmax(min-content, 13rem) [ col-end ]) [center-end] minmax(4rem, 1fr) [ full-end ];
    padding: 4rem 0;

    .contact-line-wrapper {
        grid-column: center-start / center-end;
        text-align: center;
        margin-bottom: 2rem;
        grid-column: center-start / center-end;
        display: flex;
        flex-direction: column;
        justify-items: center;
        padding: 0 0 2rem 0;

        .blog-heading {
          grid-column: full-start / full-end;
          text-align: center;
      }

      .line {
        width: 25rem;
        margin: 1rem auto;

          hr {
            border: 0;
            height: 1px;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
          }
      }

    }

    .contact-form-wrapper {
        grid-column: center-start  / col-end 4;

        @media ${props => props.theme.device.mobileL} {
          grid-column: center-start  / center-end;
        }
    }

    .contact-detail-wrapper {
        grid-column: col-end 5 / center-end;
        padding: 6rem 0;

        @media ${props => props.theme.device.mobileL} {
          grid-column: center-start  / center-end;
        }

      .contact-box-wrapper {

          margin-bottom: 4rem;

          .icon {
            margin-right: 2rem;
          }
          .contact-box {
            display: flex;
          }
          .contact-us-message {
            margin-bottom: 4rem;
          }
      }

    }

  form {
  max-width: 50rem;
  margin: 0 auto;
}

.contact {

    input {
      display: block;
      box-sizing: border-box;
      width: 100%;
      border-radius: .4rem;
      border: .1rem solid #ccc;
      padding: 1rem 1.5rem;
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }

    textarea {
      display: block;
      box-sizing: border-box;
      width: 100%;
      border-radius: .4rem;
      border: .1rem solid #ccc;
      padding: 1rem 1.5rem;
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }

    label {
      line-height: 2;
      text-align: left;
      display: block;
      margin-bottom: 1.3rem;
      margin-top: 2rem;
      color: black;
      font-size: 1.4rem;
      font-weight: 200;
    }

    button[type="submit"],
    input[type="submit"] {
      background: ${props => props.theme.color.primary};
      color: white;
      text-transform: uppercase;
      border: none;
      margin-top: 4rem;
      padding: 2rem;
      font-size: 1.6rem;
      font-weight: 100;
      letter-spacing: 1rem;
      display: block;
      width: 100%;
    }

    button[type="submit"]:hover,
    input[type="submit"]:hover {
      background: ${props => props.theme.color.secondary};
    }

    button[type="submit"]:active,
    input[type="button"]:active,
    input[type="submit"]:active {
      transition: 0.3s all;
      transform: translateY(.3rem);
      border: 1px solid transparent;
      opacity: 0.8;
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

    button[type="button"] {
      display: block;
      appearance: none;
      background: #333;
      color: white;
      border: none;
      text-transform: uppercase;
      padding: 1rem 2rem;
      border-radius: .4rem;
    }

    hr {
      margin-top: 3rem;
    }

    button {
      display: block;
      appearance: none;
      margin-top: 4rem;
      border: .1rem solid #333;
      margin-bottom: 2rem;
      text-transform: uppercase;
      padding: 1rem 2rem;
      border-radius: .4rem;
    }
}
`

export default withTheme(ContactPage);