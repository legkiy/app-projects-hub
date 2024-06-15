'use client';

import { useActions } from '@/features/store';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import styles from './button.module.scss';

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  const actions = useActions();
  return (
    <button
      className={styles.button}
      // onClick={() => {
      //   actions.increment() аналогично ->dispatch(increment());
      // }}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
