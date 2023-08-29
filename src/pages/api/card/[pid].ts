// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { notFound } from 'next/navigation';

import { TypeNoteCard } from '../../../layouts/note-layout';

import { cards } from '../../../mock-data/cards';

type Data = {
  card: TypeNoteCard;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { pid } = req.query;
  const data = cards.find((c) => c.id === pid);

  if (!data) {
    notFound();
  }

  res.status(200).json({ card: data });
}
