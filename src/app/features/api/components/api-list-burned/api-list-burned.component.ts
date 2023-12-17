import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/services/api-burnerd/api.service';

@Component({
  selector: 'app-api-list-burned',
  templateUrl: './api-list-burned.component.html',
  styleUrls: ['./api-list-burned.component.css']
})
export class DataDisplayComponent implements OnInit {

  fakeData: any[]=[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    
    this.apiService.getFakeData().subscribe((data: any[]) => {
      this.fakeData = data;
    });
  }
}
