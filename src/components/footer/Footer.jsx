import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>M Shahzad</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/muhammad-shahzad-akmal"><BsLinkedin/></a>
          <a href="https://github.com/shehzynice"><BsGithub/></a>
          <a href="https://www.facebook.com/profile.php?id=61564181436487&mibextid=ZbWKwL"><BsFacebook/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; M Shahzad. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer