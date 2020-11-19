import { NextApiRequest, NextApiResponse } from 'next';
import { OrphanageService } from '../../server/services/orphanage';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  return res.json(await OrphanageService.list());
};
