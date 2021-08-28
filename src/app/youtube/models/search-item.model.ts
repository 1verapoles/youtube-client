interface IThumbnail {
    "url": string,
    "width"?: number,
    "height"?: number
}

interface IStatistics {
    "viewCount": string,
    "likeCount": string,
    "dislikeCount": string,
    "favoriteCount"?: string,
    "commentCount": string
}

interface IThumbnails {
    "default"?: IThumbnail,
    "medium": IThumbnail,
    "high"?: IThumbnail,
    "standard"?: IThumbnail,
    "maxres"?: IThumbnail
}

interface ILocalized {
    "title"?: string,
    "description"?: string
}

interface ISnippet {
    "publishedAt": string,
    "channelId"?: string,
    "title": string,
    "description": string,
    "thumbnails": IThumbnails,
    "channelTitle"?: string,
    "tags"?: string[],
    "categoryId"?: string,
    "liveBroadcastContent"?: string,
    "localized"?: ILocalized,
    "defaultAudioLanguage"?: string
}

export interface SearchItem {
    "kind"?: string,
    "etag"?: string,
    "id": string,
    "snippet": ISnippet,
    "statistics": IStatistics
}
