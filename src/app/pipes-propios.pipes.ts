import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'sino'
})
export class Sino implements PipeTransform {
  transform(variable: boolean): string {
    switch (variable) {
      case true: {
        return 'Si';
        break;
      }
      case false: {
        return 'No';
        break;
      }
      default: {
        return '';
        break;
      }
    }
  }
}

@Pipe({ name: 'title' })
export class TitlePipe implements PipeTransform {
    transform(item: any): string {
        return item.text + (item.price ? ' ($' + item.price + ')' : '');
    }
}

@Pipe({ name: 'inflacion' })
export class InflacionPipe implements PipeTransform {
    transform(variable: any): string {
      switch ((variable)) {
        case 0.00: {
          return 'SIN INFLACIÓN';
          break;
        }
        case 1.00: {
          return 'CONFIGURADA';
          break;
        }
        case 2.00: {
          return 'PERSONALIZADA';
          break;
        }
        default: {
          return variable;
          break;
        }
      }
    }
}

@Pipe({ name: 'gridCellData' })
export class GridCellDataPipe implements PipeTransform {
  transform(gridData: any) {
    return gridData.value;
  }
}

@Pipe({ name: 'hora' })
export class Hora implements PipeTransform {
  transform(hora: any) {
    if (hora) {
      return hora.substring(0, 5);
    }
  }
}

@Pipe({
    name: 'mensaje0Sap'
  })
  export class Mensaje0Sap implements PipeTransform {
    transform(variable: string): string {
      switch (String(variable)) {
        case '0': {
          return '';
          break;
        }
        default: {
          return variable;
          break;
        }
      }
    }
  }

@Pipe({
  name: 'activoInactivo'
})
export class ActivoInactivo implements PipeTransform {
  transform(variable: boolean): string {
    if (variable === true) {
      return 'Activa';
    } else {
      return 'Inactiva';
    }
  }
}

@Pipe({
  name: 'estatus'
})
export class Estatus implements PipeTransform {
  transform(numero: string): string {
    if (numero === '0') {
      return 'Activa';
    } else {
      return 'Inactiva';
    }
  }
}

@Pipe({
  name: 'mensajecorto'
})
export class MensajeCorto implements PipeTransform {
  transform(mensaje: string): string {
    if (mensaje) {
      if (mensaje.length > 35) {
        return mensaje.substr(0, 35) + '...';
      } else {
        return mensaje;
      }
    }
  }
}

@Pipe({
  name: 'bloqueo'
})
export class Bloqueo implements PipeTransform {
  transform(value: string): string {
    if (value) {
      if (value === '1') {
        return 'SI';
      } else {
        return 'NO';
      }
    } else {
      return 'NO';
    }
  }
}

@Pipe({
  name: 'cero'
})
export class Cero implements PipeTransform {

  transform(value: any): any {
    if (value) {
      if (value != null) {
        return value;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
}
