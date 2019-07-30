const express = require('express');
const axios = require('axios');

const router = express.Router();
const iTunsApi = 'https://itunes.apple.com/search?';

const kind = [
  'book',
  'album',
  'coached-audio',
  'feature-movie',
  'interactive- booklet',
  'music-video',
  'pdf podcast',
  'podcast-episode',
  'software-package',
  'song',
  'tv-episode',
  'artist'
];

router.post('/', async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `${iTunsApi}term=${req.body.name}&limit=200`
    );
    // console.log(response.data);
    const result = data.results.reduce((acc, el) => {
      if (acc[el.kind]) {
        acc[el.kind].push({
          id: el.trackId,
          name: el.trackName,
          artist: el.artistName,
          artwork: el.artworkUrl100,
          genre: el.primaryGenreName,
          url: el.trackViewUrl
        });
      } else {
        acc[el.kind] = [
          {
            id: el.trackId,
            name: el.trackName,
            artist: el.artistName,
            artwork: el.artworkUrl100,
            genre: el.primaryGenreName,
            url: el.trackViewUrl
          }
        ];
      }
      return acc;
    }, {});
    delete result['undefined'];
    let test = 0;
    Object.keys(result).forEach(el => {
      //   console.log(result.el.length);
      test += result[el].length;
    });
    setTimeout(() => {
      res.status(200).json({
        ...result
      });
    }, 2000);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
