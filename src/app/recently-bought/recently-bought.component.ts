import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@spartacus/core';
import { RecentlyBoughtService } from '../recently-bought.service';

@Component({
  selector: 'app-recently-bought',
  templateUrl: './recently-bought.component.html',
  styleUrls: ['./recently-bought.component.scss']
})
export class RecentlyBoughtComponent implements OnInit {

  recentlyBought$: Observable<Product[]>;

  constructor(private recentlyBoughtServices: RecentlyBoughtService) { }

  ngOnInit(): void {
    this.recentlyBought$ = this.recentlyBoughtServices.getRecentlyBought();
  }

}
