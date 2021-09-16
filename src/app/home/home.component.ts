import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // const card = document.querySelector(".card__inner");

  // card.addEventListener("click", function (e) {
  //   card.classList.toggle('is-flipped');
  // }); 
  constructor() { }
  //header=============
  background:string="./assets/img/background.jpeg"
//card===================
    ethiopia:string='./assets/img/ethiopia.jpg';
    colombia:string='./assets/img/colombia.jfif';
    brazil:string='./assets/img/brazil.jpeg';
    
  ngOnInit(): void {
  }

}
