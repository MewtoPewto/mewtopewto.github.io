// Beginning of script
console.log('script.js has been loaded.');

// Begin link magic
let youtubeArray = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=7bCzbUiB87M',
  'https://www.youtube.com/watch?v=vfc42Pb5RA8',
  'https://www.youtube.com/watch?v=G9s-6Ce25Ps',
]

function randomizer(bottom, top) {
  return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}

function setLink() {
  let button = document.getElementById('video-link-button');
  let randomNumber = randomizer(0, youtubeArray.length - 1);

  let videoLink = youtubeArray[randomNumber];

  button.setAttribute('href', videoLink)
}

setLink();
