import { SearchItem } from "./models/search-item.model";

export class SearchItemModel implements SearchItem {
  kind: string = '';
  etag: string = '';
  id: string = '';
  snippet: { publishedAt: string, title: string, description: string, thumbnails: { medium: { url: string } } } = { publishedAt: '', title: '', description: '', thumbnails: { medium: { url: '' } } };
  statistics: { viewCount: string, likeCount: string, dislikeCount: string, commentCount: string } = { viewCount: '', likeCount: '', dislikeCount: '', commentCount: '' };
}

