import React from "react"
import { withTheme } from "styled-components"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = ({ link, title, external }) => {
  return (
    <ButtonDiv>
      {external ? (
        <a className="external" href={link}>
          <p>{title}</p>
        </a>
      ) : (
        <Link to={`/${link}`}>
          <p>{title}</p>
        </Link>
      )}
    </ButtonDiv>
  )
}

const ButtonDiv = styled.div`
  a {
    display: inline-block;
    width: 100%;
    background-color: ${props => props.theme.color.secondary};
    text-align: center;
    padding: 2rem 2rem;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    :hover {
      background-color: #fff;
      color: ${props => props.theme.color.secondary};
    }

    p {
      font-size: 1.3rem;
      line-height: 1;
    }
  }

  .external {
    display: inline-block;
    width: 100%;
    background-color: #eaa001;
    text-align: center;
    padding: 2rem 2rem;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    border-radius: 0.5rem;
    cursor: pointer;
    border: none;
    :hover {
      background-color: #fff;
      color: ${props => props.theme.color.secondary};
    }

    p {
      font-size: 1.3rem;
      line-height: 1;
    }
  }
`

export default withTheme(Button)
