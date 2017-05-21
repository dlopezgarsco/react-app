import axios from 'axios';

function fetchData() {
  const uri = "http://jsonplaceholder.typicode.com/photos?albumId=1"
  return axios.get(uri)
    .then(response => response.data)
}

module.exports = {
  getImages: function(quantity) {
    return fetchData()
      .then(data => data
        .filter(i => i.id < quantity))
  }
}