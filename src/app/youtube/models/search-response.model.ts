import { SearchItem } from "./search-item.model";

interface IPageInfo {
    "totalResults": number,
    "resultsPerPage": number
}

export interface SearchResponse {
    "kind": string,
    "etag": string,
    "pageInfo": IPageInfo,
    "items": SearchItem[]
}
