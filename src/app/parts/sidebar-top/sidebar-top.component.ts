import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

export class Activity {
  constructor(
    public id: number,
    public message: string,
    public owner: [],
    public publishDate: any
  ) {
  }
}

@Component({
  selector: 'app-sidebar-top',
  templateUrl: './sidebar-top.component.html',
  styleUrls: ['./sidebar-top.component.scss']
})

export class SidebarTopComponent implements OnInit {

  activity:any={};
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getActivity();
  }

  getActivity(){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8','app-id':'608bc17743bda780576160a2'});
    this.httpClient.get<any>('https://dummyapi.io/data/api/post/SFAt3mJK0qu4QOd9LgSX/comment?limit=10', {headers: headers}).subscribe(
      response => {
        console.log(response.data);
        this.activity = response.data;
      }
    );
  }

}
