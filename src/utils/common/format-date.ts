/**
 * Pads a number with a leading zero if it is less than 10.
 *
 * @param {number} num - The number to pad.
 * @return {string} The padded number as a string.
 */
const padZero = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

/**
 * Formats the given date into a specific format including day, month, year, hours, minutes, and seconds.
 *
 * @param {Date} date - The date to be formatted
 * @return {string} The formatted date string
 */
export const formatDate = (date: Date) => {
  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  return `${day}-${month}-${year} : ${hours}:${minutes}:${seconds}`;
};
