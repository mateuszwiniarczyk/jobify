const paginate = async (offset, location) => {
  let apiUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/offers?pageSize=5&view=onlyActive`;

  if (offset) {
    apiUrl += `&offset=${offset}`;
  }

  if (location) {
    apiUrl += '&' + encodeURI(`filterByFormula=(location="${location}")`);
  }

  const response = await fetch(apiUrl, {
    headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
  });

  const records = await response.json();

  return records;
};

export default paginate;
