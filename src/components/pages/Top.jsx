import React, { useContext } from 'react'
import {PrimaryButton} from '../atoms/button/PrimaryButton';
import {SecondaryButton} from '../atoms/button/SecondaryButton';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';

export const Top = () => {
  const history = useHistory();
  const {setUserInfo} = useContext(UserContext);
  const onCLickAdmin = ()=>{
    setUserInfo(true);
    history.push({
      pathname: '/users'
    });
  }
  const onCLickGeneral = ()=>{
    setUserInfo(false);
    history.push({
      pathname: '/users'
    });
  }
  return (
    <SContainer>
      <h1>トップページ</h1>
      <PrimaryButton>テスト</PrimaryButton>
      <br/>
      <SecondaryButton onClick={onCLickAdmin}>管理者ユーザー</SecondaryButton>
      <br/>
      <SecondaryButton onClick={onCLickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align:center;
`
