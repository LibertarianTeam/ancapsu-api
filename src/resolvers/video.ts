import { Args, Query, Resolver } from 'type-graphql';
import visaoLibertaria from '../services/visao-libertaria';

import { VideoType } from '../types/video';
import { CategoryArgsType, DefaultArgsType, SearchArgsType } from '../types';

const type = 'video';
const { VISAO_LIBERTARIA_API } = process.env;

function handleVideoResponse(videos: any[]): VideoType[] {
  return videos.map(video => {
    const lvVideo: VideoType = { ...video };

    lvVideo.status = video.statusName || '';
    lvVideo.description = video.description || video.startingDescription || '';

    if (!lvVideo.authors) lvVideo.authors = {};
    lvVideo.authors.status = video.authors.statusText || '';

    lvVideo.category = {};
    lvVideo.category.name = video.categories?.mainCategory?.label || '';
    lvVideo.category.label = video.categories?.mainCategory?.category || '';

    lvVideo.categories =
      video.categories?.categories?.map((category: any) => ({
        name: category.label || '',
        label: category.category || '',
      })) || [];

    lvVideo.image = `${VISAO_LIBERTARIA_API}/video/image?id=${video.id}`;

    return lvVideo;
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
