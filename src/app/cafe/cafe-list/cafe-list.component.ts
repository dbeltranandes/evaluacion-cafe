import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css'],
  standalone: false
})

export class CafeListComponent implements OnInit 
{
  cafes: Cafe[] = [];
  totalOrigen: number = 0;
  totalBlend: number = 0;

  constructor(private cafeService: CafeService) 
  {}

  getCafes(): void 
  {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.totalOrigen = cafes.filter(cafe => cafe.tipo.toLowerCase() === 'café de origen').length;
      this.totalBlend = cafes.filter(cafe => cafe.tipo.toLowerCase() === 'blend').length;
    });
  }

  ngOnInit() 
  {
    this.getCafes();
  }
}
