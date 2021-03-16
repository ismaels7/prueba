import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiKey: any = 'f922dccf67f44043a07a0a7fa8fd193a'

  constructor(public http: HttpClient, private httpClient: HttpClient) { }

  getNews(topic) {
    return this.http.get('http://newsapi.org/v2/everything?q=' + topic + '&from=2021-03-13&to=2021-03-13&sortBy=popularity&apiKey=' + this.apiKey)
  }

  /*getTopscorers() {
    const httpHeaders = new HttpHeaders({
      "x-rapidapi-key": "5a8d6b3bacmshf8e584599cef6e2p1bc4a0jsn13fd9ea59068",
      "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
    });
    return this.http.get('https://api-football-v1.p.rapidapi.com/v2/topscorers/2833', {headers: httpHeaders});      
  }*/

  getTopScorers() {
    const httpHeaders = new HttpHeaders({

      "x-rapidapi-key": "22fc2579a978753d467d37750357d834",
      "x-rapidapi-host": "v3.football.api-sports.io"
    });

    return this.http.get('https://v3.football.api-sports.io/players/topscorers?season=2020&league=140', { headers: httpHeaders });
    //return this.http.get('https://v3.football.api-sports.io/players?season=2020&team=496&page=2', { headers: httpHeaders });
  }
  

}
