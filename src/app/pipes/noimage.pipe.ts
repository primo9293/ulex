import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  urlKind1 = `https://assets.compramass.com/products/`
  extKind1 = `-80@3x.jpg`
  urlKind2 = `https://assets.compramass.com/products/`
  extKind2 = `@3x.jpg`

  transform(img: string, tipo: number): string {
    // console.log('tipo',tipo);

    if( tipo === 1){
      return `${this.urlKind1}${img}${this.extKind1}`;
    } else {
      return `${this.urlKind2}${img}${this.extKind2}`;
    }

  }


}
