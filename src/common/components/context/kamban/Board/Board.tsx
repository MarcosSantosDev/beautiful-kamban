import * as React from 'react';

import List from './components/List/List';
import * as S from './Board.styles';

function Board() {
  return (
    <S.BoardContainer>
      <List />
    </S.BoardContainer>
  );
}

export default Board;
