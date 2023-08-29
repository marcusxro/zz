//hooks
import React, { useEffect, useRef } from "react"
//anim
import { gsap } from 'gsap'
import Power4 from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
//img
import firstImg from './projImg/uFinder.JPG'
import firstImgs from './projImg/ulamFinder.JPG'

export const SixthProj = () => {
const textxHover = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        //scroll Trig
        gsap.to('.lineSecOfSixth', {
            backgroundColor: "#2a2a2a",
            width: "100%",
            duration: 2,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.lineSecOfFifth',
                start: 'top 70%',
            }
        })
        //firstproj Trig
        gsap.to('.projWrapOfSixth', {
            opacity: 1,
            duration: 0.3,
            scrollTrigger: {
                trigger: '.lineSecOfFifth',
                start: 'top 70%',
                duration: 2,
                ease: Power4.easeOut
            }
           })

       gsap.to('.boxOfSixth', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfFifth',
            start: 'top 70%',
            duration: 2,
            ease: Power4.easeOut
        }
       })
       gsap.to('.boxOfSixth img', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfFifth',
            start: 'top 70%',
            duration: 2,
            ease: Power4.easeOut
        }
       })
       //second part of firstproj
       gsap.to('.smallBoxOfSixth', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfFifth',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })
       gsap.to('.smallBoxOfSixth img', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfFifth',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })

       gsap.to('.textYOfSixth', {
        y: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfFifth',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })
    })
    return (
        <div>
        <div className="projWrapOfSixth">
            <div className="firstConsOfSixth"  >
                <div className="firstPartOfSixth">
                    <div className="boxOfSixth" onMouseEnter={() => {
                        const tls = gsap.timeline()
                        gsap.to('.textHovOfSixth', {opacity: 1})
                        tls.to('.textHovsOfSixth', {opacity: 1})  
                      }}
                        onMouseLeave={() => {
                            gsap.to('.textHovOfSixth', {opacity: 0})
                            gsap.to('.textHovsOfSixth', {opacity: 0})
                        }}>
                    <div className="textHovOfSixth" ref={textxHover}>VISIT</div>
                        <img src={firstImg}></img>
                    </div>
                </div>
                <div className="secondPartOfSixth">
                    <div className="projTitleOfSixth">
                        <div className="textYOfSixth">
                        ulamFinder
                        </div>
                    </div>
                    <div className="descOfSixth">
                        <div className="textYOfSixth">
                        RECIPE FINDER APP
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondConsOfSixth">
                <div className="dateOfSixth">
                    <div className="textYOfSixth">
                    //20<span>23</span>
                    </div>
                    </div>
                <div className="smallBoxOfSixth" onMouseEnter={() => {
                gsap.to('.textHovOfSixth', {opacity: 1})
                gsap.to('.textHovsOfSixth', {opacity: 1})
                }}
                onMouseLeave={() => {
                    gsap.to('.textHovOfSixth', {opacity: 0})
                    gsap.to('.textHovsOfSixth', {opacity: 0})
                }}>
                                    <div className="textHovsOfSixth">GO</div>
                <img src={firstImgs}></img>
                </div>
           </div>
           </div>
        <div className='lineSecOfSixth'></div>
    </div>
    )  
}

export default SixthProj