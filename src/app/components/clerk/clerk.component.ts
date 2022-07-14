import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-clerk',
  templateUrl: './clerk.component.html',
  styleUrls: ['./clerk.component.css'],
  providers: [SharedService]  
})
export class ClerkComponent implements OnInit {

  clerkDetails:any;


  pageTitle:string;
  ActivateUpdateComponent:boolean = false; 
  detail: any;  


  form: any = {
    fullname: null,
    email: null,
    password: null 
  }; 

  errorMessage = ""

  constructor(private clerkService: SharedService, private removeClerkService: SharedService) { }

  ngOnInit(): void {
    this.clerkService.getClerks().subscribe(data => {
      console.log(data)

      this.clerkDetails = data;

      this.refreshClerksList();
    });
  }

  onSubmit(f: NgForm){
    const { fullname, email, password } = this.form; 
    console.log(this.form)
    this.clerkService.registerClerk(fullname, email, password).subscribe(data => {
        console.log(data);
      }, err => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);

      });
      f.reset();
    }


    updateClick(item:any){
      this.detail=item;
      this.pageTitle="Update Clerk";
      this.ActivateUpdateComponent=true;  
    }



  deleteClick(item:any){ 
    if (confirm("Are you sure you  want to delete this clerk?")){
      this.removeClerkService.removeClerk(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshClerksList(); 
      });
    }
  }


  closeClick(){
    this.ActivateUpdateComponent=false; 
    this.refreshClerksList();
  }


  refreshClerksList(){
    this.removeClerkService.getClerks().subscribe(data =>{
      this.clerkDetails=data; 
    });
  }
  
}
