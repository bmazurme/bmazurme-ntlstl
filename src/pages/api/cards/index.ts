// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { TypeNoteCard } from '../../../layouts/note-layout';

import { cards } from '../../../mock-data/cards';

type Data = {
  name?: string;
  cards: TypeNoteCard[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ cards });
}
