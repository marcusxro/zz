import React, { useEffect } from 'react'
import Headers from '../comp/header'
import Cursor from '../comp/Cursor'
import Sticky from '../comp/sticky'
import './about.css'
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import LowerFooter from '../comp/lowerFooter'
import ScrollTrigger from 'gsap/ScrollTrigger';

export const About = () => {
  window.scrollTo(0, 0)
  const hoverTxt = document.querySelectorAll('.words')
  
  hoverTxt.forEach((n) => {
    n.addEventListener("click", () => {
      alert("gao")
    })
  })

  //lenis
  const lenis = new Lenis()
  lenis.on('scroll', (e) => { })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "ABOUT"
    gsap.registerPlugin(ScrollTrigger)
    const text = new SplitType('.staggs', { types: 'words, chars' })
    const tec = new SplitType('.txts', { types: 'words, chars', wordClass: 'words'})

    gsap.to('.word', {
      opacity: 1,
      stagger: 0.03,
      lineHeight: "100%",
      scrollTrigger: {
        trigger: '.descAbt',
        start: 'top 70%',
      }
    })

    gsap.to('.words', {
      opacity: 1,
      stagger: 0.1,
      lineHeight: "100%",
      scrollTrigger: {
        trigger: '.techs',
        start: 'top 80%',
     }
    })
    

    
    gsap.to('.staggzText', {
      y: 0,
      stagger: 0.4,
      duration: 1,
      scrollTrigger: {
        trigger: '.offers',
        start: 'top 80%',
     }
    })
    
   
    gsap.to('.offerTop', {
      width: "100%",
      scrollTrigger: {
        trigger: '.offers',
        start: 'top 80%',
     }
    })
    
    gsap.to('.offerBot', {
      width: "100%",
      delay: 0.05,
    
      scrollTrigger: {
        trigger: '.offers',
        start: 'top 80%',
     }
    })


    
    const tl = gsap.timeline()
    tl.to('.textBel', {
      y: 0,
      duration: 1,
      stagger: 0.3
    })
    .to('.image', {
      opacity: 1,
      duration: 2,
      delay: 0.3
    })
  }, [])
  return (
    <div className='aboutCon'>
      <Sticky />
      <div className='bg'></div>
      <Cursor />
      <Headers />

      <div className='aboutContent'>
        <div className='firstAbtCon'>
          <div className='image'>
            <img></img>
          </div>
        </div>

        <div className='secAbtCon'>
          <div className='txtCon'>
            <div className='greet'>
            <div className='textBel'>
            HELLO
            </div>
            </div>
            <div className='firstTxt'>
            <div className='textBel'>
            I'm an artisan of
            </div>
            </div>
            <div className='secTxt'>
            <div className='textBel'>
            the digital realm
            </div>
            </div>
          </div>
        </div>
        <div className='thirdContent'></div>

      </div>

      <div className='aboutText'>
          <div className='descAbt'>

          <div className='staggs'>
          I'm Marcus Salopaso, a passionate and aspiring full-stack developer and software engineer. 
                With 6 months of hands-on experience in front-end development, I'm dedicated to crafting 
                seamless and user-friendly digital experiences. 
          </div>
          <div className='staggs'>
          My journey into the world of coding began 
          with a curiosity for creating captivating websites, 
          and it has since evolved into a deep-rooted passion 
          for problem-solving and building innovative solutions.
          </div>
          <div className='techs'>
            <div className='techText txts'>TECHNOLGIES I USE</div>
            <div className='techCon txts'>
              REACTJS, JAVASCRIPT, HTML & CSS, FIGMA, GSAP
            </div>
          </div>

          </div>
          <div className='offers'>
            <div className='offerTop'></div>
            <div className='offerCon'>
              <div className='staggz'>
                  <div className='staggzText'>
                  //UI & UX <span>DESIGN</span>
                  </div>
              </div>
              <div className='staggz'>
                <div className='staggzText'>
                //FRONT-END <span>DEV</span>
                  </div>
              </div>
              <div className='staggz'>
                <div className='staggzText'>
                //RESTful <span>API</span>
                  </div>
              </div>
            </div>
            <div className='offerBot'></div>
          </div>
      

          <LowerFooter />
      </div>
    </div>
  )
}


