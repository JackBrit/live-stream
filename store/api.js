import axios from 'axios'
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3 });

export default {
  get(url, request, headers) {
    return axios.get(url, {
        params: {
          ...request
        },
        headers: headers,
        timeout: 15000
      })
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  },

  post(url, request) {

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: request,
      url,
    };
    return axios(options)
      .then((response) => Promise.resolve(response))
      .catch((error) => {
        Promise.reject(error);
      });
  }

}