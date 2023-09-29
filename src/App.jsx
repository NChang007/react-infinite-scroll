import { useState } from 'react'

import InfiniteScroll from './scroller/Scroller'
import Scroller from './scroller/Scroller'

function App() {

  return (
    <>
      <Scroller>
        <Scroller.Item>JS</Scroller.Item>
        <Scroller.Item>HTML</Scroller.Item>
        <Scroller.Item>REACT</Scroller.Item>
        <Scroller.Item>NextJS</Scroller.Item>
      </Scroller>
    </>
  )
}

export default App
