const GOOGLE_KEY = "AIzaSyAdXXglB0ngwY-50WFACLixZh0xZcAzVkU";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_KEY;
export const YOUTUBE_VIDEO_BY_ID = (id) => {
    return "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + id + "&key=" + GOOGLE_KEY;
} 

export const YOUTUBE_COMMENT_API = (id) => {
    return "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=" + id + "&key=" + GOOGLE_KEY;;
}

export const YOUTUBE_SEARCH_RECOMMENDATION = "https://corsproxy.org/?https%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dfirefox%26ds%3Dyt%26q%3D";

export const YOUTUBE_SEARCH_RESULTS = (q) => {
    return "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + q + "&key=" + GOOGLE_KEY;
} 

export const LIVE_CHAT_COUNT = 30;