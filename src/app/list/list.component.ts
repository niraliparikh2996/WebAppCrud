import { Component, OnInit } from '@angular/core';
import { ApisService } from './../apis.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users:any;
  id:any;
  constructor(private apis : ApisService,
    private toastr: ToastrService,
    public router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    this.apis.listUsers().subscribe((data:any) => {
      this.users = data;
      if(data) {
        //this.toastr.success("Users Listed successfully");
      }
      else {
        this.toastr.error('Something went wrong');
      }
      console.log("this.users",this.users)
    })
  }

  public editUser(id)
  {
    this.router.navigate(['user/edit',id])
  }

  public deleteUser(id)
  {
    this.apis.deleteUser(id).subscribe((data:any) => {
      if(data) 
      {
        this.toastr.success("User deleted successfully")
      }
      else {
        this.toastr.error('Something went wrong');
      }
    })
  }
}
