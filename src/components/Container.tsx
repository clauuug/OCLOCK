import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = ({ children }: PropsWithChildren) => {
  return <SafeArea edges={["top", "left", "right"]}>{children}</SafeArea>;
};
