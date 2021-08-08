import { Injectable } from '@angular/core';
import firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = null;

  constructor() { }

  register(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        console.log("User Created Successfuly!", userCredentials);
      }).catch((err: Error) => console.log(err))
  }

  login(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log("Login Successfully")
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            this.token = token;
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
      }).catch(err => console.log(err))
  }

}
