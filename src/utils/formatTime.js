export const formatTime = (time) => {
  const ms = (`00${time % 1000}`).slice(-3).substring(0, 2);
  const s = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
  const m = `0${Math.floor((time / 60000))}`.slice(-2);
  return `${m}:${s}:${ms}`;
};
