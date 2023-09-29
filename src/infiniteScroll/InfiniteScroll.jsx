import React, { useEffect } from 'react'
import './infiniteScroll.css'



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

const InfiniteScroll = () => {

  useEffect(() => {
    if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      addScrollAnimation()
    }
  },[])

  return (
    <div className='scroller'>
      <ul className='tag-list scroller__inner' >
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>SSG</li>
        <li>webdev</li>
        <li>Animation</li>
        <li>UI/UX</li>
      </ul>
    </div>
  )
}

export default InfiniteScroll