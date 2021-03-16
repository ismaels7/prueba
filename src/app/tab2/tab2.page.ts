import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public topic:any;
  public newsData:any;
  public newsPlayer:any;
  constructor(public api:ApiService, private http: HttpClient) {}

  search(){
    this.api.getNews(this.topic).subscribe(result=>{
      console.log(result);
      this.newsData=result['articles'];
    })
  }

  pichichi(){
    this.api.getTopScorers().subscribe(result=>{
      console.log(result);
      this.newsPlayer=result['response'];
    })
    
  }

}
