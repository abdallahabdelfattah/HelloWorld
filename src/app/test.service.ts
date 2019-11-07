import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient ) { }
 Data:any;
  display(){
    
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(data=>{    
      this.Data=data; 
  });

  return this.Data; 
  }

}
