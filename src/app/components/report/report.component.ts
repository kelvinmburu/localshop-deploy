import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  

import { SharedService } from 'src/app/services/shared.service';
import { DatePipe } from '@angular/common';
// import 'rxjs/add/operator/map';

import { map } from 'rxjs';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  // url = 'http://localhost:4200/reports'
  // data: Data[];
  // Product = [];
  // Por$!: Observable<product_name[]>;
  // Quantity = [];
  // Linechart = [];

  productData:any;
  productname:any;
  quantity:any;
  category:any;
  date_received:any;
  defective:any;
  chart:any =[];
  mynewdate: any;
  goodname: any;
  q:any;
  constructor( private productService: SharedService) { 
    Chart.register(...registerables);
  }


  ngOnInit(){  
    this.productService.getDefectiveGoodsList().subscribe((results) => {
      this.defective = results;
      console.log(results);
      this.goodname = this.defective.map((def:{goodname:any;})=>def.goodname)
      this.q=this.defective.map((def:{quantity:any;})=>def.quantity)
      console.log(this.goodname,this.q)
      this.chart = new Chart('canvas2',{
        type:'bar',
        data: {
          labels: this.goodname,
          datasets: [
            {
              label: 'Product',
              data: this.q,
             
              backgroundColor:'#023047',
              barPercentage: 1,
              // barThickness: 60,
          
              categoryPercentage:0.5
            },
          ]
        },
        options: {
          plugins: {
            legend: {
              display: false
            },
          },
         
          scales: {
            x: {
              ticks: {
                display: true,
                
              },
              title: {
                color: 'black',
                display: true,
                text: 'Defective Goods'
              }
              
            },
            y: {
              ticks: {
                display: true,
              },
              title: {
                color: 'black',
                display: true,
                text: 'Quantity'
              }
            },
          },
          

            
            
           
        }
        
      })
    })
    this.productService.getProductsList().subscribe((res)=>{
      this.productData = res;
      // console.log(res)

      this.productname = this.productData.map((prod : {product_name:any;}) => prod.product_name )
      this.quantity = this.productData.map((prod : {quantity:any;}) => prod.quantity )
      // console.log(this.productname,this.quantity)
      
      // this.category = this.productData.map((cat : {category:any})=> cat.category)

      // this.date_received = this.productData.map((cat : {date_received:any;}) => cat.date_received )
      // this.mynewdate = new DatePipe('en-US').transform(this.date_received,'dd-mm-yyyy')
      // console.log(this.quantity,this.mynewdate)


      this.chart = new Chart('canvas',{
        type:'bar',
        data: {
          labels: this.productname,
          datasets: [
            {
              label: 'Product Quantity',
              data: this.quantity,
             
              backgroundColor:'#023047',
              barPercentage: 1,
              // barThickness: 60,
          
              categoryPercentage:0.7
              
            },
          ]
        },
        options: {
          plugins: {
            legend: {
              display: false
            },
          },
         
          scales: {
            x: {
              ticks: {
                display: true,
              },
              title: {
                color: 'black',
                display: true,
                text: 'Products'
              }
              
            
              
            },
            y: {
              ticks: {
                display: true,
                
              },
              title: {
                color: 'black',
                display: true,
                text: 'Quantity'
              }
              
            },
          },
          

            
            
           
        }
        
      })
     

    })
  }
}
      // this.productData = res;
      // console.log(res)
      // let productname = this.productData.map((res: { product_name: any; }) => res.product_name)
      // let quantity= this.productData.map((res: { quantity: any; }) => res.quantity)
      
      // let updates: any[] = []
      // quantity.forEach((res: any) => {
      //   updates.push(({quantity:'quantity'}))
       
      //   console.log(res)
        
      // })

      


//     })
//   }

// }