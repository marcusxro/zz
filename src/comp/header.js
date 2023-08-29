import React from 'react';
import SplitType from 'split-type'
import gsap from 'gsap'
import { useEffect } from 'react';



const Headers = () => {

    useEffect(() => {
           const text = new SplitType('.firstanchs', {
           charClass: 'chars',
           types: 'chars',
           reduce: 'all',
           special: true, 
            });

            const texts = new SplitType('.secanchs', {
                charClass: 'charz',
                types: 'chars',
                reduce: 'all',
                special: true, 
                 });
     
        
    }, []);
    
    useEffect(() => {
        const text = new SplitType('.firstAnchOfSec', {
        charClass: 'charzz',
        types: 'chars',
        reduce: 'all',
        special: true, 
         });

         const texts = new SplitType('.secAnchOfSec', {
             charClass: 'charzzz',
             types: 'charz',
             reduce: 'all',
             special: true, 
              });
  
     
 }, []);

    const tl = gsap.timeline()
    let zer = 0
    useEffect(() => {

        const firstAnch = document.querySelector('.firstAnch');
        
        const tl = gsap.timeline({ paused: true });
        tl.to('.chars', { y: '-25px', stagger: 0.02, duration: 0.3 })
          .to('.charz', { y: '-25px', duration: 0.3, stagger: 0.02 });
    
        const handleMouseOver = () => {
            zer++

             tl.play();
        
            if(zer === 2) {
                tl.restart()
                zer = 0
            }
        };
    
        firstAnch.addEventListener('mouseover', handleMouseOver);
    
        // Clean up the event listener when the component unmounts
        return () => {
            firstAnch.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);
    
    
 const tlz = gsap.timeline()
    let zerz = 0
    useEffect(() => {

        const firstAnch = document.querySelector('.secAnch');
        const tl = gsap.timeline({ paused: true });
        
        // Add animations to the timeline
        tl.to('.charzz', { y: '-25px', stagger: 0.02, duration: 0.3 })
          .to('.charzzz', { y: '-25px', duration: 0.3, stagger: 0.02 });
    
        const handleMouseOver = () => {
            zerz++
           tl.play();
        
            if(zerz === 2) {
                tl.restart()
                zerz = 0
            }
        };
        firstAnch.addEventListener('mouseover', handleMouseOver);
        return () => {
            firstAnch.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const goToHomePage = () => {
        setTimeout(() => {
            window.scrollTo(0,0)
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
        }, 1000)
      };
      
      const goToAboutPage = () => {
        setTimeout(() => {
            window.history.pushState({}, '', '/about');
            window.scrollTo(0,0)
            window.dispatchEvent(new PopStateEvent('popstate'));
        }, 1000)
      };
    return (
        <header>
            <div className="logo">
                Marcus S.
            </div>
            <div className="right">
            <div className='firstAnch' onClick={goToAboutPage}>
                <div className='firstanchs'>//About</div>
                <div className='secanchs'>//About</div>
            </div>

            <div className='secAnch' onClick={() => {
                goToHomePage()

            }}>
                <div className='firstAnchOfSec' onClick={() => {
                goToHomePage()

            }}>//Works</div>
                <div className='secAnchOfSec'onClick={() => {
                goToHomePage()

            }}>//Works</div>
            </div>
            </div>
        </header>
    )
}

export default Headers