import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Categories } from '../models/categorie.interface';
import { Product } from '../models/product.model';
import { Productos } from '../models/producto.interface';

const base_url = environment.api

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public produ: Productos
  public categ: Categories
  
  constructor(private http : HttpClient) { }

  getCategoyProduc(){
    return this.http.get(base_url)
      /* .subscribe( (data: any) => {
          this.produ = data.products,
          this.categ = data.categories
          console.log('this.produ', this.produ);
          console.log('this.cate', this.categ);
      }

      ) */
      /* .pipe(
        map( (categories: any, products: any) => {
          return {
            categories,
            products
          }          
        }
        )
      ) */
  }
}
