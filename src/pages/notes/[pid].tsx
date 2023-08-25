import { useRouter } from 'next/router';
import Content from '../../components/content';
import NotesLayout from '../../layouts/notes-layout';

import { noticeLinks } from '../../mock-data/links';
import { cards } from '../../mock-data/cards';

export default function Test() {
  const router = useRouter();
  const { pid } = router.query;
  const index = noticeLinks.findIndex((x) => (x.to.replace('/', '') === pid));
  const getCards = pid !== '/' ? [cards[index]] : cards;

  return (
    <Content>
      <NotesLayout links={noticeLinks} cards={getCards} />
    </Content>
  );
}
