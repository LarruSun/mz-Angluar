import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceStr'
})
export class SliceStrPipe implements PipeTransform {

  transform(value: any, number?: any): any {
    // console.log('我工作啦');
    var num=number;
    if(num<=0){
        num=value.length;
      return value.slice(0,num);

    }

    return value.slice(0,num)+'...';

  }

}
