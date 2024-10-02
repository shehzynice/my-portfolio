import React from 'react'
import './about.css'
import myImage from '../../assets/dp.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>BS Computer Science <br /><i>NCBA & E Lahore.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>CPA</h5>
                  <small>3.8</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Web Development &</li>
                      <li>Mobile Applications</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            As an experienced <b>Mobile app developer</b> with over 4 years in the industry, I specialize in crafting innovative and user-centric mobile applications across multiple platforms.
             My expertise spans both Android and iOS development, backed by a solid understanding of the latest technologies, frameworks, and industry best practices.
              I am dedicated to delivering high-quality apps that align with client objectives while offering an exceptional user experience. 
              Driven by a passion for staying current with industry advancements, I continually enhance my skills to create cutting-edge mobile solutions.
            </p>

          </div>
      </div>
    </section>
  )
}

export default About