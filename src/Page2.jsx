import React from 'react'
import { Link } from 'react-router-dom'

const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/page2/100">Url Parameter</Link>
      <br/>
      <Link to="/page2/100?name=aaaa&food=bbb">Query Parameter</Link>
    </div>
  )
}

export default Page2