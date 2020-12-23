import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrosTablas'
})
export class FiltrosTablasPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    return items.filter(item => item.kstar.indexOf(term) !== -1);
}
}

@Pipe({
  name: 'filtroAutorizadores'
})
export class FiltroAutorizadores implements PipeTransform {

  transform(items: any[], term: string): any {
    return items.filter(item => item.nombreAutorizador.indexOf(term) !== -1 || item.idUsuarioAutorizador.indexOf(term) !== -1  );
}
}
