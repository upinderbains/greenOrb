const { Storage } = require('@google-cloud/storage');
const path = require('path');

const gc = new Storage({
  keyFilename: path.join(
    __dirname,
    '../vast-collective-285901-614609fba212.json'
  ),
  projectId: 'vast-collective-285901'
});

const bucket = gc.bucket('greenorbbucket1');

const uploadImage = file =>
  new Promise((resolve, reject) => {
    const { originalname, buffer } = file;
    const blob = bucket.file(originalname.replace(/ /g, '_'));

    const stream = blob.createWriteStream({
      resumable: false
    });

    stream.on('error', err => {
      next(err);
    });

    stream.on('finish', () => {
      const data = {
        url: `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      };
      resolve(data);
    });

    stream.end(buffer);
  });

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Image uploaded is not type jpg/jpeg or png'), false);
  }
};
module.exports = {
  uploadImage: uploadImage,
  fileFilter: fileFilter
};
