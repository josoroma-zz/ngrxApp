export class User {
  id?: string = '';
  email?: string = '';
  password?: string = '';
  token?: string = '';

  constructor() {
    this.email = '@';
    this.password = '';
  }
}
