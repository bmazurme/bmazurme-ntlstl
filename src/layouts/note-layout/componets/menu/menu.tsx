import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

import classNames from 'classnames';
import style from './menu.module.css';

export default function Menu({ links }: { links: string[] }) {
  const router = useRouter();
  console.log(router);

  return (
    <ul className={style.menu}>
      {links.map((link) => (
        <li
          key={uuidv4()}
          className={classNames(
            style.item,
            { [style.active]: router.asPath === `/notes/${link}` || (router.asPath === '/notes' && link === 'All') },
          )}
        >
          <Link href={`/notes/${link}`}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
}
