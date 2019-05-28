import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ApisService } from './../apis.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addUser:FormGroup
  
  constructor(private apis : ApisService,
    private fb: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.addForm();
  }

  addForm()
  {
    this.addUser = this.fb.group({    
      id :['',Validators.required],
      username :['',Validators.required],
      email :['',Validators.required],
      phone :['',Validators.required],
      website :['',Validators.required]
    })
  }
  public addUsers() {
    this.apis.createUser(this.addUser.value).subscribe((data:any) => {
      if(data) {
        this.toastr.success('User added Successfully');
      }
      else
      {
        this.toastr.error('Something went wrong');
      }
    })
  }
}
