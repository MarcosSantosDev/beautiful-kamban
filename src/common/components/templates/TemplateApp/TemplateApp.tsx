import * as React from 'react';

import * as S from './TemplateApp.styles';

type TemplateAppProps = {
  children: React.ReactNode;
};

function TemplateApp({ children }: TemplateAppProps) {
  return (
    <S.TemplateAppContainer>
      <S.HeaderContainer>
        <S.XPTOContent />
      </S.HeaderContainer>
      <S.SidebarContainer>
        <S.XPTOContent />
      </S.SidebarContainer>
      <S.ChildContainer>{children}</S.ChildContainer>
    </S.TemplateAppContainer>
  );
}

export default TemplateApp;
