import { Injectable } from '@angular/core';

@Injectable()
export class PassIdService {
  private listId:number
  private headTitle:any='卖座电影';
  constructor() { }
  //传递数据
  setHeadTitle(data){
    this.headTitle=data;
  }
  getHeadTitle(){
    return this.headTitle;
  }
  //传递ID
  setListId(num){
    this.listId=num;
  }
  getListId(){
    return this.listId;
  }

}
