import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & { fullWidth?: boolean };

export default function Input({ fullWidth = true, style, ...rest }: Props) {
  return (
    <input
      style={{ width: fullWidth ? '100%' : undefined, ...(style as React.CSSProperties) }}
      {...rest}
    />
  );
}
