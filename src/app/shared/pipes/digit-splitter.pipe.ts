import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitSplitter'
})
export class DigitSplitterPipe implements PipeTransform {

  transform(value: number, splitDigit: number = 4): string[] {
    //console.log("Inside pipe execution");
    const digits = [];
    const stringyNumber = value.toString();
    for (let i = 0, len = stringyNumber.length; i < len; i = i + splitDigit) {
      digits.push(stringyNumber.substr(i, splitDigit));
    }
    return digits;
  }

}
