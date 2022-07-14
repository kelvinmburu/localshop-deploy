import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-update-defective',
  templateUrl: './update-defective.component.html',
  styleUrls: ['./update-defective.component.css']
})
export class UpdateDefectiveComponent implements OnInit {

  constructor(private updateDefectiveGoodsService: SharedService) { }

  @Input() def: any;
  id: number;
  goodname: string; 
  quantity: number;
  category: string;  


  ngOnInit(): void {
    this.id = this.def.id;
    this.goodname = this.def.goodname;
    this.quantity = this.def.quantity;
    this.category = this.def.category;
  }


  updateDefectiveGood(){
    var item = {id: this.id, goodname: this.goodname, quantity: this.quantity,category : this.category};
    this.updateDefectiveGoodsService.updateDefectiveGood(item).subscribe(res => {
      alert(res.toString());
    });
  }

}
