import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Content from '../../components/content';
import NoteLayout, { TypeNoteCard } from '../../layouts/note-layout';

export default function Note() {
  const router = useRouter();
  const { pid } = router.query;
  const url = '/api/card';
  const [card, setCard] = useState<TypeNoteCard | null>(null);

  useEffect(() => {
    const getCard = async () => {
      if (pid) {
        try {
          const response = await fetch(`${url}/${pid}`);

          if (response.ok) {
            const result = await response.json();
            setCard(result.card);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    getCard();
  }, [pid]);

  return (
    <Content>
      <NoteLayout card={card} />
    </Content>
  );
}
