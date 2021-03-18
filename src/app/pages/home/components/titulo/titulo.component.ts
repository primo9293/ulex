import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductosService } from '../../../../services/productos.service';
import { map } from 'rxjs/operators';
import { Productos } from 'src/app/models/producto.interface';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  @Input('titulo') titulo:any;
  @Input('id') id:any;
  @Input('products') products:Productos[];
  productsArra: Productos[]
  datosImprim: any = []
  datosImprim1: any = []

  constructor(private productosService: ProductosService) { }


  ngOnInit(): void {
    this.extraer()
  }

  extraer(){
    let i = 0
    this.productsArra = this.products
    // console.log('this.productsArra',this.productsArra);
    // console.log('----------------------');
    let arrayP = this.productsArra.forEach(data => {
      let dat = data['product_data']
      let idAr = data['product_data']['categories'][0].category_id
      if(idAr === this.id)
      {
        i += 1
        this.datosImprim.push(dat)
      }
    })
    // this.datosImprim = this.datosImprim.sort((a, b) => a.categories.ordinal - b.categories.categories.ordinal)
    // console.log('datosOrdenados',this.datosImprim);
    // console.log('----------------------');
  } 

}
