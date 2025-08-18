import React from 'react';
import { View } from 'react-native';

export const Card: React.FC<React.PropsWithChildren<{ style?: any }>> = ({ children, style }) => (
  <View
    style={{
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      elevation: 2,
      ...style,
    }}
  >
    {children}
  </View>
);
