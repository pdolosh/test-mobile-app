import {Api} from './Api';

export class App {
  static async list() {
    return await Api.get('/unknown');
  }
}