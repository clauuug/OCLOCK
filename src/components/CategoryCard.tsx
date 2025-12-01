import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Typography } from './Typography';

const Wrapper = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-radius: ${({ theme }) => theme.radii.lg}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  align-items: flex-start;
  justify-content: center;
  min-height: 120px;
  gap: 12px;
`;

const Badge = styled.View`
  background-color: ${({ theme }) => theme.colors.primary.base};
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radii.sm}px;
`;

export type CategoryCardProps = {
  title: string;
  subtitle?: string;
  onPress?: () => void;
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ title, subtitle, onPress }) => (
  <Wrapper activeOpacity={0.9} onPress={onPress}>
    <Badge>
      <Typography color="#fff" size="sm" weight="semiBold">
        {subtitle ?? 'Microactividad'}
      </Typography>
    </Badge>
    <Typography weight="bold" size="xl">
      {title}
    </Typography>
  </Wrapper>
);
