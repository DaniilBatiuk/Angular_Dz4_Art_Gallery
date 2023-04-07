import { Component, OnInit } from '@angular/core';
import { Art } from './art';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Arts?: Art[];
  constructor(private http: HttpService) { }
  ngOnInit(): void {
       this.http.getArts().subscribe((data: any)=>{
       this.Arts = data["paintings"];
     });
  }
}
