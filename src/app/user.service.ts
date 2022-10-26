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
      id: '1',
      password: 'xd',
      role: 1,
    }
  ]

  getUserId(id: String){
    return this.users.find((pie: { id: String; }) => pie.id === id);
  }

  addUser(name: String, id: String, password: String, role: number){
    const newUser = {
      name: name,
      id: id,
      password: password,
      role: role
    }
    console.log(newUser);
    this.users.push(newUser);
  }
}
