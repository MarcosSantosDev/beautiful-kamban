import * as React from 'react';

import * as S from './Card.styles';

function Card() {
  return (
    <S.CardContainer>
      <S.Header>
        <S.Paragraph>EXAMPLE</S.Paragraph>
      </S.Header>
      <S.Content>
        <S.Paragraph>My Content</S.Paragraph>
      </S.Content>
    </S.CardContainer>
  );
}

export default React.memo(Card);
