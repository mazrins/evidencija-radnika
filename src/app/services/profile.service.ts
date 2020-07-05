import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  fbsUser: firebase.User;
  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) {}

  profileSubmit(profileForm) {
    this.afAuth.user.subscribe((user) => (this.fbsUser = user));
    this.db.collection('users').doc(this.fbsUser.uid).update(profileForm);
  }
}
