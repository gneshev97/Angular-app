import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    token: string;
    constructor(private router: Router){}

    signupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => console.log(error));
    }
    signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken().then((token: string) => this.token = token
        )
        }
        )
        .catch(error => console.log(error));
    }
    getIdToken(){
        firebase.auth().currentUser.getIdToken().then(response => {
            firebase.auth().currentUser.getIdToken().then((token: string) => this.token = token
        )
        }
        );
        return this.token;
    }
    logout(){
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/signin']);
    }
    isAuthenticated(){
        return this.token != null;
    }
}