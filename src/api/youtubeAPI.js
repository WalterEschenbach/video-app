// body: {
//     key: KEY,
//     q: term,
//     part: "snippet",
//     type: "video",
//     maxResults: 5
//   }

const youtubeAPI = async term => {
  const KEY = "AIzaSyAgBUKy-R_jto2OI3NSyqXJo_X2XoStcmo";
  const url =
    "https://www.googleapis.com/youtube/v3/search?key=" +
    KEY +
    "&part=snippet&q=" +
    term;
  const fetchResult = fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": KEY
    }
  });
  const resp = await fetchResult;
  const jsonData = await resp.json();
  return jsonData;
};
console.log(youtubeAPI("cars"));

export default youtubeAPI;
