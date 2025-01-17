import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  users = [
    {
      id: 1,
      name: 'Vaishnavi',
      role: 'Frontend Developer'
    },
    {
      id: 2,
      name: 'Vishal',
      role: 'React Developer'
    },
    {
      id: 3,
      name: 'Shavi',
      role: 'MERN Developer'
    }
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }
}

