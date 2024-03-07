'use client';
import { FC, MouseEvent, useState } from 'react';
import style from './menu.module.scss';
import classNames from 'classnames';

interface Props {
  pagesList: string[];
}
const Menu: FC<Props> = ({ pagesList }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [init, setInit] = useState(false);

  const handaleOnOpenMenu = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    event.stopPropagation();
    setOpenMenu(true);
    setInit(true);
  };
  return (
    <div className={style['menu-line']}>
      <div
        className={classNames(style['menu-back'], {
          [style['menu-back__open']]: openMenu,
          [style['menu-back__close']]: init && !openMenu,
        })}
        onClick={() => setOpenMenu(false)}
      >
        <div
          className={classNames(style.menu, {
            [style['expanded-menu']]: openMenu,
          })}
          onClick={(event) => handaleOnOpenMenu(event)}
        >
          {openMenu && pagesList.map((page) => <div key={page}>{page}</div>)}
        </div>
      </div>
    </div>
  );
};
export default Menu;
