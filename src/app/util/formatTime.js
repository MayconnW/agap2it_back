export const minutesToHHMM = minutes => {
  const hourValue = Math.floor(minutes / 60);
  const minuteValue = minutes % 60;

  return `${hourValue
    .toString()
    .padStart(2, "0")}:${minuteValue.toString().padStart(2, "0")}`;
};

export const hourValueFromMinutes = minutes => {
  return Math.floor(minutes / 60);
};
