import React from 'react';
import styled from 'styled-components/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { Typography } from './Typography';

const Bar = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing(1)}px;
  border-top-left-radius: ${({ theme }) => theme.radii.xl}px;
  border-top-right-radius: ${({ theme }) => theme.radii.xl}px;
  gap: 8px;
  ${({ theme }) => ({ ...theme.shadow.default })};
`;

const Item = styled(TouchableOpacity)<{ active?: boolean }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(1.25)}px;
  border-radius: ${({ theme }) => theme.radii.md}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, active }) => (active ? theme.colors.primary.light : 'transparent')};
`;

export const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <Bar>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Item key={route.key} active={isFocused} onPress={onPress} accessibilityRole="button">
            <Typography weight={isFocused ? 'bold' : 'regular'} color={isFocused ? undefined : '#6B7280'}>
              {label as string}
            </Typography>
          </Item>
        );
      })}
    </Bar>
  );
};
