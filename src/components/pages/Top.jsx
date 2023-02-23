import React from 'react'
import {PrimaryButton} from '../atoms/button/PrimaryButton';
import {SecondaryButton} from '../atoms/button/SecondaryButton';
import styled from 'styled-components'

export const Top = () => {
  return (
    <SContainer>
      <h1>トップページ</h1>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>テスト</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align:center;
`
