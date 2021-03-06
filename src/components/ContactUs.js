import React from 'react';


const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  margin: '40px'
}

class ContactUs extends React.Component {


  render() {
    return (
      <form st name="contact" method="post">
          <input type="hidden" name="contact" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    )
  }
}

export default ContactUs;