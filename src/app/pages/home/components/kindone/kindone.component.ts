import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kindone',
  templateUrl: './kindone.component.html',
  styleUrls: ['./kindone.component.css']
})
export class KindoneComponent implements OnInit {

  @Input('produc') product:any;
  producto: any

  constructor() { }

  ngOnInit(): void {
    // console.log(this.product);
    this.producto = this.product
  }

}
