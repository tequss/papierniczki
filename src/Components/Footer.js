import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Papierniczki
            </Link>
          </div>
          <small class='website-rights'>WK-DEV © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/papierniczki'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
              </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/papierniczki/'
           
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
              </a>
          </div>
        </div>
      </section>
      </div>
  );
}

export default Footer;