import { Injectable } from '@angular/core';
import { LoginForm } from '../types/loginform';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLoading: boolean = false
  isPwMatched: boolean = false
  isAuthed: boolean = false

  constructor(private router: Router) { }

  getState() {
    return this.isAuthed
  }

  login(form: LoginForm) {
    if (this.isLoading) return
    this.isLoading = true

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthed = true
        this.router.navigate([""])
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      }).finally(() => this.isLoading = false);
  }
  logout() {
    if (this.isLoading) return
    const auth = getAuth();
    this.isLoading = true
    signOut(auth).then(() => {
      this.isAuthed = false
      this.router.navigate(["login"])
    }).catch((error) => {
      // An error happened.
    }).finally(()=>{
      this.isLoading = false
    });
    this.router.navigate([""])
  }
  register(form: LoginForm) {

    if (this.isLoading) return
    this.isLoading = true

    this.isPwMatched = (form.password === form.confirm)
    if (!this.isPwMatched) {
      alert("userid and password does not matched")
      return
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,
      form.email, form.password)
      .then((userCredential) => {
        this.isAuthed = true
      })
      .catch((error) => {
        console.log("error")
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }).finally(() => this.isLoading = false);
  }

}
