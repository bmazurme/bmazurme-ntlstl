import MenuSecondary from '../../components/menu-secondary';

import { noticeLinks } from '../../mock-data/links';

import style from './note-layout.module.css';

export default function NoteLayout() {
  return (
    <div className={style.notes}>
      <MenuSecondary links={noticeLinks} />
    </div>
  );
}
