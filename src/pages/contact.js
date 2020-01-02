import React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register } = useForm();
  // const onSubmit = data => {
  //   alert(JSON.stringify(data));
  // };
  // console.log(errors);
  // onSubmit={handleSubmit(onSubmit)}

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  return (
    <Layout>
      <SEO title="Contact Us" />
      <ContactPageContainer>
      <form name="contact" method="POST" data-netlify="true">
        <div className="contact">
          <label>Your Name: <input type="text" name="name" /></label>   
        </div>
        <div className="contact">
          <label>Your Email: <input type="email" name="email" /></label>
        </div>
        <div className="contact">
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </div>
        <div className="contact">
          <label>Message: <textarea name="message"></textarea></label>
        </div>
        <div className="contact">
          <button type="submit">Send</button>
        </div>
      </form>
    </ContactPageContainer>
    </Layout>
  );
}

const ContactPageContainer = styled.div`
  form {
  max-width: 500px;
  margin: 0 auto;
}

.contact {

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
  color: black;
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
`


export default Contact
