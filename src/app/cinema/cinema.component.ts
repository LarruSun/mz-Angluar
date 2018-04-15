import { Component, OnInit } from '@angular/core';
import {GetDataService} from './../mz-common/server/get-data/get-data.service';



@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  constructor(private getData:GetDataService) { }
  ngOnInit() {};
}
