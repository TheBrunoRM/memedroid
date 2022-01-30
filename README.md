# memedroid

Example usage

```js
const memedroid = require("memedroid");

// you can specify any valid memedroid URL
// examples:
// https://es.memedroid.com/memes/top/day
// https://es.memedroid.com/memes/top/week
// https://es.memedroid.com/memes/top/month
// https://es.memedroid.com/memes/top/ever
// https://es.memedroid.com/memes/random

// you can also add a page number to the end of the url
// example: https://es.memedroid.com/memes/top/day/5

memedroid.getMemes(`https://es.memedroid.com/memes/latest`)
    .then(memes => console.log(memes));
```

Example response

```js
[{
    id: '9999999',
    name: 'This is a post',
    author: 'HelloWorld',
    rating: 95, // percentage
    votes: 913,
    positiveVotes: 881,
    link: 'https://es.memedroid.com/memes/detail/9999999',
    date: "2077-01-01T00:00:00.000Z",
    poster: 'https://memedroid.com/videos/image.jpeg',
    video: [{
        url: "https://memedroid.com/videos/video.mp4",
        type: "video/mp4",
    }],
    image: [
        'https://memedroid.com/images/image.jpeg',
    ]
}]
```