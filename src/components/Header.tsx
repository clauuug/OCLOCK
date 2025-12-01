import React from 'react';
import styled from 'styled-components/native';
import { Typography } from './Typography';
import { Spacer } from './Spacer';

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export type HeaderProps = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ title, subtitle, action }) => (
  <Wrapper>
    <Row>
      <Typography size="xl" weight="bold">
        {title}
      </Typography>
      {action}
    </Row>
    {subtitle && (
      <>
        <Spacer size={6} />
        <Typography size="sm" color="#6B7280">
          {subtitle}
        </Typography>
      </>
    )}
  </Wrapper>
);

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
