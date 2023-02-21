import { Component } from '@angular/core';

import { LoginForm } from 'src/app_1/types/loginform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:LoginForm={email:"",password:"",confirm:""}

  submit(){ 
    console.log(this.form);
    
  } 
}
