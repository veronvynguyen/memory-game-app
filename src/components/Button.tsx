import * as React from 'react';

export interface ButtonProps {
  title: string;
  onClickHandler: () => void;
}

export default function Button(props: ButtonProps) {
  const { title, onClickHandler } = props;
  return (
    <button onClick={onClickHandler}>{title}</button>
  );
}
