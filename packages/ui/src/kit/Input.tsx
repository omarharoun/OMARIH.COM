import React from 'react';
import { TextInput } from 'react-native';

type Props = React.ComponentProps<typeof TextInput> & { fullWidth?: boolean };

export const Input: React.FC<Props> = ({ fullWidth = true, style, ...rest }) => (
  <TextInput
    style={{
      width: fullWidth ? '100%' : undefined,
      borderWidth: 1,
      borderColor: '#cbd5e1',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 12,
      ...style,
    }}
    placeholderTextColor="#94a3b8"
    {...rest}
  />
);
