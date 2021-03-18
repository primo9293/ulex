import { Component, Input, OnInit } from '@angular/core';
import { Productos } from '../../../../models/producto.interface';

@Component({
  selector: 'app-kindtwo',
  templateUrl: './kindtwo.component.html',
  styleUrls: ['./kindtwo.component.css']
})
export class KindtwoComponent implements OnInit {

  @Input('produc') product:any;
  producto: Productos

  constructor() { }

  ngOnInit(): void {
    // console.log(this.product);
    this.producto = this.product
  }

}
