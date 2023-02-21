import { Component } from '@angular/core';
import { LoginForm } from 'src/app_1/types/loginform';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form:LoginForm={email:"",password:"",confirm:""}

  submit(){ 
    console.log(this.form);
  } 
}
