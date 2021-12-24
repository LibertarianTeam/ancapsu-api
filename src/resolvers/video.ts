import { Args, Query, Resolver } from 'type-graphql';
import visaoLibertaria from '../services/visao-libertaria';

import { VideoType } from '../types/video';
import { CategoryArgsType, DefaultArgsType, SearchArgsType } from '../types';

const type = 'video';
const { VISAO_LIBERTARIA_API } = process.env;

function handleVideoResponse(videos: any[]): VideoType[] {
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

@Resolver()
class VideoResolver {
  @Query(() => [VideoType])
  async videoList(@Args() { ini, max }: DefaultArgsType) {
    const response = await visaoLibertaria.get<any>(type, 'list', { ini, max });
    const videos = handleVideoResponse(response.data.videos);

    return videos;
  }

  @Query(() => [VideoType])
  async videoCategory(@Args() { categ, ini, max }: CategoryArgsType) {
    const response = await visaoLibertaria.get<any>(type, 'category', { categ, ini, max });
    const videos = handleVideoResponse(response.data.videos);

    return videos;
  }

  @Query(() => [VideoType])
  async videoSearch(@Args() { search, ini, max }: SearchArgsType) {
    const response = await visaoLibertaria.post<any>(type, 'search', { SearchString: search }, { ini, max });
    const videos = handleVideoResponse(response.data.videos);

    return videos;
  }
}

export default VideoResolver;
