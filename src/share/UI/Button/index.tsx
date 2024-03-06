'use client';

import { useAppDispatch } from '@/features/store';
import { increment } from '@/features/store/counter';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())} {...props}>
        {children}
      </button>
    </div>
  );
};
export default Button;
