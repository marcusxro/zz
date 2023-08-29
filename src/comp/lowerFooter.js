import React, { useEffect } from "react"
import gsap, { Power3 } from 'gsap'
export const LowerFooter = () => {
    useEffect(() => {
        gsap.to('.socials', {
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            delay: 1,
            lineHeight: "100%",
            ease: Power3.easeOut,
            scrollTrigger: {
              trigger: '.upperFooterCon',
              start: 'top 70%',
            }
          })
    })
    return (
        <div className="footerCon">
        <div className="FooterLeft">
        <div className="socials" onClick={() => {
         window.location.href = 'https://www.facebook.com/marcuss09'
        }}>
                //Facebook
            </div>
            <div className="socials" onClick={() => {
            window.location.href = 'https://www.facebook.com/marcuss09'
            }}>
                //Instagram
            </div>
            <div className="socials" onClick={() =>{
                window.location.href = 'https://www.tiktok.com/@marcuxro'
            }}>
                
                //Tiktok
            </div>
            <div className="socials">
                //Mail
            </div>
        </div>
        <div className="FooterRight socials" onClick={() => {
            window.scrollTo(0,0)
        }}>
            Back to Top <span> <ion-icon name="chevron-up-outline"></ion-icon></span>
        </div>
        </div>
    )
}

export default LowerFooter