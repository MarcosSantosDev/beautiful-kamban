import { PlusIcon } from '@radix-ui/react-icons';

import Card from '../Card/Card';

import * as S from './List.styles';

function List() {
  return (
    <S.ListContainer>
      <S.Header>
        <S.Heading2>Lista 01</S.Heading2>
        <S.Button type="button">
          <PlusIcon />
        </S.Button>
      </S.Header>
      <S.UlList>
        <Card />
      </S.UlList>
    </S.ListContainer>
  );
}

export default List;
