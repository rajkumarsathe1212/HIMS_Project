import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css']
})
export class TitlesComponent implements OnInit{

  formgroup:any;
  DeclaredResult:any;
  id = 0;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.load();

  }

  load(){
    this.id = 0;
    this.api.get("titles").subscribe((result:any)=>{
      this.DeclaredResult = result.data;

    })

    this.formgroup = new FormGroup({
      name:new FormControl("",Validators.compose([Validators.required]))
    })
  }

  edit(id:any){
    this.id = id;
    this.api.get("titles/" + id).subscribe((result:any)=>{
      this.formgroup = new FormGroup({
        name:new FormControl(result.data.name,Validators.compose([Validators.required]))
      })
    })
  }

  delete(id:any){
    // if(confirm("sure to delete")){
    //   this.api.delete("titles/" + id).subscribe((result:any)=>{
    //     this.load();
    //   })
    // }

    Swal.fire({
      title:"Sure to delete",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes , delete it!",
      cancelButtonText: "No,Keep It!"
    }).then((result) => {
      if(result.value){
        this.api.delete("titles/" + id).subscribe((result:any)=>{
          this.load();
        })
        Swal.fire(
          'Deleted !',
          'Your file has been deleted',
          'success'
        )
      }
      else if(result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'cancelled',
          'Your file is safe',
          'error'
        )
      }
    })

  }

  submit(data:any){

   if(this.id == 0){
    this.api.post("titles",data).subscribe((result:any)=>{
      this.load();
    })
   }
   else{
    this.api.put("titles/" + this.id,data).subscribe((result:any)=>{
      this.load();
    })
   }

  }


}
