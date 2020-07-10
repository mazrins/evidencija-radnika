import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private auth: AuthService, private db: AngularFirestore) {}
  users$;

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    phone: new FormControl(''),
  });

  onLogin(email: string, password: string) {
    this.auth.login(email, password);
  }

  onProfileSubmit() {}
  getUsers() {
    this.users$ = this.db.collection('users').get();
    console.log(this.users$);
  }

  ngOnInit(): void {}
}
