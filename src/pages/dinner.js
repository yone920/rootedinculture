import React, { useState } from "react"
import { withTheme } from "styled-components"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import HomeSlider from "../components/HomeSlider"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import addToMailchimp from 'gatsby-plugin-mailchimp'


const Dinner = props => {
  const data = useStaticQuery(graphql`
    query PageDinnerData {
      dinnerContent: wordpressPage(slug: { eq: "dinner" }) {
        title
        content
      }

      slider: allWordpressWpDinnerSlider(sort: {fields: acf___order, order: ASC}) {
        edges {
          node {
            id
            acf {
              photo {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, maxHeight: 600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }

      mobileSlider: allWordpressWpDinnerSlider(sort: {fields: acf___order, order: ASC}) {
        edges {
          node {
            id
            acf {
              photo {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1500, maxHeight: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  //
  // --------------------- Main Chimp ---------------------- //
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    // Mailchimp always responds with status code 200, accompanied by a string indicating the result of the response.
    const { result, msg } = await addToMailchimp(email);
    result === 'success' && setEmail('');
    // Removes the HTML returned in some response messages in case of error
    setMessage(msg.split('<')[0]);
    setStatus(result);
  };

  const handleChange = event => setEmail(event.target.value);



  // --------------------- Final Render ---------------------- //

  return (
    <Layout>
      <SEO title="Dinner Arrangement" />
      <DinnerContainer>
        <div className="slider-container">
          <HomeSlider desktop={data.slider} mobile={data.mobileSlider} />
        </div>
        <div className="content-wrapper">
          <div className="catering-title">
            <h2> {data.dinnerContent.title} </h2>
          </div>
          <HeaderLine>
            <hr />
          </HeaderLine>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: data.dinnerContent.content,
            }}
          />
        </div>
        <Subscribe as="div">
          <form className="form">
            <span className="form__header">Subscribe for latest updates</span>
            <p className="form__info">
              Sign Up for our newsletter and get notified when we setup dinner parties!
            </p>
            <Fields as="div">
              <div className="fields">
                <input
                  className="fields__input"
                  type="email"
                  onChange={handleChange}
                  value={email}
                  placeholder="example@domain.com"
                  required
                />
              </div>
              <button className="button" type="submit" onClick={handleSubmit}>
                Subscribe
              </button>
              <span
                status={status}
                className={
                  status === 'success' ? "fields__sucess" : "fields__failed"
                }
              >
                {message}
              </span>
            </Fields>
          </form>
        </Subscribe>
      </DinnerContainer>
    </Layout>
  )
}

// =============== Styled Components  ================= ///
const grid = styled.main`
  display: grid;
  grid-template-columns:
    [ full-start ] minmax(4rem, 1fr) [center-start ] repeat(
      8,
      [col-start] minmax(min-content, 13rem) [ col-end ]
    )
    [center-end] minmax(4rem, 1fr) [ full-end ];
`

const DinnerContainer = styled(grid)`
  /* grid-template-rows: 70vh min-content; */
  margin-bottom: 8rem;

  .slider-container {
    grid-column: full-start / full-end;
    margin-bottom: 3rem;
  }

  .content-wrapper {
    grid-column: center-start / center-end;
    justify-items: center;
    margin: 8rem 0;

    @media ${props => props.theme.device.mobileL} {
      margin: 4rem 0;
    }
    .catering-title {
      text-align: center;
      margin-bottom: 3rem 0;
    }

    .content {
      margin: 0 auto;
      width: 80%;
      /* text-align: center; */

      @media ${props => props.theme.device.mobileL} {
        width: 100%;
      }
    }
  }
`
const Subscribe = styled(grid)`
  grid-column: full-start / full-end;
  background-color: ${props => props.theme.color.primary};

  .form {
    grid-column: center-start / center-end;
    margin: 0 auto;
    width: 80%;
    padding: 10rem 0;
    color: #fff;

    &__header {
      font-size: 3rem;
    }

    &__info {
      margin-bottom: 5rem;
    }
  }

`

const Fields = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media ${props => props.theme.device.tablet} {
    grid-template-columns: 1fr;
  }

  .fields {
    margin-right: 2rem;
    @media ${props => props.theme.device.tablet} {
      margin-bottom: 2rem;
      margin-right: 0;
    }

    &__input {
      width: 100%;
      border: 1px solid #ccc;
      box-shadow: inset 0 1px 3px #ddd;
      border-radius: 4px;
      padding: 12px 20px;
      font-size: 1.7rem;
    }

    &__succes {
      color: #fff;
      margin-top: 2rem
    }
    &__failed {
      background-color: red;
      margin-top: 2rem;
      margin-right: 2rem;
      @media ${props => props.theme.device.tablet} {
        margin-right: 0;
      }
      /* width: 90%; */
    }
  }

  .button {
    font-size: 1.7rem;
    display: inline-block;
    background-color: ${props => props.theme.color.secondary};
    text-align: center;
    padding: 12px 20px;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    :hover {
      background-color: #F66B4C;
      color: #fff;
    }
  }

`


const HeaderLine = styled.div`
  width: 25rem;
  margin: 1rem auto 3rem auto;

  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }
`

export default withTheme(Dinner)
