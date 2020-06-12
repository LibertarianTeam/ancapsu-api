const visaoLibertaria = require('../services/visao-libertaria');

function handleVideoResponse(videos) {
  return videos.map((video) => {
    video.status = video.statusName;
    video.categories = video.categories.categories;
    video.authors.status = video.authors.statusText;

    return video;
  });
}

module.exports = {
  queries: {
    async videoList(_, { ini = 0, max = 12 }) {
      const videos = handleVideoResponse(
        (await visaoLibertaria.video.list({ ini, max })).videos
      );

      return videos;
    },
    async videoCategory(_, { categ, ini = 0, max = 12 }) {
      const videos = handleVideoResponse(
        (await visaoLibertaria.video.category({ categ, ini, max })).videos
      );

      return videos;
    },
    async videoSearch(_, { search, ini = 0, max = 12 }) {
      const videos = handleVideoResponse(
        (await visaoLibertaria.video.search({ search, ini, max })).videos
      );

      return videos;
    },
  },
};
