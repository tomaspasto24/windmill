import { Base } from './WindmillInterfaces/Base';
import { Blade } from './WindmillInterfaces/Blade';
import { Injectable } from '@angular/core';
import { Windmill } from './WindmillInterfaces/Windmill';

@Injectable({
  providedIn: 'root'
})
export class PrototypeService {

  constructor() { }

  prototypes: Windmill[] = [];

  getPrototype(): Windmill[] {
    return this.prototypes;
  }

  getPrototypebyId(id: String) {
    return this.prototypes.find(proto => proto.id === id);
  }

  // postPrototype(name: string, blade: Blade, body: Body, base: Base) {
  //   const prototypeNew = {
  //     id: Math.random().toString(),
  //     name,
  //     blade,
  //     body,
  //     base
  //   }
  //   this.prototypes.push(prototypeNew);
  // }
}
