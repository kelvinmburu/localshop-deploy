import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
// import {Defectivegoods} from './defective';

@Component({
  selector: 'app-defective-goods',
  templateUrl: './defective-goods.component.html',
  styleUrls: ['./defective-goods.component.css'],
  providers: [SharedService]
})
export class DefectiveGoodsComponent implements OnInit {
  categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Foods" },
    { id: 3, name: "Detergents" },
    { id: 4, name: "Kitchen-Ware" },
    { id: 5, name: "Toys" }
  ];

  defectiveGoodsData:any


  pageTitle:string;
  ActivateUpdateComponent:boolean = false; 
  def: any; 

  form: any = {
    goodname: null, 
    quantity:null,
    category:null

  };
  errorMessage = '';

  constructor(private defectiveService: SharedService, private deleteDefectiveService: SharedService) { }


  ngOnInit(): void {
    this.defectiveService.getDefectiveGoodsList().subscribe((data) => {
      console.log(data);

      this.defectiveGoodsData= data;

      // this.refreshDefectiveGoodsList();
    });
    // setTimeout(() => { this.ngOnInit(); }, 1000);
  }


  onSubmit(f: NgForm){
    const {
      goodname,
      quantity,
      category
    } = this.form;
    console.log(this.form)
    this.defectiveService.addNewDefectiveGood(
      goodname,
      quantity,
      category
    ).subscribe(
      (data)=>{
      console.log(data);
      },(err) => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage)
      }
    );
    f.reset()
  }


  updateClick(item:any){
    this.def=item;
    this.pageTitle="Update Defective Product";
    this.ActivateUpdateComponent=true;  
  }



  deleteClick(item:any){ 
    if (confirm("Are you sure you  want to delete this item?")){
      this.deleteDefectiveService.deleteDefective(item.id).subscribe(data => {
        alert(data.toString());
        this.refreshDefectiveGoodsList(); 
      });
    }
  }


  closeClick(){
    this.ActivateUpdateComponent=false; 
    this.refreshDefectiveGoodsList();
  }


  refreshDefectiveGoodsList(){
    this.deleteDefectiveService.getProductsList().subscribe(data =>{
      this.defectiveGoodsData=data; 
    });
  }
}
