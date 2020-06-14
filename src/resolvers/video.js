const visaoLibertaria = require('../services/visao-libertaria');
const { VISAO_LIBERTARIA_API } = process.env;

function handleVideoResponse(videos) {
  return videos.map((video) => {
    video.status = video.statusName;
    video.authors.status = video.authors.statusText;
    video.category = video.categories.mainCategory;
    video.category.name = video.category.label;
    video.category.label = video.category.category;
    video.image = `${VISAO_LIBERTARIA_API}/Video/Image?id=${video.id}`;

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
