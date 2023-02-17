import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formgroup:any;

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.load();

    if(localStorage.getItem("token") == null){
      localStorage.setItem("token","Mykey")
    }
    else{
      this.api.post("gettoken",null).subscribe((result:any)=>{
        localStorage.setItem("token",result.token);
      })
    }
  }

  load(){
    this.formgroup = new FormGroup({
      username:new FormControl("",Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required])),
    })

  }

  submit(data:any){
    this.api.post("authentication/login",data).subscribe((result:any)=>{

      console.log(result);
      if(result.status == "failed" || result.status == "exit"){
        Swal.fire('I think you need to create your account first',result.data,'error');
      }

      if(result.status == "success"){
        Swal.fire('Welcome','Login Succesful','success');

        localStorage.setItem("token",result.token);
        localStorage.setItem("user",JSON.stringify(result.data));

        this.router.navigate(['/general/dashboard']);

      }

    })

    this.load();
  }

}
