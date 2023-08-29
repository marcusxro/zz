//hooks
import React, { useEffect, useRef } from "react"
//anim
import { gsap } from 'gsap'
import Power4 from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
//img
import firstImg from './projImg/EcommercePc.JPG'
import firstImgs from './projImg/Ecommerce.JPG'

export const FourthProj = () => {
const textxHover = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        //scroll Trig
        gsap.to('.lineSecOfFourth', {
            backgroundColor: "#2a2a2a",
            width: "100%",
            duration: 2,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.lineSecOfThird',
                start: 'top 70%',
            }
        })
        //firstproj Trig
        gsap.to('.projWrapOfFourth', {
            opacity: 1,
            duration: 0.3,
            scrollTrigger: {
                trigger: '.lineSecOfThird',
                start: 'top 70%',
                duration: 2,
                ease: Power4.easeOut
            }
           })

       gsap.to('.boxOfFourth', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfThird',
            start: 'top 70%',
            duration: 2,
            ease: Power4.easeOut
        }
       })
       gsap.to('.boxOfFourth img', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfThird',
            start: 'top 70%',
            duration: 2,
            ease: Power4.easeOut
        }
       })
       //second part of firstproj
       gsap.to('.smallBoxOfFourth', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfThird',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })
       gsap.to('.smallBoxOfFourth img', {
        scale: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfThird',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })

       gsap.to('.textYOfFourth', {
        y: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: '.lineSecOfThird',
            start: 'top 70%',
            ease: Power4.easeOut
        }
       })
    })
    return (
        <div>
        <div className="projWrapOfFourth">
            <div className="firstConsOfFourth"  >
                <div className="firstPartOfFourth">
                    <div className="boxOfFourth" onMouseEnter={() => {
                        const tls = gsap.timeline()
                        gsap.to('.textHovOfFourth', {opacity: 1})
                        tls.to('.textHovsOfFourth', {opacity: 1})  
                      }}
                        onMouseLeave={() => {
                            gsap.to('.textHovOfFourth', {opacity: 0})
                            gsap.to('.textHovsOfFourth', {opacity: 0})
                        }}>
                    <div className="textHovOfFourth" ref={textxHover}>VISIT</div>
                        <img src={firstImg}></img>
                    </div>
                </div>
                <div className="secondPartOfFourth">
                    <div className="projTitleOfFourth">
                        <div className="textYOfFourth">
                        PIXIE SHOP
                        </div>
                    </div>
                    <div className="descOfFourth">
                        <div className="textYOfFourth">
                        ECOMMERCE WEBSITE
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondConsOfFourth">
                <div className="dateOfFourth">
                    <div className="textYOfFourth">
                    //20<span>23</span>
                    </div>
                    </div>
                <div className="smallBoxOfFourth" onMouseEnter={() => {
                gsap.to('.textHovOfFourth', {opacity: 1})
                gsap.to('.textHovsOfFourth', {opacity: 1})
                }}
                onMouseLeave={() => {
                    gsap.to('.textHovOfFourth', {opacity: 0})
                    gsap.to('.textHovsOfFourth', {opacity: 0})
                }}>
                                    <div className="textHovsOfFourth">GO</div>
                <img src={firstImgs}></img>
                </div>
           </div>
           </div>
        <div className='lineSecOfFourth'></div>
    </div>
    )  
}

export default FourthProj