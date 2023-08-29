//hooks
import React, { useEffect, useRef } from "react"
//anim
import { gsap } from 'gsap'
import Power4 from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
//img
import firstImg from './projImg/weatherpc.JPG'
import firstImgs from './projImg/weatherApp.JPG'

export const SecondProj = () => {
const textxHover = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        //scroll Trig
        gsap.to('.lineSecOfSec', {
            backgroundColor: "#2a2a2a",
            width: "100%",
            duration: 2,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.lineSec',
                start: 'top 70%',
            }
        })
        //secondproj Trig
        gsap.to('.projWrapOfSec', {
            opacity: 1,
            duration: 0.3,
            scrollTrigger: {
                trigger: '.lineSec',
                start: 'top 70%',
                duration: 2,
                ease: Power4.easeOut
            }
           })
       gsap.to('.boxOfSec', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSec',
            start: 'top 70%',
            duration: 2,
            ease: Power4.easeOut
        }
       })
       gsap.to('.boxOfSec img', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSec',
            start: 'top 70%',
            duration: 2,
            ease: Power4.easeOut
        }
       })
       //second part of firstproj
       gsap.to('.smallBoxOfSec', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSec',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })
       gsap.to('.smallBoxOfSec img', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSec',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })

       gsap.to('.textYOfSec', {
        y: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSec',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })
    })
    return (
        <div>
        <div className="projWrapOfSec" onClick={() => {
                setTimeout(() => {
                    window.scrollTo(0,0)
                    window.history.pushState({}, '', '/secpage');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                }, 1000)
        }}>
            <div className="firstConsOfSec">
                <div className="firstPartOfSec">
                    <div className="boxOfSec" onMouseEnter={() => {
                gsap.to('.textHovOfSec', {opacity: 1})
                gsap.to('.textHovsOfSec', {opacity: 1})
            }}
            onMouseLeave={() => {
                gsap.to('.textHovOfSec', {opacity: 0})
                gsap.to('.textHovsOfSec', {opacity: 0})
            }}>
                    <div className="textHovOfSec" ref={textxHover}>VISIT</div>
                        <img src={firstImg}></img>
                    </div>
                </div>
                <div className="secondPartOfSec">
                    <div className="projTitleOfSec">
                        <div className="textYOfSec">
                        FORCAST
                        </div>
                    </div>
                    <div className="descOfSec">
                        <div className="textYOfSec">
                        WEATHER APP
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondConsOfSec">
                <div className="dateOfSec">
                    <div className="textYOfSec">
                    //20<span>23</span>
                    </div>
                    </div>
                <div className="smallBoxOfSec" onMouseEnter={() => {
                gsap.to('.textHovOfSec', {opacity: 1})
                gsap.to('.textHovsOfSec', {opacity: 1})
                }}
                onMouseLeave={() => {
                    gsap.to('.textHovOfSec', {opacity: 0})
                    gsap.to('.textHovsOfSec', {opacity: 0})
                }}>
                                    <div className="textHovsOfSec">GO</div>
                <img src={firstImgs}></img>
                </div>
           </div>
           </div>
        <div className='lineSecOfSec'></div>
    </div>
    )  
}


export default SecondProj