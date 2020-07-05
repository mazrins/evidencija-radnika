import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    phone: new FormControl(''),
  });

  onProfileSubmit() {
    this.loginService.profileUpdate(this.profileForm.value);
  }

  ngOnInit(): void {}
}
