// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

class HttpClient {
  get(apiUrl) {
    // return window.axios.get(apiUrl).then(({data}) => data);
    return fetch(apiUrl).then((response) => response.json());
  }
}

export default new HttpClient();
