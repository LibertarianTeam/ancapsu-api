const axios = require('../plugins/axios');
const camelcaseObjectDeep = require('camelcase-object-deep');

function buildQuery(options) {
  return Object.keys(options).reduce((query, key, index) => {
    const value = options[key];

    return `${query}${index !== 0 ? '&' : ''}${key}=${value}`;
  }, '');
}

module.exports = {
  async list({ type, ini = 0, max = 12 } = {}) {
    const query = buildQuery({ ini, max });
    const response = await axios.get(`/${type}/list?${query}`);

    return camelcaseObjectDeep(response.data);
  },
  async category({ type, categ = 'news', ini = 0, max = 12 } = {}) {
    const query = buildQuery({ categ, ini, max });
    const response = await axios.get(`/${type}/bycategory?${query}`);

    return camelcaseObjectDeep(response.data);
  },
  async search({ type, search = '', ini = 0, max = 12 } = {}) {
    const query = buildQuery({ ini, max });
    const body = { SearchString: search };
    const response = await axios.post(`/${type}/search?${query}`, body);

    return camelcaseObjectDeep(response.data);
  },
};
