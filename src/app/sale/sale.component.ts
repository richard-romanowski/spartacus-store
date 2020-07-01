import { Component, OnInit } from '@angular/core';
import { CmsService } from '@spartacus/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  constructor(private cmsSewrvice: CmsService) { }

  ngOnInit(): void {
    this.cmsSewrvice.getCurrentPage().subscribe(console.log);
  }

}
