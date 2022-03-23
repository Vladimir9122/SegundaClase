import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/interfaces/UserInterface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.minLength(6)]],
  });


  user: UserInterface = {
    displayName: '',
    email: ''
  };

  prueba: UserInterface = {
    displayName: '',
    email: ''
  };

  constructor(private _authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  async loginWithGoogle() {
    this.removeLocalStorage()
    await this._authService.loginWithGoogle();
    await this.setLocalStorage();
    this.getLocalStorage();
  }

  async login() {
    this.removeLocalStorage()
    await this._authService.login(this.miFormulario.controls['email'].value, this.miFormulario.controls['password'].value,);
    await this.setLocalStorage();
    this.getLocalStorage();
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  setLocalStorage() {
    this._authService.getUserLogged()
      .then((result) => {
        this.user = result;
        localStorage.setItem('User', JSON.stringify(this.user));
      })
      .catch((err) => {
        console.log("Se produjo un error: ", err)
      })

  }

  getLocalStorage() {
    this.prueba = JSON.parse(localStorage.getItem('User') || '{}');
    console.log("Local storage: ", this.prueba)
  }

  removeLocalStorage() {
    localStorage.removeItem('User');
  }

}
