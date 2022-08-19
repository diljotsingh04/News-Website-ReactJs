import React from 'react'
import "./Apps.css";

export const Contact = () => {
  return (
    <form className="form" >
      <h1>Contact Us 🤳</h1>
      <div className='nameee'>
        <label style={{ marginRight: 10 }}>Name:-</label>
        <input
          placeholder="Enter you name"

        />
      </div>

      <div className='emaill'>
        <label style={{ marginRight: 10, marginTop: 40 }}>Email:-</label>
        <input
          placeholder="Enter you email"

        />
      </div>

      <div >

        <textarea
          style={{ marginLeft: 10, marginTop: 20, width: 300, height: 100 , padding:"12px"}}
          placeholder="Message"


        ></textarea>
      </div>


      <button
        type="submit"

      >
        Message
      </button>
      <h2>Follow us</h2>
      <div>
        <a href='https://www.linkedin.com/in/gagandeep-singh-060187209/' target="_blank" rel="noreferrer">
          <img alt="quires" src={require("./linkdin.png")} width="30" height="30" style={{ alignContent: "center", justifyContent: "center", marginLeft: 10, marginTop: 20 }} />
        </a>
        <a href='https://www.linkedin.com/in/gagandeep-singh-060187209/' target="_blank" rel="noreferrer">
          <img alt="quires" src={require("./insta.png")} width="30" height="30" style={{ alignContent: "center", justifyContent: "center", marginLeft: 10, marginTop: 20 }} />
        </a>
      </div>
    </form>
  )
}
