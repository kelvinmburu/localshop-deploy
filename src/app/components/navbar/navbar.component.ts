import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [SharedService]
})
export class NavbarComponent implements OnInit {

  constructor(private authService: SharedService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

}
