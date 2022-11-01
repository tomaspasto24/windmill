import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.scss']
})
export class AdminScreenComponent implements OnInit {

  title = 'appBootstrap';
    
  constructor(private modalService: NgbModal, private userService: UserService) {
  }
  ngOnInit(): void {
    
  }

  closeResult: string = '';

  open(content:any) : any {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    return content;
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  registerUser(name: String, password: String, password2: String, rol: string) {
    let rolNumerico: number; 
    rol = rol.toLowerCase();
    if(rol === "admin" || rol === "administrador") {
      rolNumerico = 1
    } else {
      rolNumerico = 0
    }
    if(password !== password2) {
      alert('Contraseñas no coinciden');
    } else {
      const obs = this.userService.register(name, password, rolNumerico);
      obs.subscribe(res => {})
      alert('Usuario agregado con éxito');
    }
  }
}
