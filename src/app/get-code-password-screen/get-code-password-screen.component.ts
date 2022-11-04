import { EmailService } from './../email.service';
import { Component, OnInit } from '@angular/core';
import { validateEmail } from 'src/helpers/validateEmail';

@Component({
  selector: 'app-get-code-password-screen',
  templateUrl: './get-code-password-screen.component.html',
  styleUrls: ['./get-code-password-screen.component.scss']
})
export class GetCodePasswordScreenComponent implements OnInit {

  constructor(private emailservice: EmailService) { }

  ngOnInit(): void {
  }

  sendEmail(email: string) {
    if(validateEmail(email)) {
      this.emailservice.sendEmail(email).subscribe(response => {
        if(response.acknowledged) {
          alert(`Email enviado correctamente a ${email}.`)
        } else {
          alert('Ocurrió un error.')
        }
      })
    } else {
      alert('Por favor, ingrese un email correcto')
    }
  }
}

