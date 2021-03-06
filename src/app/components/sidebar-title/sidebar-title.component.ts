import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-title',
  templateUrl: './sidebar-title.component.html',
  styleUrls: ['./sidebar-title.component.scss']
})
export class SidebarTitleComponent implements OnInit {

  @Input() title: any
  @Input() show: any
  constructor() { }

  ngOnInit(): void {
  }

}
