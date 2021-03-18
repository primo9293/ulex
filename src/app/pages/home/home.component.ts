import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categorie.interface';
import { Productos } from 'src/app/models/producto.interface';
import { ProductosService } from '../../services/productos.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  categories: Categories[] = [];
  products: Productos[] = []

  datos:any

  constructor(private productosService: ProductosService){
    }

  ngOnInit(): void {
    this.obtenerDatosPrCa()
  }

  obtenerDatosPrCa(){
    this.productosService.getCategoyProduc()
      .subscribe( (resp: any) => {
         this.categories = resp.categories
        this.products = resp.products
        // console.log('this.categories',this.categories);
        // console.log('this.products',this.products);
        this.cargarDatos(this.categories, this.products)
      })
  }

  cargarDatos(categories: Categories[], products: Productos[]){
    this.datos = this.categories.sort((a, b) => a.ordinal - b.ordinal)
  }


}
