import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Dylan";
  public myId = "testId";
  public isDisabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
