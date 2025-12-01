import React from 'react';
import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';

const Field = styled.TextInput`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing(2)}px;
  border-radius: ${({ theme }) => theme.radii.md}px;
  font-family: ${({ theme }) => theme.typography.fontFamily.regular};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border};
`;

export const Input: React.FC<TextInputProps> = (props) => {
  return <Field placeholderTextColor="#8E8E93" {...props} />;
};
