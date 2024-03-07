'use client';
import { FC, MouseEvent, useEffect, useState } from 'react';
import style from './menu.module.scss';
import classNames from 'classnames';
import { MenuItem } from '@UI';
import { usePathname } from 'next/navigation';

interface Props {
  pagesList: string[];
}
const Menu: FC<Props> = ({ pagesList }) => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [init, setInit] = useState(false);

  const handaleOnOpenMenu = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    event.stopPropagation();
    setOpenMenu(true);
    setInit(true);
  };

  useEffect(() => {
    if (openMenu) {
      setOpenMenu(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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
          {openMenu &&
            ['', ...pagesList].map((page) => (
              <MenuItem key={page} href={`/${page}`}>
                {page}
              </MenuItem>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Menu;
