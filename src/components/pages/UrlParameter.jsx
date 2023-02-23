import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const UrlParameter = () => {
  const {id} = useParams();
  const {search} = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameter</h1>
      <p>URLパラメータは「{id}」</p>
      <p>クエリパラメータ（name）は「{query.get("name")}」</p>
    </div>
  )
}

export default UrlParameter