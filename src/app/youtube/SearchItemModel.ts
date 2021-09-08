import { SearchItem } from "./models/search-item.model";

interface IStatistics {
 viewCount: string;
 likeCount: string;
 dislikeCount: string;
 commentCount: string
}

interface ISnippet {
 publishedAt: string;
 title: string;
 description: string;
 thumbnails: { medium: { url: string } } 
}

export class SearchItemModel implements SearchItem {
  kind: string = '';
  etag: string = '';
  id: string = '';
  snippet: ISnippet = { publishedAt: '', title: '', description: '', thumbnails: { medium: { url: '' } } };
  statistics: IStatistics = { viewCount: '', likeCount: '', dislikeCount: '', commentCount: '' };
}

