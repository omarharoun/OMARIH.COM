import React from 'react';

type Props = {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
};

export default function Button({ title, onClick, disabled, style }: Props) {
  return (
    <button disabled={disabled} onClick={disabled ? undefined : onClick} style={style}>
      {title}
    </button>
  );
}
