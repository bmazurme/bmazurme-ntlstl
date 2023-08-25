import Content from '../../components/content';
import NotesLayout from '../../layouts/notes-layout';

import { noticeLinks } from '../../mock-data/links';
import { cards } from '../../mock-data/cards';

export default function Profile() {
  return (
    <Content>
      <NotesLayout links={noticeLinks} cards={cards} />
    </Content>
  );
}
