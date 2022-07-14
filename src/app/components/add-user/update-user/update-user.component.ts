import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private updateAdminService: SharedService) { }


  @Input() data: any;
  id: number;
  name: string; 
  email: string;
  password: any; 


  ngOnInit(): void {
    this.id = this.data.id;
    this.name = this.data.name;
    this.email = this.data.email;
    this.password = this.data.password; 
  }


  updateAdmin(){
    var item = {id: this.id, name: this.name, email: this.email, password : this.password};
    this.updateAdminService.updateAdmin(item).subscribe(res => {
      alert(res.toString());
    });
  }

}
