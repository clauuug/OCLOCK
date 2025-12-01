import React from 'react';
import styled from 'styled-components/native';

const Space = styled.View<{ size?: number }>`
  width: 100%;
  height: ${({ size }) => size ?? 8}px;
`;

export const Spacer = ({ size }: { size?: number }) => <Space size={size} />;
