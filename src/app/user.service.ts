import { Injectable } from '@angular/core';
import { User } from './WindmillInterfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: User[] = [
    {
      name: 'jr',
      _id: '1',
      password: 'xd',
      role: 1,
    }
  ]

  getUserId(id: String){
    return this.users.find((pie: { _id: String; }) => pie._id === id);
  }

  addUser(name: String, id: String, password: String, role: number){
    const newUser = {
      name: name,
      _id: id,
      password: password,
      role: role
    }
    this.users.push(newUser);
  }
}
