import Link from 'next/link';
import { FC } from 'react';
import style from './menuItem.module.scss';

interface Props {
  children: React.ReactNode;
  href: string;
}
const MenuItem: FC<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <div className={style['menu-item']}>{children}</div>
    </Link>
  );
};
export default MenuItem;
