import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payhere',
  templateUrl: './payhere.component.html',
  styleUrls: ['./payhere.component.css']
})
export class PayhereComponent implements OnInit {

  constructor() { }
  creditcard:string= './assets/img/creditcard.jpeg'
  ngOnInit(): void {
  }

}
