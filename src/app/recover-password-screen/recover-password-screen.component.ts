import { EmailService } from './../email.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password-screen',
  templateUrl: './recover-password-screen.component.html',
  styleUrls: ['./recover-password-screen.component.scss']
})
export class RecoverPasswordScreenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private emailservice: EmailService) { }

  code : any = this.route.snapshot.paramMap.get('code');
  
  ngOnInit(): void {
  }

  restablecerPassword(password1: string, password2: string) {
    if(password1 === password2) {
      this.emailservice.changePassword(this.code, password1).subscribe(response => {
        if(response.error) {
          alert('Ocurrió un error.')
        } else {
          alert('Contraseña cambiada correctamente.')
        }
      })
    } else {
      alert('Ambas contraseñas no coinciden.')
    }
  }

}
