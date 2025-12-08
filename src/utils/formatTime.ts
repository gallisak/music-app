export const formatTime = (seconds: number) => {
  if (!seconds || isNaN(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
};
