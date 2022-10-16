import * as React from 'react';
import '../styling/Button.css';

export interface ButtonProps {
  title: string;
  onClickHandler: () => void;
  color?: string;
}

export default function Button(props: ButtonProps) {
  const { title, onClickHandler, color } = props;

  return (
    <button onClick={onClickHandler} className={`button--${color}`}>{title}</button>
  );
}
