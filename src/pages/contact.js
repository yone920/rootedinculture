import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const Contact = () => {

  const [ value,  setValue ] = useState('');
  console.log(value)
  
    const handleSubmit = e => {
      e.preventDefault()
      if (!value) return;
      // addTodo({text: value, 
      //    category_id: category});
      setValue('');
      // setForm(!form);
  }
    
  return ( 
    <Layout>
    <SEO title="Contact Us" />
    <h1>Contact Us</h1>
    <p>Welcome to Contact Us page</p>

    <form className="todo-submit" id="todo-submit" name="nfetene" onSubmit={handleSubmit}>
        <input type="text" 
          className="input" 
          onChange={(e) => {
            setValue(e.target.value)
          }} 
          value={value}  
          placeholder="Todo..."
          />
      
        <input type="submit" className="todo-add"/>
    </form>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
}

export default Contact
