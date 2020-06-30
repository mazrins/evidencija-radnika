import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  angularFireRegister(email, password) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['profile']));
  }
}
