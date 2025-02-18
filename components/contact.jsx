import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fas fa-paper-plane" /> Jeremiahayoola350@gmail.com
            </p>
            <p>
              <i className="fas fa-phone-square-alt" /> 07040758250
            </p>
            <div className="social-icons">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" />
              </a>
            </div>
            <a
              href="/assets/my-cv.pdf"
              download="my-cv.pdf"
              className="btn btn2"
            >
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows={6} placeholder="Your Message" />
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright @ jayboyTech <i className="fas fa-heart" />
        </p>
      </div>
      <a href="#top" className="scroll-to-top">
        ↑
      </a>
    </div>
  );
}
