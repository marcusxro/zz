//hooks
import React, { useEffect, useRef } from "react"
//anim
import { gsap } from 'gsap'
import Power4 from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
//img
import firstImg from './projImg/lexiconPc.JPG'
import firstImgs from './projImg/lexicon.JPG'

export const ThirdProj = () => {
    const textxHover = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        //scroll Trig
        gsap.to('.lineSecOfThird', {
            backgroundColor: "#2a2a2a",
            width: "100%",
            duration: 2,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.lineSecOfSec',
                start: 'top 70%',
            }
        })
        //firstproj Trig
        gsap.to('.projWrapOfThird', {
            opacity: 1,
            duration: 0.3,
            scrollTrigger: {
                trigger: '.lineSecOfSec',
                start: 'top 70%',
                duration: 2,
                ease: Power4.easeOut
            }
        })

        gsap.to('.boxOfThird', {
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.lineSecOfSec',
                start: 'top 70%',
                duration: 2,
                ease: Power4.easeOut
            }
        })
        gsap.to('.boxOfThird img', {
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.lineSecOfSec',
                start: 'top 70%',
                duration: 2,
                ease: Power4.easeOut
            }
        })
        //second part of firstproj
        gsap.to('.smallBoxOfThird', {
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.lineSecOfSec',
                start: 'top 70%',
                ease: Power4.easeOut
            }
        })
        gsap.to('.smallBoxOfThird img', {
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.lineSecOfSec',
                start: 'top 70%',
                ease: Power4.easeOut
            }
        })

        gsap.to('.textYOfThird', {
            y: 0,
            stagger: 0.3,
            duration: 1,
            scrollTrigger: {
                trigger: '.lineSecOfSec',
                start: 'top 70%',
                ease: Power4.easeOut
            }
        })
    })
    return (
        <div>
            <div className="projWrapOfThird" onClick={() => {
                setTimeout(() => {
                    window.scrollTo(0, 0)
                    window.history.pushState({}, '', '/thirdpage');
                    window.dispatchEvent(new PopStateEvent('popstate'));
                }, 1000)
            }}>
                <div className="firstConsOfThird"  >
                    <div className="firstPartOfThird">
                        <div className="boxOfThird" onMouseEnter={() => {
                            const tls = gsap.timeline()
                            gsap.to('.textHovOfThird', { opacity: 1 })
                            tls.to('.textHovsOfThird', { opacity: 1 })
                        }}
                            onMouseLeave={() => {
                                gsap.to('.textHovOfThird', { opacity: 0 })
                                gsap.to('.textHovsOfThird', { opacity: 0 })
                            }}>
                            <div className="textHovOfThird" ref={textxHover}>VISIT</div>
                            <img src={firstImg}></img>
                        </div>
                    </div>
                    <div className="secondPartOfThird">
                        <div className="projTitleOfThird">
                            <div className="textYOfThird">
                                LEXICON
                            </div>
                        </div>
                        <div className="descOfThird">
                            <div className="textYOfThird">
                                DICTIONARY APP
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondConsOfThird">
                    <div className="dateOfThird">
                        <div className="textYOfThird">
                    //20<span>23</span>
                        </div>
                    </div>
                    <div className="smallBoxOfThird" onMouseEnter={() => {
                        gsap.to('.textHovOfThird', { opacity: 1 })
                        gsap.to('.textHovsOfThird', { opacity: 1 })
                    }}
                        onMouseLeave={() => {
                            gsap.to('.textHovOfThird', { opacity: 0 })
                            gsap.to('.textHovsOfThird', { opacity: 0 })
                        }}>
                        <div className="textHovsOfThird">GO</div>
                        <img src={firstImgs}></img>
                    </div>
                </div>
            </div>
            <div className='lineSecOfThird'></div>
        </div>
    )
}

export default ThirdProj