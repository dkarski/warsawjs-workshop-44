class HttpClient {
  get(apiUrl) {
    return fetch(apiUrl).then((response) => response.json());
  }
}

export default new HttpClient();
