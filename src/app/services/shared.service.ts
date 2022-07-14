import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; //Handle asynchronous requests and responses
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private APIUrl = 'https://localshopinventory.herokuapp.com';
  constructor(private http: HttpClient) { }


  // Authentication service
  login(username: string, password: string){
    return this.http.post<any>(this.APIUrl + '/api/auth/', {username, password}, httpOptions).pipe(
      map(user => {
        if (user && user.token){
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
      })
    );
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  // Admin GET & POST service
  getAdmin(): Observable<any> {
    return this.http.get(this.APIUrl + '/newadmin/');
  }

  addAdmin(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.APIUrl + '/newadmin/',
      { name, email, password },
      httpOptions
    );
  }

  updateAdmin(item:any){
    return this.http.put(this.APIUrl + '/newadmin/<int:id>', item);
  }

  removeAdmin(item: any){
    return this.http.delete(this.APIUrl + '/newadmin/' + item);
  }






  // Clerk GET & POST service
  getClerks(): Observable<any> {
    return this.http.get(this.APIUrl + '/clerks/');
  }
  
  
  registerClerk( name: string, email: string, password: string): Observable<any> {
    return this.http.post(this.APIUrl + '/clerks/', { name, email, password }, httpOptions);
  }

  updateClerk(item:any){
    return this.http.put(this.APIUrl + '/clerks/<int:id>', item);
  }

  removeClerk(item: any){
    return this.http.delete(this.APIUrl + '/clerks/' + item);
  }



  
  // Product GET & POST service
  getProductsList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/products/');
  }

  addNewProduct(
    product_name: string,
    category: string,
    status: string,
    quantity: number,
    expiry_date: Date,
    buying_price: number,
    selling_price: number,
    date_received: Date
  ) {
    return this.http.post(this.APIUrl + '/products/', {
      product_name,
      category,
      status,
      quantity,
      expiry_date,
      buying_price,
      selling_price,
      date_received
    }, httpOptions);
  }


  // updateProductList(
  //   product_name: string,
  //   category: string,
  //   quantity: number,
  //   status: string,
  //   buying_price: number,
  //   selling_price: number,
  //   expiry_date: Date,
  //   date_received: Date) {
  //     return this.http.put(APIUrl + '/products/', {
  //     product_name,
  //     category,
  //     quantity,
  //     status,
  //     buying_price,
  //     selling_price,
  //     expiry_date,
  //     date_received
  //     })
  //   }

    updateProduct(item:any){
      return this.http.put(this.APIUrl + '/products/<int:id>', item);

    }


    deleteProduct(item: any){
      return this.http.delete(this.APIUrl + '/products/' + item);
    } 

  // End of product API
  
  
  
  //Defectivegoods API method
  getDefectiveGoodsList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/defective/');
  }
  //  name, quantity, category
  addNewDefectiveGood(
    goodname:string, quantity:number, category:string
  ) {
    return this.http.post(this.APIUrl + '/defective/', {
      goodname,quantity,category
    });
  }

  getRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/requests/');
  }
  //  name, quantity, category
  addNewRequest(
    ordered_product:string, quantity:number, category:string
  ) {
    return this.http.post(this.APIUrl + '/requests/', {
      ordered_product,quantity,category
    });
  }


  // createOrder(val:any) {
  //   return this.http.post(this.APIUrl + '/orders/', val);
  // }

  // updateOrder(val:any) {
  //   return this.http.put(this.APIUrl + '/orders/', val);
  // }

  // deleteOrder(val:any) {
  //   return this.http.delete(this.APIUrl + '/orders/' + val);
  // }

  // getAllOrders():Observable<any[]> {
  //   return this.http.get<any[]>(this.APIUrl + '/orders/');
  // }




  //Defectivegoods API method
  updateDefectiveGood(item:any){
    return this.http.put(this.APIUrl + '/defective/<int:id>', item);
  }


  deleteDefective(item: any){
    return this.http.delete(this.APIUrl + '/defective/' + item);
  }


  // getDefectiveProducts():Observable<any[]> {
  //   return this.http.get<any[]>(this.APIUrl + '/defective/');
  // }

 // authentication
}
