const visaoLibertaria = require('../services/visao-libertaria');

const type = 'video';
const { VISAO_LIBERTARIA_API } = process.env;

function handleVideoResponse(videos) {
  return videos.map((video) => {
    video.status = video.statusName;
    video.authors.status = video.authors.statusText;

    video.category = video.categories.mainCategory;
    video.category.name = video.category.label;
    video.category.label = video.category.category;

    video.image = `${VISAO_LIBERTARIA_API}/video/image?id=${video.id}`;

    return video;
  });
}

module.exports = {
  queries: {
    async videoList(_, { ini = 0, max = 12 }) {
      const options = { type, ini, max };
      const response = await visaoLibertaria.list(options);

      const videos = handleVideoResponse(response.videos);

      return videos;
    },
    async videoCategory(_, { categ, ini = 0, max = 12 }) {
      const options = { type, categ, ini, max };
      const response = await visaoLibertaria.category(options);

      const videos = handleVideoResponse(response.videos);

      return videos;
    },
    async videoSearch(_, { search, ini = 0, max = 12 }) {
      const options = { type, search, ini, max };
      const response = await visaoLibertaria.search(options);

      const videos = handleVideoResponse(response.videos);

      return videos;
    },
  },
};
