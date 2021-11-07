import React from "react"
import styled from "styled-components"
import { withTheme } from "styled-components"
import Img from "gatsby-image"
import Button from "../components/Button/button"
import { Link } from "gatsby"

const Service = props => {
  console.log("props:", props)
  return (
    <ServiceWrapper>
      <div className="post-image">
        <StyledImage
          fluid={props.service.node.acf.photo.localFile.childImageSharp.fluid}
        />
        <div className="overlay">
          <div className="text ButtonDiv">
            {props.home ? (
              <Link
                className={"className"}
                to={`${props.service.node.acf.link}`}
              >
                <p>{props.service.node.title}</p>
              </Link>
            ) : (
              <Button
                link={`${props.service.node.acf.link}`}
                title={props.service.node.title}
              />
            )}
          </div>
        </div>
      </div>
    </ServiceWrapper>
  )
}

const StyledImage = styled(Img)``

const ServiceWrapper = styled.div`
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
      background-color: #f66b4c;
      color: #fff;
    }

    p {
      font-size: 1.3rem;
      line-height: 1;
      line-height: 1.5;
    }
  }

  .secondary {
    background-color: ${props => props.theme.color.primary};

    :hover {
      background-color: rgba(64, 76, 7, 0.88);
    }
  }

  @media ${props => props.theme.device.mobileL} {
    margin-bottom: 2rem;
  }

  .post-image {
    align-self: center;
    position: relative;

    :hover .overlay {
      opacity: 1;
      background-color: rgba(207, 74, 44, 0.425);
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: 0.5s ease;
      display: flex;
      justify-content: center;
      align-items: center;

      .text {
        flex: 1;
        margin: 0 4rem;
      }
    }
  }
`

export default withTheme(Service)
