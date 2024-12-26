export class User {
  userEmail: string;
  userPassword: string;
  userFullName: string;
  userConfirmPassword: string;

  constructor() {
    this.userEmail = '';
    this.userPassword = '';
    this.userFullName = '';
    this.userConfirmPassword = '';
  }
}
