import React from 'react';
import styled from 'styled-components/macro';

interface MainContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MainContent = ({ children }: MainContentProps) => {
  return <StyledMainContent>{children}</StyledMainContent>;
};

const StyledMainContent = styled.main`
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    max-width: 600px;
  }
`;
