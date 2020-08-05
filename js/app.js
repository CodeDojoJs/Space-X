'use strict';

const instance = new vidbg('.video', {
    mp4: 'video/world.mp4', 
    webm: 'video/world.webpm', 
    poster: 'video/poster.jpg',
    overlay: false, 
    overlayColor: '#000', 
    overlayAlpha: 0.3 
  });

  const rellax = new Rellax('.rocket'); 