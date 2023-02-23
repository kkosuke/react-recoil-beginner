import React , {useContext}from 'react'
import styled from 'styled-components'
import { UserContext } from '../../../providers/UserProvider';

export const UserIconWithName = (props) => {
  const {image, name} = props;
  const {userInfo} = useContext(UserContext);
  return (
    <SContainer>
      <SImage src={image} alt="" width={160} height={160}/>
      <SName>{name}</SName>
      {userInfo && (
        <SEdit>
          編集
        </SEdit>
      )}
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
const SEdit = styled.p`
  color: #0a40c7;
  text-decoration: underline;
  font-size:18px;
  font-weight: 900;
  margin:0;
`