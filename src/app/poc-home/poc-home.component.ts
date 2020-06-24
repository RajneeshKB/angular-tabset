import { Component, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-poc-home',
  templateUrl: './poc-home.component.html',
  styleUrls: ['./poc-home.component.css']
})
export class PocHomeComponent implements OnInit {

  activeTab = "validation"
  constructor() { }

  ngOnInit() {
  }

  tabChangeHandler(evt: NgbTabChangeEvent){
    console.log(`switching tab from ${evt.activeId} to ${evt.nextId}`);
  }

}
