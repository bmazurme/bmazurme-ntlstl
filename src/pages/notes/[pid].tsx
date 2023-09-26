import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Content from '../../components/content';
import NotesLayout from '../../layouts/notes-layout';
import { noticeLinks } from '../../mock-data/links';

export default function Test() {
  const router = useRouter();
  const { pid } = router.query;
  const url = '/api/cards';
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await fetch(`${url}/${pid}`);

        if (response.ok) {
          const result = await response.json();
          setCards(result.cards);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCards();
  }, [pid]);

  return (
    <Content>
      <NotesLayout links={noticeLinks} cards={cards} />
    </Content>
  );
}
