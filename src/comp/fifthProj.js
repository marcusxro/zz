//hooks
import React, { useEffect, useRef } from "react"
//anim
import { gsap } from 'gsap'
import Power4 from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
//img
import firstImg from './projImg/sBucks.JPG'
import firstImgs from './projImg/starbucksClone.JPG'

export const FifthProj = () => {
const textxHover = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        //scroll Trig
        gsap.to('.lineSecOfFifth', {
            backgroundColor: "#2a2a2a",
            width: "100%",
            duration: 2,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.lineSecOfFourth',
                start: 'top 70%',
            }
        })
        //firstproj Trig
        gsap.to('.projWrapOfFifth', {
            opacity: 1,
            duration: 0.3,
            scrollTrigger: {
                trigger: '.lineSecOfFourth',
                start: 'top 70%',
                duration: 2,
                ease: Power4.easeOut
            }
           })

       gsap.to('.boxOfFifth', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfFourth',
            start: 'top 70%',
            duration: 2,
            ease: Power4.easeOut
        }
       })
       gsap.to('.boxOfFifth img', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfFourth',
            start: 'top 70%',
            duration: 2,
            ease: Power4.easeOut
        }
       })
       //second part of firstproj
       gsap.to('.smallBoxOfFifth', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfFourth',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })
       gsap.to('.smallBoxOfFifth img', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfFourth',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })

       gsap.to('.textYOfFifth', {
        y: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfFourth',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })
    })
    return (
        <div>
        <div className="projWrapOfFifth">
            <div className="firstConsOfFifth"  >
                <div className="firstPartOfFifth">
                    <div className="boxOfFifth" onMouseEnter={() => {
                        const tls = gsap.timeline()
                        gsap.to('.textHovOfFifth', {opacity: 1})
                        tls.to('.textHovsOfFifth', {opacity: 1})  
                      }}
                        onMouseLeave={() => {
                            gsap.to('.textHovOfFifth', {opacity: 0})
                            gsap.to('.textHovsOfFifth', {opacity: 0})
                        }}>
                    <div className="textHovOfFifth" ref={textxHover}>VISIT</div>
                        <img src={firstImg}></img>
                    </div>
                </div>
                <div className="secondPartOfFifth">
                    <div className="projTitleOfFifth">
                        <div className="textYOfFifth">
                        STARBUCKS 
                        </div>
                    </div>
                    <div className="descOfFifth">
                        <div className="textYOfFifth">
                        STATIC HOMEPAGE
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondConsOfFifth">
                <div className="dateOfFifth">
                    <div className="textYOfFifth">
                    //20<span>23</span>
                    </div>
                    </div>
                <div className="smallBoxOfFifth" onMouseEnter={() => {
                gsap.to('.textHovOfFifth', {opacity: 1})
                gsap.to('.textHovsOfFifth', {opacity: 1})
                }}
                onMouseLeave={() => {
                    gsap.to('.textHovOfFifth', {opacity: 0})
                    gsap.to('.textHovsOfFifth', {opacity: 0})
                }}>
                                    <div className="textHovsOfFifth">GO</div>
                <img src={firstImgs}></img>
                </div>
           </div>
           </div>
        <div className='lineSecOfFifth'></div>
    </div>
    )  
}

export default FifthProj