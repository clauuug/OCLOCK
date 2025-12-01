import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Typography } from './Typography';

const Wrapper = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radii.md}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  ${({ theme }) => ({ ...theme.shadow.default })};
`;

const IconPlaceholder = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.primary.light};
  align-items: center;
  justify-content: center;
`;

export type ActivityCardProps = {
  title: string;
  duration: string;
  description?: string;
  onPress?: () => void;
};

export const ActivityCard: React.FC<ActivityCardProps> = ({ title, duration, description, onPress }) => (
  <Wrapper activeOpacity={0.9} onPress={onPress}>
    <IconPlaceholder>
      <Typography weight="bold">⏱️</Typography>
    </IconPlaceholder>
    <StyledContent>
      <Typography weight="bold" size="md">
        {title}
      </Typography>
      <Typography size="sm" color="inherit">
        {description ?? 'Actividad breve y enfocada.'}
      </Typography>
      <Typography size="sm" color="inherit" weight="semiBold">
        {duration}
      </Typography>
    </StyledContent>
  </Wrapper>
);

const StyledContent = styled.View`
  flex: 1;
  gap: 4px;
`;
