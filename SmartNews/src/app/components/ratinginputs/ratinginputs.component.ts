import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratinginputs',
  templateUrl: './ratinginputs.component.html',
  styleUrls: ['./ratinginputs.component.css']
})
export class RatinginputsComponent implements OnInit {

  constructor() { }
  public _rate1:number = 3;
  public _rate2:number = 4;

  public _max1:number = 5;
  public _max2:number = 10;
  ngOnInit() {
  }

}
