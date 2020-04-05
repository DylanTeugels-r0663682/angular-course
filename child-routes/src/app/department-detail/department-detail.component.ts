import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router'

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious(){
    this.router.navigate(['/departments', this.departmentId - 1])
  }

  goNext(){
    this.router.navigate(['/departments', this.departmentId + 1])
  }

  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}])
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route})
  }

}
