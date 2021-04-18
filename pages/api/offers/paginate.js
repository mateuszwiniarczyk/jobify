import paginateOffers from 'services/offers/paginate';

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      const { offset, location } = req.query;
      const offers = await paginateOffers(offset, location);
      res.status(200).json({
        offers: offers.records.map((offer) => offer.fields),
        offset: offers.offset
      });

      break;
    }
    default:
      res.status(400);
  }
};
