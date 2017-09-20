import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ColorPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let result: string;
    switch(value){
      case "NONE":
        result = "white";
        break;
      case "MAN":
        result = "energy";
        break;
      case "WOMAN":
        result = "womenColor";
        break;
    }
    return result;
  }
}
