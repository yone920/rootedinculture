import React from 'react'
import { withTheme } from 'styled-components'
// import styled, { css } from 'styled-components'

const Reservation = (props) => {
    return (
        <div>
            <form 
                method="post" 
                netlify-honeypot="bot-field" 
                data-netlify="true"
                >
                <input type="hidden" name="bot-field" />
                <label>
                    Name
                <input type="text" name="name" id="name" />
                </label>
                <label>
                    Email
                <input type="email" name="email" id="email" />
                </label>
                <label>
                    Subject
                <input type="text" name="subject" id="subject" />
                </label>
                <label>
                    Message
                <textarea name="message" id="message" rows="5" />
                </label>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
            </form>
        </div>
    )
}

export default withTheme(Reservation)