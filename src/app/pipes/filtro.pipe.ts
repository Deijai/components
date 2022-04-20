import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arrayFiltro: any[], text: string, column: string = 'title'): any[] {

    if(text === ''){
      return arrayFiltro;
    }

    if(!arrayFiltro){
      return arrayFiltro;
    }

    text = text.toLowerCase();

    return arrayFiltro.filter(
      item => item[column].toLowerCase().includes(text)
     );
  }

}
