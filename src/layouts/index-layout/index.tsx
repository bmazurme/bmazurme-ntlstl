import { Logo } from '../../components';
import Menu from '../../components/menu';

import withExtraClass from '../../hocs/with-extra-class';

import links from '../../mock-data/links';

import styles from '../../styles/home.module.css';
import menuStyle from './index-layout.module.css';

const IndexMenu = withExtraClass(menuStyle)(Menu);

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
      <IndexMenu links={links} />
    </main>
  );
}
