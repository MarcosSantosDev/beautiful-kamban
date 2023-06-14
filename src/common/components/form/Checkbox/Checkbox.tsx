import React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import * as S from './Checkbox.styles';

type CheckboxProps = {
  size?: 'sm' | 'md' | 'lg';
} & RadixCheckbox.CheckboxProps;

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, forwardRef) => {
    return (
      <S.Root {...props} ref={forwardRef}>
        <S.Indicator>
          <CheckIcon />
        </S.Indicator>
      </S.Root>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
