import React from 'react'
import styled from 'styled-components'

export const UserIconWithName = (props) => {
  const {image, name} = props
  return (
    <SContainer>
      <SImage src={image} alt="" width={160} height={160}/>
      <SName>{name}</SName>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align:center;
`
const SImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
`
const SName = styled.p`
  font-size:18px;
  font-weight: 900;
  margin:0;
  color: #333;
`