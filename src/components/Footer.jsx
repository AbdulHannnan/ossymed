import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#FDF8F3] lg:px-56 py-4 border-t text-gray-700 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-orange-500">&#128172;</span>
            <div>
              <p className="font-semibold text-xl">Want to say hi?</p>
              <p>
                Mail us at: <a href="mailto:contact@programs.com" className="text-green-600 font-medium text-lg">ahk12067@gmail.com</a> or call <span className="font-bold">(+92) 335 1966917</span>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-gray-500 text-lg">Follow us on social media:</span>
            <a href="#" className="text-gray-400 text-xl hover:text-green-600">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-gray-400 text-xl hover:text-orange-600">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-gray-400 text-xl hover:text-pink-600">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;