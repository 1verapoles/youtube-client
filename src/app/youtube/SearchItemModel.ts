import { SearchItem } from "./models/search-item.model";

export class SearchItemModel implements SearchItem {
  kind: string = '';
  etag: string = '';
  id: string = '';
  snippet: any;
  statistics: any;
}

