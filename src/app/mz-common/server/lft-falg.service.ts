import { Injectable } from '@angular/core';

@Injectable()
export class LftFalgService {
  private  flag:Boolean=false;
  constructor() { }

  setLeftFlag(){
    this.flag=!this.flag
  }

  getLeftFlag(){
    return this.flag;
  }

}
