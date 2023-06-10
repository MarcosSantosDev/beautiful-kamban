import * as React from 'react';

import * as S from './PriorityTag.styles';

type Priority = 'low' | 'average' | 'high';

type PriorityTagProps = {
  priority: Priority;
};

const getPriority = (priority: Priority) => {
  switch (priority) {
    case 'low':
      return 'BAIXA';
    case 'average':
      return 'MEDIA';
    case 'high':
      return 'ALTA';
    default:
      return '-';
  }
};

function PriorityTag({ priority }: PriorityTagProps) {
  return (
    <S.PriorityTagContainer
      low={priority === 'low'}
      average={priority === 'average'}
      high={priority === 'high'}
    >
      <S.Text>{getPriority(priority)}</S.Text>
    </S.PriorityTagContainer>
  );
}

export default React.memo(PriorityTag);
