import React, { useEffect } from "react"
//imgs
import todos from './projImg/todos.JPG'
import fquiz from './projImg/fquiz.JPG'
import pwgen from './projImg/pwgen.JPG'
//anims

import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Power3 from 'gsap';


export const OtherProj = () => {
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        //text
        gsap.to('.otherProjTitles', {
            y: 0,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.otherProjTitles',
                start: 'top 80%',
            }
        })
        gsap.to('.projFirst .otherImgCon img', {
            height: "100%",
            duration: 1,
            scale: 1,
            filter: "none",
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.projFirst',
                start: 'top 80%',
            }
        })
        gsap.to('.projFirst .goDown', {
            duration: 1,
            y: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.projFirst',
                start: 'top 80%',
        
            }
        })
        gsap.to('.projFirst .otherImgCon', {
            duration: 1,
            scale: 1,
            filter: "none",
            opacity: 1,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.projFirst',
                start: 'top 80%',
        
            }
        })
        //second
        gsap.to('.projSecond .otherImgCon img', {
            height: "100%",
            duration: 1.5,
            scale: 1,
            ease: Power3.easeOut,
            filter: "none",
            scrollTrigger: {
                trigger: '.projSecond',
                start: 'top 80%',
        
            }
        })
        gsap.to('.projSecond .goDown', {
            duration: 1,
            y: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.projSecond',
                start: 'top 80%',
        
            }
        })
        gsap.to('.projSecond .otherImgCon', {
            duration: 1,
            scale: 1,
            ease: Power3.easeOut,
            filter: "none",
            opacity: 1,
            scrollTrigger: {
                trigger: '.projSecond',
                start: 'top 80%',
        
            }
        })
        //third
        gsap.to('.projThird .otherImgCon img', {
            height: "100%",
            duration: 1.5,
            scale: 1,
            ease: Power3.easeOut,
            filter: "none",
            scrollTrigger: {
                trigger: '.projThird',
                start: 'top 80%',
        
            }
        })
        gsap.to('.projThird .goDown', {
            duration: 1,
            y: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.projThird',
                start: 'top 80%',
        
            }
        })
        gsap.to('.projThird .otherImgCon', {
            duration: 1,
            scale: 1,
            ease: Power3.easeOut,
            opacity: 1,
            filter: "none",
            scrollTrigger: {
                trigger: '.projThird',
                start: 'top 80%',
        
            }
        })

        
    }, [])

    return (
        <div className="otherProjCon">

          <div className='otherProjTitleCon'>
            <div className="otherProjTitles">EARLY <span>WORKS</span></div>
          </div>

            <div className="conz">

            <div className="projFirst projects">
            <div className="otherProjTitless">
                <div className="otherTextFIrst goDown">TODO APP</div>
            </div>
            <div className="otherImgCon">
            <img src={todos}></img>
            </div>

            </div>

            <div className="projSecond projects">
            <div className="otherProjTitless">
            <div className="otherTextSec goDown">QUIZ APP</div>
            </div>
                <div className="otherImgCon">
                <img src={fquiz}></img>
                </div>
            </div>

            <div className="projThird projects">
            <div className="otherProjTitless">
            <div className="otherTextSec goDown">
            PASSWORD <br />
            GENERATOR
            </div>
            </div>
                <div className="otherImgCon">
                <img src={pwgen}></img>
                </div>
            </div>
            </div>

        </div>
    )
}


export default OtherProj