import React from 'react'
import styled from 'styled-components'
import { SearchInput } from '../molecules/SearchInput'
import { UserCard } from '../organisms/user/UserCard'

const users = [...Array(10).keys()].map((idx)=>{
  return {
    id: idx,
    name: `nameが入ります_${idx}`,
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
    email: `aaaaa+${idx}@aaaa.com`
  }
})

export const Users = () => {
  return (
    <SContainer>
      <h1>Usersページ</h1>
      <SearchInput/>
      <SUserArea>
        {users.map((user)=> (
          <UserCard key={user.id} user={user}/>
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align:center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding: 40px 0 0;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px, 1fr));
  grid-gap: 20px;
  width: 100%;
`