import React from 'react'
import Img from 'gatsby-image'

 const Member = ({ member }) => {
    return (
        <div className="single-member">
            <div className="name">
                <h4>
                    {member.node.acf.full_name}
                </h4>
            </div>
            <div className="role">
                <h5>
                    {member.node.acf.role}
                </h5>
            </div>
            <div className="photo">
                <Img fluid={member.node.acf.photo.localFile.childImageSharp.fluid} alt="rooted in culture members" />
            </div>
        </div>
    )
}

export default Member;