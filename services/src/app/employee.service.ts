import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name": "Dylan", "age": 21},
      {"id": 2, "name": "Maverick", "age": 22},
      {"id": 3, "name": "Arno", "age": 22},
      {"id": 4, "name": "Tim", "age": 21}
    ];
  }

}
