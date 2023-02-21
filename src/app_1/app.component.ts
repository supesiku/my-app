import { Component, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";
import { AuthService } from "./auth/auth.service";
import { firebaseConfig } from "./firebase.config";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }
  isAuthed(){return this.authService.isAuthed}
  logout(){
    this.authService.logout()
  }
}
