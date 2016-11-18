/**
* parsing URL or pseudo-URL and return username
* @param url - contain URL or pseudo-URL
*/
export default function canonize(url) {
  // TODO custom domain name
  const re = new RegExp('((https?:)?(\/\/)?(www.)?([a-zA-Z0-9-]{1,}.)?([a-zA-Z0-9_.-]*[/])?(\/)?(@)?([a-zA-Z0-9_.-]*(^[?|=])?)?(/)?([a-zA-Z0-9-_.]*(^[?|=])?))');
  const username = url.match(re); // Включаем поиск по регулярным выражениям
  console.log(username);
  if (username[1] == username[5]) return username[1];
  return username[9];
}
