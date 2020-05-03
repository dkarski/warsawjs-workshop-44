export function convertStringToHTMLElement(string) {
  const document = new DOMParser().parseFromString(string, "text/html");
  return document.body.firstChild;
}
