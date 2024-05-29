import Navside from "./Navside"

function Contact() {
  return (
    <>
      <div className="navbar">
        <div className="logoside">NES Health Info & Support</div>
        <Navside />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
export default Contact
