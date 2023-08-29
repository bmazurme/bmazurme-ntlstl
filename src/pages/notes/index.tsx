import { useEffect, useState } from 'react';

import Content from '../../components/content';
import NotesLayout from '../../layouts/notes-layout';

import { noticeLinks } from '../../mock-data/links';

export default function Profile() {
  const url = '/api/cards';
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const result = await response.json();
          setCards(result.cards);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCards();
  }, []);

  return (
    <Content>
      <NotesLayout links={noticeLinks} cards={cards} />
    </Content>
  );
}
