import React from 'react'
import './Footer.css'
// import { Link } from 'react-router-dom'

function Footer() {
  return <>
    <footer className="footer_section">
      <section className="info_section ">
        <div className="container">
          <div className="info_bottom layout_padding2">
            <div className="row info_main_row d-flex justify-content-center pt-5">
              <div className="col-md-6 col-lg-3">
                <h5>
                  Address
                </h5>
                <div className="info_contact">
                  <a href=''>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      Location
                    </span>
                  </a>
                  <a href=''>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                      Call +01 1234567890
                    </span>
                  </a>
                  <a href=''>
                    <i className="fa fa-envelope"></i>
                    <span>
                      demo@gmail.com
                    </span>
                  </a>
                </div>
                <div className="social_box">
                  <a href=''>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href=''>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href=''>
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href=''>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_links">
                  <h5>
                    Useful link
                  </h5>
                  <div className="info_links_menu">
                    <a href='' className="active">
                      Home
                    </a>
                    <a href='' >
                      About
                    </a>
                    <a href='' >
                      Contact Us
                    </a>
                    <a href='' >
                      Services
                    </a>
                    <a href='' >
                      Clients
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </>
}

export default Footer
