import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeData'
})
export class ChangeDataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var date=new Date(value);
    var day=date.getDay();
    var arr=['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
    return arr[day];
  }

}
