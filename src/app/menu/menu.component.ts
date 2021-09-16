import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  coffeetype1:string= './assets/img/coffeetype1.webp';
  coffeetype2:string= './assets/img/coffeetype2.webp';
  coffeetype3:string= './assets/img/coffeetype3.jpg';
  coffeetype5:string= './assets/img/coffeetype5.webp';
  coffeetype6:string= './assets/img/coffeetype6.webp';
  coffeetype8:string= './assets/img/coffeetype8.webp';
  coffeetype9:string= './assets/img/coffeetype9.webp';
  cup2:string= './assets/img/cup2coffee.jpeg';
  cup3:string= './assets/img/cup3.jpeg';
  
  cup5:string= './assets/img/cupcoffee.jpeg';
  cup6:string= './assets/img/coffeebeen spil.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

}
