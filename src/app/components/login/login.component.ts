import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SharedService]
})
export class LoginComponent implements OnInit {

  myform: FormGroup;
  constructor(private authService: SharedService) { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  get f(){
    return this.myform.controls;
  }

  onSubmit(){
    this.authService.login(this.f['username'].value, this.f['password'].value).pipe(first()).subscribe(
      data => {
        console.log(data);
      }
    )
    
  }

}
