import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Menu({ links, extraClass }
  : { links: TypeLink[], extraClass?: Record<string, string> }) {
  return (
    <ul className={extraClass?.links}>
      {links.map(({ label, url }) => (
        <li className={extraClass?.item} key={uuidv4()}>
          <Link className={extraClass?.link} href={url}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
