import * as React from 'react';

import Board from '@/common/components/context/kamban/Board/Board';

import * as S from './kamban.styles';

function KambanModule() {
  return (
    <S.Container>
      <S.KambanContainer>
        <Board />
      </S.KambanContainer>
    </S.Container>
  );
}

export default KambanModule;
