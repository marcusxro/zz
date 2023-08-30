import React, { useEffect, useState, useRef } from 'react';
//gsap anim
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Power3 from 'gsap';
//lenis.
import Lenis from '@studio-freight/lenis'
//comp

import Headers from '../comp/header';
import LandingText from '../comp/landingText';
import FirstProj from '../comp/firstProj';
import SecondProj from '../comp/secondProj';
import ThirdProj from '../comp/thirdProj';
import FourthProj from '../comp/fourthProj';
import FifthProj from '../comp/fifthProj';
import SixthProj from '../comp/sixthProj';
import Sticky from '../comp/sticky';
//other proj comp
import OtherProj from '../comp/otherProj';
//footer comps
import UpperFooter from '../comp/upperFooter';
import LowerFooter from '../comp/lowerFooter';
//func
import { resetYaxis } from '../comp/landingText';


export const Home = () => {
  window.scrollTo(0, 0)
  document.title = "Marcus S."
  //lenis
  const lenis = new Lenis()

  lenis.on('scroll', (e) => { })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)


  //vars
  const [cLoad, setCload] = useState(0)
  const perc = useRef(null)
  const loader = useRef(null)
  const loaderCon = useRef(null)


  //timeline
  const tl = gsap.timeline()


  //anim
  useEffect(() => {
    const id = setInterval(() => {
      if (cLoad >= 100) {
        clearInterval(id)
      } else {
        setCload(cLoad + 1)
      }
    }, 10)
    if (cLoad === 100) {
      const customEase = "cubic-bezier(50000,.67,.83,.67)";
      tl.to(perc.current, 1, { opacity: 0 })
        .to(loader.current, {
          y: "-100%", ease: Power3.easeOut, duration: .8,
          onComplete: () => {
            gsap.to('.secondLoad', { scale: 1, delay: 0.3, duration: 1.3, ease: Power3.easeOut });
            gsap.to('.middle', { scale: 1, duration: 0.5, filter: "blur(0px)", ease: customEase });
            gsap.to('.secondLoad', { gap: "10px", duration: 2, ease: customEase,
              onComplete: () => {
                gsap.to('.secondLoad', {
                  delay: 0.5, filter: "grayscale(80%)", opacity: 0, duration: 1, ease: customEase, onComplete: () => {
                    window.scrollTo(0, 0);
                    gsap.to('.hero', { scale: 1, duration: 1.5 })
                    gsap.to(loaderCon.current, {
                      y: "-100%", duration: 0.6,
                      onComplete: () => {
                        resetYaxis()
                        gsap.to('.sticky', { right: 0 })

                      }
                    })
                  }
                })
              }
            });
          }

        })
    } return () => { clearInterval(id) }
  }, [cLoad])

  //scrollTrig
  const lines = useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(lines.current, {
      width: "100%",
      backgroundColor: "black",
      scrollTrigger: {
        trigger: '.line',
        start: 'top 50%',
        duration: 0.8

      }
    })

  })
  const cursor = useRef(null)
  document.onmousemove = (e) => {
    gsap.to('.cursor', {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
    });
  }
  //dom
  return (

    <div className="wrapp">
      <div className='cursor'
        ref={cursor}></div>
      <Sticky />
      <div className='bg'></div>
      <div className='loaderCon'
        ref={loaderCon}>


        <div className='firstLoad'
          ref={loader}>
          <h1 ref={perc}>{cLoad}</h1>
        </div>


        <div className='secondLoad'>
          <div className='logoCon middle'>
            <div className='logoText'>M<span>S</span></div>
            <div className='logoTexts'>& Developer <br />
              ____ Designer
            </div>
          </div>
          <div className='textDesc'>
            where less becomes <span>more.</span>
          </div>
        </div>
      </div>
      <div className='content'>
        <Headers />

        <div className='hero' id='goUp'>
          <LandingText />
        </div>
        <div className='line' ref={lines}></div>
        <div className='works'>
          <FirstProj />
          <SecondProj />
          <ThirdProj />
          <FourthProj />
          <FifthProj />
          <SixthProj />
          <OtherProj />
          <UpperFooter />
          <LowerFooter />
        </div>
      </div>
    </div>

  )

}


export default Home