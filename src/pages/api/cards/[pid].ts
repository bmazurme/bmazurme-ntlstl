// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
// import { notFound } from 'next/navigation';

import { cards } from '../../../mock-data/cards';

type Data = {
  name?: string;
  cards?: { id: string; link: string; name: string; tag: string; }[];
  pid?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { pid } = req.query;
  const data = cards.filter((c) => c.tag === pid);

  res.status(200).json({ cards: data });
}
