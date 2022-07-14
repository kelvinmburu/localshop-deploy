import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private updateProductService: SharedService) { }


  @Input() product: any;
  id: number;
  product_name: string;
  category: string;   
  quantity: number;
  status: string;
  buying_price: number;
  selling_price: number;
  expiry_date: string;


  ngOnInit(): void {
    this.id = this.product.id;
    this.product_name = this.product.product_name;
    this.category = this.product.category;
    this.quantity = this.product.quantity;
    this.status = this.product.status;
    this.buying_price = this.product.buying_price;
    this.selling_price = this.product.selling_price;
    this.expiry_date = this.product.expiry_date;   
  }


  updateProduct(){
    var item = {id: this.id, product_name: this.product_name, 
      category : this.category,
      quantity: this.quantity,
      status: this.status,
      buying_price: this.buying_price,
      selling_price: this.selling_price,
      expiry_date: this.expiry_date};
    this.updateProductService.updateProduct(item).subscribe(res => {
      alert(res.toString());
    });
  }

}
