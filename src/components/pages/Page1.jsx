import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Page1 = () => {
  const array = [...Array(100).keys()];
  const history = useHistory();
  const onClickDetailA = () =>{
    history.push('/page1/detailA');
  }
  return (
    <div>
      <h1>Page1</h1>
      <Link to={{
        pathname: "/page1/detailA",
        state: array
      }}>detailsA</Link>
      <br/>
      <Link to="/page1/detailB">detailsB</Link>
      <br/>
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  )
}

export default Page1