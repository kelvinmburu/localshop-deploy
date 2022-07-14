import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-update-clerk',
  templateUrl: './update-clerk.component.html',
  styleUrls: ['./update-clerk.component.css']
})
export class UpdateClerkComponent implements OnInit {

  constructor(private updateClerkService: SharedService) { }


  @Input() detail: any;
  id: number;
  name: string; 
  email: string;
  password: any; 


  ngOnInit(): void {
    this.id = this.detail.id;
    this.name = this.detail.name;
    this.email = this.detail.email;
    this.password = this.detail.password;
  }


  updateClerk(){
    var item = {id: this.id, name: this.name, email: this.email, password : this.password};
    this.updateClerkService.updateClerk(item).subscribe(res => {
      alert(res.toString());
    });
  }

}
