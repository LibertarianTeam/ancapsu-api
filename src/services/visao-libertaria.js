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
  video: {
    async list({ ini = 0, max = 12 } = {}) {
      const query = buildQuery({ ini, max });
      const responseData = (await axios.get(`/Video/List?${query}`)).data;

      return camelcaseObjectDeep(responseData);
    },
    async category({ categ = 'news', ini = 0, max = 10 } = {}) {
      const query = buildQuery({ categ, ini, max });
      const responseData = (await axios.get(`/Video/ByCategory?${query}`)).data;

      return camelcaseObjectDeep(responseData);
    },
    async search({ search = '', ini = 0, max = 10 } = {}) {
      const query = buildQuery({ ini, max });
      const body = { SearchString: search };
      const responseData = (await axios.post(`/Video/Search?${query}`, body))
        .data;

      return camelcaseObjectDeep(responseData);
    },
  },
};
