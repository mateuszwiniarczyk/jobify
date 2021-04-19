const isAuthorized = (offer, session) => {
  console.log(offer);
  if (!session) return false;
  if (session.user.role === 'admin') return true;
  if (offer.users[0] === session.user.id) return true;

  return false;
};

export default isAuthorized;
