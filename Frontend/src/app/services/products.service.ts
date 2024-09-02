import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { appConfig } from '../app.config';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public constructor(private http:HttpClient) { }

  public getAllProducts():Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(appConfig.productsUrl); 
  }

}
