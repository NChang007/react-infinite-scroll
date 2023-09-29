import { useState } from 'react'

import InfiniteScroll from './infiniteScroll/InfiniteScroll'
import Scroller from './infiniteScroll/InfiniteScroll'

function App() {

  return (
    <>
      <Scroller>
        <Scroller.Item>JS</Scroller.Item>
        <Scroller.Item>HTML</Scroller.Item>
        <Scroller.Item>REACT</Scroller.Item>
        <Scroller.Item>NextJS</Scroller.Item>
        {/* <Scroller.Item>
          <img src="https://images.pexels.com/photos/18272910/pexels-photo-18272910/free-photo-of-horse-in-snow.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
        </Scroller.Item>
        <Scroller.Item>
          <img src="https://images.pexels.com/photos/18122232/pexels-photo-18122232/free-photo-of-deckchairs-at-beach-along-sea.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
        </Scroller.Item> */}
      </Scroller>
    </>
  )
}

export default App
