import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Dylan";
  public greeting = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("Welcome Dylan");
    this.greeting = "Welcome to Dylan Teugels";
  }

  onClick2(event) {
    console.log(event);
    this.greeting = event.type;
  }

}
