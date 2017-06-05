import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name: string;
  username: string;
  email: string;
  password: string;

  constructor(private userService: UserService) { }

  clean () {
    this.name = '';
    this.username = '';
    this.email = '';
    this.password = '';
  }

  register () {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    this.userService.register(user)
      .subscribe(user => {
        console.log('user created!');
        this.clean();
      });
  }

}
