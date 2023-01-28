import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="social-media">
          <div className="social-media-wrap">
            <div
              className="social-logo"
              style={{ fontSize: "30px", color: "#fff" }}
            >
              Pet Flix&nbsp;
              <a
                href="https://www.petfinder.com/"
                target="_blank"
                rel="noreferrer"
                className="a-link"
              >
                {/* <img src={pathfinderLogo} alt="Petfinder Logo" className='max-w-[126px] mb-2' />  */}
                Made in love with Petfinder
              </a>{" "}
            </div>
            <div className="social-icons">
              <div
                className="social-icons-link"
                target="_blank"
                aria-label="Facebook"
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
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div
                className="social-icons-link"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-discord"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //  <footer className="bg-orange-50">
    //         <div className='pt-16 px-10 md:px-16 lg:px-24'>
    //             <div className="bg-blue-600 rectangle-t-2xl ">
    //                 <div className="flex text-indigo-50 items-center flex-col justify-evenly lg:flex-row">
    //                     <a href="https://www.petfinder.com/" target='_blank' rel="noreferrer" className="mb-8 lg:mb-0 flex flex-col items-center text-center pt-1 lg:pr-4 hover:text-white">
    //                         {/* <img src={pathfinderLogo} alt="Petfinder Logo" className='max-w-[126px] mb-2' /> */}
    //                         Made in love with Petfinder
    //                     </a>

    //                     <a href="https://github.com/Darylcosm0/petflix" target='_blank' rel="noreferrer" className="mb-8 lg:mb-0 flex flex-col items-center text-center pt-1 hover:text-white">
    //                         {/* <img src={githubLogo} alt="GitHub Logo" className='max-w-[64px] mb-2' /> */}
    //                         <span>GitHub Repository</span>
    //                     </a>

    //                   <h1>
    //                     WE SHOULD LOVE PETS! 😎
    //                   </h1>

    //                 </div>
    //             </div>
    //         </div>
    //     </footer>
  );
}

export default Footer;
