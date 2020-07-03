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
    async videoList(_, { ini = 0, max = 12 }, { response }) {
      const options = { type, ini, max };
      const responseData = await visaoLibertaria.list(options);

      response.header('X-Total-Count', responseData.total);
      const videos = handleVideoResponse(responseData.videos);

      return videos;
    },
    async videoCategory(_, { categ, ini = 0, max = 12 }, { response }) {
      const options = { type, categ, ini, max };
      const responseData = await visaoLibertaria.category(options);

      response.header('X-Total-Count', responseData.total);
      const videos = handleVideoResponse(responseData.videos);

      return videos;
    },
    async videoSearch(_, { search, ini = 0, max = 12 }, { response }) {
      const options = { type, search, ini, max };
      const responseData = await visaoLibertaria.search(options);

      response.header('X-Total-Count', responseData.total);
      const videos = handleVideoResponse(responseData.videos);

      return videos;
    },
  },
};
