import React from 'react';
import styled from 'styled-components/native';
import { TextProps } from 'react-native';

type SizeKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type WeightKey = 'regular' | 'semiBold' | 'bold';

const StyledText = styled.Text<{
  size?: SizeKey;
  weight?: WeightKey;
  color?: string;
  align?: 'left' | 'center' | 'right';
}>`
  font-size: ${({ theme, size }) => theme.typography.sizes[size ?? 'md']}px;
  font-family: ${({ theme, weight }) => theme.typography.fontFamily[weight ?? 'regular']};
  color: ${({ theme, color }) => color ?? theme.colors.text};
  text-align: ${({ align }) => align ?? 'left'};
`;

export type TypographyProps = TextProps & {
  size?: SizeKey;
  weight?: WeightKey;
  color?: string;
  align?: 'left' | 'center' | 'right';
};

export const Typography: React.FC<TypographyProps> = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);
