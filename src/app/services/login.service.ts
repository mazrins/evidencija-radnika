import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  fbsUser: firebase.User;
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {}

  angularFireLogin(email, password) {
    this.afAuth.user.subscribe((user) => (this.fbsUser = user));

    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['profile']))
      .then(() => this.db.collection('users').doc(this.fbsUser.uid).update({}));
  }

  profileUpdate(profileForm) {
    this.db.collection('users').doc(this.fbsUser.uid).update(profileForm);
    console.log('profile updated');
  }
}
