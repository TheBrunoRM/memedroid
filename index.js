const fetch = require("node-fetch");

// NOTE: shift() is used to remove the code that goes before the useful information
module.exports.getMemes = async (url = `https://es.memedroid.com/memes/top/day`) => {
    let data = await fetch(url).then(d => d.text());
    let memes = data.split(`<div class="gallery-memes-container">`)[1].split(`article id=`);
    memes.shift();
    return memes.map(meme => {

        let video = false;
        if (meme.includes(`<div class="video-container"`)) {
            video = meme.split("<source src=").map(src => {
                let url = src.split(`"`)[1].split(`"`)[0];
                let type = src.split(`type="`)[1].split(`">`)[0];
                return { url, type };
            });
            video.shift();
        }

        let image = meme.split(`<img src=`).map(src => {
            return src.split(`"`)[1].split(`"`)[0];
        }).filter(m => m.startsWith("http"));
        image.shift();

        let id = meme.split(`"article-item-`)[1]?.split(`"`)[0];
        let name = meme.split(`href="`)[1]?.split(`">`)[1]?.split(`</a>`)[0];
        let author = meme.split(`By <a`)[1]?.split(`">`)[1]?.split(`</a>`)[0];
        let rating = parseInt(meme.split(`<div class="item-rating-container"`)[1]?.split(`>`)[2]?.split(`<`)[0].replace("%", ""));
        let votes = parseInt(meme.split(`data-votes="`)[1]?.split(`"`)[0]);
        let positiveVotes = parseInt(meme.split(`data-positive-votes="`)[1].split(`"`)[0]);
        let link = meme.split(`data-share-link="`)[1]?.split(`"`)[0];
        let date = new Date(meme.split(`<time datetime="`)[1]?.split(`"`)[0]);
        let poster = meme.split(`poster="`)[1]?.split(`"`)[0];

        return { id, name, author, rating, votes, positiveVotes, link, date, poster, video, image }
    });
}