import Menu from './componets/menu';

import style from './note-layout.module.css';

export default function NoteLayout() {
  const links = ['All', 'Code', 'Hobby', 'Places'];
  return (
    <div className={style.notes}>
      <Menu links={links} />
    </div>
  );
}
