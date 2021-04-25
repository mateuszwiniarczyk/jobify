const paginate = async (offset, location, jobTitle, jobType, employmentType, experience) => {
  let apiUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/offers?pageSize=5&view=onlyActive`;

  if (offset) {
    apiUrl += `&offset=${offset}`;
  }

  if (location || jobTitle || jobType || employmentType || experience) {
    apiUrl += `&filterByFormula=AND(`;
  }

  const query = [];

  if (jobTitle) {
    query.push(`title="${jobTitle}"`);
  }

  if (location) {
    query.push(`location="${location}"`);
  }

  if (jobType) {
    const types = jobType.split(',');

    query.push(`OR(${types.map((type) => `type="${type}"`)})`);
  }

  if (employmentType) {
    const types = employmentType.split(',');

    query.push(`OR(${types.map((type) => `employmentType="${type}"`)})`);
  }

  if (experience) {
    const types = experience.split(',');
    query.push(`OR(${types.map((type) => `experience="${type}"`)})`);
  }

  if (location || jobTitle || jobType || employmentType || experience) {
    apiUrl += query.map((item) => item);
    apiUrl += ')';
  }

  apiUrl = encodeURI(apiUrl);

  const response = await fetch(apiUrl, {
    headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
  });

  const records = await response.json();

  return records;
};

export default paginate;
