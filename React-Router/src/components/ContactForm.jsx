import React from 'react'

function ContactForm() {
  return (
    <div>
      <form>
        <input type="text" palceholder="Name" />
        <br />
        <input type="email" plceholder="Email" />
        <br />
        <textarea placeholder="message"></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm