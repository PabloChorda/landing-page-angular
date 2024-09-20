import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL= 'https://fakestoreapi.com/products'

  constructor(private _httpClient: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]> { //devuelve un observable de productos
    return this._httpClient.get<IProduct[]>(`${this.baseURL}`);
  }

  public getProduct(id: number): Observable<IProduct>{ //devuelve un observable de un producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`)
  }

  public getAllCategories(): Observable<Category[]>{ //devuelve un observable de categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  public newProduuct(product: IProduct): Observable<IProduct>{ //devuelve un observable de un producto
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  public updateProduuct(id: number, product: IProduct): Observable<IProduct>{ //devuelve un observable de un producto
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduuct(id: number, product: IProduct): Observable<IProduct>{ //devuelve un observable de un producto
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }



}
 