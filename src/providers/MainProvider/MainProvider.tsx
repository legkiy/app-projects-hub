import { FC } from 'react';
import style from './mainProvider.module.scss';

interface Props {
  children: React.ReactNode;
}
const MainProvider: FC<Props> = ({ children }) => {
  return <main className={style['main-provider']}>{children}</main>;
};
export default MainProvider;
