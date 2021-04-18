const rootUrl = 'https://api.imgur.com/3/gallery/album/bgKzyUd'
const apiKey = '38ad3af2fabc97ba8f5eeefa092b7e844cd593f1'
module.exports = {
  get (url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': '0411e68ef4ecf4e' + apiKey
      }
    })
    .then((response) => {
      return response.json()
    })
  }
}


  export default function requestUserInfo(token) {
    return fetch(rootUrl + url, {
      method: 'GET',
      headers: {
        'Authorization': '0411e68ef4ecf4e' + apiKey
      }
    })
      .then((response) => {
        return response.json()
      });
  }