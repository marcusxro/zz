import React, { useEffect, useRef } from "react"
//for anim
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Power3 from 'gsap';


export const UpperFooter = () => {
  const firstHover = useRef(null)
  const secHover = useRef(null)
  const thirHover = useRef(null)



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    //first hovs
    const cursor = document.querySelector('.cursor')
    firstHover.current.addEventListener("mouseover", () => {
      gsap.to('.firstHover', {
        duration: 0.5,
        '-webkit-text-stroke-color': 'white',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'white',
      });
      gsap.to(secHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "transparent",
        stroke: 'black',
      })
      gsap.to(thirHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "transparent",
        stroke: 'black',
      })
      cursor.classList.remove('deffaults')
      cursor.classList.add('firstHoverEff')
    })

    firstHover.current.addEventListener("mouseleave", () => {
      gsap.to('.firstHover', {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'black',
      });
      gsap.to(secHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'black',
      })
      gsap.to(thirHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'black',
      })
      cursor.classList.add('deffaults')
      cursor.classList.remove('firstHoverEff')
    })



    //second hovs
    secHover.current.addEventListener("mouseenter", () => {
      gsap.to('.secondHover', {
        duration: 0.5,
        '-webkit-text-stroke-color': 'white',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'white',
      });
      gsap.to(firstHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "transparent",
        stroke: 'black',
      })
      gsap.to(thirHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "transparent",
        stroke: 'black',
      })
      cursor.classList.add('secHoverEff')
      cursor.classList.remove('deffaults')
    })

    secHover.current.addEventListener("mouseleave", () => {
      gsap.to('.secondHover', {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'black',
      });
      gsap.to(firstHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'black',
      })
      gsap.to(thirHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'black',
      })
      cursor.classList.add('deffaults')
      cursor.classList.remove('secHoverEff')
    })
    //third Hover
    thirHover.current.addEventListener("mouseenter", () => {
      gsap.to(thirHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'white',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'white',
      });
      gsap.to(firstHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "transparent",
        stroke: 'black',
      })
      gsap.to(secHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "transparent",
        stroke: 'black',
      })

      cursor.classList.remove('deffaults')
      cursor.classList.add('thirHoverEff')
    })

    thirHover.current.addEventListener("mouseleave", () => {
      gsap.to('.thirdHover', {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'black',
      });
      gsap.to(firstHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'black',
      })
      gsap.to(secHover.current, {
        duration: 0.5,
        '-webkit-text-stroke-color': 'black',
        '-webkit-text-stroke-width': '2px',
        color: "black",
        stroke: 'black',
      })

      cursor.classList.add('deffaults')
      cursor.classList.remove('thirHoverEff')
    })
    ///scrollTrig
    gsap.to('.lineOfTopz', {
      width: "100%",
      backgroundColor: "black",
      duration: 1,
      scrollTrigger: {
        trigger: '.upperFooterCon',
        start: 'top 70%',
      }
    })
    gsap.to('.lineOfBot', {
      width: "100%",
      backgroundColor: "black",
      delay: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: '.upperFooterCon',
        start: 'top 70%',
      }
    })

    gsap.to('.topDesc', {
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.upperFooterCon',
        start: 'top 70%',
      }
    })

    gsap.to('.riseUp', {
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: '.upperFooterCon',
        start: 'top 70%',
      }
    })
  }, [])
  return (
    <div className="upperFooterCon">
      <div className="lineOfTopz"></div>
      <div className="topDesc">
        My work serves as a bridge between humans and technology; it is more than just code. Users are encouraged to connect, discover, and interact.
      </div>
      <div className="hoverConBot">
        <div className="firstHover" ref={firstHover}>
          <div className="firstHoverText riseUp">CHAAT AI</div>
        </div>
        <div className="secondHover" ref={secHover}>
          <div className="secHoverText riseUp">FORCAST APP</div>
        </div>
        <div className="thirdHover" ref={thirHover}>
          <div className="thirdHoverText riseUp">LEXICON</div>
        </div>
      </div>
      <div className="lineOfBot"></div>
    </div>
  )
}

export default UpperFooter