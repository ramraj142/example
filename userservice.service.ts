import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  // url="https://jocata.thinkoverit.com/api/verify-pan.php";
  url="https://lab.pixel6.co/api/verify-pan.php"
  constructor(private http:HttpClient) { }
  user(data:any){
    return this.http.post(this.url,data);
  }
} 
