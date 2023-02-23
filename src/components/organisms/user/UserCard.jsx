import React, { memo } from 'react'
import styled from 'styled-components'
import { Card } from '../../atoms/card/Card';
import { UserIconWithName } from '../../molecules/user/UserIconWithName';

export const UserCard = memo((props) => {
  const {user} = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name}/>
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
      </SDl>
    </Card>
  )
})

const  SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt{
    float:left;
  }
  dd{
    padding: 0 0 8px 32px;
    overflow-wrap: break-word;
  }

`