import React from 'react'
import {PrimaryButton} from '../atoms/button/PrimaryButton';
import {SecondaryButton} from '../atoms/button/SecondaryButton';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../store/userState';

export const Top = () => {
  const history = useHistory();
  const setUserInfo = useSetRecoilState(userState)
  const onCLickAdmin = ()=>{
    setUserInfo({isAdmin:true});
    history.push({
      pathname: '/users'
    });
  }
  const onCLickGeneral = ()=>{
    setUserInfo({isAdmin:false});
    history.push({
      pathname: '/users'
    });
  }
  return (
    <SContainer>
      <h1>トップページ</h1>
      <PrimaryButton>テスト</PrimaryButton>
      <br/>
      <br/>
      <SecondaryButton onClick={onCLickAdmin}>管理者ユーザー</SecondaryButton>
      <br/>
      <br/>
      <SecondaryButton onClick={onCLickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align:center;
`
