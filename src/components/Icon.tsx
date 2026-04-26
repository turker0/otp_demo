import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type IconName = string;

type Props = {
  name: IconName;
  size?: number;
  color?: string;
};

export function Icon({ name, size = 18, color }: Props) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
}

