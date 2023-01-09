import About from '../About';
import Portfolio from '../Portfolio';
import Tech from '../Tech';
import Company from '../Company';

import { IProfile } from '../../interfaces';

export default function Info({ info }: { info: IProfile }) {
  return (
    <main>
      <About info={info} />
      <Portfolio info={info} />
      <Tech info={info} />
      <Company info={info} />
    </main>
  )
}
