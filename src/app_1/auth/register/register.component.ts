import { Component } from '@angular/core';
import { LoginForm } from 'src/app_1/types/loginform';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: LoginForm = { email: "", password: "", confirm: "" }

  constructor(private authService: AuthService){}

  register() {
    this.authService.register(this.form)
  }
  
  isLoading(){return this.authService.isLoading}
  
}
