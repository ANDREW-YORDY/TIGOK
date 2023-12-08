import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
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
