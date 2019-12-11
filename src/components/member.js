import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { withTheme } from 'styled-components'



 const Member = ({ member, theme }) => {

    const SingleMemberWrapper = styled.div`
        .photo {
            margin: auto;
            width: 22rem;
            
            picture {
                img {
                    border-radius: 50%;
                }
            }
        }
        .name-role-wrapper {
            margin: 2rem 2rem;
            .member-name  {
                    text-align: center;
            }
            .role {
                text-align: center;
            }

        }
    `    

    return (
        <SingleMemberWrapper>
            <div className="photo">
                <Img fluid={member.node.acf.photo.localFile.childImageSharp.fluid} alt="rooted in culture members" />
            </div>
            <div className="name-role-wrapper">
                <div className="member-name">
                    <h4>{member.node.acf.full_name}</h4>
                </div>
                <div className="role">
                    <p>{member.node.acf.role}</p>
                </div>
            </div>
        </SingleMemberWrapper>
    )
}

export default withTheme(Member);