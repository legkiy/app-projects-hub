import clsx from 'clsx';
import styles from './card.module.scss';
import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';

interface ICard
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

const Card: FC<ICard> = ({ children, ...props }) => {
  return <div className={clsx(styles.card, props.className)}>{children}</div>;
};
export default memo(Card);
