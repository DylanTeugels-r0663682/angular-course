import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Dylan"
  public sideUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.name + ", this text is comes from a function";
  }

}
