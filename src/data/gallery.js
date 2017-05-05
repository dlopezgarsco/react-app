import axios from 'axios';

module.exports = {
  fetchImages: function() {
    const uri = "http://jsonplaceholder.typicode.com/photos?albumId=1"

    return axios.get(uri)
      .then(response => response.data)
  }
}