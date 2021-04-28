import { getSession } from 'next-auth/client';
import toggleActive from 'services/offers/toggleActive';

export default async (req, res) => {
  switch (req.method) {
    case 'PUT': {
      try {
        const session = await getSession({ req });
        if (!session && session.user.role !== 'admin') {
          return status(401).json({ error: 'not_authorized' });
        }
        const offer = await toggleActive(req.query.id);
        res.status(200).json({ status: 'updated', offer });
      } catch (error) {
        res.status(422).json({ status: 'not_updated', error });
      }
      break;
    }

    default:
      res.status(400);
  }
};
