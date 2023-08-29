import React, { useEffect, useRef } from "react"
import { gsap } from 'gsap';
import Power3 from 'gsap';



export function resetYaxis() {
    const staggs = document.querySelectorAll('.stagg')

        gsap.to(staggs, 1, { y:0, stagger: 0.3, ease: Power3.easeOut,
        onComplete: () => {
        gsap.to('.fourthCon', {overflow: "visible"})
            gsap.to('.arrow', {opacity: 1})
            gsap.to('.works', {opacity: 1})
        }})
    
}

export const LandingText = () => {
   
   const staggerEl = useRef(null)

    return (
        <div>
            <div className="firstCon">
                <div className="firstText text stagg"
                ref={staggerEl}>
                    DESIGNING SIMPLICITY,
                </div>
            </div>
            <div className="secondCon">
                <div className="secondText text stagg"
                  ref={staggerEl}>
                    DELIVERING <br />
                    IMPACT.
                </div>
            </div>
            <div className="thirdCon">
                <div className="thirdText texts stagg"
                  ref={staggerEl}>
                  A FRONT-END 
                </div>
            </div>
            <div className="fourthCon">
                <div className="fourthText texts stagg"
                  ref={staggerEl}>
                  DEV BASED IN <br />
                   QUEZON CITY.
                   
                </div>
                <div className="arrow">
                    GO <span> DOWN</span>
                </div>
            </div>
        </div>
    )
}

export default LandingText