import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'


const Page1DetailA = () => {
  const {state} = useLocation();
  const history = useHistory();
  const onClickBack =()=> history.goBack();
  return (
    <div>
      <h1>Page1DetailA</h1>
      <button onClick={onClickBack}>戻る</button>
      {state && (
        <p>
          {state.map((val)=>(
            <>
              <span key={val}>
                {val}
              </span>,{" "}
            </>
          ))}
        </p>
      )}
    </div>
  )
}

export default Page1DetailA