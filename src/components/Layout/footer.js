import React from 'react'
import styled from 'styled-components'
import Facebook from '../../images/svg/facebookIcon.svg'
import Instagram from '../../images/svg/instagramIcon.svg'
import Twitter from '../../images/svg/twitterIcon.svg'

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="line">
                <hr />
            </div>
            <div className="social-media">
                <div>
                    Follow Us:
                </div> 
                <div className="social-media-icons-wrapper">
                    <a href="https://www.instagram.com/rootedincultureflowers">
                        <img src={Facebook} alt="Our Address Icon"></img>
                    </a>
                    <a href="https://www.instagram.com/rootedincultureflowers">
                        <img src={Instagram} alt="Our Address Icon"></img>
                    </a>
                    <a href="https://www.instagram.com/rootedincultureflowers">
                        <img src={Twitter} alt="Our Address Icon"></img>
                    </a>
                </div>
            </div>
            <div>
                Rooted In Culture © {new Date().getFullYear()},
            </div>
            <div className="yone-design">
                Web Development - <a href="http://www.yonedesign.com">Yone Design</a>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    padding: 3rem;
    text-align: center;

    .line {
        padding-bottom: 4rem;
        hr {
            width: 50%;
            margin: auto;
            border: 0;
            height: 1px;
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
        }
    }

    .social-media {
        display: flex;
        flex-direction: column;

        .social-media-icons-wrapper {
            padding: 2rem 0;
        }

        a {
            margin-right: 0.4rem;
            width: 16rem;

            img {
                width: 3rem;
            }
        }
    }

    .yone-design {
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.56);

        a {
            color: rgba(0, 0, 0, 0.56);
            text-decoration: none;
            :hover {
                color: black;
            }
        }
    }

`

export default Footer;