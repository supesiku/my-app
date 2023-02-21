import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LoginForm } from 'src/app_1/types/loginform';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:LoginForm={email:"",password:"",confirm:""}

  constructor(private authService: AuthService){}

  login(){ 
    this.authService.login(this.form)
  } 

  isLoading(){return this.authService.isLoading}
}
