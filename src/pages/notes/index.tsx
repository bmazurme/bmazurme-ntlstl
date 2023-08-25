import Content from '../../components/content';
import NotesLayout from '../../layouts/notes-layout';

import { noticeLinks } from '../../mock-data/links';

export default function Profile() {
  const cards = ['0', '1', '2', '3'];

  return (
    <Content>
      <NotesLayout links={noticeLinks} cards={cards} />
    </Content>
  );
}
