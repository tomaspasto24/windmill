import { UserService } from './../user.service';
import { User } from './../WindmillInterfaces/User';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor(private userservice: UserService, private modalService: NgbModal) { }

  @Input() user: User | undefined;
  @Output() refresh = new EventEmitter<void>();

  ngOnInit(): void {
  }

  async deleteUser() {
    if (this.user!._id !== undefined) {
      await this.userservice.deleteUser(this.user!._id as string).subscribe(response => {
        if (response.acknowledged) {
          alert('Usuario eliminado correctamente.')
        } else {
          alert('Upps ocurrió un error.')
        }
      });
    }
    this.refresh.emit();
  }

  async editUser(name: string, password: string, role: string) {
    let rol: Number;
    if (role === 'Operario') {
      rol = 1
    } else if (role === 'Administrador') {
      rol = 3
    } else {
      rol = 2
    }
    await this.userservice.editUser(this.user!._id, name, password, rol).subscribe(response => {
      if (response.acknowledged) {
        alert('Usuario editado correctamente.')
      } else {
        alert('Upps ocurrió un error.')
      }
      this.refresh.emit();
    });
  }

  closeResult = '';

  open(content: any): any {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
      return `with: ${reason}`;
    }
  }

}
