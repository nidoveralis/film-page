import { MAIN_URL } from './constants';

class Api {
  constructor() {
    this._headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-API-KEY': 'JSN6CZZ-KZQMQJ3-GREENAX-7Z6BY04'
    };
    this._baseUrl = MAIN_URL;
  }

  _getResponseData(res) {
    if(!res) {
      console.log(res, res.status)
    }
    return res.json()
  }

  getMovies(page) {
    return fetch(`${this._baseUrl}?page=${page}&limit=5&rating.kp=8-10`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => this._getResponseData(res))
  }

  getSinleMovies(data) {
    return fetch(`${this._baseUrl}/movies/${data}`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => this._getResponseData(res))
  }

};

export const api = new Api();
