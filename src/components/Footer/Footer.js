import React from "react";

import "./Footer.css";

// Footer component to display social media links and made with love for Petfinder
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="social-media">
          <div className="social-media-wrap">
            <div
              className="social-logo"
              style={{ fontSize: "35px", color: "red" }}
            >
              Pet Flix&nbsp;
              <a
                href="https://www.petfinder.com/"
                target="_blank"
                rel="noreferrer"
                className="a-link"
              >
                Made in love with Petfinder
              </a>{" "}
            </div>
            <div className="social-icons">
              <div
                className="social-icons-link"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <a
                  href="https://www.instagram.com/__cosm0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div
                className="social-icons-link"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <a
                  href="https://www.facebook.com/daryl.mutai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div
                className="social-icons-link"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div
                className="social-icons-link"
                target="_blank"
                aria-label="Discord"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-discord"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
