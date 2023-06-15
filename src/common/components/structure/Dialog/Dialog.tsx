import * as React from 'react';
import * as DialogRadix from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import * as S from './Dialog.styles';

type DialogProps = {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange(open: boolean): void;
  size?: 'small' | 'medium' | 'xLarge';
};

function Dialog({ children, open = false, onOpenChange, size }: DialogProps) {
  return (
    <DialogRadix.Root open={open} onOpenChange={onOpenChange}>
      <DialogRadix.Portal>
        <S.DialogOverlay />
        <S.DialogContent size={size}>
          {children}
          <DialogRadix.Close asChild>
            <S.IconButton aria-label="Close">
              <Cross2Icon />
            </S.IconButton>
          </DialogRadix.Close>
        </S.DialogContent>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  );
}

export default Dialog;
