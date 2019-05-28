import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ApisService } from './../apis.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editUser:FormGroup
  id:any
  constructor(private apis : ApisService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.editForm();
  }

  editForm()
  {
    this.editUser = this.fb.group({
      username :['',Validators.required],
      email :['',Validators.required],
      phone :['',Validators.required],
      website :['',Validators.required]
    })
  }
  public editUsers() {
    this.id = this.route.snapshot.params.id;
    this.apis.editUser(this.editUser.value,this.id).subscribe((data:any) => {
      if(data) {
        console.log("data edited",data)
        this.toastr.success('User edited Successfully');
      }
      else
      {
        this.toastr.error('Something went wrong');
      }
    })
  }

}
