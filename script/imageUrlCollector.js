const fetch = require('node-fetch');

let randomPhotoUrl = 'https://source.unsplash.com/random/?object';

let imageCount = 100;
let imageUrlArray = [];

const getImageUrl = async url => {
  try {
    const res = await fetch(url);
    imageUrlArray.push(res.url);
    console.log(imageUrlArray);
  } catch (error) {
    console.log(error);
  }
};

(function imageGen(n) {
  setTimeout(function() {
    getImageUrl(randomPhotoUrl);
    if (--n) imageGen(n);
  }, 5000);
})(imageCount);

// set imageCount to desired number of images
// to execute run command: node imageUrlCollector
