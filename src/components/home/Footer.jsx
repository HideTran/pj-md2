import React from 'react'
import "./footer.scss"

export default function Footer() {
  return (
    <div className='home_footer'>
      <div className='home_footer_content'>
        {/* Footer */}
        <footer className="text-center">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            {/* Left */}
            {/* Right */}
            {/* <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github" />
              </a>
            </div> */}
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3" />
                    World Of Motorcycles
                  </h6>
                  <p>
                    Hãy đến với chúng tôi để tìm kiếm cá tính cùa riêng bạn!
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Thương Hiệu</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Ducati
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Kawasaki
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Yamaha
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Honda
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Thông Tin Liên Hệ</h6>
                  <p>
                    <i className="fas fa-home me-3" />Goldmark City - Hà Nội
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    haithanh@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" />0984071289
                  </p>
                  <p>
                    <i className="fas fa-print me-3" />0946918698
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              Hidetran
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    </div>
  )
}
