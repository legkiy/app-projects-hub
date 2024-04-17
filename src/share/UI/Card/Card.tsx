import styles from './card.module.scss';
import { FC, memo } from 'react';
interface ICard {
  children: React.ReactNode;
}
const Card: FC<ICard> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
export default memo(Card);
