import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <h1>Page404</h1>
      <p>ページが見つかりません。</p>
      <Link to="/">トップに戻る</Link>
    </div>
  )
}

export default Page404