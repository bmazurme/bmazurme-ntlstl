import About from '../About';
import Tech from '../Tech';
import Education from '../Education';
import Company from '../Company';

import { IProfile } from '../../interfaces';

export default function Info({ info }: { info: IProfile }) {
  return (
    <main>
      <About info={info} />
      <Tech info={info} />
      <Education info={info} />
      <Company info={info} />
    </main>
  )
}
