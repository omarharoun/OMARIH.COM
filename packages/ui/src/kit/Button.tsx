import React from 'react';
import { Pressable, Text } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({ title, onPress, disabled }) => (
  <Pressable
    accessibilityRole="button"
    onPress={disabled ? undefined : onPress}
    style={({ pressed }) => ({
      backgroundColor: disabled ? '#94a3b8' : pressed ? '#0ea5e9' : '#0284c7',
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 8,
    })}
  >
    <Text style={{ color: '#fff', fontWeight: '600' }}>{title}</Text>
  </Pressable>
);
