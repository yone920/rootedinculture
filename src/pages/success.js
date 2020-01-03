import React from 'react'
import Layout from '../components/Layout/layout'
import styled from 'styled-components'
import { Link } from "gatsby"



 const Success = () => {
    return (
        <Layout>
            <SuccessPageContainer>
                <h1>You Message is Received!</h1>
                <p>Thank you for contacting us. We will get back to you ASAP.</p>
                <div className="link-to-homepage">
                    <Link to="/home"><button>Home Page</button></Link>
                </div>
            </SuccessPageContainer>
        </Layout>
    )
}

const SuccessPageContainer = styled.div`
    display: grid;
    padding-top: 10rem;
    justify-items: center;
    h1, p {
        text-align: center;
    }

    .link-to-homepage {
        margin-top: 10rem;

        a {
            text-decoration: none;
            width: 100%;
        }

        button {
            background: ${props => props.theme.color.primary};
            color: white;
            text-transform: uppercase;
            border: none;
            margin-top: 4rem;
            padding: 2rem 9rem;
            font-size: 1.6rem;
            font-weight: 100;
            letter-spacing: .5rem;
            display: block;
            width: 100%;
            cursor: pointer;
            border-radius: .4rem;
        }

        button:hover {
            background: "#000";
        }
    }
`

export default Success;