import { NotFound } from '../../components';
import Menu from '../../components/menu';

import withExtraClass from '../../hocs/with-extra-class';

import { Links } from '../../utils';

import styles from '../../styles/home.module.css';
import menuStyle from './not-found-layout.module.css';

const IndexMenu = withExtraClass(menuStyle)(Menu);

const links = [
  { label: 'Go to main', url: Links.BASE },
];

export default function NotFoundLayout() {
  return (
    <main className={styles.main}>
      <NotFound />
      <div className={menuStyle.description}>
        <span className={menuStyle.text}>Not found page.</span>
        <IndexMenu links={links} />
      </div>
    </main>
  );
}
