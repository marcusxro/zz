import React from "react"
import { gsap } from 'gsap';

export const Sticky = () => {
    const btn = document.querySelectorAll('.btn')
    for(let z = 0; z < btn.length; z++) {
        btn[z].onmouseover = (e) => {
            const target = e.target
            gsap.to(target, {color: "bisque"})
            gsap.to('html', {cursor: "pointer"})
        }
        btn[z].onmouseleave = (e) => {
            const target = e.target
            gsap.to(target, {color: "white"})
            gsap.to('html', {cursor: "default"})
        }
    }
  
    return (
    <div className="sticky">
        <div className="fb btn" onClick={() => {
              window.location.href = 'https://www.facebook.com/marcuss09'
        }}>
        <ion-icon name="logo-facebook"></ion-icon>
        </div>
        <div className="ins btn">
        <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className="tik btn">
        <ion-icon name="logo-tiktok"></ion-icon>
        </div>
    </div>
    )
}

export default Sticky