import { useRouter } from 'next/router';
import Content from '../../components/content';
import NotesLayout from '../../layouts/notes-layout';

import { noticeLinks } from '../../mock-data/links';

export default function Test() {
  const router = useRouter();
  const { pid } = router.query;
  let cards = ['0', '1', '2', '3'];

  console.log(pid);

  if (pid !== '/') {
    const index = noticeLinks.findIndex((x) => (x.to.replace('/', '') === pid));
    console.log(index);
    cards = [cards[index]];
  }

  return (
    <Content>
      <NotesLayout links={noticeLinks} cards={cards} />
    </Content>
  );
}
