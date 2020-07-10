import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}
  login(email: string, password: string) {
    console.log('user login');
  }
  register(email: string, password: string) {
    console.log('user register');
  }

  logOut() {
    console.log('log out');
  }
}
