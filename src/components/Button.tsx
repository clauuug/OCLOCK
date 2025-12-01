import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { Typography } from './Typography';

const StyledButton = styled.TouchableOpacity<{ variant?: 'primary' | 'secondary'; fullWidth?: boolean }>`
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.secondary.base : theme.colors.primary.base};
  padding: ${({ theme }) => theme.spacing(2)}px;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  flex-direction: row;
  gap: 8px;
  ${({ theme }) => ({ ...theme.shadow.default })};
`;

export type ButtonProps = TouchableOpacityProps & {
  label: string;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ label, disabled, loading, ...rest }) => {
  return (
    <StyledButton disabled={disabled || loading} activeOpacity={0.85} {...rest}>
      {loading && <ActivityIndicator color="#fff" />}
      <Typography color="#fff" weight="bold">
        {label}
      </Typography>
    </StyledButton>
  );
};
