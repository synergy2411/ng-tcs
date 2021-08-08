import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = null;

  constructor(private router : Router) { }

  register(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        console.log("User Created Successfuly!", userCredentials);
      }).catch((err: Error) => console.log(err))
  }

  login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            this.token = token;
            // navigate the user to some other route
            this.router.navigate(['users'])
            // localStorage.setItem("token", token)
          })
      }).catch(err => console.error(err))
  }

  getToken(){
    return this.token;
    // const token = localStorage.getItem("token")
    // return token;
  }

  isAuthenticated(){
    return this.token != null;
    // const token = localStorage.getItem("token")
    // return token != null;
  }

  logout(){
    firebase.auth().signOut()
      .then(response => {
        this.token = null;
        this.router.navigate(['login'], { queryParams : {age:99} })
      }).catch(err => console.log(err))
  }

}
