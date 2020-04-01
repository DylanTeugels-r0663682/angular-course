import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test-attribute]', //brackets are used to select component as an attribute
  templateUrl: './test-attribute.component.html',
  styles: [`
    p {
      color: red;
    }
  `]
})
export class TestAttributeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
