import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test-class', //dots are used to select component as a class
  template: `<p>test-class works!!</p>`,
  styleUrls: ['./test-class.component.css']
})
export class TestClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
