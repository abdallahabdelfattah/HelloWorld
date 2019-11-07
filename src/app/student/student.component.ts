import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TestService } from '../test.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

constructor( private routeNavigate:Router, private route:ActivatedRoute,private http:HttpClient,private s:TestService ) {
this.Data=s.display(); 
 
}

  Data:any; 
getALlData(){
  this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(data=>{    
    this.Data = data;
  }); 
}

  Id=this.route.snapshot.paramMap.get("Id"); 

goToLonk(){
this.routeNavigate.navigate(["Home"]); 
}



  ngOnInit() {
  }

}
