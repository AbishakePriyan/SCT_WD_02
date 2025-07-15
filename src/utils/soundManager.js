// utils/soundManager.js
import { Howl } from 'howler';

const sounds = {
  tick: new Howl({ src: ['/sounds/tickf2.mp3'], volume: 0.5 }),
  start: new Howl({ src: ['/sounds/stop.mp3'], volume: 0.6 }),
  stop: new Howl({ src: ['/sounds/stop.mp3'], volume: 0.6 }),
  lap: new Howl({ src: ['/sounds/lap.mp3'], volume: 0.5 }),
};

export const playSound = (name) => {
  if (sounds[name]) {
    sounds[name].stop();  // Ensure no overlap
    sounds[name].play();
  } else {
    console.warn(`Sound "${name}" not found`);
  }
};
