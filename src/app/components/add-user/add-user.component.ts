import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [SharedService],
})
export class AddUserComponent implements OnInit {

  adminData: any;


  pageTitle:string;
  ActivateUpdateComponent:boolean = false; 
  data: any; 

  form: any = {
    username: null,
    email: null,
    password: null,
  };
  errorMessage = '';

  constructor(private service: SharedService, private removeAdminService: SharedService) {}

  ngOnInit(): void {
    this.service.getAdmin().subscribe((data) => {
      console.log(data);

      this.adminData = data;

      this.refreshAdminList();
    });
  }

  onSubmit(f: NgForm) {
    const { username, email, password } = this.form;
    console.log(this.form);
    this.service.addAdmin(username, email, password).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
      }
    );

    f.reset()
  }


  updateClick(item:any){
    this.data=item;
    this.pageTitle="Update Admin";
    this.ActivateUpdateComponent=true;  
  }


  deleteClick(item:any){ 
    if (confirm("Are you sure you  want to delete this product?")){
      this.removeAdminService.removeAdmin(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshAdminList(); 
      });
    }
  }


  closeClick(){
    this.ActivateUpdateComponent=false; 
    this.refreshAdminList();
  }


  refreshAdminList(){
    this.removeAdminService.getAdmin().subscribe(data =>{
      this.adminData=data; 
    });
  }
}
