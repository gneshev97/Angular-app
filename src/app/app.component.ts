import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCFWMlVZRsyF6qYAEeJ_aIRJWFEWbEcCSI",
    authDomain: "ng-recipe-book-eb12f.firebaseapp.com"
    });
  }
    onNavigate(feature: string){
      this.loadedFeature = feature;
    }
}
