import * as React from 'react';

import Board from '@/common/components/context/kamban/Board/Board';
import { TemplateApp } from '@/common/components/templates';

function KambanModule() {
  return (
    <TemplateApp>
      <Board />
    </TemplateApp>
  );
}

export default KambanModule;
