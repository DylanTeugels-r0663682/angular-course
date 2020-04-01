import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Dylan";
  public message = "Welcome to DT";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
