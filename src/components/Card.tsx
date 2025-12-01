import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing(2)}px;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  ${({ theme }) => ({ ...theme.shadow.default })};
`;

export const Card = ({ children }: PropsWithChildren) => <Wrapper>{children}</Wrapper>;
