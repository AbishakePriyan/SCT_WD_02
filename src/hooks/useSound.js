const useSound = (file) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Create once
    const audio = new Audio(file);
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      // Clean up on unmount
      audio.pause();
      audio.src = "";
    };
  }, [file]);

  const play = () => {
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } catch (e) {
        console.warn("Sound blocked until user interaction.");
      }
    }
  };

  return play;
};
