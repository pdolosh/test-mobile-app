import {Api} from './Api';

export class Auth {
  static async login(params: any) {
    return await Api.post('/login', params);
  }
}