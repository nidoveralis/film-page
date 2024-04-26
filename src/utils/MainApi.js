import { MAIN_URL } from './constants';

class Api {
  constructor() {
    this._headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    this._baseUrl = MAIN_URL;
  }

  _getResponseData(res) {
    if(!res) {
      console.log(res, res.status)
    }
    return res.json()
  }

  getMovies() {
    return fetch(`${this._baseUrl}?rating.kp=8-10`, {
      method: 'GET',
      //credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-API-KEY': 'JSN6CZZ-KZQMQJ3-GREENAX-7Z6BY04'
      },
    })
    .then(res => this._getResponseData(res))
    .then(data => console.log(data))
  }

  getSinleMovies(data) {
    return fetch(`${this._baseUrl}/movies/${data}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
    .then(res => this._getResponseData(res))
  }

};

export const api = new Api();
