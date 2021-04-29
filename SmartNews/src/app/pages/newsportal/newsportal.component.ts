import { Component, OnInit } from '@angular/core';
import {NewsserviceService} from "../../services/newsservice.service";

@Component({
  selector: 'app-newsportal',
  templateUrl: './newsportal.component.html',
  styleUrls: ['./newsportal.component.css'],
  providers:[NewsserviceService]
})
export class NewsportalComponent implements OnInit {
  tabs: Array<any>;
  currentTab: any;
  newslist: Array<any>;
  source:string;
  constructor(private  _newsService: NewsserviceService) {}

  ngOnInit() {
    this.tabs = [
      {
        title: 'Sports',
        id: 'sport'
      },
      {
        title: 'Finance',
        id: 'business'
      },
      {
        title: 'Health',
        id: 'health'
      },
      {
        title: 'Entertainment',
        id: 'entertainment'
      },
      {
        title: 'Weather',
        id: 'weather'
      },
      {
        title: 'Stock',
        id: 'stock'
      },
      {
        title: 'Local',
        id: 'local'
      },
      {
        title: 'International',
        id: 'international'
      }];
    this.currentTab = this.tabs[0];
  }

  changetab(tab){
    this.currentTab = tab;

      this._newsService.getNewsbyType(this.currentTab.id )
        .subscribe(
          response => {
           this.newslist = response.articles;
           this.source = response.source;
          },
          error => {

          }
        );

  }

}
