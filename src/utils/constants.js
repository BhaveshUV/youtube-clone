const GOOGLE_KEY = "AIzaSyAdXXglB0ngwY-50WFACLixZh0xZcAzVkU";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_KEY;
export const YOUTUBE_VIDEO_BY_ID = (id) => {
    return "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" + id + "&key=" + GOOGLE_KEY;
} 

export const YOUTUBE_COMMENT_API = (id) => {
    return "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=" + id + "&key=" + GOOGLE_KEY;;
}