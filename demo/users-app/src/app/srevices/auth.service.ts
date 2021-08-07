import { Injectable } from '@angular/core';
import firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        console.log("User Created Successfuly!", userCredentials);
      }).catch(err => console.log(err))
  }
}
