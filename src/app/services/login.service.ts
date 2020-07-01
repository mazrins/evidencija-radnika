import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  angularFireLogin(email, password) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['profile']));
  }
}
