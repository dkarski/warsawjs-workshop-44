export function parseFromStringToHTML(string){
	const document = new DOMParser().parseFromString(string, 'text/html');
	return document.body.firstChild;
}
