import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from 'firebase/auth'
import { UserInterface } from 'src/interfaces/UserInterface';
import { Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserInterface = {
    displayName: '',
    email: ''
  };

  constructor(private afAuth: AngularFireAuth, private router:Router) { }

  async login(email: string, password: string) {

    return await this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Login email y pass exitoso")
        this.router.navigate(['dashboard'])
      })
      .catch((err) => {
        console.log("Error en login", err)
        return null;
      })
  }

  async loginWithGoogle() {
    return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        console.log("Login google exitoso", result)
        this.router.navigate(['dashboard'])
      })
      .catch((err) => {
        console.log("Error en login con google ", err)
        return null;
      })
  }

  async getUserLogged() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      this.user.displayName = user.displayName ? user.displayName : '';
      this.user.email = user.email ? user.email : '';
    }

    return this.user;

  }

  async logout() {
    this.afAuth.signOut();
    console.log("Succes")
  }
}
