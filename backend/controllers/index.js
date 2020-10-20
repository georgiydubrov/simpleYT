const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

let videos = require('../data/videos.json');

const getVideos = () => videos;

const saveVideo = (req) => {
  const data =  { id: uuidv4(), name: req.file.filename, uploaded: new Date().toISOString(), title: req.body.title };
  videos = [...videos, data];
  return new Promise( (resolve, reject) => fs.writeFile(
      path.resolve(__dirname, '..', 'data', 'videos.json'),
      JSON.stringify(videos),
      'utf8',
      (err) => {
        if (err) reject(err);
        resolve(data);
      }
    )
  );
}

module.exports = {
  getVideos,
  saveVideo
}