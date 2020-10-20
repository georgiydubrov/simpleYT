const path = require('path');
const { Router } = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const { getVideos, saveVideo } = require('../controllers');

const router = Router();

const fileFilter = (req, file, cb) => cb(null, (/^video\/[-\w.]+$/).test(file.mimetype));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.resolve(__dirname, '..', './uploads')),
  filename: (req, file, cb) => cb(null, `${uuidv4()}.${file.originalname.split('.').slice(-1)}`)
});

router.get('/video', (req, res) => res.send(getVideos()))

router.post('/video', multer({ fileFilter, storage }).single('video'), async (req, res) => {
  if (!req.file) res.status(400).send({ message: 'File wasn\'t uploaded' });
  else {
    try {
      await saveVideo(req);
      res.status(200).send({ message: 'ok' });
    } catch (e) {
      res.status(500).send({ message: e.message });
    }
  }
});

module.exports = router;