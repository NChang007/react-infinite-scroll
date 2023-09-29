import React, { useEffect } from 'react'
import './scroller.css'
import PropTypes from 'prop-types';



const addScrollAnimation = () => {
  const scrollers = document.querySelectorAll('.scroller')
  scrollers.forEach((scroller) => {
    scroller.setAttribute('data-animated',true)
    const scrollerInner = scroller.querySelector('.scroller__inner')
    const scrollerContent = Array.from(scrollerInner.children)

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      duplicatedItem.setAttribute('aria-hidden', true) //so that the screen reader doent read it twice 
      scrollerInner.appendChild(duplicatedItem)
    })
  })
}

const scrollerItem = ({children}) => {

  return(
    <li className='scroller-item'>
      {children}
    </li>
  )
}
const Scroller = ({children, direction, speed, mWidth}) => {

  useEffect(() => {
    if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      addScrollAnimation()
    }
  },[])
  
  return (
    <div 
      className='scroller'
      data-speed={speed}
      data-direction={direction}
      style={{maxWidth: `${mWidth}em`}}
    >
      <ul className='tag-list scroller__inner' >
        {children}
      </ul>
    </div>
  )
}
Scroller.defaultProps = {
  mWidth: '30'
}
Scroller.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  speed: PropTypes.oneOf(['fast', 'slow']),
  speed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Scroller.Item = scrollerItem

export default Scroller