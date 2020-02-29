import React, { useContext, Fragment } from 'react'
import { animated } from 'react-spring'
import { StoreContext } from '../../context/StoreContext'
import styled from 'styled-components'
import Close from '../SVGs/close'
// import { Link } from "gatsby"
import { useMediaQuery } from 'react-responsive'


const CateringInquiries = ({ style }) => {

    const { toggleCateringInquiries } = useContext(StoreContext)
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
                    <MobileMenuContainer>
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
                    </MobileMenuContainer>
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
                    <MobileMenuContainer>
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
                    </MobileMenuContainer>
            </animated.div>
            }
        </Fragment>
    )
}

const MobileMenuContainer =  styled.div`
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

        button[type="submit"],
        input[type="submit"] {
        background: #ec5990;
        color: white;
        text-transform: uppercase;
        border: none;
        margin-top: 40px;
        padding: 20px;
        font-size: 16px;
        font-weight: 100;
        letter-spacing: 10px;
        }

        button[type="submit"]:hover,
        input[type="submit"]:hover {
        background: #bf1650;
        }

        button[type="submit"]:active,
        input[type="button"]:active,
        input[type="submit"]:active {
        transition: 0.3s all;
        transform: translateY(3px);
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
        padding: 10px 20px;
        border-radius: 4px;
        }

        hr {
        margin-top: 30px;
        }

        button {
        display: block;
        appearance: none;
        margin-top: 40px;
        border: 1px solid #333;
        margin-bottom: 20px;
        text-transform: uppercase;
        padding: 10px 20px;
        border-radius: 4px;
        }
    }
  }
`

export default CateringInquiries;
