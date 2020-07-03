const video = require('./video');
const article = require('./article');

module.exports = {
  Query: {
    ...video.queries,
    ...article.queries,
  },
};
