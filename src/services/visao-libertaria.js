const axios = require('../plugins/axios');
const camelcaseObjectDeep = require('camelcase-object-deep');

function buildQuery(options) {
  return Object.keys(options).reduce(
    (query, key, index) =>
      `${query}${index !== 0 ? '&' : ''}${key}=${options[key]}`,
    ''
  );
}

module.exports = {
  async list({ type, ini = 0, max = 12 } = {}) {
    const query = buildQuery({ ini, max });
    const responseData = (await axios.get(`/${type}/list?${query}`)).data;

    return camelcaseObjectDeep(responseData);
  },
  async category({ type, categ = 'news', ini = 0, max = 10 } = {}) {
    const query = buildQuery({ categ, ini, max });
    const responseData = (await axios.get(`/${type}/bycategory?${query}`)).data;

    return camelcaseObjectDeep(responseData);
  },
  async search({ type, search = '', ini = 0, max = 10 } = {}) {
    const query = buildQuery({ ini, max });
    const body = { SearchString: search };
    const responseData = (await axios.post(`/${type}/search?${query}`, body))
      .data;

    return camelcaseObjectDeep(responseData);
  },
};
