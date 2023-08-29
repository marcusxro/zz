//hooks
import React, { useEffect, useRef } from "react"
//anim
import { gsap } from 'gsap'
import Power4 from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
//img
import firstImg from './projImg/chatGptClone.JPG'
import firstImgs from './projImg/chatGpt.JPG'

export const FirstProj = () => {
const textxHover = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        //scroll Trig
        gsap.to('.lineSec', {
            backgroundColor: "#2a2a2a",
            width: "100%",
            duration: 2,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.lineSec',
                start: 'top 70%',
            }
        })
        //firstproj Trig
        gsap.to('.projWrap', {
            opacity: 1,
            duration: 0.3,
            scrollTrigger: {
                trigger: '.line',
                start: 'top 70%',
                duration: 2,
                ease: Power4.easeOut
            }
           })

       gsap.to('.box', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.line',
            start: 'top 70%',
            duration: 2,
            ease: Power4.easeOut
        }
       })
       gsap.to('.box img', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.line',
            start: 'top 70%',
            duration: 2,
            ease: Power4.easeOut
        }
       })
       //second part of firstproj
       gsap.to('.smallBox', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.line',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })
       gsap.to('.smallBox img', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.line',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })

       gsap.to('.textY', {
        y: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: '.line',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })
    })
    return (
        <div>
        <div className="projWrap" onClick={() => {
    
            gsap.to('.textY', {
                y: "100px",
                stagger: 0.3,
                duration: 1,
                onComplete: () => {

              window.scrollTo(0,0)
             window.history.pushState({}, '', '/firstpage');
            window.dispatchEvent(new PopStateEvent('popstate'));

                }
               })
        }}>
            <div className="firstCons"  >
                <div className="firstPart">
                    <div className="box" onMouseEnter={() => {
                        const tls = gsap.timeline()
                        gsap.to('.textHov', {opacity: 1})
                        tls.to('.textHovs', {opacity: 1})  
                      }}
                        onMouseLeave={() => {
                            gsap.to('.textHov', {opacity: 0})
                            gsap.to('.textHovs', {opacity: 0})
                        }}>
                    <div className="textHov" ref={textxHover}>VISIT</div>
                        <img src={firstImg}></img>
                    </div>
                </div>
                <div className="secondPart">
                    <div className="projTitle">
                        <div className="textY">
                        CHAAT AI
                        </div>
                    </div>
                    <div className="desc">
                        <div className="textY">
                        CHAT-GPT CLONE
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondCons">
                <div className="date">
                    <div className="textY">
                    //20<span>23</span>
                    </div>
                    </div>
                <div className="smallBox" onMouseEnter={() => {
                gsap.to('.textHov', {opacity: 1})
                gsap.to('.textHovs', {opacity: 1})
                }}
                onMouseLeave={() => {
                    gsap.to('.textHov', {opacity: 0})
                    gsap.to('.textHovs', {opacity: 0})
                }}>
                                    <div className="textHovs">GO</div>
                <img src={firstImgs}></img>
                </div>
           </div>
           </div>
        <div className='lineSec'></div>
    </div>
    )  
}

export default FirstProj